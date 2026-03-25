# HOU Cùng Việt Nam — Rebuild (React + Tailwind + Framer Motion)

Dự án này là bản **đập đi xây lại** website tham chiếu:

- Nguồn: <https://vn-hou-hung.lovable.app>
- Stack: React 19, Vite 8, TypeScript, Tailwind CSS v4, Framer Motion
- Mục tiêu: tái tạo layout + nội dung và nâng cấp giao diện theo style premium (glassmorphism, shadow, typography, scroll animation mượt)

## Những gì đã hoàn thành

### 1) Liệt kê toàn bộ link/URL trong trang

Đã trích xuất và lưu đầy đủ tại:

- `research/analysis/all-links.txt`
- `research/analysis/page-analysis.json` (`links`)

Tổng link phát hiện: **21** (các link tuyển sinh HOU).

### 2) Chụp fullpage + bóc tách DOM/layout/font/màu

Đã tạo:

- Screenshot fullpage trang gốc: `research/source/fullpage.png`
- Phân tích tổng hợp: `research/analysis/page-analysis.json`
- Cây DOM tóm tắt: `research/analysis/dom-tree.json`
- Dữ liệu nội dung section/card/headings: `research/analysis/extracted-content.json`

Các thông tin gồm:

- Section structure, className, heading, childCount
- Font family thực tế
- Màu sắc và CSS variables
- Nút điều hướng, heading, card content

### 3) Tự động tải assets + dựng cấu trúc thư mục chuẩn

Đã tải assets từ trang nguồn vào:

- `src/assets/original/`

Manifest chi tiết:

- `research/analysis/asset-manifest.json`

Thống kê tải ảnh:

- Total: **71**
- Success: **71**
- Error: **0**

### 4) Rebuild toàn bộ bằng React + Tailwind CSS

Đã code lại toàn bộ trang với cấu trúc section rõ ràng trong:

- `src/App.tsx`
- `src/data/content.ts` (data-driven content)
- `src/index.css` (theme, typography, glassmorphism, gradients)

Có đầy đủ:

- Hero + sticky nav
- Timeline lịch sử tương tác
- Grid vẻ đẹp Việt Nam (lọc vùng + load more)
- Làng nghề, Ẩm thực
- Triết lý “Mở”, khối HOU highlights + form tư vấn

### 5) Bắt buộc UI/UX Promax (Framer Motion + glass + premium)

Đã triển khai:

- Framer Motion scroll reveal cho toàn bộ section/cards
- Glassmorphism cho nav và card (`.glass-panel`)
- Typography nâng cấp (`Inter` + `Playfair Display`)
- Shadow system + gradient title + spacing sạch theo chuẩn hiện đại

## Cấu trúc thư mục chính

```text
project/
├─ research/
│  ├─ analysis/
│  │  ├─ all-links.txt
│  │  ├─ asset-manifest.json
│  │  ├─ dom-tree.json
│  │  ├─ extracted-content.json
│  │  └─ page-analysis.json
│  └─ source/
│     ├─ fullpage.png
│     ├─ index.html
│     ├─ index-BXUDRaiQ.js
│     └─ index-B_U1ZKmA.css
├─ src/
│  ├─ assets/
│  │  └─ original/              # ảnh tải từ source
│  ├─ components/ui/
│  │  ├─ button.tsx
│  │  └─ button-variants.ts
│  ├─ data/
│  │  └─ content.ts
│  ├─ lib/
│  │  ├─ animations.ts
│  │  └─ utils.ts
│  ├─ App.tsx
│  └─ index.css
└─ README.md
```

## Chạy local

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Ghi chú

- Dự án giữ nội dung và đường link theo bản gốc để tiện đối chiếu.
- Một số ảnh ngoài domain gốc vẫn được giữ URL trực tiếp trong data để bảo toàn nội dung chuẩn nguồn.
- `src/assets/original/` đã chứa bản tải local nếu cần chuyển toàn bộ sang self-host.
