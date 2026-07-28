import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";


export default function Navbar(){

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
},[darkMode])


    return (
        <>
            <nav className="fixed w-full z-50 bg-[var(--surface)] py-3 border-b border-b-[var(--border)] flex justify-center">
                <div className="lg:max-w-2xl md:max-w-2xl px-4 w-full flex justify-between items-center text-sm text-[var(--text)]">
                    <div className="font-semibold">TR</div>
                    <div className="flex gap-2 font-light items-center text-[var(--text-sec)]">
                        <div className="flex gap-2 lg:gap-4 text-[11px] lg:text-[13px] items-center px-2 py-0.5 border-r border-r-[var(--border)]">
                            <div className="hover:text-[var(--text)] cursor-pointer">Projects</div>
                            <div className="hover:text-[var(--text)] cursor-pointer">Experience</div>
                            <div className="hover:text-[var(--text)] cursor-pointer">Skills</div>
                        </div>
                        <button className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ?
                             <Moon size={14}/> 
                             : 
                             <Sun size={14} />}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}