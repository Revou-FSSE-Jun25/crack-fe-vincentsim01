"use client";

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
// import { ThemeContext } from "../../context/themeContext";
import {useAuth} from '../../context/authContext';
import ThemeToggle from "@/app/component/themeToggle/themeToggle";
import CartIcon from "@/app/component/CartIcon";
import AdminProduct from '@/app/adminProduct/page';
// import "../globals.css";
// import HeaderClient from './HeaderUsername';
// import { cookies } from "next/headers";
// import { getCookie} from '../../../lib/auth/auth';

const Header = () => {
  // const themeContext = useContext(ThemeContext);
  const authContext = useAuth();

  const [username, setUsername] = useState<string | null>(null);
  const { user, isAuthenticated, logout, userRole } = useAuth();
  // const username = getCookie('username');
  useEffect(() => {
    if (isAuthenticated && user) {
      setUsername(user.name);
      console.log('✅ Header updated with user:', user.name);
    } else {
      setUsername(null);
      console.log('👤 Header showing guest');
    }
  }, [isAuthenticated, user]);

  const handleLogout = () => {
    logout();
  };

  // if (!themeContext) {
  //   // optional: throw error if ThemeProvider is missing
  //   throw new Error("ThemeToggle must be used within ThemeProvider");
  // }

  //  const { theme, toggleTheme } = themeContext; bg-red-600 text-white id='headerId' 

  return (
    <div  className='sticky top-0 z-[999] header text-black shadow h-[10vh] flex items-center justify-center  font-bold'>
        <span className='mr-4 cursor-p ointer hover:underline active:scale-95'><Link href="/">Home</Link></span>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href='/Products'>Product</Link></span>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href="/Photoshoot">Photoshoot</Link></span>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href="/Blog">Blog</Link></span>
        <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href="/FAQ">FAQ</Link></span>
                {/* <Link href='/Login'>Login</Link> */}
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
        <Link href='/user'>
          {username ? (
            <span className='hidden md:inline mr-2 hover:underline'>Hello, {username}</span>
          ) : (
            <span className='hidden md:inline mr-2 hover:underline'>Hello, Guest</span>
          )}
        </Link>
          <Link href='/AddToCart/'>
          <CartIcon className="ml-2" />
        </Link>
        {/* <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href='/Signup'>Signup</Link></span>  */}



        {!isAuthenticated ? 
          <div>
            <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href='/Signup'>Signup</Link></span>
           <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href='/Login'>Login</Link></span>
           </div>        
          :
          <div>
            {/* <span className='mr-4 cursor-pointer hover:underline active:scale-95'>Hi,</span>         */}
            {/* <span><HeaderClient/></span> */}
            <span className='mr-4 cursor-pointer hover:underline active:scale-95' onClick={logout}>Logout</span>
          </div>
        }
        {userRole === 'admin' && (
          <span className='mr-4 cursor-pointer hover:underline active:scale-95'><Link href='/adminProduct'>Admin Dashboard</Link></span>
        )}

        <ThemeToggle></ThemeToggle>
      


        {/* <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button> */}
    </div>
  )
}

export default Header
