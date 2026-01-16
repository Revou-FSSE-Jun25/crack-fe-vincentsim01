
"use client";

const BannerContact = () => {
  return (
<div className="relative w-full overflow-hidden group">
  {/* Image with zoom effect on hover */}
  <div className="relative overflow-hidden">
    <img 
      src="/banner4.jpg" 
      alt="Banner" 
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
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
        <div className="h-px w-20 bg-gradient-to-l from-transparent via-pink-400 to-purple-400 shadow-lg shadow-pink-500/50"></div>
      </div>

      {/* Main heading with gradient and dramatic styling */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
        <span className="inline-block bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(236,72,153,0.9)] animate-text-glow">
          Contact Us
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] animate-fade-in" style={{ animationDelay: "0.3s" }}>
        We'd Love to Hear From You
      </p>

      {/* Decorative bottom element with animated dots */}
      <div className="flex items-center justify-center gap-3 mt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50"></div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-500/70 animate-pulse-slow"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-500/70 animate-pulse-slow" style={{ animationDelay: "0.3s" }}></div>
          <div className="w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-500/70 animate-pulse-slow" style={{ animationDelay: "0.6s" }}></div>
        </div>
        <div className="h-1 w-16 bg-gradient-to-l from-transparent via-pink-400 to-purple-400 rounded-full shadow-lg shadow-pink-500/50"></div>
      </div>

      {/* Contact methods badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <div className="group/badge bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-300">
          <svg className="w-5 h-5 text-blue-400 group-hover/badge:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <span className="text-white text-sm font-medium">Email</span>
        </div>
        <div className="group/badge bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-300">
          <svg className="w-5 h-5 text-green-400 group-hover/badge:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <span className="text-white text-sm font-medium">Phone</span>
        </div>
        <div className="group/badge bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-300">
          <svg className="w-5 h-5 text-red-400 group-hover/badge:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          <span className="text-white text-sm font-medium">Visit</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
        <p className="text-white/80 text-sm md:text-base flex items-center justify-center gap-2">
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          Get in touch with us
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

export default BannerContact