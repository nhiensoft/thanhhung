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
} from "lucide-react";
import { useMemo, useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

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

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const HistorySection = () => {
  const [mode, setMode] = useState<"normal" | "wheel">("normal");
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const lockRef = useRef(false);

  const targetRotationForIndex = useCallback((idx: number) => {
    return -(WHEEL_START_DEG + idx * WHEEL_STEP_DEG);
  }, []);

  const setIndexSynced = useCallback(
    (idx: number) => {
      const next = clamp(idx, 0, vietnamHistory.length - 1);
      setActiveIndex(next);
      setRotation(targetRotationForIndex(next));
    },
    [targetRotationForIndex]
  );

  useEffect(() => {
    if (mode !== "wheel") return;

    const html = document.documentElement;
    const body = document.body;
    lockRef.current = true;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevOverscroll = body.style.overscrollBehavior;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const dir = e.deltaY > 0 ? 1 : -1;
      const next = clamp(activeIndex + dir, 0, vietnamHistory.length - 1);
      if (next !== activeIndex) {
        setIndexSynced(next);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false, capture: true });

    return () => {
      window.removeEventListener("wheel", onWheel, { capture: true } as any);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.overscrollBehavior = prevOverscroll;
      lockRef.current = false;
    };
  }, [mode, activeIndex, setIndexSynced]);

  const active = vietnamHistory[activeIndex];
  const ActiveIcon = active.icon;

  const progress = useMemo(() => ((activeIndex + 1) / vietnamHistory.length) * 100, [activeIndex]);

  const wheelItems = useMemo(
    () =>
      vietnamHistory.map((item, idx) => {
        const angle = WHEEL_START_DEG + idx * WHEEL_STEP_DEG;
        const Icon = item.icon;
        const isActive = idx === activeIndex;
        return { ...item, idx, angle, Icon, isActive };
      }),
    [activeIndex]
  );

  return (
    <section id="history-timeline" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-mountain-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP PROGRESS BAR (clickable) */}
        <div className={cn(
          "sticky top-2 z-40 mb-6 rounded-xl border border-border/60 bg-card/95 backdrop-blur p-3 transition-all duration-500",
          mode === "wheel" ? "opacity-100 translate-y-0" : "opacity-95"
        )}>
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Tiến độ dòng lịch sử</span>
            <span>{activeIndex + 1}/{vietnamHistory.length}</span>
          </div>
          <div className="relative">
            <div className="h-2 rounded-full bg-secondary overflow-hidden mb-3">
              <div
                className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-300", progressColor[activeIndex])}
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="grid grid-cols-10 gap-1">
              {vietnamHistory.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndexSynced(idx)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-200",
                    idx === activeIndex ? "bg-primary scale-y-125" : "bg-border hover:bg-primary/55"
                  )}
                  title={`${item.period} - ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA bar */}
        {mode === "normal" && (
          <div className="mb-8 flex justify-center">
            <button
              onClick={() => {
                setMode("wheel");
                setIndexSynced(activeIndex);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-card/90 hover:bg-primary/10 transition-all duration-300 font-medium"
            >
              <span>Khám phá Timewheel lịch sử</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* MAIN STAGE */}
        <div className="relative min-h-[720px]">
          {/* Normal content - split top/bottom animation when entering wheel */}
          <div className={cn("transition-all duration-700 ease-out", mode === "wheel" && "pointer-events-none")}> 
            <div
              className={cn(
                "transition-all duration-700 ease-out",
                mode === "wheel"
                  ? "opacity-0 -translate-x-10 -translate-y-12 scale-[0.96]"
                  : "opacity-100 translate-x-0 translate-y-0"
              )}
            >
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground leading-tight">
                  Dòng Chảy Lịch Sử Việt Nam
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                  Trạng thái chuẩn. Bấm nút để vào chế độ trình diễn Timewheel.
                </p>
              </div>
            </div>

            <div
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-5 transition-all duration-700 ease-out",
                mode === "wheel"
                  ? "opacity-0 translate-x-10 translate-y-12 scale-[0.96]"
                  : "opacity-100 translate-x-0 translate-y-0"
              )}
            >
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

          {/* WHEEL MODE */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-out",
              mode === "wheel"
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 -translate-x-16 pointer-events-none"
            )}
          >
            {/* Exit button */}
            <button
              onClick={() => setMode("normal")}
              className="absolute top-2 left-0 z-30 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/95 backdrop-blur hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Xem hiện tại</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-6 h-full pt-14">
              {/* Wheel viewport */}
              <div className="relative rounded-3xl border border-border/70 bg-card/85 shadow-card backdrop-blur overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-mountain-blue/8" />

                <div className="absolute left-[-520px] top-1/2 -translate-y-1/2 w-[1100px] h-[1100px]">
                  <div
                    className="relative w-full h-full rounded-full border-2 border-primary/20"
                    style={{ transform: `rotate(${rotation}deg)`, transition: "transform 380ms cubic-bezier(.22,.8,.22,1)" }}
                  >
                    {/* inner rings */}
                    <div className="absolute inset-[120px] rounded-full border border-primary/15" />
                    <div className="absolute inset-[240px] rounded-full border border-primary/12" />

                    {wheelItems.map((item) => {
                      const x = 50 + 42 * Math.cos((item.angle * Math.PI) / 180);
                      const y = 50 + 42 * Math.sin((item.angle * Math.PI) / 180);

                      return (
                        <button
                          key={item.idx}
                          onClick={() => setIndexSynced(item.idx)}
                          className={cn(
                            "absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border backdrop-blur transition-all duration-300 px-3 py-2 text-left",
                            item.isActive
                              ? "bg-primary text-primary-foreground border-primary shadow-heritage scale-125"
                              : "bg-card/90 text-foreground border-border/60 hover:border-primary/50 hover:scale-105"
                          )}
                          style={{ left: `${x}%`, top: `${y}%`, minWidth: 132 }}
                        >
                          <div className="flex items-center gap-2">
                            <item.Icon className="h-4 w-4 shrink-0" />
                            <div className="min-w-0">
                              <div className="text-[10px] uppercase tracking-[0.12em] opacity-80">{item.period}</div>
                              <div className="text-xs font-semibold truncate max-w-[88px]">{item.title}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* focus window */}
                <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[220px] h-[220px] rounded-full border-2 border-primary/50 shadow-[0_0_40px_rgba(255,99,71,0.22)] pointer-events-none" />
              </div>

              {/* info panel */}
              <aside className="rounded-2xl border border-border/70 bg-card/95 shadow-card p-5 md:p-6 backdrop-blur h-fit self-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("w-11 h-11 rounded-xl bg-gradient-to-br text-white flex items-center justify-center", progressColor[activeIndex])}>
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Mốc hiện tại</p>
                    <p className="text-sm font-semibold text-primary">{active.period}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">{active.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{active.description}</p>

                <div className="grid grid-cols-1 gap-2 mb-5">
                  {active.events.map((event, idx) => (
                    <div key={idx} className="rounded-lg border border-border/60 bg-background/70 px-3 py-2 text-xs text-foreground/85">
                      {event}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground">Chủ đề: <span className="font-medium text-foreground">{active.mood}</span></p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
