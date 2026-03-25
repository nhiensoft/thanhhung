import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const browser = await chromium.connectOverCDP('http://192.168.65.254:18800');
const contexts = browser.contexts();
const context = contexts[0] || await browser.newContext();
const page = await context.newPage();
await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
await page.setViewportSize({ width: 1512, height: 982 });
await page.waitForTimeout(1500);
await fs.mkdir('/home/node/.openclaw/workspace/project/research/analysis', { recursive: true });
await page.screenshot({ path: '/home/node/.openclaw/workspace/project/research/analysis/rebuild-fullpage.png', fullPage: true });
await browser.close();
console.log('saved screenshot');
