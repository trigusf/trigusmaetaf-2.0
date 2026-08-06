import { MoveUp } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

export default function UpButton(){

    const  [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <AnimatePresence>

            {showButton && (

                <motion.button 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 20 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{y: -0.1}}
                    onClick={() => window.scrollTo({top : 0, behavior : "smooth"})} 
                    className="hidden md:block fixed bottom-16 right-16 text-[var(--text)] p-2 bg-[var(--surface)] border border-[var(--border)] rounded-md cursor-pointer shadow-xl
                ">
                    <MoveUp />
                </motion.button>
            )}
        
        </AnimatePresence>
    )
}