import React from 'react';
import Image from 'next/image';

const BestSelling = () => {
  return (
    <div className='text-center w-full mt-5'>
        <h2>BEST SELLING ITEMS</h2>
        <div className='flex items-center justify-center w-full my-10 gap-2'>
        <Image
        src="/hanbok2.png"
        alt="Best Selling Banner"
        width={0}
        height={0}
        sizes="30vw"
        className="border"
        unoptimized
        style={{ width: "30%", height: "600px" }}
        />
        <Image
        src="/kimono2.png"
        alt="Best Selling Banner"
        width={0}
        height={0}
        sizes="30vw"
        className="border"
        unoptimized
        style={{ width: "30%", height: "600px" }}
        />
        <Image
        src="/cheongsam2.png"
        alt="Best Selling Banner"
        width={0}
        height={0}
        sizes="30vw"
        className="border"
        unoptimized
        style={{ width: "30%", height: "600px" }}
        />

      </div>
    </div>
  )
}

export default BestSelling
