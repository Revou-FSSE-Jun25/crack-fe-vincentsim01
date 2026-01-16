
const BannerCosplayNight = () => {
  return (
<div className="relative w-full overflow-hidden group">
  {/* Image with zoom effect on hover */}
  <div className="relative overflow-hidden">
    <img 
      src="/cosplaynight.png" 
      alt="Banner" 
      className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110" 
    />
    
    {/* Gradient overlays for depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-red-900/30"></div>
  </div>

  {/* Enhanced title with animations and shadows */}
  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
    <div className="text-center space-y-4 animate-fade-in-up">
      {/* Main title with multiple text effects */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
        <span className="inline-block bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.8)] animate-text-glow">
          Costume
        </span>
        <br />
        <span className="inline-block bg-gradient-to-r from-red-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] animate-text-glow" style={{ animationDelay: "0.3s" }}>
          Collections
        </span>
      </h1>
      
      {/* Decorative elements */}
      <div className="flex items-center justify-center gap-4 mt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-pink-500/70 animate-pulse-slow"></div>
        <div className="h-1 w-16 bg-gradient-to-l from-transparent via-pink-400 to-purple-400 rounded-full shadow-lg shadow-pink-500/50"></div>
      </div>
      
      {/* Subtitle */}
      <p className="text-white text-xl md:text-2xl font-semibold drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] animate-fade-in" style={{ animationDelay: "0.7s" }}>
        Explore Our Exclusive Range
      </p>
    </div>
  </div>
  
  {/* Floating particles effect */}
  <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-float-slow shadow-lg shadow-purple-500/50"></div>
  <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-float-medium shadow-lg shadow-pink-500/50"></div>
  <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-red-400 rounded-full opacity-60 animate-float-fast shadow-lg shadow-red-500/50"></div>
  <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-60 animate-float-medium shadow-lg shadow-purple-500/50"></div>
</div>
  )
}

export default BannerCosplayNight