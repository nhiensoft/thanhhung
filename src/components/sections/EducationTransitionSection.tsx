import { GraduationCap, Heart, Lightbulb, Eye, Rocket, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { assetUrl } from "@/assets/imageMap";

const EducationTransitionSection = () => {
  const openPhilosophies = [{
    name: "Mở Cơ hội",
    description: "Tạo cơ hội công bằng cho mọi người được tiếp cận giáo dục với chất lượng tốt, xóa bỏ mọi rào cản, đáp ứng nhu cầu học tập đa dạng, đặc biệt qua hình thức đào tạo từ xa, đào tạo đa ngành, đa trình độ.",
    icon: Rocket,
    color: "sunrise-orange"
  }, {
    name: "Mở Trái tim",
    description: "Lan tỏa giá trị nhân văn trong giáo dục, thể hiện lòng nhân ái, sự sẻ chia và hỗ trợ cộng đồng, giúp người học phát triển không chỉ về tri thức mà còn về phẩm chất đạo đức.",
    icon: Heart,
    color: "mountain-blue"
  }, {
    name: "Mở Trí tuệ",
    description: "Kiến tạo tri thức, phát triển toàn diện con người bằng cách tập trung vào việc khơi nguồn, định hướng và tạo môi trường để người học thỏa sức khám phá và sáng tạo.",
    icon: Lightbulb,
    color: "forest-green"
  }, {
    name: "Mở Tầm nhìn",
    description: "Phát triển tư duy sáng tạo, nâng cao khả năng ứng phó và thích ứng với xu thế thời đại, mở rộng nhận thức nhằm đáp ứng nhu cầu xã hội hiện đại.",
    icon: Eye,
    color: "mountain-purple"
  }, {
    name: "Mở Tương lai",
    description: "Chủ động hội nhập, tạo dựng tương lai bền vững cho người học thông qua việc tích luỹ kiến thức, kỹ năng cá nhân hóa học tập liên tục suốt đời nhằm xây dựng xã hội học tập.",
    icon: GraduationCap,
    color: "sunrise-yellow"
  }];
  const bgImage = assetUrl("lovable-9b107960-b9ae-4027-a1a3-06686b7e971e.png");
  const houLogo = assetUrl("lovable-ee07d4f0-f55d-4f4e-881a-e2e1cf5bb7c6.png");

  return <section className="py-16 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Transition Bridge */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-card/90 backdrop-blur-sm rounded-full shadow-peaceful mb-6">
            <img src={houLogo} alt="HOU Logo" className="h-12 w-12 object-contain" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-destructive-foreground" style={{ textShadow: '-1px -1px 0 rgba(255,255,255,0.3), 1px -1px 0 rgba(255,255,255,0.3), -1px 1px 0 rgba(255,255,255,0.3), 1px 1px 0 rgba(255,255,255,0.3)' }}>
            Tổ Quốc Trong Tim – Khát Vọng Nắm Trong Tay
          </h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Row 1: Heritage & Future */}
            <div className="bg-card backdrop-blur-sm rounded-2xl p-6 border-2 border-mountain-blue/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Từ mạch nguồn văn hóa ngàn đời, <span className="text-mountain-blue font-semibold">Đại học Mở Hà Nội</span> không chỉ là nơi tiếp nối truyền thống,<br />
                mà còn là bệ phóng cho thế hệ trẻ chạm tới tương lai.
              </p>
            </div>

            {/* Row 2: 5 Open Philosophies */}
            <div className="bg-card backdrop-blur-sm rounded-2xl p-6 border-2 border-sunrise-orange/40 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Với sứ mệnh giáo dục khai phóng, nhà trường hun đúc tinh thần học hỏi không giới hạn<br />
                qua <span className="text-sunrise-orange font-semibold">5 triết lý "Mở"</span> đặc sắc của HOU.
              </p>
            </div>

            {/* Row 3: Economics Faculty */}
            <div className="bg-card backdrop-blur-sm rounded-2xl p-6 border-2 border-forest-green/40 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Đặc biệt, <span className="text-forest-green font-semibold">Khoa Kinh tế</span> là nơi kết nối giữa sách vở và thực tiễn, giữa khát vọng và hành động<br />
                – nơi tri thức được "kích hoạt" để tạo nên giá trị thật sự cho xã hội.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Open Philosophies */}
        <div className="mb-16">
          <h3 className="text-3xl font-playfair font-bold text-center text-primary-foreground mb-8 transition-all duration-300 text-glow-yellow flex items-center justify-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
            5 Triết lý "Mở" của Đại Học Mở Hà Nội
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {openPhilosophies.map((philosophy, index) => {
            const Icon = philosophy.icon;

            // Define unique color schemes for each philosophy
            const colorSchemes = [
            { // Mở Cơ hội - Sunrise Orange
              bg: 'bg-gradient-to-br from-sunrise-orange/10 via-white/95 to-sunrise-orange/5',
              border: 'from-sunrise-orange/40 via-sunrise-orange/20 to-sunrise-orange/30',
              iconBg: 'bg-gradient-to-br from-sunrise-orange/20 via-sunrise-orange/30 to-sunrise-orange/40',
              titleColor: 'group-hover:text-sunrise-orange',
              accent: 'sunrise-orange'
            },
            { // Mở Trái tim - Bright Pink
              bg: 'bg-gradient-to-br from-bright-pink/10 via-white/95 to-bright-pink/5',
              border: 'from-bright-pink/40 via-bright-pink/20 to-bright-pink/30',
              iconBg: 'bg-gradient-to-br from-bright-pink/20 via-bright-pink/30 to-bright-pink/40',
              titleColor: 'group-hover:text-bright-pink',
              accent: 'bright-pink'
            },
            { // Mở Trí tuệ - Bright Green
              bg: 'bg-gradient-to-br from-bright-green/10 via-white/95 to-bright-green/5',
              border: 'from-bright-green/40 via-bright-green/20 to-bright-green/30',
              iconBg: 'bg-gradient-to-br from-bright-green/20 via-bright-green/30 to-bright-green/40',
              titleColor: 'group-hover:text-bright-green',
              accent: 'bright-green'
            },
            { // Mở Tầm nhìn - Bright Purple
              bg: 'bg-gradient-to-br from-bright-purple/10 via-white/95 to-bright-purple/5',
              border: 'from-bright-purple/40 via-bright-purple/20 to-bright-purple/30',
              iconBg: 'bg-gradient-to-br from-bright-purple/20 via-bright-purple/30 to-bright-purple/40',
              titleColor: 'group-hover:text-bright-purple',
              accent: 'bright-purple'
            },
            { // Mở Tương lai - Bright Cyan
              bg: 'bg-gradient-to-br from-bright-cyan/10 via-white/95 to-bright-cyan/5',
              border: 'from-bright-cyan/40 via-bright-cyan/20 to-bright-cyan/30',
              iconBg: 'bg-gradient-to-br from-bright-cyan/20 via-bright-cyan/30 to-bright-cyan/40',
              titleColor: 'group-hover:text-bright-cyan',
              accent: 'bright-cyan'
            }];


            const colorScheme = colorSchemes[index];

            return <Card key={index} className={`group relative overflow-hidden ${colorScheme.bg} backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer animate-fade-in text-center transform hover:scale-105`} style={{
              animationDelay: `${index * 0.1}s`,
              borderRadius: '20px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            }}>
                  {/* Gradient border overlay */}
                  <div className={`absolute inset-0 rounded-[20px] p-[1px] bg-gradient-to-br ${colorScheme.border} group-hover:opacity-100 opacity-60 transition-all duration-500`}>
                    <div className={`w-full h-full rounded-[19px] ${colorScheme.bg} backdrop-blur-xl`}></div>
                  </div>
                  
                  <CardHeader className="pb-3 relative z-10">
                    <div className={`mx-auto p-5 ${colorScheme.iconBg} backdrop-blur-sm border border-white/30 rounded-full mb-4 group-hover:shadow-2xl transition-all duration-500 shadow-xl transform group-hover:rotate-3 group-hover:scale-110`}>
                      <Icon className="h-8 w-8 text-black group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl filter group-hover:brightness-110" />
                    </div>
                    <CardTitle className={`text-lg font-playfair text-foreground ${colorScheme.titleColor} transition-colors duration-500 font-bold tracking-wide`}>
                      {philosophy.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground font-inter leading-relaxed font-medium">
                      {philosophy.description}
                    </p>
                  </CardContent>
                  
                  {/* Shine effect with color tint */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-out`}></div>
                  </div>
                  
                  {/* Subtle color accent at bottom */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme.border} opacity-40 group-hover:opacity-80 transition-opacity duration-500`}></div>
                </Card>;
          })}
          </div>
        </div>

        {/* Economics Faculty Highlight */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-peaceful border border-heritage-cream">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-br from-sunrise-yellow/30 via-sunrise-yellow/40 to-sunrise-yellow/50 backdrop-blur-sm border border-sunrise-yellow/20 rounded-full mb-6 shadow-xl">
              <DollarSign className="h-12 w-12 text-sunrise-yellow drop-shadow-lg filter brightness-110" />
            </div>
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Khoa Kinh tế - Đại Học Mở Hà Nội   
            </h3>
            <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed mb-6">
              Với tầm nhìn hiện đại và phương pháp giảng dạy tiên tiến, Khoa Kinh tế của Đại Học Mở Hà Nội không chỉ truyền đạt kiến thức mà còn rèn luyện tư duy phản biện, kỹ năng thực hành và khả năng thích ứng với thị trường lao động năng động. Chúng tôi không chỉ đào tạo ra những cử nhân kinh tế giỏi, mà còn ươm mầm những người trẻ mang khát vọng kiến tạo một Việt Nam phồn vinh.
            

          </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-sunrise-orange mb-2">3</div>
                <div className="text-sm text-muted-foreground">Chương trình đào tạo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mountain-blue mb-2">3000+</div>
                <div className="text-sm text-muted-foreground">Sinh viên theo học</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green mb-2">~95%</div>
                <div className="text-sm text-muted-foreground">Tỷ lệ có việc làm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default EducationTransitionSection;