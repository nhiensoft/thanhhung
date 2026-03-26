import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Menu, X, MapPin, Clock, Utensils, Hammer, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

const Navigation = ({
  onSectionChange,
  activeSection
}: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    const headerHeight = window.innerHeight * 0.7;
    const scrollY = window.scrollY;
    setIsSticky(scrollY > headerHeight - 100);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => setIsMouseInside(true);
    const handleMouseLeave = () => setIsMouseInside(false);

    const nav = navRef.current;
    if (nav) {
      nav.addEventListener('mousemove', handleMouseMove);
      nav.addEventListener('mouseenter', handleMouseEnter);
      nav.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (nav) {
        nav.removeEventListener('mousemove', handleMouseMove);
        nav.removeEventListener('mouseenter', handleMouseEnter);
        nav.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const navigationItems = useMemo(() => [{
    id: "history",
    title: "Lịch sử Phát triển",
    icon: Clock,
    items: ["Thời kỳ Hùng Vương - Âu Lạc", "Khởi nghĩa Hai Bà Trưng", "Các triều đại phong kiến", "Thời kỳ Pháp thuộc", "Việt Nam hiện đại"]
  }, {
    id: "heritage",
    title: "Vẻ đẹp Phong cảnh",
    icon: MapPin,
    items: ["Hoàng thành Thăng Long", "Văn Miếu - Quốc Tử Giám", "Chùa Một Cột", "Nhà tù Hỏa Lò", "Cầu Long Biên", "Lăng Chủ tịch Hồ Chí Minh"]
  }, {
    id: "villages",
    title: "Làng nghề Truyền thống",
    icon: Hammer,
    items: ["Làng gốm Bát Tràng", "Làng lụa Vạn Phúc", "Làng bạc Định Công", "Làng tranh Đông Hồ", "Làng đúc đồng Ngũ Xã", "Làng mây tre Phú Vinh", "Làng thêu Quất Động", "Làng bánh phu thê", "Làng hương Quang Phú Cầu", "Làng giấy dó Yên Thái", "Làng tơ lụa Hà Đông", "Làng chế biến thực phẩm"]
  }, {
    id: "cuisine",
    title: "Ẩm thực Đặc sản",
    icon: Utensils,
    items: ["Phở Hà Nội", "Bún chả", "Cốm làng Vòng", "Bánh cuốn Thanh Trì", "Cà phê trứng", "Bánh mì Việt Nam"]
  }, {
    id: "hou",
    title: "Giáo dục & HOU",
    icon: Heart,
    items: ["Giáo dục vì Việt Nam", "Cộng đồng và Kết nối", "Đổi mới và Phát triển", "Cơ hội nghề nghiệp", "Môi trường học tập", "Liên hệ tư vấn"]
  }], []);

  const handleSectionClick = useCallback((sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  }, [onSectionChange]);

  return (
    <nav ref={navRef} className={`
      ${isSticky ? 'fixed top-0 left-0 right-0' : 'relative'} 
      z-50 backdrop-blur-sm border border-white/5 shadow-lg rounded-2xl
      transition-all duration-500 ease-out mx-4 mt-4 group overflow-hidden
      ${isSticky ? 'bg-black/70 animate-fade-in border-white/10' : 'bg-primary-foreground/5 hover:bg-primary-foreground/10'}
      hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/20
    `}>
      {/* Mouse cursor smoke effect */}
      {isMouseInside && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: 200,
            height: 200,
            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
            filter: 'blur(20px)',
            zIndex: 0,
          }}
        />
      )}
      {isMouseInside && (
        <div
          className="absolute pointer-events-none transition-opacity duration-500"
          style={{
            left: mousePosition.x - 60,
            top: mousePosition.y - 60,
            width: 120,
            height: 120,
            background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, transparent 70%)',
            filter: 'blur(12px)',
            zIndex: 0,
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex justify-center items-center h-16">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
            {navigationItems.map(item => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`
                    relative flex items-center space-x-2 px-4 py-3 font-inter font-medium
                    transition-all duration-300 ${isSticky ? 'text-white' : 'text-primary-foreground'} whitespace-nowrap
                    [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]
                    ${isActive 
                      ? 'scale-105 [text-shadow:_0_0_8px_#00ffea,_1px_1px_2px_rgb(0_0_0_/_100%)]' 
                      : 'hover:text-yellow-300 hover:scale-105 hover:[text-shadow:_0_0_8px_#f97316,_0_0_16px_#fbbf24,_1px_1px_2px_rgb(0_0_0_/_100%)]'
                    }
                  `}
                  style={isActive ? { color: '#00ffea' } : {}}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm lg:text-base">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-xl backdrop-blur-sm ${isSticky ? 'text-white/90 hover:bg-white/30' : 'text-primary-foreground/90 hover:bg-primary-foreground/30'}`}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-in">
            <div className="space-y-2">
              {navigationItems.map(item => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSectionClick(item.id)}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 font-inter font-medium text-left
                      transition-all duration-300 ${isSticky ? 'text-white' : 'text-primary-foreground'}
                      [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]
                      ${isActive 
                        ? 'scale-105 [text-shadow:_0_0_8px_#00ffea,_1px_1px_2px_rgb(0_0_0_/_100%)]' 
                        : 'hover:text-yellow-300 hover:scale-105 hover:[text-shadow:_0_0_8px_#f97316,_0_0_16px_#fbbf24,_1px_1px_2px_rgb(0_0_0_/_100%)]'
                      }
                    `}
                    style={isActive ? { color: '#00ffea' } : {}}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
