import {
  Landmark,
  Shield,
  Swords,
  Castle,
  BookOpen,
  ScrollText,
  Flame,
  Flag,
  Building2,
  Cpu,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { useMemo, useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TimelinePeriod {
  period: string;
  title: string;
  description: string;
  icon: any;
  events: string[];
  mood: string;
}

const vietnamHistory: TimelinePeriod[] = [
  {
    period: "2879 TCN – 111 TCN",
    title: "Hùng Vương – Âu Lạc",
    description: "Khởi nguồn văn minh Việt Nam với 18 đời Hùng Vương và Nhà nước Âu Lạc.",
    icon: Landmark,
    mood: "Khởi nguyên",
    events: ["Văn Lang", "Âu Lạc", "Văn hóa trống đồng"],
  },
  {
    period: "40 – 43",
    title: "Khởi nghĩa Hai Bà Trưng",
    description: "Khẳng định tinh thần bất khuất dân tộc trong lịch sử chống ngoại xâm.",
    icon: Shield,
    mood: "Bất khuất",
    events: ["Trưng Trắc – Trưng Nhị", "Nhà nước độc lập 3 năm", "Biểu tượng nữ quyền"],
  },
  {
    period: "544 – 602",
    title: "Nhà nước Vạn Xuân",
    description: "Lý Bí lập nên nhà nước Vạn Xuân, củng cố ý chí độc lập tự chủ.",
    icon: Flag,
    mood: "Tự chủ",
    events: ["Lý Bí", "Tiền Lý", "Chủ quyền dân tộc"],
  },
  {
    period: "938 – 967",
    title: "Nhà Ngô",
    description: "Chiến thắng Bạch Đằng mở đầu thời kỳ độc lập lâu dài của dân tộc.",
    icon: Swords,
    mood: "Chiến thắng",
    events: ["Bạch Đằng", "Kết thúc Bắc thuộc", "Mở đầu tự chủ"],
  },
  {
    period: "1010 – 1225",
    title: "Triều đại Lý",
    description: "Dời đô Thăng Long, phát triển văn hóa và giáo dục nền tảng.",
    icon: Castle,
    mood: "Thăng Long",
    events: ["Dời đô", "Chùa Một Cột", "Hưng thịnh giáo dục"],
  },
  {
    period: "1225 – 1400",
    title: "Triều đại Trần",
    description: "Ba lần thắng Mông – Nguyên, tạo hào khí Đông A lẫy lừng.",
    icon: BookOpen,
    mood: "Hào khí Đông A",
    events: ["Kháng Mông", "Trúc Lâm", "Văn học sử học"],
  },
  {
    period: "1858 – 1945",
    title: "Thời kỳ Pháp thuộc",
    description: "Giai đoạn đấu tranh bền bỉ chuẩn bị cho cách mạng dân tộc.",
    icon: ScrollText,
    mood: "Kiên cường",
    events: ["Cần Vương", "Đông Du", "1930 thành lập Đảng"],
  },
  {
    period: "1945 – 1975",
    title: "Kháng chiến & Thống nhất",
    description: "Từ Cách mạng Tháng 8 đến đại thắng 1975, thống nhất non sông.",
    icon: Flame,
    mood: "Toàn thắng",
    events: ["1945", "1954", "1975"],
  },
  {
    period: "1975 – 1990",
    title: "Việt Nam thống nhất",
    description: "Xây dựng đất nước và mở đường cho công cuộc Đổi mới.",
    icon: Building2,
    mood: "Đổi mới",
    events: ["1976 thống nhất", "1986 Đổi mới", "Hội nhập"],
  },
  {
    period: "1990 – nay",
    title: "Khoa học Công nghệ",
    description: "Việt Nam tăng tốc chuyển đổi số và nâng tầm tri thức quốc gia.",
    icon: Cpu,
    mood: "Vươn tầm",
    events: ["CNTT", "Nghiên cứu", "Chuyển đổi số"],
  },
];

const progressColor = [
  "from-amber-500 to-orange-500",
  "from-rose-500 to-red-500",
  "from-sky-500 to-indigo-500",
  "from-indigo-500 to-violet-500",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-red-500 to-orange-500",
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-indigo-500",
];

const WHEEL_STEP_DEG = 34;
const WHEEL_START_DEG = -140;
const SCROLL_THRESHOLD = 110;

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const HistorySection = () => {
  const [mode, setMode] = useState<"normal" | "wheel">("normal");
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [viewport, setViewport] = useState({ w: 1280, h: 800 });

  const wheelAccumulatorRef = useRef(0);
  const lastStepAtRef = useRef(0);

  const targetRotationForIndex = useCallback((idx: number) => -(WHEEL_START_DEG + idx * WHEEL_STEP_DEG), []);

  const setIndexSynced = useCallback(
    (idx: number) => {
      const next = clamp(idx, 0, vietnamHistory.length - 1);
      setActiveIndex(next);
      setRotation(targetRotationForIndex(next));
    },
    [targetRotationForIndex]
  );

  const stepBy = useCallback(
    (dir: 1 | -1) => {
      setActiveIndex((prev) => {
        const next = clamp(prev + dir, 0, vietnamHistory.length - 1);
        setRotation(targetRotationForIndex(next));
        return next;
      });
    },
    [targetRotationForIndex]
  );

  useEffect(() => {
    const onResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (mode !== "wheel") return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevOverscroll = body.style.overscrollBehavior;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    body.classList.add("history-wheel-mode");

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      wheelAccumulatorRef.current += e.deltaY;

      const now = performance.now();
      if (now - lastStepAtRef.current < 110) return;

      if (Math.abs(wheelAccumulatorRef.current) >= SCROLL_THRESHOLD) {
        const dir = wheelAccumulatorRef.current > 0 ? 1 : -1;
        wheelAccumulatorRef.current = 0;
        lastStepAtRef.current = now;
        stepBy(dir as 1 | -1);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        stepBy(1);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        stepBy(-1);
      }
      if (e.key === "Escape") {
        e.preventDefault();
        setMode("normal");
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    window.addEventListener("keydown", onKeyDown, { capture: true });

    return () => {
      window.removeEventListener("wheel", onWheel, { capture: true } as any);
      window.removeEventListener("keydown", onKeyDown, { capture: true } as any);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.overscrollBehavior = prevOverscroll;
      body.classList.remove("history-wheel-mode");
      wheelAccumulatorRef.current = 0;
    };
  }, [mode, stepBy]);

  const active = vietnamHistory[activeIndex];
  const ActiveIcon = active.icon;

  const progress = useMemo(() => ((activeIndex + 1) / vietnamHistory.length) * 100, [activeIndex]);

  const wheelItems = useMemo(
    () =>
      vietnamHistory.map((item, idx) => ({
        ...item,
        idx,
        angle: WHEEL_START_DEG + idx * WHEEL_STEP_DEG,
        Icon: item.icon,
        isActive: idx === activeIndex,
      })),
    [activeIndex]
  );

  const ringSize = Math.max(viewport.h * 1.52, viewport.w * 0.92);
  const ringRadius = ringSize * 0.38;
  const ringLeft = -ringSize * 0.58;
  const focusSize = clamp(Math.round(Math.min(viewport.w, viewport.h) * 0.2), 180, 300);

  return (
    <section id="history-timeline" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-mountain-blue/10 rounded-full blur-3xl" />
      </div>

      {/* NORMAL MODE */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[760px]">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            mode === "wheel" ? "opacity-0 -translate-x-24 -translate-y-24 scale-[0.92] pointer-events-none" : "opacity-100 translate-x-0 translate-y-0"
          )}
        >
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-card/70 text-xs tracking-[0.15em] uppercase text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Lịch sử Việt Nam
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground leading-tight mt-4">Dòng Chảy Lịch Sử Việt Nam</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Chế độ mặc định. Nhấn để chuyển sang Timewheel toàn màn hình.
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <Button
              onClick={() => {
                setMode("wheel");
                setIndexSynced(activeIndex);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
            >
              <Sparkles className="h-4 w-4" />
              <span>Mở Timewheel</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {vietnamHistory.slice(0, 4).map((item, i) => {
              const Icon = item.icon;
              return (
                <article key={i} className="rounded-2xl border bg-card/90 p-5 shadow-card">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn("w-9 h-9 rounded-lg bg-gradient-to-br text-white flex items-center justify-center", progressColor[i])}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.14em] uppercase px-2 py-1 rounded-md bg-primary/10 text-primary">{item.period}</span>
                  </div>
                  <h4 className="text-lg font-playfair font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* FULLSCREEN WHEEL MODE */}
      <div
        className={cn(
          "fixed inset-0 z-[90] transition-all duration-700 ease-out",
          mode === "wheel" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_25%,rgba(251,191,36,.18),transparent_40%),radial-gradient(circle_at_78%_20%,rgba(56,189,248,.18),transparent_36%),radial-gradient(circle_at_72%_72%,rgba(196,181,253,.2),transparent_38%),radial-gradient(circle_at_20%_78%,rgba(34,197,94,.12),transparent_34%)]" />

        {/* Top progress rail */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 w-[min(96vw,1120px)]">
          <div className="rounded-xl border border-white/25 bg-black/35 backdrop-blur p-3 text-white shadow-xl">
            <div className="flex items-center justify-between text-xs text-white/80 mb-2">
              <span>Tiến độ dòng lịch sử</span>
              <span>
                {activeIndex + 1}/{vietnamHistory.length}
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/15 overflow-hidden mb-3">
              <div className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-300", progressColor[activeIndex])} style={{ width: `${progress}%` }} />
            </div>
            <div className="grid grid-cols-10 gap-1.5">
              {vietnamHistory.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndexSynced(idx)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-200",
                    idx === activeIndex ? "bg-amber-300 scale-y-125" : "bg-white/30 hover:bg-white/60"
                  )}
                  title={`${item.period} - ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Back button */}
        <Button
          variant="secondary"
          onClick={() => setMode("normal")}
          className="absolute top-4 left-4 z-50 inline-flex items-center gap-2 border border-white/20 bg-black/40 text-white hover:bg-black/55"
        >
          <ArrowLeft className="h-4 w-4" />
          Xem lịch sử hiện tại
        </Button>

        <div className="absolute inset-0 pt-24 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_420px]">
          {/* Wheel viewport */}
          <div className="relative overflow-hidden">
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: `${ringLeft}px`,
                width: `${ringSize}px`,
                height: `${ringSize}px`,
              }}
            >
              <div
                className="relative w-full h-full rounded-full border border-white/35"
                style={{ transform: `rotate(${rotation}deg)`, transition: "transform 420ms cubic-bezier(.22,.8,.22,1)" }}
              >
                <div className="absolute inset-[18%] rounded-full border border-white/30 bg-[conic-gradient(from_42deg,rgba(255,255,255,.36),rgba(251,191,36,.62),rgba(56,189,248,.54),rgba(217,70,239,.48),rgba(34,197,94,.46),rgba(255,255,255,.36))] shadow-[0_0_70px_rgba(255,255,255,.15),0_0_130px_rgba(251,191,36,.25)]" />
                <div className="absolute inset-[34%] rounded-full border border-white/35 bg-[#0a0f23]/65 backdrop-blur-sm" />

                {wheelItems.map((item) => {
                  const transform = `translate(-50%, -50%) rotate(${item.angle}deg) translateX(${ringRadius}px) rotate(${-item.angle}deg)`;
                  return (
                    <button
                      key={item.idx}
                      onClick={() => setIndexSynced(item.idx)}
                      className={cn(
                        "absolute left-1/2 top-1/2 rounded-xl border backdrop-blur transition-all duration-300 px-3 py-2 text-left",
                        item.isActive
                          ? "bg-white text-slate-900 border-white shadow-[0_0_35px_rgba(255,255,255,.52)] scale-[1.28]"
                          : "bg-white/18 text-white border-white/45 hover:bg-white/24 hover:scale-110"
                      )}
                      style={{ transform, minWidth: 156 }}
                    >
                      <div className="flex items-center gap-2">
                        <item.Icon className="h-4 w-4 shrink-0" />
                        <div className="min-w-0">
                          <div className="text-[10px] uppercase tracking-[0.12em] opacity-85">{item.period}</div>
                          <div className="text-xs font-semibold truncate max-w-[96px]">{item.title}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className="absolute top-1/2 -translate-y-1/2 rounded-full border-2 border-white/85 pointer-events-none"
              style={{
                left: "31%",
                width: `${focusSize}px`,
                height: `${focusSize}px`,
                boxShadow: "0 0 65px rgba(255,255,255,.42), inset 0 0 45px rgba(251,191,36,.22)",
              }}
            />
          </div>

          {/* Info panel */}
          <div className="relative flex items-center justify-center p-4 xl:p-6">
            <aside className="w-full max-w-[420px] rounded-2xl border border-white/30 bg-black/35 shadow-2xl p-5 md:p-6 backdrop-blur text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-11 h-11 rounded-xl bg-gradient-to-br text-white flex items-center justify-center", progressColor[activeIndex])}>
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/70">Mốc trung tâm</p>
                  <p className="text-sm font-semibold text-amber-300">{active.period}</p>
                </div>
              </div>

              <h3 className="text-2xl font-playfair font-bold mb-2">{active.title}</h3>
              <p className="text-sm text-white/85 leading-relaxed mb-4">{active.description}</p>

              <div className="grid grid-cols-1 gap-2 mb-4">
                {active.events.map((event, idx) => (
                  <div key={idx} className="rounded-lg border border-white/20 bg-white/8 px-3 py-2 text-xs text-white/90">
                    {event}
                  </div>
                ))}
              </div>

              <p className="text-xs text-white/70">
                Chủ đề: <span className="font-medium text-white">{active.mood}</span>
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
