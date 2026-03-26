const HeroSection = () => {
  return (
    <section className="relative min-h-[56vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs tracking-[0.2em] uppercase font-inter mb-6">
          Hành trình Việt Nam
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight drop-shadow-md mb-5">
          Khi ánh nhìn chạm tới,
          <br />
          <span className="text-sunrise-yellow">trái tim bắt đầu hành động</span>
        </h1>

        <p className="text-sm md:text-lg text-white/90 font-inter leading-relaxed max-w-2xl mx-auto">
          Khám phá tinh hoa lịch sử, văn hóa và tri thức Việt Nam —
          nơi cảm hứng hôm nay trở thành tương lai ngày mai.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
