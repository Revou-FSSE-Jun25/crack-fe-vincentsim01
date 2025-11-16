"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const Header = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    // optional: throw error if ThemeProvider is missing
    throw new Error("ThemeToggle must be used within ThemeProvider");
  }

   const { theme, toggleTheme } = themeContext;

  return (
    <div  className='sticky top-0 z-50 shadow h-[10vh] bg-red-600 flex items-center justify-center text-white font-bold'>
        <span className='mr-4'><Link href="/">Home</Link></span>
        <span className='mr-4'>Product</span>
        <span className='mr-4'><Link href="/Photoshoot">Photoshoot</Link></span>
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
        <span className='mr-4'><Link href='/Login'>Login</Link></span>
        <span className='mr-4'><Link href='/Signup'>Signup</Link></span>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
            >
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
    </div>
  )
}

export default Header
