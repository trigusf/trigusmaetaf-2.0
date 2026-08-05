import { experiences } from "../data/experiences";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";


export default function Experience(){
    return (
        <>
            <motion.div 
            initial={{opacity: 0, x: -200}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
            className="max-w-3xl p-4 text-[var(--text)] w-full">
                <div className="flex flex-col gap-2 md:gap-6 items-center">
                    <div className="flex justify-between w-full items-center">
                        <span className="text-lg font-medium md:text-3xl self-start">
                        Experience
                        </span>

                        {/* <a href="" className="flex gap-1 items-center text-[var(--text-sec)] text-xs md:text-lg hover:text-[var(--text)] transition-all duration-150">
                            See Detail <MoveRight size={14}/>
                        </a> */}
                    </div>

                    <div className="flex flex-col gap-4 md:gap-8 w-full self-start">
                        {experiences.sort((a, b) => b.id - a.id).map((experience) => (
                            <div key={experience.id} className="grid grid-cols-1 min-[490px]:grid-cols-[300px_1fr]">
                                <div className="">
                                    <span className="text-[var(--text-sec)] text-xs md:text-lg">
                                        {experience.duration}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm md:text-2xl">
                                        {experience.role}
                                    </span>
                                    <span className="text-[var(--text)] text-sm md:text-lg">
                                        {experience.company}
                                    </span>
                                    <span className="text-[var(--text-sec)] text-sm md:text-lg">
                                        {experience.place}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    )
}