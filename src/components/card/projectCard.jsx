import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import Skills from "../skills";
import { Icon } from "@iconify/react";
import { div, select } from "motion/react-client";
import { motion, AnimatePresence, disableInstantTransitions } from "motion/react";

export default function ProjectCard({project, getSkillIcon}){
    const [activeProject, setActiveProject] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [direction, setDirection] = useState(1)

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
    }, [activeProject]);

    useEffect(() => {
        if (!selectedProject) return;
        const interval = setInterval(() => {
            setDirection(1);
            
            setActiveSlide(prev => prev === selectedProject.img.length - 1 ? 0 : prev + 1);

        }, 5000);
        return () => clearInterval(interval);
    }, [selectedProject])

    return(
        <>
            <motion.div layout onClick={() => setActiveProject(project.id)} 
                    className="projectCard">
                <div className="group w-full items-center align-middle flex h-44 md:h-46 bg-[var(--border)] overflow-hidden rounded-md group-hover:inset-shadow-sm">
                    <img 
                        src={project.img[0]} 
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


{/* modal detail project */}
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

                            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-b-[var(--border)] bg-[var(--surface)]">
                                <span className="font-semibold">Detail Project</span>
                                <button 
                                    onClick={() => setActiveProject(null)}
                                    className="p-2 border rounded-sm border-[var(--border)] hover:bg-[var(--border)]">
                                    <Icon icon="material-symbols:close" />
                                </button>
                            </div>

                            <div className="relative w-full p-4">
                                
                                    <div className="relative w-full h-full bg-[var(--bg)] p-1.5 rounded-md">
                                        <AnimatePresence mode="wait" initial={false} custom={direction}>

                                        <motion.img 
                                            src={selectedProject.img[activeSlide]}
                                            key={activeSlide}
                                            alt={selectedProject.repo}
                                            custom={direction}
                                            variants={{ 
                                                enter: (direction) => ({
                                                    x: direction > 0 ? "100%" : "-100%",
                                                    opacity: 0,
                                                }),
                                                center: {
                                                    x: 0,
                                                    opacity: 1,
                                                },
                                                exit: (direction) => ({
                                                    x: direction > 0 ? "-100%" : "100%",
                                                    opacity: 0,
                                                }),
                                            }}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{ 
                                                    duration: 0.3,
                                                    ease: "easeInOut",
                                                 }}
                                            className="w-full h-full bg-[var(--bg)] object-cover rounded-md"  />

                                        </AnimatePresence>
                                    </div>
                             
                                        <div className="absolute h-full left-4 right-4 top-1/2 text-white flex -translate-y-1/2 transform justify-between">
                                            <button 
                                                onClick={() => setActiveSlide(prev => prev === 0 ? selectedProject.img.length - 1 : prev - 1)}
                                                className="p-2 md:p-4 cursor-pointer"
                                            >
                                                <Icon icon="ep:arrow-left-bold" />
                                            </button>

                                            <button 
                                                onClick={() => setActiveSlide(prev => prev === selectedProject.img.length - 1 ? 0 : prev + 1)} 
                                                className="p-2 md:p-4 cursor-pointer"
                                            >
                                                <Icon icon="ep:arrow-right-bold" />
                                            </button>
                                        </div>
                            </div>
                            <div className="p-4 rounded-md w-full flex flex-col gap-6">
                                <div className="flex flex-col gap-3">
                                    <span className="md:text-2xl font-bold">{selectedProject.repo}</span>
                                    <p className="font-light text-[var(--text-sec)]">{selectedProject.desc}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative border p-2 pt-4 border-dashed border-[var(--border)] rounded-md">
                                        <span className="absolute -top-3.5 md:text-xl px-2 font-semibold bg-[var(--surface)] ">Why i Built ?</span>
                                        <p className="text-sm md:text-base font-light">
                                            {selectedProject.studyCases[0].why}
                                        </p>
                                                 
                                    </div>
                                    <div className="relative border p-2 pt-4 border-dashed border-[var(--border)] rounded-md">
                                        <span className="absolute -top-3.5 md:text-xl px-2 font-semibold bg-[var(--surface)] ">Goal</span>
                                        <p className="text-sm md:text-base font-light">
                                            {selectedProject.studyCases[0].goal}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative border p-2 pt-4 border-dashed border-[var(--border)] rounded-md">
                                    <span className="absolute -top-3.5 md:text-xl px-2 font-semibold bg-[var(--surface)] ">
                                        What I Learn
                                    </span>
                                        {(selectedProject.studyCases[0].whatILearn ?? []).map((learn) => (
                                            learn !== null && (
                                                <span className="flex items-center text-sm py-2 md:text-base font-light gap-2">
                                                <div>
                                                    <Icon icon="ic:round-check" color="green"/>
                                                </div>
                                                <p>
                                                    {learn}
                                                </p>
                                                </span>
                                            )
                                        ))}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative border p-2 pt-4 border-dashed border-[var(--border)] rounded-md">
                                        <span className="absolute -top-3.5 md:text-xl px-2 font-semibold bg-[var(--surface)] ">
                                            Tech Stack
                                        </span>
                                        <div className="text-sm md:text-base flex gap-3">
                                            {selectedProject.tech.map((tech) => (
                                                <div key={tech} className="text-sm md:text-xl flex justify-center w-full items-center gap-2 border border-[var(--border)] border-dashed rounded-sm p-2">
                                                    {getSkillIcon({nameSkill: tech})}
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                                 
                                    </div>
                                </div>
                            </div>
                            
                        </motion.div>
                        
                    </motion.div>
                </>
            )}
            </AnimatePresence>
        </>
    )
}