"use client";

import React from 'react';
import { useState, useEffect } from "react";


const PhotoshootBanner = () => {

    const images = [
        "/cosplaybanner.png",
        "/wedding.webp",
        "/banner5.jpg",
    ];

    const [index, setIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);  
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
        }, []);
  return (
    <div>
      <img
        src={images[index]}
        alt="slideshow image"
        style={{
          width: "100%",
          height: "auto",
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  )
}

export default PhotoshootBanner
