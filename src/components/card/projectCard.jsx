import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import Skills from "../skills";
import { Icon } from "@iconify/react";
import { div, select } from "motion/react-client";
import { motion, AnimatePresence } from "motion/react";

export default function ProjectCard({project, getSkillIcon}){
    const [activeProject, setActiveProject] = useState(null);

    const selectedProject = projects.find((project) => project.id === activeProject)

    useEffect(() => {
        if(activeProject) {
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [activeProject]) 

    return(
        <>
            <motion.div layout onClick={() => setActiveProject(project.id)} 
                    className="projectCard">
                <div className="group w-full items-center align-middle flex h-44 md:h-46 bg-[var(--border)] overflow-hidden rounded-md group-hover:inset-shadow-sm">
                    <img 
                        src={project.img} 
                        alt={project.repo} 
                        loading={project.id === 1 ? "eager" : "lazy"}
                        fetchPriority={project.id === 1 ? "high" : "auto"}
                        className="scale-95 rounded-sm object-cover group-hover:scale-98 transition-transform" />
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
                        {project.url &&
                            <a href={project.url} target="_blank" aria-label="link to project" className="hover:scale-110 text-[var(--text-sec)] hover:text-[var(--text)] transition-all duration-170">
                                <Icon icon="mingcute:link-line" />
                            </a>
                        }
                        {project.github && 
                            <a href={project.github} target="_blank" aria-label="link to github" className="hover:scale-110 text-[var(--text-sec)] hover:text-[var(--text)] transition-all duration-170">
                                <Icon icon={"mdi:github"} />
                            </a>    
                        }
                    </div>
                    
                </div>
            </motion.div> 

            <AnimatePresence>
            {activeProject && (
                <>

                    <motion.div 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 md:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <motion.div 
                            className="relative w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] overflow-auto md:rounded-xl bg-[var(--surface)]"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ duration: 0.25, ease: "easeOut"}} >

                            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-b-[var(--border)]">
                                <span className="font-semibold">{selectedProject.repo}</span>
                                <button 
                                    onClick={() => setActiveProject(null)}
                                    className="p-2 border rounded-sm border-[var(--border)] hover:bg-[var(--border)]">
                                    <Icon icon="material-symbols:close" />
                                </button>
                            </div>

                            <div className="p-4">
                                <img 
                                    src={selectedProject.img} 
                                    alt={selectedProject.repo}
                                    className="w-full h-full object-cover"  />
                            </div>
                            
                        </motion.div>
                        
                    </motion.div>
                </>
            )}
            </AnimatePresence>
        </>
    )
}