import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright-core';

const OUT_DIR = '/home/node/.openclaw/workspace/project/research/analysis';
await fs.mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.connectOverCDP('http://192.168.65.254:18800');
const contexts = browser.contexts();
const context = contexts[0] || await browser.newContext();
let page = context.pages().find((p) => p.url().includes('vn-hou-hung.lovable.app'));
if (!page) {
  page = await context.newPage();
  await page.goto('https://vn-hou-hung.lovable.app', { waitUntil: 'networkidle' });
}
if (!page.url().includes('vn-hou-hung.lovable.app')) {
  await page.goto('https://vn-hou-hung.lovable.app', { waitUntil: 'networkidle' });
}
await page.bringToFront();
await page.waitForTimeout(1200);

for (let i = 0; i < 8; i += 1) {
  const clicked = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const target = buttons.find((b) => {
      const t = (b.textContent || '').toLowerCase();
      return t.includes('xem thêm') || t.includes('hiển thị thêm');
    });
    if (!target) return false;
    const style = getComputedStyle(target);
    if (style.display === 'none' || style.visibility === 'hidden' || target.disabled) return false;
    target.click();
    return true;
  });
  if (!clicked) break;
  await page.waitForTimeout(350);
}

const result = await page.evaluate(() => {
  const clean = (value) => (value || '').replace(/\s+/g, ' ').trim();

  const links = Array.from(new Set(Array.from(document.querySelectorAll('a[href]')).map((a) => a.href))).sort();
  const images = Array.from(
    new Set(
      Array.from(document.querySelectorAll('img'))
        .map((img) => img.src)
        .filter(Boolean)
    )
  ).sort();

  const sections = Array.from(document.querySelectorAll('section')).map((section, idx) => {
    const headingEl = section.querySelector('h1,h2,h3');
    const subtitleEl = section.querySelector('p');

    const cardCandidates = Array.from(
      section.querySelectorAll('article, .card, [class*="card"], [class*="group"]')
    );

    const cards = [];
    const seen = new Set();

    for (const node of cardCandidates) {
      const title = clean(node.querySelector('h3,h4,h5,strong')?.textContent);
      if (!title) continue;
      const desc = clean(
        Array.from(node.querySelectorAll('p'))
          .map((p) => clean(p.textContent))
          .find((text) => text.length > 0)
      );
      const image = node.querySelector('img')?.src || null;

      const key = `${title}|${image || ''}`;
      if (seen.has(key)) continue;
      seen.add(key);

      cards.push({
        title,
        description: desc,
        image,
      });
    }

    return {
      index: idx,
      id: section.id || null,
      className: section.className || null,
      heading: clean(headingEl?.textContent),
      subtitle: clean(subtitleEl?.textContent),
      cards,
    };
  });

  const navButtons = Array.from(document.querySelectorAll('button'))
    .map((button) => clean(button.textContent))
    .filter(Boolean);

  const headings = Array.from(document.querySelectorAll('h1,h2,h3'))
    .map((heading) => clean(heading.textContent))
    .filter(Boolean);

  return {
    title: document.title,
    url: location.href,
    links,
    images,
    sections,
    navButtons,
    headings,
  };
});

await fs.writeFile(path.join(OUT_DIR, 'extracted-content.json'), JSON.stringify(result, null, 2));
console.log('saved extracted-content.json', {
  links: result.links.length,
  images: result.images.length,
  sections: result.sections.length,
});

await browser.close();
