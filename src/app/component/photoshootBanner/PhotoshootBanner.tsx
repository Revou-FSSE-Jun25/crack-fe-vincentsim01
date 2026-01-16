"use client";

import React from 'react';
import { useState, useEffect } from "react";
import CheckoutPhotoShoot from '../checkoutPhotoShoot/page';


const PhotoshootBanner = () => {

    const images = [
        "/cosplaybanner.png",
        "/wedding.webp",
        "/banner5.jpg",
    ];

    const [index, setIndex] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false);

      useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);  
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
        }, []);
  return (
    <>
    <div className="relative w-full overflow-hidden group">
      {/* Image slideshow with overlay */}
      <div className="relative">
        <img
          src={images[index]}
          alt="slideshow image"
          className="w-full h-auto object-cover"
          style={{
            transition: "opacity 0.5s ease",
          }}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-red-900/40"></div>
      </div>

      {/* Enhanced text content with decorations */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pointer-events-none">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 border-2 border-purple-400 rounded-full animate-pulse-slow"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-400 to-pink-400"></div>
            <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 14.27l-4.77 2.51.91-5.32-3.87-3.77 5.34-.78L10 2z"/>
            </svg>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-pink-400 to-purple-400"></div>
            <div className="w-8 h-8 border-2 border-pink-400 rounded-full animate-pulse-slow"></div>
          </div>

          {/* Main heading with gradient and shadow */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.9)] animate-text-glow">
              Capture Your Magic
            </span>
          </h1>

          {/* Subtitle with enhanced styling */}
          <div className="space-y-2">
            <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Book A Photo Studio Session
            </p>
            <p className="text-lg md:text-xl text-pink-200 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Professional Photography • Premium Locations
            </p>
          </div>

          {/* Decorative bottom element */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50"></div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-500/70 animate-pulse-slow"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-500/70 animate-pulse-slow" style={{ animationDelay: "0.3s" }}></div>
              <div className="w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-500/70 animate-pulse-slow" style={{ animationDelay: "0.6s" }}></div>
            </div>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent via-pink-400 to-purple-400 rounded-full shadow-lg shadow-pink-500/50"></div>
          </div>

          {/* Call to action with pointer events */}
          <div className="mt-8 pointer-events-auto">
            <button 
              onClick={() => setShowCheckout(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 text-white font-bold text-lg rounded-full overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Book Your Session
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Slideshow indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index 
                ? 'w-12 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-pink-500/50' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          ></div>
        ))}
      </div>
    </div>

    {/* Checkout Modal */}
    {showCheckout && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in">
          {/* Close button */}
          <button
            onClick={() => setShowCheckout(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Checkout content */}
          <div className="p-6">
            <CheckoutPhotoShoot />
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default PhotoshootBanner
