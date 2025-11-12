"use client";

import { createContext, useState, useEffect, ReactNode, useContext } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}


export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

   useEffect(() => {
    const body = document.body;
    if (theme === "light") {
      body.classList.add("bg-white");
      body.classList.remove("bg-black");
    } else {
      body.classList.add("bg-black");
      body.classList.remove("bg-white");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};