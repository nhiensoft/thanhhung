import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'

const ROOT = process.cwd()
const SRC_DIR = path.join(ROOT, 'src')
const ASSETS_DIR = path.join(SRC_DIR, 'assets')
const LOVABLE_DIR = path.join(ROOT, 'public', 'lovable-uploads')
const DATA_FILE = path.join(SRC_DIR, 'data', 'vietnamHeritage.ts')

fs.mkdirSync(ASSETS_DIR, { recursive: true })

const exts = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']
const sanitize = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80)
const ensureExt = (name, fallback = '.jpg') => {
  const ext = path.extname(name).toLowerCase()
  return exts.includes(ext) ? ext : fallback
}

function walk(dir) {
  const out = []
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

// 1) Collect used /lovable-uploads/* from src files
const srcFiles = walk(SRC_DIR).filter((f) => /\.(ts|tsx|js|jsx|css|md|txt|json)$/.test(f))
const usedLovable = new Set()
const lovableRegex = /\/lovable-uploads\/([^"'\)\s]+)/g

for (const file of srcFiles) {
  const txt = fs.readFileSync(file, 'utf8')
  let m
  while ((m = lovableRegex.exec(txt))) {
    usedLovable.add(m[1])
  }
}

const lovableMap = new Map() // old basename -> new relative asset path
for (const basename of [...usedLovable].sort()) {
  const srcPath = path.join(LOVABLE_DIR, basename)
  if (!fs.existsSync(srcPath)) {
    console.warn('[WARN] missing lovable file:', basename)
    continue
  }
  const ext = ensureExt(basename)
  const baseNoExt = basename.replace(/\.[^.]+$/, '')
  const newName = `lovable-${sanitize(baseNoExt)}${ext}`
  const dstPath = path.join(ASSETS_DIR, newName)
  fs.copyFileSync(srcPath, dstPath)
  lovableMap.set(basename, `@/assets/${newName}`)
}

// 2) Download external images referenced in vietnamHeritage.ts and localize there
let dataTxt = fs.readFileSync(DATA_FILE, 'utf8')
const externalRegex = /image:\s*"(https?:\/\/[^"\n]+)"/g
const externals = new Set()
let em
while ((em = externalRegex.exec(dataTxt))) externals.add(em[1])

const extMap = new Map() // url -> @/assets/<name>

async function download(url, outPath) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const ab = await res.arrayBuffer()
  const buf = Buffer.from(ab)
  fs.writeFileSync(outPath, buf)
  const ct = (res.headers.get('content-type') || '').toLowerCase()
  return { bytes: buf.length, contentType: ct }
}

for (const url of [...externals]) {
  const hash = createHash('md5').update(url).digest('hex').slice(0, 10)
  const parsed = new URL(url)
  let filePart = path.basename(parsed.pathname) || `image-${hash}.jpg`
  filePart = decodeURIComponent(filePart)
  let ext = ensureExt(filePart, '.jpg')
  let stem = sanitize(filePart.replace(/\.[^.]+$/, ''))
  if (!stem) stem = `img-${hash}`

  const candidate = `${stem}-${hash}${ext}`
  const outPath = path.join(ASSETS_DIR, candidate)

  try {
    const info = await download(url, outPath)
    // if ext uncertain, fix by content-type if needed
    if (!exts.includes(ext)) {
      if (info.contentType.includes('png')) ext = '.png'
      else if (info.contentType.includes('webp')) ext = '.webp'
      else if (info.contentType.includes('svg')) ext = '.svg'
      else ext = '.jpg'
    }
    extMap.set(url, `@/assets/${candidate}`)
    console.log('[OK] downloaded', url, '->', candidate)
  } catch (err) {
    console.error('[ERR] download failed', url, err.message)
    // keep URL untouched if failed
  }
}

// 3) Rewrite src files: /lovable-uploads/* -> @/assets/lovable-*
for (const file of srcFiles) {
  let txt = fs.readFileSync(file, 'utf8')
  let changed = false

  txt = txt.replace(/\/lovable-uploads\/([^"'\)\s]+)/g, (_, base) => {
    const mapped = lovableMap.get(base)
    if (mapped) {
      changed = true
      return mapped
    }
    return `/lovable-uploads/${base}`
  })

  // rewrite external heritage URLs in src files only where exact string matches
  for (const [url, localPath] of extMap.entries()) {
    if (txt.includes(url)) {
      txt = txt.split(url).join(localPath)
      changed = true
    }
  }

  if (changed) fs.writeFileSync(file, txt)
}

// 4) Rewrite data file once more (safety)
dataTxt = fs.readFileSync(DATA_FILE, 'utf8')
for (const [url, localPath] of extMap.entries()) {
  if (dataTxt.includes(url)) dataTxt = dataTxt.split(url).join(localPath)
}
for (const [base, localPath] of lovableMap.entries()) {
  const old = `/lovable-uploads/${base}`
  if (dataTxt.includes(old)) dataTxt = dataTxt.split(old).join(localPath)
}
fs.writeFileSync(DATA_FILE, dataTxt)

// 5) Remove all files in public/lovable-uploads (now migrated)
for (const ent of fs.readdirSync(LOVABLE_DIR)) {
  const full = path.join(LOVABLE_DIR, ent)
  if (fs.statSync(full).isFile()) fs.unlinkSync(full)
}

console.log('MIGRATION_DONE')
console.log('used lovable files migrated:', lovableMap.size)
console.log('external urls localized:', extMap.size)
