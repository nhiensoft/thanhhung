import { useState, useEffect, useCallback, useMemo } from "react";
import { Menu, X, MapPin, Clock, Utensils, Hammer, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

const Navigation = ({ onSectionChange, activeSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    const headerHeight = window.innerHeight * 0.7;
    const scrollY = window.scrollY;
    setIsSticky(scrollY > headerHeight - 120);
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

    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  const navigationItems = useMemo(
    () => [
      {
        id: "history",
        title: "Lịch sử Phát triển",
        icon: Clock,
      },
      {
        id: "heritage",
        title: "Vẻ đẹp Phong cảnh",
        icon: MapPin,
      },
      {
        id: "villages",
        title: "Làng nghề Truyền thống",
        icon: Hammer,
      },
      {
        id: "cuisine",
        title: "Ẩm thực Đặc sản",
        icon: Utensils,
      },
      {
        id: "hou",
        title: "Giáo dục & HOU",
        icon: Heart,
      },
    ],
    []
  );

  const handleSectionClick = useCallback(
    (sectionId: string) => {
      onSectionChange(sectionId);
      setIsMobileMenuOpen(false);
    },
    [onSectionChange]
  );

  return (
    <nav
      className={`
      ${isSticky ? "fixed top-4 left-4 right-4" : "relative"}
      z-50 rounded-2xl border shadow-lg backdrop-blur-xl transition-all duration-300
      ${
        isSticky
          ? "bg-card/95 border-border/60 shadow-card"
          : "bg-card/88 border-border/40"
      }
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`
                    relative flex items-center gap-2 px-3 lg:px-4 py-2 rounded-xl
                    text-sm font-inter font-medium transition-all duration-200
                    border
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-transparent text-foreground border-transparent hover:border-border hover:bg-secondary/70"
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{item.title}</span>
                </button>
              );
            })}
          </div>

          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl hover:bg-secondary"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSectionClick(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl border
                      text-left font-inter text-sm transition-all duration-200
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card text-foreground border-border hover:bg-secondary"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4" />
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
