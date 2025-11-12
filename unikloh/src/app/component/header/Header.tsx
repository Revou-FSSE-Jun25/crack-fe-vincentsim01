import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div  className='sticky top-0 z-50 shadow h-[10vh] bg-red-600 flex items-center justify-center text-white font-bold'>
        <span className='mr-4'><Link href="/">Home</Link></span>
        <span className='mr-4'>Product</span>
        <span className='mr-4'>
            <Link href='/   '>
                  <Image
                        src="/logo.png"   // Path in public folder
                        alt="Logo"
                        width={80}
                        height={80}
                        unoptimized
                        className='hover:scale-105 transition-transform cursor-pointer active:scale-95'
                    />
            </Link>
            
        </span> 
        <span className='mr-4'><Link href='/Contact/'>Contact Us</Link></span> 
        <span className='mr-4'>Profile</span>
        <span className='mr-4'>Login</span>
    </div>
  )
}

export default Header
