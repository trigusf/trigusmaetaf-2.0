import { educations } from "../data/education"
import { motion } from "motion/react"

export default function Education(){
    return(
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
                        Education
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-8 w-full self-start">
                        {educations.sort((a, b) => a.id - b.id).map((education) => (
                            <div key={education.id} className="grid grid-cols-1 min-[490px]:grid-cols-[150px_1fr]">
                                <div className="">
                                    <span className="text-[var(--text-sec)] text-xs md:text-lg">
                                        {education.duration}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm md:text-2xl">
                                        {education.role}
                                    </span>
                                    <span className="text-[var(--text)] text-sm md:text-lg">
                                        {education.place}
                                    </span>
                                    <span className="text-[var(--text-sec)] text-sm md:text-lg">
                                        {education.city}
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