const MobileHeroSection = () => {
  return (
    <section className="relative min-h-[52vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-4 max-w-sm mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] tracking-[0.16em] uppercase font-inter mb-4">
          Việt Nam & HOU
        </div>

        <h1 className="text-2xl font-playfair font-bold text-white leading-tight mb-3">
          Khi ánh nhìn chạm tới,
          <br />
          <span className="text-sunrise-yellow">trái tim rung động</span>
        </h1>

        <p className="text-sm text-white/90 font-inter leading-relaxed">
          Khám phá vẻ đẹp Việt Nam để bắt đầu hành trình học tập và cống hiến.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default MobileHeroSection;
