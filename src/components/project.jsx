import { useState} from "react";
import { getIcon, Icon } from "@iconify/react";
import { projects } from "../data/projects";
import { skills } from "../data/skills";


export default function Project(){

    function getSkillIcon({nameSkill}){

        const skill = skills.find((skill) => skill.name === nameSkill)

        if(!skill) return nameSkill;
      
        return (
            <Icon icon={skill.icon} />
        )
    }
    return(
        <>
            <div className="text-[var(--text)] flex justify-center">
                <div className="max-w-2xl p-4 w-full">
                    <div className="flex flex-col gap-3">
                        <span className="text-lg font-medium">Project</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project) => (
                                <div key={project.id} className="flex flex-col gap-2 bg-[var(--surface)] p-2 border border-[var(--border)] border-dashed rounded-md shadow-2xs hover:shadow-md transition-all duration-200">
                                    <div className="w-full h-38 bg-[var(--border)] overflow-hidden rounded-md">
                                        <img src={project.img} alt="Soon" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold">{project.repo}</div>
                                        <span className="font-light text-xs text-[var(--text-sec)]">{project.role}</span>
                                    </div>
                                    <p className="flex flex-1 text-xs text-[var(--text-sec)]">
                                        {project.desc}
                                    </p>
                                    <div className="flex items-center gap-2 pt-2 border-t border-t-[var(--border)]">
                                        {project.tech.map((tech) => (
                                                <div key={tech} className="flex items-center">
                                                    {getSkillIcon({nameSkill: tech})}
                                                </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}