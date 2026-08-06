import Skills from "./skills"
import { motion } from "motion/react"

export default function Technologie(){
    return(
        <>
        
            <motion.div
            id="Skills"
             initial={{opacity: 0, x: -200}}
             whileInView={{opacity: 1, x: 0}}
             transition={{duration: 1}}
             viewport={{once: true}}
             
             className="max-w-3xl w-full p-4 text-[var(--text)]">
                <div className="flex flex-col gap-4 ">
                    <span className="text-lg font-medium md:text-3xl items-start w-full self-start">
                    Technologies
                    </span>
                    <div className="flex flex-col flex-wrap gap-3 md:gap-6 md:text-3xl">
                        <div className="flex flex-col flex-wrap gap-2">
                            <span className="uppercase text-xs md:text-sm text-[var(--text-sec)]">
                                frontend
                            </span>
                            <div className="flex flex-wrap gap-1">
                                <Skills category="Frontend" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap gap-2">
                            <span className="uppercase text-xs md:text-sm text-[var(--text-sec)]">
                                backend & database
                            </span>
                            <div className="flex flex-wrap gap-1">
                                <Skills category="Backend" />
                                <Skills category="Database" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap gap-2">
                            <span className="uppercase text-xs md:text-sm text-[var(--text-sec)]">
                                tools
                            </span>
                            <div className="flex flex-wrap gap-1">
                                <Skills category="Tools" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </motion.div>
        
        </>
    )
}