import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright-core';

const OUT_DIR = '/home/node/.openclaw/workspace/project/research';
await fs.mkdir(path.join(OUT_DIR, 'analysis'), { recursive: true });
await fs.mkdir(path.join(OUT_DIR, 'source'), { recursive: true });

const browser = await chromium.connectOverCDP('http://192.168.65.254:18800');
const contexts = browser.contexts();
const context = contexts[0] || await browser.newContext();
let page = context.pages().find((p) => p.url().includes('vn-hou-hung.lovable.app'));
if (!page) {
  page = await context.newPage();
  await page.goto('https://vn-hou-hung.lovable.app', { waitUntil: 'networkidle' });
}
await page.bringToFront();
if (!page.url().includes('vn-hou-hung.lovable.app')) {
  await page.goto('https://vn-hou-hung.lovable.app', { waitUntil: 'networkidle' });
}
await page.waitForTimeout(1200);

await page.addStyleTag({ content: '#lovable-badge{display:none!important;}'}).catch(() => {});

for (let i = 0; i < 8; i += 1) {
  const clicked = await page.evaluate(() => {
    const candidates = Array.from(document.querySelectorAll('button'));
    const btn = candidates.find((el) => {
      const t = (el.textContent || '').toLowerCase();
      return t.includes('xem thêm di tích') || t.includes('hiển thị thêm') || t.includes('xem thêm');
    });
    if (!btn) return false;
    const style = window.getComputedStyle(btn);
    if (style.display === 'none' || style.visibility === 'hidden' || btn.disabled) return false;
    btn.click();
    return true;
  });
  if (!clicked) break;
  await page.waitForTimeout(400);
}

await page.screenshot({ path: path.join(OUT_DIR, 'source', 'fullpage.png'), fullPage: true });

const analysis = await page.evaluate(() => {
  const uniq = (arr) => Array.from(new Set(arr));

  const links = uniq(
    Array.from(document.querySelectorAll('a[href]')).map((a) => a.href).filter(Boolean)
  ).sort();

  const bgUrls = [];
  Array.from(document.querySelectorAll('*')).forEach((el) => {
    const bg = getComputedStyle(el).backgroundImage;
    if (!bg || bg === 'none' || !bg.includes('url(')) return;
    const matches = [...bg.matchAll(/url\(["']?(.*?)["']?\)/g)].map((m) => m[1]);
    matches.forEach((u) => {
      try {
        bgUrls.push(new URL(u, location.href).href);
      } catch {
        // ignore
      }
    });
  });

  const images = uniq([
    ...Array.from(document.querySelectorAll('img')).map((img) => img.src),
    ...bgUrls,
  ]).sort();

  const sections = Array.from(document.querySelectorAll('section')).map((section, idx) => {
    const heading = section.querySelector('h1,h2,h3,h4');
    const style = getComputedStyle(section);
    return {
      index: idx,
      id: section.id || null,
      className: section.className || null,
      heading: heading?.textContent?.trim() || null,
      childCount: section.children.length,
      layout: {
        display: style.display,
        position: style.position,
        maxWidth: style.maxWidth,
        padding: style.padding,
        margin: style.margin,
        gap: style.gap,
        gridTemplateColumns: style.gridTemplateColumns,
      },
    };
  });

  const colorSet = new Set();
  const fontSet = new Set();
  const allNodes = Array.from(document.querySelectorAll('*')).slice(0, 5000);
  for (const el of allNodes) {
    const cs = getComputedStyle(el);
    [cs.color, cs.backgroundColor, cs.borderColor].forEach((c) => {
      if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') colorSet.add(c);
    });
    if (cs.fontFamily) fontSet.add(cs.fontFamily);
  }

  const rootStyle = getComputedStyle(document.documentElement);
  const cssVars = {};
  for (let i = 0; i < rootStyle.length; i += 1) {
    const key = rootStyle[i];
    if (key.startsWith('--')) cssVars[key] = rootStyle.getPropertyValue(key).trim();
  }

  const walk = (node, depth = 0) => {
    const children = Array.from(node.children || []).slice(0, 12);
    const domNode = {
      tag: node.tagName ? node.tagName.toLowerCase() : 'unknown',
      id: node.id || null,
      className: node.className || null,
      text: (node.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120) || null,
      depth,
      childCount: (node.children || []).length,
    };

    if (depth < 4 && children.length > 0) {
      domNode.children = children.map((child) => walk(child, depth + 1));
    }

    return domNode;
  };

  const domTree = walk(document.body, 0);

  const navButtons = Array.from(document.querySelectorAll('button'))
    .map((b) => (b.textContent || '').trim())
    .filter(Boolean);

  return {
    url: location.href,
    title: document.title,
    links,
    images,
    sections,
    fonts: Array.from(fontSet).sort(),
    colors: Array.from(colorSet).sort(),
    cssVars,
    domTree,
    navButtons,
  };
});

await fs.writeFile(path.join(OUT_DIR, 'analysis', 'page-analysis.json'), JSON.stringify(analysis, null, 2), 'utf8');
await fs.writeFile(path.join(OUT_DIR, 'analysis', 'dom-tree.json'), JSON.stringify(analysis.domTree, null, 2), 'utf8');
await fs.writeFile(path.join(OUT_DIR, 'analysis', 'all-links.txt'), analysis.links.join('\n'), 'utf8');
await fs.writeFile(path.join(OUT_DIR, 'analysis', 'asset-urls.txt'), analysis.images.join('\n'), 'utf8');

console.log('done', {
  links: analysis.links.length,
  images: analysis.images.length,
  sections: analysis.sections.length,
  fonts: analysis.fonts.length,
  colors: analysis.colors.length,
});

await browser.close();
