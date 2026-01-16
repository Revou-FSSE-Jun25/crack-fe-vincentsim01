
const PrivacyBanner = () => {
  return (
<div className="relative w-full overflow-hidden group">
  {/* Image with zoom effect on hover */}
  <div className="relative overflow-hidden">
    <img 
      src="/bannerprivacy.png" 
      alt="BannerPrivacy" 
      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" 
    />
    
    {/* Gradient overlays for depth and readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-red-900/30"></div>
  </div>

  {/* Enhanced content section */}
  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
    <div className="text-center space-y-6 animate-fade-in-up max-w-4xl">
      {/* Decorative top element */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-400 to-pink-400 shadow-lg shadow-purple-500/50"></div>
        <svg className="w-8 h-8 text-pink-400 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
        </svg>
        <div className="h-px w-20 bg-gradient-to-l from-transparent via-pink-400 to-purple-400 shadow-lg shadow-pink-500/50"></div>
      </div>

      {/* Main heading with gradient and styling */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
        <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.9)] animate-text-glow">
          Unik Loh!
        </span>
        <span className="block bg-gradient-to-r from-red-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] animate-text-glow mt-2" style={{ animationDelay: "0.3s" }}>
          Privacy Policy
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-white font-semibold drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] animate-fade-in" style={{ animationDelay: "0.5s" }}>
        Find answers to our privacy policy
      </p>

      {/* Decorative bottom element with animated dots */}
      <div className="flex items-center justify-center gap-3 mt-6 animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50"></div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-500/70 animate-pulse-slow"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-500/70 animate-pulse-slow" style={{ animationDelay: "0.3s" }}></div>
          <div className="w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-500/70 animate-pulse-slow" style={{ animationDelay: "0.6s" }}></div>
        </div>
        <div className="h-1 w-16 bg-gradient-to-l from-transparent via-pink-400 to-purple-400 rounded-full shadow-lg shadow-pink-500/50"></div>
      </div>

      {/* Info badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.9s" }}>
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-white text-sm font-medium">Quick Answers</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
          </svg>
          <span className="text-white text-sm font-medium">Helpful Tips</span>
        </div>
      </div>
    </div>
  </div>

  {/* Floating decorative elements */}
  <div className="absolute top-20 left-12 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-float-slow shadow-lg shadow-purple-500/50"></div>
  <div className="absolute top-40 right-16 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-float-medium shadow-lg shadow-pink-500/50"></div>
  <div className="absolute bottom-28 left-1/4 w-5 h-5 bg-red-400 rounded-full opacity-60 animate-float-fast shadow-lg shadow-red-500/50"></div>
  <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-60 animate-float-medium shadow-lg shadow-purple-500/50"></div>
</div>
  )
}

export default PrivacyBanner