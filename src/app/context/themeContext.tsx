"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>('light');  


    useEffect(() =>{
        const html = document.documentElement;
        const body = document.body;
        const header = document.getElementById('headerId');
        const storedTheme = localStorage.getItem('theme') as Theme;
        if(storedTheme){
            setTheme(storedTheme);
            html.classList.add(storedTheme);
            // header?.classList.add(`headerId${storedTheme}`);
        }
    }, []);

    useEffect(() =>{
        const html = document.documentElement;
        const body = document.body;
        const header = document.getElementById('headerId');
        html.classList.remove(theme === "light" ? "dark" : "light");
        html.classList.add(theme);
        // header?.classList.remove(theme === "light" ? "headerIddark" : "headerIdlight");
        // header?.classList.add(`headerId${theme}`);
        
        localStorage.setItem('theme', theme);
    },[theme]);

    const toggleTheme = () => setTheme(theme === 'light'?'dark':'light');

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    const context = useContext(ThemeContext);
      if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}