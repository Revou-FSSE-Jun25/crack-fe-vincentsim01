"use client";

import { useTheme } from "../../context/themeContext";

export default function ThemeToggle(){
    const {theme, toggleTheme} = useTheme();

    return(
        <button onClick={toggleTheme}
            className='p-2 border rounded-md transition-all duration-300 active:scale-90 hover:scale-110 cursor-pointer'>
            {theme==='light'?'Light':'Dark'}
        </button>
    );
}