const HeroSection = () => {
  return <section className="relative min-h-[45vh] flex items-start justify-center overflow-hidden pt-20">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Main Title - Two parts horizontally centered */}
          <div className="animate-fade-in animation-delay-200">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-semibold text-primary-foreground drop-shadow-lg">
              Khi ánh nhìn chạm tới – Khi trái tim rung động
            </h1>
          </div>
          
          {/* Subtitle - Emphasized with glow */}
          <div className="animate-fade-in animation-delay-400">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary-foreground drop-shadow-2xl">
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent filter drop-shadow-lg">Là lúc bạn nên bắt đầu hành động</span>
            </h2>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;