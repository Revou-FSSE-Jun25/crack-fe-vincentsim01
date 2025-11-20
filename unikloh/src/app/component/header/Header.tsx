"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import {useAuth} from '../../context/authContext';
import HeaderClient from './HeaderUsername';
// import { cookies } from "next/headers";
// import { getCookie} from '../../../lib/auth/auth';

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const authContext = useAuth();

  const { isAuthenticated, logout } = authContext;

  // const username = getCookie('username');


  if (!themeContext) {
    // optional: throw error if ThemeProvider is missing
    throw new Error("ThemeToggle must be used within ThemeProvider");
  }

   const { theme, toggleTheme } = themeContext;

  return (
    <div  className='sticky top-0 z-50 shadow h-[10vh] bg-red-600 flex items-center justify-center text-white font-bold'>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href="/">Home</Link></span>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href='/Products'>Product</Link></span>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href="/Photoshoot">Photoshoot</Link></span>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href="/Blog">Blog</Link></span>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href="/FAQ">FAQ</Link></span>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'>
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
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href='/Contact/'>Contact Us</Link></span> 
        {/* <span className='mr-4 cursor-pointer hover:underline active:scale-95'>{username}</span> */}
        {/* <span className='mr-4'><Link href='/Signup'>Signup</Link></span> */}

        {!isAuthenticated ?         
          <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href='/Login'>Login</Link></span> :
          <div>
            {/* <span className='mr-4 cursor-pointer hover:underline active:scale-95'>Hi,</span>         */}
            <span><HeaderClient/></span>
            <span className='mr-4 cursor-pointer hover:underline active:scale-95' onClick={logout}>Logout</span>
          </div>
        }
      


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
