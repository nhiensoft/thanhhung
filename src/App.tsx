import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  LocateFixed,
  Rocket,
  Sparkles,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  beautyCards,
  cuisineCards,
  houHighlights,
  navLinks,
  philosophyCards,
  programs,
  recruitmentLinks,
  timelineItems,
  villageCards,
} from '@/data/content'
import { cn } from '@/lib/utils'

const scrollReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const },
  },
}

const iconMap = {
  Sparkles,
  Heart,
  Brain,
  Eye,
  Rocket,
} as const

const regionOptions = ['Toàn quốc', 'Bắc Bộ', 'Trung Bộ', 'Nam Bộ'] as const

type RegionFilter = (typeof regionOptions)[number]

function App() {
  const [timelineIndex, setTimelineIndex] = useState(0)
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('Toàn quốc')
  const [beautyLimit, setBeautyLimit] = useState(12)

  const filteredBeautyCards = useMemo(() => {
    const base =
      regionFilter === 'Toàn quốc'
        ? beautyCards
        : beautyCards.filter((card) => card.region === regionFilter)

    return base.slice(0, beautyLimit)
  }, [regionFilter, beautyLimit])

  const timeline = timelineItems[timelineIndex]

  const canLoadMoreBeauty =
    (regionFilter === 'Toàn quốc'
      ? beautyCards.length
      : beautyCards.filter((card) => card.region === regionFilter).length) > beautyLimit

  const handleNavClick = (label: string) => {
    const map: Record<string, string> = {
      'Lịch sử Phát triển': 'history',
      'Vẻ đẹp Phong cảnh': 'beauty',
      'Làng nghề Truyền thống': 'villages',
      'Ẩm thực Đặc sản': 'cuisine',
      'Giáo dục & HOU': 'education',
    }

    const target = map[label]
    if (!target) return

    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="pb-20 text-slate-800">
      <header className="relative overflow-hidden pt-6">
        <div className="section-shell">
          <motion.nav
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="glass-panel sticky top-3 z-40 rounded-2xl px-4 py-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/80 text-vietnam-red shadow-soft">
                  <LocateFixed className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mountain-purple/70">
                    Nhìn về Việt Nam
                  </p>
                  <p className="text-sm font-semibold text-slate-700">Đại Học Mở Hà Nội</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2">
                {navLinks.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className="rounded-full border border-white/60 bg-white/55 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-vietnam-red/40 hover:bg-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>

          <div className="grid gap-8 pb-16 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-vietnam-red shadow-soft">
                <Sparkles className="h-4 w-4" />
                Hou cùng Việt Nam
              </p>
              <h1 className="font-serif text-4xl leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
                Khi ánh nhìn chạm tới – <span className="gradient-title">Khi trái tim rung động</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Từ chiều sâu lịch sử đến nhịp sống hiện đại, hành trình này tái hiện vẻ đẹp đất nước Việt
                Nam qua di sản, thiên nhiên, ẩm thực và tinh thần học tập tại Đại học Mở Hà Nội.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="rounded-full bg-vietnam-red px-6 text-white shadow-floating transition hover:bg-[#e94e42]"
                  onClick={() => document.getElementById('beauty')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Khám phá ngay <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-vietnam-red/30 bg-white/75 px-6 text-vietnam-red hover:bg-white"
                  onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Tìm hiểu về HOU
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="glass-panel overflow-hidden rounded-3xl p-4">
                <img
                  src="https://vn-hou-hung.lovable.app/lovable-uploads/nui-ba-den-new.jpg"
                  alt="Núi Bà Đen"
                  className="h-[320px] w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="mt-4 rounded-2xl bg-white/70 p-4">
                  <p className="text-sm font-semibold text-mountain-purple">Điểm nhấn nổi bật</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Bộ giao diện mới dùng glassmorphism, chuyển động cuộn mượt bằng Framer Motion và hệ
                    typography sang trọng theo tinh thần Awwwards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="space-y-20">
        <section id="history" className="section-shell scroll-mt-24">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-7"
          >
            <h2 className="font-serif text-3xl text-slate-800 sm:text-4xl">Lịch sử Phát triển Việt Nam</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Hành trình hơn 4000 năm dựng nước và giữ nước được trình bày dưới dạng timeline tương tác.
            </p>
          </motion.div>

          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-3xl p-5 sm:p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-mountain-purple uppercase">
                {timeline.period}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/70"
                  onClick={() =>
                    setTimelineIndex((current) => (current === 0 ? timelineItems.length - 1 : current - 1))
                  }
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/70"
                  onClick={() =>
                    setTimelineIndex((current) => (current === timelineItems.length - 1 ? 0 : current + 1))
                  }
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white/85 p-5 shadow-soft">
              <p className={cn('inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r', timeline.colorClass)}>
                {timeline.era}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{timeline.description}</p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {timelineItems.map((item, index) => (
                <button
                  key={item.era}
                  type="button"
                  onClick={() => setTimelineIndex(index)}
                  className={cn(
                    'rounded-xl border px-2 py-2 text-left text-[11px] font-medium transition sm:text-xs',
                    index === timelineIndex
                      ? 'border-vietnam-red/60 bg-white text-vietnam-red shadow-soft'
                      : 'border-white/60 bg-white/55 text-slate-500 hover:border-vietnam-red/30 hover:text-slate-700',
                  )}
                >
                  {item.period}
                </button>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="beauty" className="section-shell scroll-mt-24">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-7"
          >
            <h2 className="font-serif text-3xl text-slate-800 sm:text-4xl">Vẻ Đẹp Việt Nam</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Tổng hợp danh thắng, di tích, kiến trúc tôn giáo và công trình hiện đại nổi bật từ dữ liệu DOM đã bóc tách.
            </p>
          </motion.div>

          <div className="mb-5 flex flex-wrap gap-2">
            {regionOptions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => {
                  setRegionFilter(region)
                  setBeautyLimit(12)
                }}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-xs font-semibold transition',
                  regionFilter === region
                    ? 'border-vietnam-red bg-vietnam-red text-white shadow-soft'
                    : 'border-white/70 bg-white/70 text-slate-600 hover:border-vietnam-red/40 hover:text-slate-800',
                )}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="grid-auto-fit">
            {filteredBeautyCards.map((card, index) => (
              <motion.article
                key={`${card.title}-${index}`}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="glass-panel group overflow-hidden rounded-2xl"
              >
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                    <span className="rounded-full bg-white/85 px-2 py-1 text-[10px] font-semibold text-slate-700">
                      {card.region}
                    </span>
                    <span className="rounded-full bg-vietnam-red/90 px-2 py-1 text-[10px] font-semibold text-white">
                      {card.kind}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 font-semibold leading-snug text-slate-800">{card.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{card.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {canLoadMoreBeauty && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                className="rounded-full border-vietnam-red/30 bg-white/70 text-vietnam-red hover:bg-white"
                onClick={() => setBeautyLimit((prev) => prev + 12)}
              >
                Hiển thị thêm
              </Button>
            </div>
          )}
        </section>

        <section id="villages" className="section-shell scroll-mt-24">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-7"
          >
            <h2 className="font-serif text-3xl text-slate-800 sm:text-4xl">Làng nghề Truyền thống Việt Nam</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Những không gian lưu giữ tinh hoa thủ công lâu đời của dân tộc.
            </p>
          </motion.div>

          <div className="grid-auto-fit">
            {villageCards.map((card) => (
              <motion.article
                key={card.title}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glass-panel overflow-hidden rounded-2xl"
              >
                <img src={card.image} alt={card.title} className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-slate-800 sm:text-base">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{card.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="cuisine" className="section-shell scroll-mt-24">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-7"
          >
            <h2 className="font-serif text-3xl text-slate-800 sm:text-4xl">Ẩm thực Việt Nam</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Hương vị đặc sản Bắc - Trung - Nam với câu chuyện vùng miền rõ nét.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cuisineCards.map((card) => (
              <motion.article
                key={card.title}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glass-panel flex overflow-hidden rounded-2xl"
              >
                <img src={card.image} alt={card.title} className="h-auto w-32 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-slate-800 sm:text-base">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="education" className="section-shell scroll-mt-24">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-7"
          >
            <h2 className="font-serif text-3xl text-slate-800 sm:text-4xl">Tổ Quốc Trong Tim – Khát Vọng Nắm Trong Tay</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              5 triết lý “Mở” của Đại học Mở Hà Nội được tái thiết kế theo ngôn ngữ visual hiện đại, cao cấp.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {philosophyCards.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Sparkles

              return (
                <motion.article
                  key={item.title}
                  variants={scrollReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="glass-panel rounded-2xl p-4"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-vietnam-red">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-slate-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </motion.article>
              )
            })}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-panel rounded-3xl p-6"
            >
              <h3 className="font-serif text-2xl text-slate-800">HOU – Nơi Ươm Mầm Khát Vọng Việt Nam</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {houHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/80 p-4">
                    <p className="text-sm font-semibold text-vietnam-red">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Button asChild className="rounded-full bg-vietnam-red px-5 text-white hover:bg-[#e94e42]">
                  <a href={recruitmentLinks[0]} target="_blank" rel="noreferrer">
                    Tìm hiểu thêm về HOU
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-vietnam-red/30 bg-white/75 text-vietnam-red">
                  <a href={recruitmentLinks[5]} target="_blank" rel="noreferrer">
                    Xem các ngành đào tạo
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-panel rounded-3xl p-6"
            >
              <h4 className="font-serif text-xl text-slate-800">Đăng ký tư vấn miễn phí</h4>
              <p className="mt-2 text-sm text-slate-600">Để lại thông tin để đội ngũ tuyển sinh liên hệ nhanh nhất.</p>

              <form className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full rounded-xl border border-white/60 bg-white/75 px-4 py-2 text-sm outline-none ring-vietnam-red/25 focus:ring"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full rounded-xl border border-white/60 bg-white/75 px-4 py-2 text-sm outline-none ring-vietnam-red/25 focus:ring"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/60 bg-white/75 px-4 py-2 text-sm outline-none ring-vietnam-red/25 focus:ring"
                />
                <Button type="button" className="w-full rounded-xl bg-vietnam-red text-white hover:bg-[#e94e42]">
                  Gửi thông tin
                </Button>
              </form>
            </motion.div>
          </div>

          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8"
          >
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-mountain-purple/80">
              Các ngành đào tạo của HOU
            </h4>
            <div className="flex flex-wrap gap-2">
              {programs.map((program) => (
                <span
                  key={program}
                  className="rounded-full border border-white/75 bg-white/75 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {program}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="mt-20 border-t border-white/45 py-8">
        <div className="section-shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HOU cùng Việt Nam — Rebuilt bằng React + Tailwind + Framer Motion.</p>
          <a
            href="https://vn-hou-hung.lovable.app"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-vietnam-red hover:underline"
          >
            Nguồn tham chiếu gốc
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
