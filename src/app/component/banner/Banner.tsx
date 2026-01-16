import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Image with overlay gradient */}
      <div className="relative">
        <img 
          src="/group cosplayer 3.jpg" 
          alt="Banner" 
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>
      
      {/* Text content with enhanced styling */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 text-center">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-red-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse-slow">
              Escape The Mundane
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-relaxed">
            Enter the World of Your Imagination
          </p>
          
          {/* Brand name with special styling */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
            <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-[0_4px_12px_rgba(147,51,234,0.8)] tracking-wider">
              with <span className="text-purple-300 italic">Unik Loh!</span>
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
          
          {/* Call to action button */}
          <div className="mt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 text-white font-bold text-lg rounded-full overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50">
              <span className="relative z-10">Explore Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
