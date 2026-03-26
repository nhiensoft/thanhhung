import { Calendar, MapPin, Users, Crown, Sword, Flag, Star, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelinePeriod {
  period: string;
  title: string;
  description: string;
  icon: any;
  events: string[];
}

interface MobileTimelineCardProps {
  period: TimelinePeriod;
  Icon: any;
  isExpanded: boolean;
  onToggle: () => void;
}

const MobileTimelineCard = ({ period, Icon, isExpanded, onToggle }: MobileTimelineCardProps) => {
  return (
    <Card className="bg-white/95 backdrop-blur-sm border-2 border-heritage-cream/50 shadow-lg mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-mountain-blue/10 rounded-lg">
              <Icon className="h-5 w-5 text-mountain-blue" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-inter font-semibold text-sunrise-orange">
                {period.period}
              </div>
              <CardTitle className="text-base font-playfair text-foreground leading-tight">
                {period.title}
              </CardTitle>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="ml-2 p-1 h-8 w-8"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <p className="text-muted-foreground font-inter mb-4 leading-relaxed text-sm">
            {period.description}
          </p>
          <ul className="space-y-2">
            {period.events.map((event, eventIndex) => (
              <li key={eventIndex} className="flex items-start space-x-2 text-sm">
                <div className="w-1.5 h-1.5 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/80 font-inter leading-relaxed">{event}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

const MobileHistorySection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const vietnamHistory: TimelinePeriod[] = [
    {
      period: "2879 TCN - 111 TCN",
      title: "Thời kỳ Hùng Vương - Âu Lạc",
      description: "Khởi nguồn văn minh Việt Nam với 18 đời Hùng Vương và Nhà nước Âu Lạc",
      icon: Crown,
      events: ["Thời kỳ Hùng Vương với Văn Lang", "Nhà nước Âu Lạc của An Dương Vương", "Nền tảng văn hóa đồng trống"]
    },
    {
      period: "40-43",
      title: "Khởi nghĩa Hai Bà Trưng",
      description: "Cuộc khởi nghĩa đầu tiên chống ngoại xâm, khẳng định tinh thần bất khuất dân tộc",
      icon: Sword,
      events: ["Trưng Trắc - Trưng Nhị khởi nghĩa", "Lập nên nhà nước độc lập 3 năm", "Tinh thần yêu nước bất khuất"]
    },
    {
      period: "544-602",
      title: "Khởi nghĩa Lý Bí",
      description: "Lý Bí lập nên nhà nước Vạn Xuân, khẳng định ý chí độc lập dân tộc",
      icon: Flag,
      events: ["Lý Bí lập nhà nước Vạn Xuân", "Triều đại Tiền Lý", "Khẳng định chủ quyền dân tộc"]
    },
    {
      period: "938-967",
      title: "Nhà Ngô - Độc lập tự chủ",
      description: "Ngô Quyền đánh bại Nam Hán, mở đầu thời kỳ độc lập lâu dài",
      icon: Star,
      events: ["Ngô Quyền thắng trận Bạch Đằng", "Kết thúc Bắc thuộc lần 4", "Mở đầu thời kỳ tự chủ"]
    },
    {
      period: "1010-1225",
      title: "Triều đại Lý",
      description: "Thời kỳ thịnh vượng, xây dựng Thăng Long, phát triển văn hóa Phật giáo",
      icon: MapPin,
      events: ["Lý Thái Tổ dời đô về Thăng Long", "Xây dựng chùa Một Cột", "Phát triển nền giáo dục"]
    },
    {
      period: "1225-1400",
      title: "Triều đại Trần",
      description: "Đỉnh cao văn hóa, ba lần đánh thắng quân Mông - Nguyên",
      icon: Zap,
      events: ["Ba lần chống Mông Nguyên", "Trần Nhân Tông lập Thiền phái Trúc Lâm", "Phát triển văn học, sử học"]
    },
    {
      period: "1858-1945",
      title: "Thời kỳ Pháp thuộc",
      description: "90 năm đấu tranh chống thực dân Pháp, chuẩn bị cho cách mạng giải phóng dân tộc",
      icon: Calendar,
      events: ["Phong trào Cần Vương", "Phong trào Đông Du của Phan Bội Châu", "Sự ra đời của Đảng Cộng sản Việt Nam"]
    },
    {
      period: "1945-1975",
      title: "Kháng chiến chống Pháp - Mỹ",
      description: "Từ Cách mạng Tháng 8 đến thống nhất đất nước, hoàn thành độc lập dân tộc",
      icon: Users,
      events: ["1945: Cách mạng Tháng 8 thành công", "1954: Chiến thắng Điện Biên Phủ", "1975: Thống nhất đất nước"]
    },
    {
      period: "1975-1990",
      title: "Việt Nam thống nhất",
      description: "Xây dựng đất nước, đổi mới và hội nhập quốc tế, phát triển toàn diện",
      icon: Star,
      events: ["1976: Thống nhất chính thức", "1986: Đổi mới kinh tế", "Hội nhập quốc tế sâu rộng"]
    },
    {
      period: "1990-nay",
      title: "Phát triển Khoa học Công nghệ",
      description: "Bước tiến mạnh mẽ trong lĩnh vực khoa học, kỹ thuật và công nghệ hiện đại",
      icon: Zap,
      events: ["Phát triển công nghệ thông tin", "Đầu tư vào nghiên cứu khoa học", "Chuyển đổi số quốc gia"]
    }
  ];

  const handleToggle = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-8 bg-white" id="history-timeline">
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl font-playfair font-bold text-foreground mb-3">
          Lịch sử Phát triển Việt Nam
        </h2>
        <p className="text-sm text-muted-foreground font-inter">
          4000 năm xây dựng và bảo vệ Tổ quốc
        </p>
      </div>

      <div className="px-4">
        {vietnamHistory.map((period, index) => {
          const Icon = period.icon;
          return (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < vietnamHistory.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-8 bg-mountain-blue/30"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-mountain-blue rounded-full border-2 border-white shadow-md z-10"></div>
              
              {/* Card with left margin for timeline */}
              <div className="ml-12">
                <MobileTimelineCard
                  period={period}
                  Icon={Icon}
                  isExpanded={expandedCard === index}
                  onToggle={() => handleToggle(index)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-6 px-4">
        <p className="text-muted-foreground font-inter text-xs">
          💡 <span className="font-semibold text-mountain-blue">Mẹo:</span> Nhấn vào các thẻ để xem chi tiết từng giai đoạn lịch sử
        </p>
      </div>
    </section>
  );
};

export default MobileHistorySection;