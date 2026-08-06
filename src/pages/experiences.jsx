import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { MoveLeft, MoveRight } from "lucide-react";
import { experiences } from "../data/experiences";
import { div } from "motion/react-client";
import { defaultValueTypes } from "motion";
import { p } from "motion/react-m";

export default function Experiences(){

    return(
        <>
            <div className="pt-15 md:pt-28 text-[var(--text)] w-full flex flex-col">
                <div className="flex justify-center">
                    <div className="max-w-3xl px-4 w-full">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <Link to="/" className="text-[var(--text-sec)] text-xs md:text-base flex items-center gap-1 underline">
                                <MoveLeft size={15}  />
                                Back to Home
                            </Link>
                            <div> 
                                <span className="text-lg font-medium md:text-3xl items-start w-full self-start">
                                   Experiences
                                </span>
                                <p className="text-xs md:text-sm text-[var(--text-sec)]">
                                    Where i've Work and What i did There
                                </p>
                            </div>
                            <div>
                                <div className="flex flex-col gap-3 md:gap-6 border p-4 border-dashed rounded-md border-[var(--border)]">
                                   {experiences.sort((a, b) => b.id - a.id).map((experience) => (
                                    <div className="flex flex-col">
                                        <div key={experience.id} className="flex flex-row-reverse items-start justify-between">
                                            <div className="">
                                                <span className="text-[var(--text-sec)] text-xs md:text-base">
                                                    {experience.duration}
                                                </span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm md:text-xl">
                                                    {experience.role}
                                                </span>
                                                <span className="text-[var(--text-sec)] text-xs ">
                                                    {experience.company}
                                                </span>
                                                <span className="text-[var(--text-sec)] text-xs ">
                                                    {experience.place}
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="list-disc px-4 text-xs md:text-base p-2">
                                                {experience.task.map((task, index) => (
                                                    <li className="p-1 text-[var(--text-sec)]">
                                                        <p key={index}>{task}</p>
                                                    </li>
                                                ))}
                                        </ul>
                                        <hr className="border-dashed border-[var(--border)]"  />
                                    </div>
                                    ))}
                                </div>  
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}