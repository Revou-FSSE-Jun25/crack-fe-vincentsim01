
const BannerBlog = () => {
  return (
<div className="relative w-full overflow-hidden group">
  {/* Image with enhanced overlay */}
  <div className="relative overflow-hidden">
    <img 
      src="/Cosplayers.png" 
      alt="Banner" 
      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" 
    />
    
    {/* Gradient overlays for depth and readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-red-900/40"></div>
  </div>

  {/* Enhanced content section */}
  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
    <div className="text-center space-y-6 animate-fade-in-up">
      {/* Decorative top element */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-400 to-pink-400 shadow-lg shadow-purple-500/50"></div>
        <svg className="w-8 h-8 text-pink-400 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
        </svg>
        <div className="h-px w-16 bg-gradient-to-l from-transparent via-pink-400 to-purple-400 shadow-lg shadow-pink-500/50"></div>
      </div>

      {/* Main heading with dramatic styling */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
        <span className="inline-block bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(236,72,153,0.9)] animate-text-glow">
          Blog
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] animate-fade-in" style={{ animationDelay: "0.3s" }}>
        Stories, Tips & Cosplay Inspiration
      </p>

      {/* Decorative bottom element with animated dots */}
      <div className="flex items-center justify-center gap-3 mt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50"></div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-500/70 animate-pulse-slow"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-500/70 animate-pulse-slow" style={{ animationDelay: "0.3s" }}></div>
          <div className="w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-500/70 animate-pulse-slow" style={{ animationDelay: "0.6s" }}></div>
        </div>
        <div className="h-1 w-20 bg-gradient-to-l from-transparent via-pink-400 to-purple-400 rounded-full shadow-lg shadow-pink-500/50"></div>
      </div>

      {/* Call to action hint */}
      <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <p className="text-white/80 text-sm md:text-base flex items-center justify-center gap-2">
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          Scroll to explore our latest articles
        </p>
      </div>
    </div>
  </div>

  {/* Floating decorative elements */}
  <div className="absolute top-16 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-float-slow shadow-lg shadow-purple-500/50"></div>
  <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-float-medium shadow-lg shadow-pink-500/50"></div>
  <div className="absolute bottom-24 left-1/4 w-5 h-5 bg-red-400 rounded-full opacity-60 animate-float-fast shadow-lg shadow-red-500/50"></div>
  <div className="absolute bottom-36 right-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-60 animate-float-medium shadow-lg shadow-purple-500/50"></div>
</div>
  )
}

export default BannerBlog