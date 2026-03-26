import { Heart, BookOpen, Users, Lightbulb, ArrowRight, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { houPrograms } from "@/data/houPrograms";
const HOUSection = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const [showConsultForm, setShowConsultForm] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    contact: ""
  });

  // Carousel state and setup
  const autoplayPlugin = Autoplay({
    delay: 10000,
    stopOnInteraction: false
  });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    dragFree: true
  }, [autoplayPlugin]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);
  const [autoScrollTimeout, setAutoScrollTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);
  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCenterSlideIndex(emblaApi.selectedScrollSnap());
  }, []);

  // Auto-center function after user stops interacting
  const handleUserInteraction = useCallback(() => {
    if (isDragging) return; // Don't auto-center while dragging

    if (autoScrollTimeout) {
      clearTimeout(autoScrollTimeout);
    }
    const timeout = setTimeout(() => {
      if (emblaApi && !isDragging) {
        const currentIndex = emblaApi.selectedScrollSnap();
        emblaApi.scrollTo(currentIndex);
      }
    }, 1500);
    setAutoScrollTimeout(timeout);
  }, [emblaApi, autoScrollTimeout, isDragging]);

  // Handle card click to scroll to that card
  const handleCardClick = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setCenterSlideIndex(index);
    }
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);

    // Handle drag events
    emblaApi.on('pointerDown', () => setIsDragging(true));
    emblaApi.on('pointerUp', () => {
      setIsDragging(false);
      handleUserInteraction();
    });
    return () => {
      if (autoScrollTimeout) {
        clearTimeout(autoScrollTimeout);
      }
    };
  }, [emblaApi, onInit, onSelect, handleUserInteraction, autoScrollTimeout]);

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = {
      fullName: "",
      contact: ""
    };

    // Validate fullName
    if (!formData.fullName.trim()) {
      errors.fullName = "Vui lòng nhập họ và tên";
    }

    // Validate contact (email or phone)
    const hasEmail = formData.email.trim();
    const hasPhone = formData.phone.trim();
    if (!hasEmail && !hasPhone) {
      errors.contact = "Vui lòng nhập ít nhất email hoặc số điện thoại";
    } else {
      if (hasEmail && !validateEmail(formData.email)) {
        errors.contact = "Định dạng email không hợp lệ";
      }
      if (hasPhone && !validatePhone(formData.phone)) {
        errors.contact = "Số điện thoại không hợp lệ (10-11 số)";
      }
    }
    setFormErrors(errors);
    if (!errors.fullName && !errors.contact) {
      // Form is valid - show success message or handle submission
      alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        notes: ""
      });
      setFormErrors({
        fullName: "",
        contact: ""
      });
      setShowConsultForm(false);
    }
  };
  const handleConsultClick = () => {
    // Always close programs first
    setShowPrograms(false);

    // Always show consultation form
    setShowConsultForm(true);

    // Wait for both close and open animations to complete before scrolling
    setTimeout(() => {
      const formElement = document.getElementById('consultation-form');
      if (formElement) {
        // Additional check to ensure element is fully rendered
        const checkAndScroll = () => {
          const elementRect = formElement.getBoundingClientRect();
          if (elementRect.height > 0) {
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            // Position title about 120px from top to be visible below menu
            const offsetTop = absoluteElementTop - 120;

            window.scrollTo({
              top: Math.max(0, offsetTop),
              behavior: 'smooth'
            });
          } else {
            // If not ready, try again after a short delay
            setTimeout(checkAndScroll, 50);
          }
        };
        checkAndScroll();
      }
    }, 600); // Increased delay to ensure animations complete
  };

  const handleProgramsClick = () => {
    // Always close form first  
    setShowConsultForm(false);

    // Always show programs
    setShowPrograms(true);

    // Wait for both close and open animations to complete before scrolling
    setTimeout(() => {
      const carouselElement = document.getElementById('programs-carousel');
      if (carouselElement) {
        // Additional check to ensure element is fully rendered
        const checkAndScroll = () => {
          const elementRect = carouselElement.getBoundingClientRect();
          if (elementRect.height > 0) {
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            // Position title about 120px from top to be visible below menu
            const offsetTop = absoluteElementTop - 120;

            window.scrollTo({
              top: Math.max(0, offsetTop),
              behavior: 'smooth'
            });
          } else {
            // If not ready, try again after a short delay
            setTimeout(checkAndScroll, 50);
          }
        };
        checkAndScroll();
      }
    }, 600); // Increased delay to ensure animations complete
  };
  const programs = houPrograms;
  const values = [{
    icon: BookOpen,
    title: "Giáo dục vì Việt Nam",
    description: "Tại HOU, chúng tôi không chỉ truyền tải kiến thức mà còn nuôi dưỡng tâm hồn Việt, trang bị cho bạn hành trang vững chắc để tự tin kiến tạo tương lai cho bản thân và cho quê hương."
  }, {
    icon: Users,
    title: "Cộng đồng và Kết nối",
    description: "Bạn sẽ được hòa mình vào một môi trường học tập đầy cảm hứng, nơi mỗi sinh viên đều là một 'đại sứ' của lòng yêu nước, cùng nhau lan tỏa những giá trị tốt đẹp ra cộng đồng."
  }, {
    icon: Lightbulb,
    title: "Đổi mới và Phát triển",
    description: "Chúng tôi tin rằng, mỗi thành tựu khoa học, mỗi ý tưởng sáng tạo từ HOU đều là viên gạch xây dựng nên một Việt Nam hiện đại, phồn vinh hơn."
  }];
  const callToActions = ["Hãy cùng HOU chắp cánh ước mơ, biến tình yêu quê hương thành hành động ý nghĩa!", "Khám phá các chương trình đào tạo đa dạng, phù hợp với mọi đam mê và định hướng tương lai của bạn.", "Tham gia cùng chúng tôi để cùng nhau cống hiến, góp phần làm rạng rỡ thêm vẻ đẹp bất tận của Việt Nam!"];
  return <section className="py-20 bg-gradient-to-br from-vietnam-red/8 via-background to-vietnam-green/8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-vietnam-red/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-vietnam-green/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-sunrise-yellow/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-vietnam-red/12 rounded-full mb-6">
            <Heart className="h-8 w-8 text-vietnam-red" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight text-foreground">
            <span className="text-vietnam-red">HOU</span> – Nơi Ươm Mầm{" "}
            <span className="text-vietnam-green text-vietnam-green">Khát Vọng Việt Nam</span>
            <br />
            <span className="text-2xl md:text-4xl mt-4 block">
              Cùng Bạn Kiến Tạo Tương Lai Rạng Rỡ! 💖
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-inter max-w-4xl mx-auto leading-relaxed">
            Tình yêu với non sông gấm vóc, với những giá trị văn hóa và lịch sử hào hùng, 
            chính là động lực mạnh mẽ nhất để{" "}
            <span className="text-vietnam-red font-semibold">Đại học Mở Hà Nội</span>{" "}
            không ngừng 'mở' ra những cơ hội vàng cho thế hệ trẻ.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
          const Icon = value.icon;
          return <Card key={index} className="group bg-card/90 backdrop-blur-sm border-border/60 shadow-card hover:shadow-heritage transition-all duration-300 animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-mountain-blue/10 rounded-xl mb-6 group-hover:bg-mountain-blue/20 transition-colors duration-300">
                    <Icon className="h-10 w-10 text-mountain-blue" />
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4 group-hover:text-mountain-blue transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-vietnam-red/10 via-heritage-cream/60 to-vietnam-green/10 rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-center text-foreground mb-8">
            Hãy Cùng Chúng Tôi Viết Tiếp Câu Chuyện Tình Yêu Việt Nam!
          </h3>
          
          <div className="space-y-6 mb-10">
            {callToActions.map((action, index) => <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="flex-shrink-0 w-2 h-2 bg-vietnam-red rounded-full mt-3"></div>
                <p className="text-lg font-inter text-foreground leading-relaxed">
                  {action}
                </p>
              </div>)}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-vietnam-red hover:bg-vietnam-red/90 text-primary-foreground border border-muted/30 font-inter font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Tìm hiểu thêm về HOU
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button variant="outline" size="lg" onClick={handleProgramsClick} className="border-vietnam-green text-vietnam-green hover:text-vietnam-red hover:border-vietnam-red hover:bg-background/70 font-inter font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Xem các ngành đào tạo
            </Button>
            
            <Button
            variant="secondary"
            size="lg"
            onClick={handleConsultClick}
            data-consult-trigger
            className="bg-vietnam-gold/20 text-foreground hover:bg-vietnam-gold/30 font-inter font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            
              Đăng ký tư vấn
            </Button>
          </div>
        </div>

        {/* Programs Gallery */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showPrograms ? 'max-h-screen opacity-100 mb-12' : 'max-h-0 opacity-0 mb-0'}`}>
          <div id="programs-carousel" className="animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-center text-foreground mb-12">Các Ngành Đào Tạo Của HOU</h3>
            
            <div className="relative overflow-hidden py-8">
              {/* Previous Button - Inside carousel */}
              <button onClick={() => {
              scrollPrev();
              handleUserInteraction();
            }} className="group absolute left-4 top-[40%] -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 backdrop-blur-sm border-2 border-yellow-400 hover:border-red-600" aria-label="Previous slide">
                <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors duration-300" />
              </button>

              {/* Next Button - Inside carousel */}
              <button onClick={() => {
              scrollNext();
              handleUserInteraction();
            }} className="group absolute right-4 top-[40%] -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 backdrop-blur-sm border-2 border-yellow-400 hover:border-red-600" aria-label="Next slide">
                <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors duration-300" />
              </button>
                <div className="embla__viewport h-[680px] select-none" ref={emblaRef} onMouseEnter={() => {
              if (autoplayPlugin && emblaApi) {
                autoplayPlugin.stop();
              }
            }} onMouseLeave={() => {
              if (autoplayPlugin && emblaApi) {
                autoplayPlugin.play();
              }
              if (!isDragging) {
                handleUserInteraction();
              }
            }} onTouchStart={() => setIsDragging(true)} onTouchEnd={handleUserInteraction} onDragStart={(e) => e.preventDefault()}>
                <div className="embla__container flex">
                  {programs.map((program, index) => <div key={program.id} className="embla__slide flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] pl-4 md:pl-6 select-none">
                      <Card className={`
                          group h-full transition-all duration-700 ease-in-out transform cursor-pointer
                          ${index === centerSlideIndex ? 'bg-gradient-to-br from-mist-white via-card to-primary/10 shadow-2xl shadow-primary/20 scale-105 ring-2 ring-primary/30 brightness-110' : 'bg-card/95 backdrop-blur-sm shadow-lg hover:shadow-xl scale-95 opacity-85 hover:opacity-100'}
                          border-0 rounded-2xl hover:scale-100 backdrop-blur-sm
                          animate-fade-in
                        `} onClick={() => handleCardClick(index)} style={{
                    background: index === centerSlideIndex ? 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #eff6ff 100%)' : undefined
                  }}>
                        <CardContent className="p-6 h-full flex flex-col select-none">
                          {/* Header */}
                          <div className="mb-6">
                            <h4 className={`text-2xl font-playfair font-bold mb-2 transition-all duration-500 ${index === centerSlideIndex ? 'text-transparent bg-gradient-to-r from-blue-900 via-slate-800 to-blue-900 bg-clip-text drop-shadow-sm' : 'text-vietnam-red group-hover:text-mountain-blue'}`}>
                              {program.name}
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className={`px-3 py-1 rounded-full text-sm font-inter font-medium transition-all duration-500 ${index === centerSlideIndex ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900 shadow-md' : 'bg-mountain-blue/10 text-mountain-blue'}`}>
                                Mã ngành: {program.code}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-sm font-inter font-medium transition-all duration-500 ${index === centerSlideIndex ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-900 shadow-md' : 'bg-vietnam-green/10 text-vietnam-green'}`}>
                                {program.type}
                              </span>
                            </div>
                            <p className={`font-inter text-sm transition-all duration-500 ${index === centerSlideIndex ? 'text-slate-700 font-medium' : 'text-muted-foreground'}`}>
                              Khoa: <span className={`font-semibold ${index === centerSlideIndex ? 'text-slate-900' : 'text-foreground'}`}>{program.faculty}</span>
                            </p>
                          </div>

                          {/* Description */}
                          <div className="mb-4 flex-1">
                            <p className={`font-inter leading-relaxed text-sm line-clamp-3 transition-all duration-500 ${index === centerSlideIndex ? 'text-slate-700' : 'text-muted-foreground'}`}>
                              {program.description}
                            </p>
                          </div>

                          {/* Job Opportunities */}
                          <div className="mb-4">
                            <h5 className={`font-inter font-semibold mb-2 text-sm transition-all duration-500 ${index === centerSlideIndex ? 'text-slate-900' : 'text-foreground'}`}>Cơ hội việc làm:</h5>
                            <p className={`font-inter text-sm leading-relaxed line-clamp-2 transition-all duration-500 ${index === centerSlideIndex ? 'text-slate-700' : 'text-muted-foreground'}`}>
                              {program.jobOpportunities}
                            </p>
                          </div>

                          {/* Achievements */}
                          <div className="mb-4">
                            <h5 className={`font-inter font-semibold mb-2 text-sm transition-all duration-500 ${index === centerSlideIndex ? 'text-slate-900' : 'text-foreground'}`}>Thành tích:</h5>
                            <p className={`font-inter text-sm leading-relaxed line-clamp-2 transition-all duration-500 ${index === centerSlideIndex ? 'text-slate-700' : 'text-muted-foreground'}`}>
                              {program.achievements}
                            </p>
                          </div>

                          {/* Additional Info */}
                          <div className="mb-6">
                            <h5 className={`font-inter font-semibold mb-2 text-sm transition-all duration-500 ${index === centerSlideIndex ? 'text-slate-900' : 'text-foreground'}`}>Thông tin khác:</h5>
                            <p className={`font-inter text-sm leading-relaxed line-clamp-2 transition-all duration-500 ${index === centerSlideIndex ? 'text-slate-700' : 'text-muted-foreground'}`}>
                              {program.additionalInfo}
                            </p>
                          </div>

                          {/* CTA Button */}
                          <Button asChild className={`w-full font-inter font-semibold py-3 rounded-xl transition-all duration-500 ${index === centerSlideIndex ? 'bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 hover:from-blue-800 hover:via-indigo-700 hover:to-blue-800 text-white shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-300/60 ring-2 ring-blue-200/30' : 'bg-gradient-to-r from-vietnam-red to-vietnam-green hover:from-vietnam-red/90 hover:to-vietnam-green/90 text-white shadow-lg hover:shadow-xl'}`}>
                            <a href={program.id === 1 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT471/" : program.id === 2 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT472/" : program.id === 3 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT473/" : program.id === 4 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT475/" : program.id === 5 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT476/" : program.id === 6 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT477/" : program.id === 7 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT478/" : program.id === 8 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT479/" : program.id === 9 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT480/" : program.id === 10 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT481/" : program.id === 11 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT482/" : program.id === 12 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT483/" : program.id === 13 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT484/" : program.id === 14 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT485/" : program.id === 15 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT486/" : program.id === 16 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT487/" : program.id === 17 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT488/" : program.id === 18 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT489/" : program.id === 19 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT490/" : program.id === 20 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT491/" : program.id === 21 ? "https://tuyensinh.hou.edu.vn/tintucchitiet/BT492/" : "https://tuyensinh.hou.edu.vn/tintucchitiet/BT484/"} target="_blank" rel="noopener noreferrer">
                              Tìm hiểu thêm
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>)}
                </div>
                </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({
                length: scrollSnaps.length
              }).map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-200/50 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} onClick={() => scrollTo(index)} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Form */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showConsultForm ? 'max-h-none opacity-100 mb-12 py-8' : 'max-h-0 opacity-0 mb-0'}`}>
          <div id="consultation-form" className="animate-fade-in px-4">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-center text-foreground mb-12">
              Đăng Ký Tư Vấn Miễn Phí
            </h3>
            
            <div className="max-w-2xl mx-auto">
              <Card className="bg-card/95 backdrop-blur-sm border-border/60 shadow-card">
                <CardContent className="p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground font-inter font-semibold">
                        Họ và tên <span className="text-vietnam-red">*</span>
                      </Label>
                      <Input id="fullName" value={formData.fullName} onChange={(e) => setFormData({
                      ...formData,
                      fullName: e.target.value
                    })} placeholder="Nhập họ và tên của bạn" className="border-muted/30 focus:border-mountain-blue focus:ring-mountain-blue/20 rounded-xl transition-all duration-300" />
                      {formErrors.fullName && <p className="text-vietnam-red text-sm font-inter">{formErrors.fullName}</p>}
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-inter font-semibold">
                          Email
                        </Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({
                        ...formData,
                        email: e.target.value
                      })} placeholder="example@email.com" className="border-muted/30 focus:border-mountain-blue focus:ring-mountain-blue/20 rounded-xl transition-all duration-300" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-inter font-semibold">
                          Số điện thoại
                        </Label>
                        <Input id="phone" value={formData.phone} onChange={(e) => setFormData({
                        ...formData,
                        phone: e.target.value
                      })} placeholder="0123456789" className="border-muted/30 focus:border-mountain-blue focus:ring-mountain-blue/20 rounded-xl transition-all duration-300" />
                      </div>
                    </div>
                    
                    {formErrors.contact && <p className="text-vietnam-red text-sm font-inter">{formErrors.contact}</p>}
                    
                    <p className="text-muted-foreground text-sm font-inter">
                      <span className="text-vietnam-red">*</span> Vui lòng nhập ít nhất email hoặc số điện thoại
                    </p>

                    {/* Notes */}
                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-foreground font-inter font-semibold">
                        Ghi chú thêm (tùy chọn)
                      </Label>
                      <Textarea id="notes" value={formData.notes} onChange={(e) => setFormData({
                      ...formData,
                      notes: e.target.value
                    })} placeholder="Chia sẻ thêm về mong muốn, câu hỏi của bạn..." rows={4} className="border-muted/30 focus:border-mountain-blue focus:ring-mountain-blue/20 rounded-xl transition-all duration-300 resize-none" />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-gradient-to-r from-vietnam-red to-vietnam-green hover:from-vietnam-red/90 hover:to-vietnam-green/90 text-white font-inter font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Gửi thông tin
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border/60 shadow-card">
          <h4 className="text-2xl font-playfair font-bold text-center text-foreground mb-8">
            Kết nối với chúng tôi ngay hôm nay!
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-mountain-blue/10 rounded-xl">
                <Phone className="h-6 w-6 text-mountain-blue" />
              </div>
              <div>
                <p className="font-inter font-semibold text-foreground">Hotline</p>
                <p className="text-muted-foreground">1900 2868</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-mountain-blue/10 rounded-xl">
                <Mail className="h-6 w-6 text-mountain-blue" />
              </div>
              <div>
                <p className="font-inter font-semibold text-foreground">Email</p>
                <p className="text-muted-foreground">info@hou.edu.vn</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-mountain-blue/10 rounded-xl">
                <MapPin className="h-6 w-6 text-mountain-blue" />
              </div>
              <div>
                <p className="font-inter font-semibold text-foreground">Địa chỉ</p>
                <p className="text-muted-foreground">Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HOUSection;