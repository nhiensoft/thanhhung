
const { chromium } = await import('playwright');
const fs = await import('node:fs');
(async()=>{
  const browser = await chromium.launch({headless:true});
  const page = await browser.newPage({viewport:{width:1440,height:900}});
  await page.goto('https://vn-hou-hung.lovable.app', {waitUntil:'networkidle'});
  await page.addStyleTag({content:'#lovable-badge{display:none !important;}'});
  await page.waitForTimeout(1000);
  const urls = await page.$$eval('a[href]', els => Array.from(new Set(els.map(a=>a.href))));
  const sections = await page.$$eval('section[id],section', els => els.map((el,i)=>({
    index:i,
    id:el.id||null,
    className:el.className||null,
    tag:el.tagName.toLowerCase(),
    childCount:el.children.length
  })));
  const fonts = await page.evaluate(() => {
    const family = new Set();
    const all = Array.from(document.querySelectorAll('*')).slice(0,1200);
    for (const el of all) {
      const cs = getComputedStyle(el);
      const ff = cs.fontFamily;
      if (ff) family.add(ff);
    }
    return Array.from(family).slice(0,30);
  });
  const colors = await page.evaluate(() => {
    const set = new Set();
    const all = Array.from(document.querySelectorAll('*')).slice(0,1200);
    for (const el of all) {
      const cs = getComputedStyle(el);
      [cs.color, cs.backgroundColor, cs.borderColor].forEach(v=>{
        if(v && v !== 'rgba(0, 0, 0, 0)' && v !== 'transparent') set.add(v);
      });
    }
    return Array.from(set).slice(0,120);
  });
  const domSummary = await page.evaluate(() => {
    function walk(node, depth=0, out=[]) {
      if(depth>4 || !node) return out;
      const children = Array.from(node.children || []).slice(0, 15);
      out.push({
        depth,
        tag: node.tagName ? node.tagName.toLowerCase() : null,
        id: node.id || null,
        className: node.className || null,
        text: node.textContent ? node.textContent.trim().slice(0,80) : null,
        childCount: children.length
      });
      for(const c of children) walk(c, depth+1, out);
      return out;
    }
    return walk(document.body,0,[]);
  });
  await fs.promises.mkdir('research/source',{recursive:true});
  await page.screenshot({path:'research/source/fullpage.png', fullPage:true});

  const imgUrls = await page.evaluate(() => {
    const urls = new Set();
    document.querySelectorAll('img').forEach(img => { if(img.src) urls.add(img.src); });
    document.querySelectorAll('*').forEach(el => {
      const bg = getComputedStyle(el).backgroundImage;
      if(bg && bg.includes('url(')) {
        const m = bg.match(/url\(["']?(.*?)["']?\)/);
        if(m && m[1]) urls.add(new URL(m[1], location.href).href);
      }
    });
    return Array.from(urls);
  });

  const out = {urls, sections, fonts, colors, domSummary, imgUrls};
  await fs.promises.mkdir('research/analysis',{recursive:true});
  await fs.promises.writeFile('research/analysis/page-analysis.json', JSON.stringify(out,null,2));
  await browser.close();
})();
