import React from 'react'
import BusinessBanner from '../component/banner/BusinessBanner';

const page = () => {
  return (
   
        <div className='w-full h-auto bg-gradient-to-r from-purple-600 to-red-600 py-20 flex flex-col items-center justify-center gap-6 px-4 text-center'>
            <BusinessBanner></BusinessBanner>
            <h1 className='text-4xl'>Open Franchise or Distributor</h1>
            <div>We are expanding and need your help to spread our wings and helped more people escape mundaness and have experience that is totally Unik Loh!</div>
            <div>Contact Us at opportunities@unikloh.com or call 0812 1111 2222</div>
        </div>
  )
}

export default page
