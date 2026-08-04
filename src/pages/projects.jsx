import Project from "../components/project";
import { projects } from "../data/projects";
import { getIcon, Icon } from "@iconify/react";
import ProjectCard from "../components/card/projectCard";
import { skills } from "../data/skills";
import { Link } from "react-router-dom";
import { MoveLeft, MoveRight } from "lucide-react";


export default function Projects({project}){

    function getSkillIcon({nameSkill}){
        const skill = skills.find((skill) => skill.name === nameSkill);

        if(!skill) return nameSkill;

        return(
            <Icon icon={skill.icon} />
        )
    }


    return(
        <>
            <div className="pt-15 md:pt-28 text-[var(--text)]">
                <Link to="/" className="text-[var(--text-sec)] px-4 pb-1 text-xs md:text-base flex items-center gap-1 underline">
                    <MoveLeft size={15}  />
                    Back to Home
                </Link>
                <div className="flex justify-center">
                    <div className="max-w-3xl px-4 w-full">
                        <div className="flex flex-col gap-4 items-center">
                            <div> 
                                <span className="text-lg font-medium md:text-3xl items-start w-full self-start">
                                   Selected Project
                                </span>
                                <p className="text-xs md:text-sm text-[var(--text-sec)]">
                                    A curated collection of projects from my personal learning, coursework, and internship experience, showcasing the skills and knowledge I've gained along the way.
                                </p>
                            </div>
                            <div>
                                <div className="grid grid-cols-1 min-[490px]:grid-cols-2 gap-6">
                                    {projects.map((project) => (
                                        <ProjectCard key={project.id} project={project} getSkillIcon={getSkillIcon} />
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