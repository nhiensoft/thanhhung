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
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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
    events: [
      "Thời kỳ Hùng Vương với Văn Lang",
      "Nhà nước Âu Lạc của An Dương Vương",
      "Nền tảng văn hóa trống đồng",
    ],
  },
  {
    period: "40 – 43",
    title: "Khởi nghĩa Hai Bà Trưng",
    description: "Cuộc khởi nghĩa đầu tiên chống ngoại xâm, khẳng định tinh thần bất khuất dân tộc.",
    icon: Shield,
    mood: "Bất khuất",
    events: [
      "Trưng Trắc – Trưng Nhị khởi nghĩa",
      "Lập nên nhà nước độc lập 3 năm",
      "Tinh thần yêu nước bất khuất",
    ],
  },
  {
    period: "544 – 602",
    title: "Nhà nước Vạn Xuân",
    description: "Lý Bí lập nên nhà nước Vạn Xuân, khẳng định ý chí độc lập dân tộc.",
    icon: Flag,
    mood: "Tự chủ",
    events: [
      "Lý Bí lập nhà nước Vạn Xuân",
      "Triều đại Tiền Lý",
      "Khẳng định chủ quyền dân tộc",
    ],
  },
  {
    period: "938 – 967",
    title: "Nhà Ngô – Độc lập tự chủ",
    description: "Ngô Quyền đánh bại Nam Hán trên sông Bạch Đằng, mở đầu thời kỳ độc lập lâu dài.",
    icon: Swords,
    mood: "Chiến thắng",
    events: [
      "Ngô Quyền thắng trận Bạch Đằng",
      "Kết thúc Bắc thuộc lần 4",
      "Mở đầu thời kỳ tự chủ",
    ],
  },
  {
    period: "1010 – 1225",
    title: "Triều đại Lý",
    description: "Thời kỳ thịnh vượng, xây dựng Thăng Long, phát triển văn hóa Phật giáo.",
    icon: Castle,
    mood: "Thăng Long",
    events: [
      "Lý Thái Tổ dời đô về Thăng Long",
      "Xây dựng chùa Một Cột",
      "Phát triển nền giáo dục",
    ],
  },
  {
    period: "1225 – 1400",
    title: "Triều đại Trần",
    description: "Đỉnh cao văn hóa, ba lần đánh thắng quân Mông – Nguyên.",
    icon: BookOpen,
    mood: "Hào khí Đông A",
    events: [
      "Ba lần chống Mông Nguyên",
      "Trần Nhân Tông lập Thiền phái Trúc Lâm",
      "Phát triển văn học, sử học",
    ],
  },
  {
    period: "1858 – 1945",
    title: "Thời kỳ Pháp thuộc",
    description: "90 năm đấu tranh chống thực dân Pháp, chuẩn bị cho cách mạng giải phóng dân tộc.",
    icon: ScrollText,
    mood: "Kiên cường",
    events: [
      "Phong trào Cần Vương",
      "Phong trào Đông Du của Phan Bội Châu",
      "Sự ra đời của Đảng Cộng sản Việt Nam",
    ],
  },
  {
    period: "1945 – 1975",
    title: "Kháng chiến chống Pháp – Mỹ",
    description: "Từ Cách mạng Tháng 8 đến thống nhất đất nước, hoàn thành độc lập dân tộc.",
    icon: Flame,
    mood: "Toàn thắng",
    events: [
      "1945: Cách mạng Tháng 8 thành công",
      "1954: Chiến thắng Điện Biên Phủ",
      "1975: Thống nhất đất nước",
    ],
  },
  {
    period: "1975 – 1990",
    title: "Việt Nam thống nhất",
    description: "Xây dựng đất nước, đổi mới và hội nhập quốc tế, phát triển toàn diện.",
    icon: Building2,
    mood: "Đổi mới",
    events: [
      "1976: Thống nhất chính thức",
      "1986: Đổi mới kinh tế",
      "Hội nhập quốc tế sâu rộng",
    ],
  },
  {
    period: "1990 – nay",
    title: "Phát triển Khoa học Công nghệ",
    description: "Bước tiến mạnh mẽ trong khoa học, kỹ thuật và công nghệ hiện đại.",
    icon: Cpu,
    mood: "Vươn tầm",
    events: [
      "Phát triển công nghệ thông tin",
      "Đầu tư vào nghiên cứu khoa học",
      "Chuyển đổi số quốc gia",
    ],
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

const HistorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-history-step]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-history-step"));
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = vietnamHistory[activeIndex];
  const ActiveIcon = active.icon;

  const progress = useMemo(() => ((activeIndex + 1) / vietnamHistory.length) * 100, [activeIndex]);

  return (
    <section id="history-timeline" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-mountain-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-inter font-semibold tracking-[0.18em] uppercase text-primary border border-primary/30 rounded-full mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Scrollytelling Timeline
          </span>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground leading-tight">
            Dòng Chảy Lịch Sử Việt Nam
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Cuộn xuống để đi qua từng thời kỳ — mỗi mốc là một lát cắt của bản lĩnh dân tộc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-8 lg:gap-12">
          {/* Sticky story panel */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl border border-border/70 bg-card/95 shadow-card p-5 md:p-6 backdrop-blur">
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

              <div className="space-y-2 mb-5">
                {active.events.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground/85">{event}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Tiến trình hành trình</span>
                  <span>{activeIndex + 1}/{vietnamHistory.length}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-500", progressColor[activeIndex])}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">Chủ đề: <span className="font-medium text-foreground">{active.mood}</span></p>
              </div>
            </div>
          </aside>

          {/* Scroll steps */}
          <div className="space-y-4">
            {vietnamHistory.map((period, index) => {
              const Icon = period.icon;
              const isActive = index === activeIndex;

              return (
                <article
                  key={index}
                  data-history-step={index}
                  className={cn(
                    "rounded-2xl border bg-card/90 p-5 md:p-6 transition-all duration-300",
                    isActive
                      ? "border-primary/60 shadow-heritage scale-[1.01]"
                      : "border-border/60 hover:border-primary/30"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0",
                        "bg-gradient-to-br",
                        progressColor[index],
                        !isActive && "opacity-70"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold tracking-[0.14em] uppercase px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                          {period.period}
                        </span>
                        {isActive && (
                          <span className="text-[11px] px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 font-semibold">
                            Đang xem
                          </span>
                        )}
                      </div>

                      <h4 className="text-xl font-playfair font-bold text-foreground mb-2">{period.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{period.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {period.events.map((event, i) => (
                          <div key={i} className="rounded-lg border border-border/60 bg-background/70 px-3 py-2 text-xs text-foreground/80">
                            {event}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
