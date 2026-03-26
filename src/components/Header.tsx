const heroImage = "/lovable-uploads/260bd0b1-39a9-4e3b-a68e-1e3129863f14.png";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
interface HeaderProps {
  onSearch: (query: string) => void;
  onSectionChange: (section: string) => void;
  activeSection: string;
}
const Header = ({
  onSearch,
  onSectionChange,
  activeSection
}: HeaderProps) => {
  return <header className="relative min-h-[70vh] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        
        {/* Website Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-primary-foreground">
            Nhìn về Việt Nam
          </h1>
          <div className="text-xl md:text-2xl font-inter mb-4 text-mist-white/90">
            <span className="block mb-2">Khám phá Lịch sử • Vẻ đẹp • Truyền thống • Ẩm thực của Việt Nam </span>
          </div>
          <div className="border-t border-white/20 pt-4 mt-6">
            <h2 className="text-2xl md:text-4xl font-playfair font-semibold mb-3 text-sunrise-yellow">
              Đại Học Mở Hà Nội
            </h2>
            <p className="text-lg md:text-xl text-mist-white/80 mb-3">
              Khoa Kinh Tế - Nơi Kết Nối Tương Lai
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base text-sunrise-yellow/90">
              <span>Mở Cơ hội</span> • <span>Mở Trái tim</span> • <span>Mở Trí tuệ</span> • <span>Mở Tầm nhìn</span> • <span>Mở Tương lai</span>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Navigation */}
      <div className="relative z-20 px-4">
        <Navigation onSectionChange={onSectionChange} activeSection={activeSection} />
      </div>
    </header>;
};
export default Header;