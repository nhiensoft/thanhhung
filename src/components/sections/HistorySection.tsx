import { 
  Landmark, Shield, Swords, Castle, BookOpen, 
  ScrollText, Flame, Flag, Building2, Cpu 
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface TimelinePeriod {
  period: string;
  title: string;
  description: string;
  icon: any;
  events: string[];
}

const vietnamHistory: TimelinePeriod[] = [
  {
    period: "2879 TCN – 111 TCN",
    title: "Hùng Vương – Âu Lạc",
    description: "Khởi nguồn văn minh Việt Nam với 18 đời Hùng Vương và Nhà nước Âu Lạc",
    icon: Landmark,
    events: ["Thời kỳ Hùng Vương với Văn Lang", "Nhà nước Âu Lạc của An Dương Vương", "Nền tảng văn hóa trống đồng"],
  },
  {
    period: "40 – 43",
    title: "Khởi nghĩa Hai Bà Trưng",
    description: "Cuộc khởi nghĩa đầu tiên chống ngoại xâm, khẳng định tinh thần bất khuất dân tộc",
    icon: Shield,
    events: ["Trưng Trắc – Trưng Nhị khởi nghĩa", "Lập nên nhà nước độc lập 3 năm", "Tinh thần yêu nước bất khuất"],
  },
  {
    period: "544 – 602",
    title: "Nhà nước Vạn Xuân",
    description: "Lý Bí lập nên nhà nước Vạn Xuân, khẳng định ý chí độc lập dân tộc",
    icon: Flag,
    events: ["Lý Bí lập nhà nước Vạn Xuân", "Triều đại Tiền Lý", "Khẳng định chủ quyền dân tộc"],
  },
  {
    period: "938 – 967",
    title: "Nhà Ngô – Độc lập tự chủ",
    description: "Ngô Quyền đánh bại Nam Hán trên sông Bạch Đằng, mở đầu thời kỳ độc lập lâu dài",
    icon: Swords,
    events: ["Ngô Quyền thắng trận Bạch Đằng", "Kết thúc Bắc thuộc lần 4", "Mở đầu thời kỳ tự chủ"],
  },
  {
    period: "1010 – 1225",
    title: "Triều đại Lý",
    description: "Thời kỳ thịnh vượng, xây dựng Thăng Long, phát triển văn hóa Phật giáo",
    icon: Castle,
    events: ["Lý Thái Tổ dời đô về Thăng Long", "Xây dựng chùa Một Cột", "Phát triển nền giáo dục"],
  },
  {
    period: "1225 – 1400",
    title: "Triều đại Trần",
    description: "Đỉnh cao văn hóa, ba lần đánh thắng quân Mông – Nguyên",
    icon: BookOpen,
    events: ["Ba lần chống Mông Nguyên", "Trần Nhân Tông lập Thiền phái Trúc Lâm", "Phát triển văn học, sử học"],
  },
  {
    period: "1858 – 1945",
    title: "Thời kỳ Pháp thuộc",
    description: "90 năm đấu tranh chống thực dân Pháp, chuẩn bị cho cách mạng giải phóng dân tộc",
    icon: ScrollText,
    events: ["Phong trào Cần Vương", "Phong trào Đông Du của Phan Bội Châu", "Sự ra đời của Đảng Cộng sản Việt Nam"],
  },
  {
    period: "1945 – 1975",
    title: "Kháng chiến chống Pháp – Mỹ",
    description: "Từ Cách mạng Tháng 8 đến thống nhất đất nước, hoàn thành độc lập dân tộc",
    icon: Flame,
    events: ["1945: Cách mạng Tháng 8 thành công", "1954: Chiến thắng Điện Biên Phủ", "1975: Thống nhất đất nước"],
  },
  {
    period: "1975 – 1990",
    title: "Việt Nam thống nhất",
    description: "Xây dựng đất nước, đổi mới và hội nhập quốc tế, phát triển toàn diện",
    icon: Building2,
    events: ["1976: Thống nhất chính thức", "1986: Đổi mới kinh tế", "Hội nhập quốc tế sâu rộng"],
  },
  {
    period: "1990 – nay",
    title: "Phát triển Khoa học Công nghệ",
    description: "Bước tiến mạnh mẽ trong lĩnh vực khoa học, kỹ thuật và công nghệ hiện đại",
    icon: Cpu,
    events: ["Phát triển công nghệ thông tin", "Đầu tư vào nghiên cứu khoa học", "Chuyển đổi số quốc gia"],
  },
];

const TimelineCard = ({ period, index, isVisible }: { period: TimelinePeriod; index: number; isVisible: boolean }) => {
  const Icon = period.icon;
  const isLeft = index % 2 === 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] gap-0 items-center">
      {/* Left content */}
      <div className={`${isLeft ? 'pr-10' : ''}`}>
        {isLeft && (
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: `${index * 60}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardContent period={period} isHovered={isHovered} alignRight />
          </div>
        )}
      </div>

      {/* Center timeline node */}
      <div className="relative flex flex-col items-center z-10">
        <div
          className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{ transitionDelay: `${index * 60 + 150}ms` }}
        >
          <div className={`absolute inset-0 rounded-full bg-sunrise-orange/15 transition-all duration-300 ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`} />
          <div className="absolute inset-0 rounded-full border-2 border-sunrise-orange/40" />
          <div className={`relative w-10 h-10 rounded-full bg-background border-2 border-sunrise-orange flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-sunrise-orange' : ''}`}>
            <Icon className={`h-4 w-4 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-sunrise-orange'}`} />
          </div>
        </div>
      </div>

      {/* Right content */}
      <div className={`${!isLeft ? 'pl-10' : ''}`}>
        {!isLeft && (
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: `${index * 60}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardContent period={period} isHovered={isHovered} />
          </div>
        )}
      </div>
    </div>
  );
};

const CardContent = ({
  period,
  isHovered,
  alignRight,
}: {
  period: TimelinePeriod;
  isHovered: boolean;
  alignRight?: boolean;
}) => {
  return (
    <div
      className={`group relative p-6 rounded-xl border bg-card/90 backdrop-blur-sm
        transition-all duration-400 cursor-pointer overflow-hidden
        ${isHovered ? 'shadow-heritage border-sunrise-orange/30 -translate-y-0.5' : 'border-border/60 shadow-card'}
        ${alignRight ? 'text-right' : 'text-left'}`}
    >
      {/* Accent bar */}
      <div
        className={`absolute ${alignRight ? 'right-0' : 'left-0'} top-0 bottom-0 w-0.5 bg-sunrise-orange transition-all duration-400 ${
          isHovered ? 'w-1 opacity-100' : 'opacity-40'
        }`}
      />

      <div className="relative z-10">
        {/* Period */}
        <span className="inline-block px-3 py-1 text-[11px] font-inter font-semibold tracking-wider uppercase rounded-md bg-sunrise-orange/10 text-sunrise-orange mb-3">
          {period.period}
        </span>

        {/* Title */}
        <h3 className={`text-lg font-playfair font-bold text-foreground mb-1.5 transition-colors duration-300 ${isHovered ? 'text-sunrise-orange' : ''}`}>
          {period.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground font-inter leading-relaxed mb-3">
          {period.description}
        </p>

        {/* Events */}
        <div
          className={`space-y-1.5 transition-all duration-400 overflow-hidden ${
            isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {period.events.map((event, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 text-sm text-foreground/70 font-inter ${alignRight ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-1 h-1 rounded-full bg-sunrise-orange flex-shrink-0" />
              <span>{event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HistorySection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative py-24 overflow-hidden" id="history-timeline">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-inter font-semibold tracking-[0.15em] uppercase text-sunrise-orange border border-sunrise-orange/30 rounded-full mb-5">
            Dòng chảy lịch sử
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4 leading-tight">
            4000 Năm Dựng Nước
            <br />
            <span className="text-sunrise-orange">& Giữ Nước</span>
          </h2>
          <p className="text-base text-muted-foreground font-inter max-w-xl mx-auto leading-relaxed">
            Hành trình kiên cường của dân tộc Việt Nam qua mỗi trang sử hào hùng
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />

          <div className="space-y-12">
            {vietnamHistory.map((period, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
              >
                <TimelineCard
                  period={period}
                  index={index}
                  isVisible={visibleCards.has(index)}
                />
              </div>
            ))}
          </div>

          {/* End dot */}
          <div className="flex justify-center mt-12">
            <div className="w-3 h-3 rounded-full bg-sunrise-orange" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
