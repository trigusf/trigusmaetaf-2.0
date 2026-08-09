import { Icon } from "@iconify/react"
import { motion } from "motion/react"

export default function Footer(){
    return (
        <>
        
            <motion.div
                initial={{opacity: 0, y: -220}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="sticky max-w-3xl w-full p-4 mb-4 md:mb-8 text-[var(--text)]
            ">
   
                <div className="flex flex-col w-full gap-2 md:gap-3">
                    <div className="flex flex-col gap-4">
                        <span className="text-lg font-medium md:text-3xl items-start w-full self-start">
                            Let's Work Together
                        </span>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="w-fit">
                                <p className="text-[var(--text-sec)] text-xs md:text-lg ">
                                    Currently seeking opportunities as a Frontend or Full-Stack Web Developer. If you're looking for someone who enjoys building clean, responsive, and user-focused applications, let's connect.
                                </p>
                            </div>
                            <div className="md:p-2 w-full mt-1 hover:-translate-y-1 transition-all duration-200">
                                <a href="mailto:trigusf@gmail.com" target="blank_" className="flex shadow-md hover:shadow-lg gap-2 items-center bg-[var(--surface)] p-3 border border-[var(--border)] rounded-md transition-all duration-200">
                                    <div className="p-3 border border-[var(--border)] rounded-lg">
                                        <Icon icon={"material-symbols:mail"} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[var(--text-sec)] text-xs md:text-sm">Email</span>
                                        <span className="text-xs md:text-base">trigusf@gmail.com</span>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="w-full border border-[var(--border)] border-dashed"></div>
                    <div className="flex flex-col md:flex-row md:justify-between items-center pt-5">
                        <div className="items-center flex flex-col md:items-start">
                            <span className="italic text-[9px] md:text-sm text-[var(--text-sec)]">
                                If the rice has already turn into porrige, then make a tastier porrige
                            </span>
                            <div className="flex gap-0.5 text-[9px] md:text-sm text-[var(--text-sec)]">
                                <span className="text-[var(--text)]">Trigusmaetaf</span>
                                <p>/ Still Growing / Bandung, Indonesia</p>
                            </div>
                        </div>
                        <span className="flex gap-0.5 text-[9px] md:text-sm text-[var(--text-sec)]">©2026 - All rights reserved</span>
                    </div>

                </div>
            </motion.div>

        </>
    )
}