import { projects } from "../../data/projects";
import Skills from "../skills";
import { Icon } from "@iconify/react";

export default function ProjectCard({project, getSkillIcon}){

    return(
        <>
            <div className="cursor-pointer flex flex-col gap-2 bg-[var(--surface)] p-2 border border-[var(--border)] border-dashed rounded-md shadow-2xs hover:shadow-md transition-all duration-200">
                <div className="group w-full items-center align-middle flex h-38 md:h-46 bg-[var(--border)] overflow-hidden rounded-md group-hover:inset-shadow-sm">
                    <img src={project.img} alt="Soon" className="scale-95 rounded-sm object-cover group-hover:scale-98 transition-transform" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold md:text-xl">{project.repo}</div>
                    <span className="font-light text-xs md:text-sm text-[var(--text-sec)]">{project.role}</span>
                </div>
                <p className="flex flex-1 text-xs md:text-sm text-[var(--text-sec)]">
                    {project.desc}
                </p>
                <div className="flex justify-between pt-2 border-t md:text-2xl border-t-[var(--border)]">
                    <div className="flex items-center gap-2">
                        {project.tech.map((tech) => (
                            <div key={tech} className="flex items-center">
                                    {getSkillIcon({nameSkill: tech})}
                                </div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {project.github && 
                            <a href={project.github} target="_blank" className="hover:scale-110 text-[var(--text-sec)] hover:text-[var(--text)] transition-all duration-170">
                                <Icon icon={"mdi:github"} />
                            </a>
                        }
                        {project.url &&
                            <a href={project.url} target="_blank" className="hover:scale-110 text-[var(--text-sec)] hover:text-[var(--text)] transition-all duration-170">
                                <Icon icon="mingcute:link-line" />
                            </a>
                        }
                    </div>
                    
                </div>
            </div>    
        </>
    )
}