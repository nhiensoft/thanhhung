import { useState, useEffect, useCallback } from 'react';
import { Progress } from "@/components/ui/progress";

interface PreloaderProps {
  onLoadComplete: () => void;
}

const LOADING_TEXTS = [
  "Đang tải tài nguyên...",
  "Đang chuẩn bị nội dung...", 
  "Đang khởi tạo các thành phần...",
  "Đang tối ưu hóa trải nghiệm...",
  "Sắp hoàn tất...",
  "Hoàn tất!"
];

const Preloader = ({ onLoadComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(LOADING_TEXTS[0]);
  const [isExiting, setIsExiting] = useState(false);

  const easeInOutCubic = useCallback((t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }, []);

  useEffect(() => {
    const duration = 2000; // Fixed 2s duration for consistency
    const startTime = performance.now();
    let animationId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(rawProgress);
      const displayProgress = easedProgress * 100;
      
      setProgress(displayProgress);
      
      const textIndex = Math.min(
        Math.floor(easedProgress * (LOADING_TEXTS.length - 1)),
        LOADING_TEXTS.length - 1
      );
      setLoadingText(LOADING_TEXTS[textIndex]);

      if (rawProgress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setLoadingText("Hoàn tất!");
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onLoadComplete, 800);
        }, 300);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [onLoadComplete, easeInOutCubic]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm transition-all duration-700 ease-out ${
      isExiting 
        ? 'opacity-0 transform scale-110' 
        : 'opacity-100 transform scale-100'
    }`}>
      {/* Background gradient với hiệu ứng tan rã */}
      <div className={`absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 transition-all duration-800 ease-out ${
        isExiting 
          ? 'opacity-0 transform translate-y-[-20px]' 
          : 'opacity-100 transform translate-y-0'
      }`} />
      
      {/* Overlay tan rã từ trên xuống */}
      <div className={`absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-transparent transition-all duration-1000 ease-out ${
        isExiting 
          ? 'opacity-0 transform translate-y-[-100%] scale-y-0' 
          : 'opacity-100 transform translate-y-0 scale-y-100'
      }`} style={{ transformOrigin: 'top' }} />
      
      <div className={`relative z-10 flex flex-col items-center space-y-8 px-4 transition-all duration-600 ease-out ${
        isExiting 
          ? 'opacity-0 transform translate-y-8 scale-95' 
          : 'opacity-100 transform translate-y-0 scale-100'
      }`}>
        {/* Logo or main visual element */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            {/* Animated circles */}
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            <div className="absolute inset-2 w-12 h-12 border-4 border-secondary/20 border-r-secondary rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>
          
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              HOU 💖 Việt Nam
            </h1>
          </div>
        </div>

        {/* Progress section */}
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground transition-all duration-300 ease-in-out">
                {loadingText}
              </span>
              <div className="relative">
                <span className="text-lg font-bold text-foreground transition-all duration-150 ease-out tabular-nums">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
            <div className="relative">
              <Progress 
                value={progress} 
                className="h-3 bg-secondary/30 border border-border/20 shadow-sm overflow-hidden" 
              />
              {/* Glow effect */}
              <div 
                className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full opacity-60 animate-pulse"
                style={{ 
                  width: `${progress}%`,
                  transition: 'width 0.1s ease-out'
                }}
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex space-x-2 opacity-60">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;