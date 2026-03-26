import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { houPrograms } from "@/data/houPrograms";

export const MobileHOUCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const programs = houPrograms;
  const totalSlides = programs.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisiblePrograms = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalSlides) % totalSlides;
      visible.push({ program: programs[index], originalIndex: index, position: i });
    }
    return visible;
  };

  const getProgramUrl = (programId: number) => {
    const baseUrl = "https://tuyensinh.hou.edu.vn/tintucchitiet/";
    const urlMap: { [key: number]: string } = {
      1: "BT471/", 2: "BT472/", 3: "BT473/", 4: "BT475/", 5: "BT476/",
      6: "BT477/", 7: "BT478/", 8: "BT479/", 9: "BT480/", 10: "BT481/",
      11: "BT482/", 12: "BT483/", 13: "BT484/", 14: "BT485/", 15: "BT486/",
      16: "BT487/", 17: "BT488/", 18: "BT489/", 19: "BT490/", 20: "BT491/",
      21: "BT492/"
    };
    return baseUrl + (urlMap[programId] || "BT484/");
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-2xl md:text-3xl font-playfair font-bold text-center text-foreground mb-8">
        Các Ngành Đào Tạo Của HOU
      </h3>
      
      <div className="relative px-4 py-4">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-[45%] md:top-1/2 md:-left-14 -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2.5 transition-all duration-300 backdrop-blur-sm border border-black/50 md:border-gray-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-2 top-[45%] md:top-1/2 md:-right-14 -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2.5 transition-all duration-300 backdrop-blur-sm border border-black/50 md:border-gray-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>

        {/* Carousel */}
        <div className="overflow-visible px-2 py-6">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {programs.map((program, index) => (
              <div key={program.id} className="w-full flex-shrink-0 px-2">
                <Card className={`
                  group h-full transition-all duration-300 transform
                  ${index === currentIndex 
                    ? 'bg-gradient-to-br from-mist-white via-card to-primary/10 shadow-xl scale-105 ring-2 ring-primary/30' 
                    : 'bg-card/95 shadow-lg scale-95 opacity-90'
                  }
                  border-0 rounded-xl hover:scale-100 hover:opacity-100
                `}>
                  <CardContent className="p-4 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-4">
                      <h4 className={`text-lg font-playfair font-bold mb-2 transition-colors duration-300 ${
                        index === currentIndex ? 'text-blue-900' : 'text-vietnam-red'
                      }`}>
                        {program.name}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-inter font-medium ${
                          index === currentIndex 
                            ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900' 
                            : 'bg-mountain-blue/10 text-mountain-blue'
                        }`}>
                          Mã ngành: {program.code}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-inter font-medium ${
                          index === currentIndex 
                            ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-900' 
                            : 'bg-vietnam-green/10 text-vietnam-green'
                        }`}>
                          {program.type}
                        </span>
                      </div>
                      <p className={`font-inter text-xs ${
                        index === currentIndex ? 'text-slate-700' : 'text-muted-foreground'
                      }`}>
                        Khoa: <span className="font-semibold">{program.faculty}</span>
                      </p>
                    </div>

                     {/* Description */}
                    <div className="mb-4 flex-1">
                      <p className={`font-inter leading-relaxed text-sm line-clamp-3 ${
                        index === currentIndex ? 'text-slate-700' : 'text-muted-foreground'
                      }`}>
                        {program.description}
                      </p>
                    </div>

                    {/* Job Opportunities */}
                    <div className="mb-4">
                      <h5 className={`font-inter font-semibold mb-2 text-sm ${
                        index === currentIndex ? 'text-slate-900' : 'text-foreground'
                      }`}>
                        Cơ hội việc làm:
                      </h5>
                      <p className={`font-inter text-sm leading-relaxed line-clamp-3 ${
                        index === currentIndex ? 'text-slate-700' : 'text-muted-foreground'
                      }`}>
                        {program.jobOpportunities}
                      </p>
                    </div>

                    {/* Duration & Requirements */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-3 text-xs">
                        <div className={`flex items-center gap-1 ${
                          index === currentIndex ? 'text-slate-600' : 'text-muted-foreground'
                        }`}>
                          <span className="font-semibold">Thời gian:</span>
                          <span>4 năm</span>
                        </div>
                        <div className={`flex items-center gap-1 ${
                          index === currentIndex ? 'text-slate-600' : 'text-muted-foreground'
                        }`}>
                          <span className="font-semibold">Tốt nghiệp:</span>
                          <span>Cử nhân</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      asChild 
                      className={`w-full font-inter font-semibold py-2 rounded-lg text-xs transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white shadow-lg' 
                          : 'bg-gradient-to-r from-vietnam-red to-vietnam-green hover:from-vietnam-red/90 hover:to-vietnam-green/90 text-white shadow-md'
                      }`}
                    >
                      <a 
                        href={getProgramUrl(program.id)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Tìm hiểu thêm
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {programs.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};