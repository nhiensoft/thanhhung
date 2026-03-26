const heroImage = "/lovable-uploads/260bd0b1-39a9-4e3b-a68e-1e3129863f14.png";
const MobileHeader = () => {
  return <header className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 py-8">
        {/* Website Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-playfair font-bold mb-4 text-primary-foreground">
            Nhìn về Việt Nam
          </h1>
          <div className="text-sm font-inter mb-4 text-mist-white/90">
            <span className="block mb-2">Lịch sử • Vẻ đẹp • Truyền thống • Ẩm thực</span>
          </div>
          
          <div className="border-t border-white/20 pt-4 mt-6">
            <h2 className="text-xl font-playfair font-semibold mb-2 text-sunrise-yellow">
              Đại Học Mở Hà Nội
            </h2>
            <p className="text-sm text-mist-white/80 mb-3">
              Khoa Kinh Tế - Nơi Kết Nối Tương Lai
            </p>
            
          </div>
        </div>
      </div>
    </header>;
};
export default MobileHeader;