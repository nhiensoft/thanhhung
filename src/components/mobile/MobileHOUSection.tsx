import { Heart, BookOpen, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { MobileHOUCarousel } from "./MobileHOUCarousel";
import { MobileConsultationForm } from "./MobileConsultationForm";

const MobileHOUSection = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const [showConsultForm, setShowConsultForm] = useState(false);

  const handleConsultClick = () => {
    setShowPrograms(false);
    setShowConsultForm(true);
    
    setTimeout(() => {
      const formElement = document.getElementById('consultation-form');
      if (formElement) {
        const rect = formElement.getBoundingClientRect();
        const offsetTop = rect.top + window.pageYOffset - 100;
        window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });
      }
    }, 300);
  };
  
  const handleProgramsClick = () => {
    setShowConsultForm(false);
    setShowPrograms(true);
    
    setTimeout(() => {
      const carouselElement = document.getElementById('programs-carousel');
      if (carouselElement) {
        const rect = carouselElement.getBoundingClientRect();
        const offsetTop = rect.top + window.pageYOffset - 100;
        window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });
      }
    }, 300);
  };

  const values = [
    {
      icon: BookOpen,
      title: "Giáo dục vì Việt Nam",
      description: "Tại HOU, chúng tôi không chỉ truyền tải kiến thức mà còn nuôi dưỡng tâm hồn Việt, trang bị cho bạn hành trang vững chắc để tự tin kiến tạo tương lai cho bản thân và cho quê hương."
    },
    {
      icon: Users,
      title: "Cộng đồng và Kết nối",
      description: "Bạn sẽ được hòa mình vào một môi trường học tập đầy cảm hứng, nơi mỗi sinh viên đều là một 'đại sứ' của lòng yêu nước, cùng nhau lan tỏa những giá trị tốt đẹp ra cộng đồng."
    },
    {
      icon: Lightbulb,
      title: "Đổi mới và Phát triển",
      description: "Chúng tôi tin rằng, mỗi thành tựu khoa học, mỗi ý tưởng sáng tạo từ HOU đều là viên gạch xây dựng nên một Việt Nam hiện đại, phồn vinh hơn."
    }
  ];

  const callToActions = [
    "Hãy cùng HOU chắp cánh ước mơ, biến tình yêu quê hương thành hành động ý nghĩa!",
    "Khám phá các chương trình đào tạo đa dạng, phù hợp với mọi đam mê và định hướng tương lai của bạn.",
    "Tham gia cùng chúng tôi để cùng nhau cống hiến, góp phần làm rạng rỡ thêm vẻ đẹp bất tận của Việt Nam!"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-vietnam-red/5 via-background to-vietnam-green/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-vietnam-red/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-vietnam-green/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-sunrise-yellow/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-vietnam-red/10 rounded-full mb-6">
            <Heart className="h-8 w-8 text-vietnam-red" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6 leading-tight">
            <span className="text-vietnam-red">HOU</span> – Nơi Ươm Mầm{" "}
            <span className="text-vietnam-green">Khát Vọng Việt Nam</span>
            <br />
            <span className="text-xl md:text-3xl mt-4 block">
              Cùng Bạn Kiến Tạo Tương Lai Rạng Rỡ! 💖
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground font-inter max-w-4xl mx-auto leading-relaxed">
            Tình yêu với non sông gấm vóc, với những giá trị văn hóa và lịch sử hào hùng, 
            chính là động lực mạnh mẽ nhất để{" "}
            <span className="text-vietnam-red font-semibold">Đại học Mở Hà Nội</span>{" "}
            không ngừng 'mở' ra những cơ hội vàng cho thế hệ trẻ.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-6 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="group bg-card/90 backdrop-blur-sm border-heritage-cream shadow-peaceful hover:shadow-heritage transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-mountain-blue/10 rounded-xl mb-4 group-hover:bg-mountain-blue/20 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-mountain-blue" />
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-3 group-hover:text-mountain-blue transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-vietnam-red/10 via-heritage-cream/50 to-vietnam-green/10 rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-center text-foreground mb-6">
            Hãy Cùng Chúng Tôi Viết Tiếp Câu Chuyện Tình Yêu Việt Nam!
          </h3>
          
          <div className="space-y-4 mb-8">
            {callToActions.map((action, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-vietnam-red rounded-full mt-2"></div>
                <p className="text-base font-inter text-foreground leading-relaxed">
                  {action}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full bg-vietnam-red hover:bg-vietnam-red/90 text-foreground border border-muted/30 font-inter font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Tìm hiểu thêm về HOU
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleProgramsClick} 
              className="w-full border-vietnam-green text-vietnam-green hover:text-pink-500 hover:border-vietnam-red hover:bg-transparent font-inter font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Xem các ngành đào tạo
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleConsultClick} 
              data-consult-trigger
              className="w-full bg-sunrise-yellow/20 text-forest-green hover:bg-sunrise-yellow/30 font-inter font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Đăng ký tư vấn
            </Button>
          </div>
        </div>

        {/* Programs Gallery */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showPrograms ? 'max-h-screen opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'
        }`}>
          <div id="programs-carousel">
            <MobileHOUCarousel />
          </div>
        </div>

        {/* Consultation Form */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showConsultForm ? 'max-h-none opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'
        }`}>
          <div id="consultation-form">
            <MobileConsultationForm />
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-heritage-cream shadow-peaceful">
          <h4 className="text-xl font-playfair font-bold text-center text-foreground mb-6">
            Kết nối với chúng tôi ngay hôm nay!
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-mountain-blue/10 rounded-xl">
                <svg className="h-5 w-5 text-mountain-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-inter font-semibold text-foreground text-sm">Hotline</p>
                <p className="text-muted-foreground text-sm">1900 2868</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-mountain-blue/10 rounded-xl">
                <svg className="h-5 w-5 text-mountain-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-inter font-semibold text-foreground text-sm">Email</p>
                <p className="text-muted-foreground text-sm">info@hou.edu.vn</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-mountain-blue/10 rounded-xl">
                <svg className="h-5 w-5 text-mountain-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-inter font-semibold text-foreground text-sm">Địa chỉ</p>
                <p className="text-muted-foreground text-sm">Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHOUSection;