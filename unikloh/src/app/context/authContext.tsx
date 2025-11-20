"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { removeCookie, setCookie } from '@/lib/auth/auth';
// import { getCookie, setCookie, removeCookie } from '../../lib/auth/auth';

interface User {
  id: number;
  // email: string;
  // password: string;
  name: string;
//   role: string;
//   avatar: string;
//   creationAt: string;
//   updatedAt: string;
}


interface AuthContextType {
  // isLoading: boolean;
  isAuthenticated: boolean;
  // userRole: 'admin' | 'user' | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')[1] || null;
};

const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};

const getUserRole = (email?: string): 'admin' | 'user' => {
  // if (!email) return 'user'; 
  return email === 'john@mail.com' ? 'admin' : 'user';
};


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }:{ children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth === "true") setIsAuthenticated(true);
  }, []);

    const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
    setCookie("username", "Arthur", 60);
  };

  const logout = () => {
    deleteCookie("username");
    setIsAuthenticated(false);
    
    localStorage.removeItem("auth");
    router.push("/");

  };

   return (
          <AuthContext.Provider value={{ isAuthenticated, login, logout}}>
              {children}
          </AuthContext.Provider>
      );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};