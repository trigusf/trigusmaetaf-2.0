import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Icon } from "@iconify/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { blockquote } from "motion/react-client";


export default function Navbar(){

const [darkMode, setDarkMode] = useState(() => {
    const saveTheme = localStorage.getItem('darkMode');
    return saveTheme !== null ? JSON.parse(saveTheme) : false;
});
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const setTheme = document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem('darkMode', JSON.stringify(setTheme))

},[darkMode])

useEffect(() => {

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
})

const location = useLocation();
const navigate = useNavigate();

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
                behavior:"smooth",
                block : "center",
            });
}

const handleSkillsClick = () => {
    if(location.pathname === "/"){
        scrollToSection("Skills");
    }else{
        navigate("/")
        setTimeout(() => {
            scrollToSection("Skills")
        }, 100)
    }
}


    return (
        
            <nav className={`fixed w-full z-50 py-3 md:py-4 border-b border-b-[var(--border)] flex justify-center ${isScrolled ? 'scrolled' : ''}`}>
                <div className="lg:max-w-3xl md:max-w-2xl px-4 w-full flex justify-between items-center text-sm text-[var(--text)] text-[11px] md:text-[16px]">
                    <Link to="/" className="font-semibold">TR</Link>
                    <div className="flex gap-2 md:gap-4 font-light items-center text-[var(--text-sec)]">
                        <div className="flex gap-2 lg:gap-4  items-center py-0.5">
                            <Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="hover:text-[var(--text)] cursor-pointer">Projects</Link>
                            <Link to="/experiences" onClick={() => window.scrollTo(0, 0)} className="hover:text-[var(--text)] cursor-pointer">Experience</Link>
                            <button onClick={handleSkillsClick} className="hover:text-[var(--text)] cursor-pointer">Skills</button>
                        </div>
                        <div className="border-r h-6 md:h-8 border-r-[var(--border)] "></div>
                        <button className="cursor-pointer" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ?
                             <Icon icon={"si:moon-fill"} />
                             : 
                             <Icon icon={"si:sun-fill"} />}
                        </button>
                    </div>
                </div>
            </nav>
    
    )
}