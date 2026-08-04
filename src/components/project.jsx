import { useState} from "react";
import { getIcon, Icon } from "@iconify/react";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import Button from "./button";
import { Link } from "react-router-dom";
import ProjectCard from "./card/projectCard";
import { motion } from "motion/react";


export default function Project({project}){

    function getSkillIcon({nameSkill}){

        const skill = skills.find((skill) => skill.name === nameSkill)

        if(!skill) return nameSkill;
      
        return (
            <Icon icon={skill.icon} />
        )
    }
    return(
        <>
            <motion.div
                initial={{opacity: 0, y: 220}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="text-[var(--text)] flex justify-center">

                    <div className="max-w-3xl p-4 w-full">
                        <div className="flex flex-col gap-4 items-center">
                            <span className="text-lg font-medium md:text-3xl items-start w-full self-start">
                                Project
                            </span>
                            <div className="grid grid-cols-1 min-[490px]:grid-cols-2 gap-6">
                                {projects.slice(0, 4).map((project) => (
                                    <ProjectCard key={project.id} project={project} getSkillIcon={getSkillIcon} />
                                ))}
                            </div>  
                            
                                <Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="pt-4">
                                    <Button>
                                        View More Project
                                    </Button>
                                </Link>
                            
                            
                        </div>
                    </div>
            </motion.div>
        </>
    )

}