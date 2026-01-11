import React from 'react';
import Image from 'next/image';

const BestSelling = () => {
 return (
  <div
    className="text-center w-full mt-5 p-10"
    style={{
      background: "var(--background)",
      color: "var(--foreground)",
    }}
  >
    {/* Title */}
    <h2 className="text-3xl font-bold tracking-wide mb-8">
      BEST SELLING ITEMS
    </h2>

    {/* Images Layout */}
    <div className="flex flex-wrap items-center justify-center gap-6">
      {[ 
        "/hanbok2.png", 
        "/kimono2.png", 
        "/cheongsam2.png" 
      ].map((src, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-lg border transition-transform hover:scale-105 hover:shadow-xl"
          style={{ width: "28%", minWidth: "260px" }}
        >
          <Image
            src={src}
            alt="Best Selling Banner"
            width={0}
            height={0}
            sizes="30vw"
            unoptimized
            className="w-full h-[450px] object-cover"
          />
        </div>
      ))}
    </div>
  </div>
);
}

export default BestSelling
