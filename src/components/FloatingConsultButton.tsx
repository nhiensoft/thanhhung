import { useState, useRef } from 'react';
import { UserPlus } from 'lucide-react';

interface FloatingConsultButtonProps {
  onConsultClick: () => void;
  isVisible?: boolean;
  isChatOpen?: boolean;
}

const FloatingConsultButton = ({ onConsultClick, isVisible = true, isChatOpen = false }: FloatingConsultButtonProps) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClick = () => {
    if (isScrolling) return; // Prevent clicks during scroll

    setIsScrolling(true);
    
    // Call the consultation handler immediately
    onConsultClick();
    
    // Re-enable button after short delay
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-700 ease-out ${
      isVisible && !isChatOpen
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
    }`}>
      <button
        onClick={handleClick}
        disabled={isScrolling}
        className={`
          group relative w-16 h-16 
          bg-gradient-to-r from-mountain-blue to-mountain-purple 
          text-white rounded-full shadow-lg hover:shadow-xl 
          flex items-center justify-center
          transition-all duration-300 ease-out
          hover:scale-110 hover:rotate-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isScrolling ? 'scale-95' : 'scale-100'}
        `}
        style={{
          animation: 'gentle-pulse 3s ease-in-out infinite, gentle-shake 4s ease-in-out infinite'
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sunrise-yellow to-sunset-orange opacity-30 animate-ping" />
        
        {/* Main icon */}
        <UserPlus 
          size={24} 
          className="relative z-10 transition-transform duration-300 group-hover:scale-110" 
        />
        
        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-110 transition-transform duration-500 ease-out" />
      </button>
      
      {/* Notification bubble */}
      {showNotification && (
        <div className="absolute bottom-full left-0 mb-3 group-hover:opacity-0 transition-opacity duration-300">
          <div 
            className="relative bg-gray-900 text-white px-3 py-2 rounded-2xl shadow-xl transform animate-pulse min-w-max cursor-pointer"
            onMouseEnter={() => setShowNotification(false)}
          >
            <div className="text-xs font-bold whitespace-nowrap flex items-center gap-1">
              ✨ Đăng ký tư vấn ngay!!! ✨
            </div>
            {/* Arrow pointing down to button */}
            <div className="absolute top-full left-6 w-0 h-0 border-l-3 border-r-3 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Đăng ký tư vấn
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>

    </div>
  );
};

export default FloatingConsultButton;