const MobileHeroSection = () => {
  return <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-sm mx-auto">
        <div className="space-y-6">
          {/* Main Title */}
          <div className="animate-fade-in animation-delay-200">
            <h1 className="text-lg font-playfair font-semibold text-primary-foreground drop-shadow-lg leading-relaxed">
              Khi ánh nhìn chạm tới<br />
              Khi trái tim rung động
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="animate-fade-in animation-delay-400">
            <h2 className="text-xl font-playfair font-bold text-primary-foreground drop-shadow-2xl leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent filter drop-shadow-lg">
                Là lúc bạn nên bắt đầu hành động
              </span>
            </h2>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default MobileHeroSection;