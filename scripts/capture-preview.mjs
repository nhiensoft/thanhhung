import fs from 'node:fs'
import path from 'node:path'
import CDP from 'chrome-remote-interface'

const ROOT = '/home/node/.openclaw/workspace/project'
const DIST = path.join(ROOT, 'dist')
const OUT_IMG = path.join(ROOT, 'research/preview-local.png')
const OUT_META = path.join(ROOT, 'research/preview-local-meta.json')

const host = process.env.CDP_HOST || '192.168.65.254'
const port = Number(process.env.CDP_PORT || '18800')

const htmlPath = path.join(DIST, 'index.html')
const html = fs.readFileSync(htmlPath, 'utf8')

const cssMatches = [...html.matchAll(/href="(\/assets\/[^"]+\.css)"/g)]
const jsMatch = html.match(/src="(\/assets\/[^"]+\.js)"/)

if (!jsMatch) {
  throw new Error('Cannot find JS bundle in dist/index.html')
}

const cssBundles = cssMatches
  .map((m) => path.join(DIST, m[1]))
  .filter((p) => fs.existsSync(p))
  .map((p) => fs.readFileSync(p, 'utf8'))
  .join('\n')
const jsBundle = fs.readFileSync(path.join(DIST, jsMatch[1]), 'utf8')

function decodeCdpValue(obj) {
  if (!obj) return null
  if (typeof obj.value !== 'undefined') return obj.value
  return null
}

function looksBrokenEncoding(text = '') {
  return /Ã|áº|â|Ä|Há»/u.test(text)
}

async function main() {
  const root = await CDP({ host, port })
  const { Target } = root
  const { targetId } = await Target.createTarget({ url: 'about:blank' })

  const client = await CDP({ host, port, target: targetId })
  const { Page, Runtime } = client

  await Page.enable()
  await Runtime.enable()

  // blank page, then inject app shell + assets from local dist
  const frameTree = await Page.getFrameTree()
  await Page.setDocumentContent({ frameId: frameTree.frameTree.frame.id, html })

  const cssB64 = Buffer.from(cssBundles, 'utf8').toString('base64')
  const jsB64 = Buffer.from(jsBundle, 'utf8').toString('base64')

  await Runtime.evaluate({
    expression: `(() => {
      const fromB64Utf8 = (b64) => {
        const bin = atob(b64)
        const bytes = Uint8Array.from(bin, (ch) => ch.charCodeAt(0))
        return new TextDecoder('utf-8').decode(bytes)
      }

      const style = document.createElement('style')
      style.textContent = fromB64Utf8('${cssB64}')
      document.head.appendChild(style)
      return true
    })()`,
  })

  await Runtime.evaluate({
    expression: `(() => {
      const fromB64Utf8 = (b64) => {
        const bin = atob(b64)
        const bytes = Uint8Array.from(bin, (ch) => ch.charCodeAt(0))
        return new TextDecoder('utf-8').decode(bytes)
      }

      const code = fromB64Utf8('${jsB64}')
      ;(0, eval)(code)
      return true
    })()`,
  })

  await new Promise((r) => setTimeout(r, 3000))

  const metaRaw = await Runtime.evaluate({
    expression: `(() => {
      const h1 = document.querySelector('h1')?.textContent?.trim() ?? null
      const bodyText = document.body?.innerText?.slice(0, 180) ?? ''
      return {
        href: location.href,
        title: document.title,
        h1,
        sectionCount: document.querySelectorAll('section').length,
        rootChildren: document.getElementById('root')?.children?.length ?? 0,
        bodyText,
      }
    })()`,
    returnByValue: true,
  })

  const meta = decodeCdpValue(metaRaw.result) || {}
  const encodingIssue = looksBrokenEncoding(`${meta.h1 || ''}\n${meta.bodyText || ''}`)
  const errorPage = /site can.t be reached|couldn.t be accessed/i.test(`${meta.h1 || ''}\n${meta.bodyText || ''}`)

  const screenshot = await Page.captureScreenshot({
    format: 'png',
    captureBeyondViewport: true,
  })

  fs.writeFileSync(OUT_IMG, Buffer.from(screenshot.data, 'base64'))
  fs.writeFileSync(
    OUT_META,
    JSON.stringify(
      {
        ...meta,
        checks: {
          encodingIssue,
          errorPage,
        },
        generatedAt: new Date().toISOString(),
      },
      null,
      2,
    ),
  )

  await client.close()
  await Target.closeTarget({ targetId })
  await root.close()

  const ok = !encodingIssue && !errorPage && (meta.sectionCount || 0) > 0

  console.log(
    JSON.stringify(
      {
        ok,
        image: OUT_IMG,
        meta: OUT_META,
        summary: {
          title: meta.title,
          h1: meta.h1,
          sectionCount: meta.sectionCount,
          checks: { encodingIssue, errorPage },
        },
      },
      null,
      2,
    ),
  )

  if (!ok) process.exit(2)
}

main().catch((err) => {
  console.error('[capture-preview] failed:', err)
  process.exit(1)
})
