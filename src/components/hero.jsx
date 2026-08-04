import { useState } from "react";
import Button from "./button";
import Skills from "./skills";
import { Icon } from "@iconify/react";
import trigusmaetaf from "../assets/profile/trigusmaetaf.jpeg"

export default function Hero(){
    return(
        <>
            <div className="flex justify-center pt-12 md:pt-35">
                <div className="md:max-w-3xl md:pt-16 w-full p-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center w-20 h-20 lg:w-38 lg:h-38 md:w-24 md:h-24 bg-[var(--bg)] border border-[var(--border)] rounded-full overflow-hidden shadow-md">
                            <img src={trigusmaetaf} alt="trigusmaetaf" className="w-full h-full scale-250 object-cover" loading="lazy"/>
                        </div>
                        <div className="text-[var(--text)] flex flex-col md:gap-2">
                            <div className="flex items-center gap-1 md:text-3xl">
                                <span className="font-semibold">Trigusmaetaf</span>
                                <Icon icon={"si:verified-fill"} color="oklch(62.3% 0.214 259.815)"/>

                            </div>

                            <div className="flex gap-1 md:gap-2 items-center mt-1 md:text-2xl">
                                <a href="https://github.com/trigusf" target="blank_" className="text-[var(--text-sec)] hover:text-[var(--text)] transition-all hover:-translate-y-1 duration-200">
                                    <Icon icon={"mdi:github"} />
                                </a>


                                <a href="https://www.linkedin.com/in/trigusf" target="blank_" className="grayscale hover:grayscale-0 transition-all hover:-translate-y-1 duration-200">
                                    <Icon icon={"devicon:linkedin"} />
                                </a>

                                <a href="" className="text-[var(--text-sec)] hover:text-red-700 transition-all hover:-translate-y-1 duration-200">
                                    <Icon icon={"material-symbols:mail"} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-[var(--text)] pt-4">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <span className="font-medium text-lg md:text-2xl lg:text-3xl">Web Developer</span>
                            <p className="text-xs md:text-lg text-[var(--text-sec)]">
                                I'm a Web Developer with hands-on experience building responsive web applications using {""}
                                <Skills id={'JavaScript'} /> {" "}
                                <Skills id={'React'} /> {" "}
                                <Skills id={'Tailwind CSS'} /> {" "}
                                <Skills id={'php'} /> {" "} and {" "}
                                <Skills id={'MySQL'} /> {" "}
                                through personal projects and internship experience. Passionate about creating clean, user-friendly interfaces while continuously expanding knowledge in modern frontend and backend development. Professional experience in finance administration has strengthened analytical thinking, attention to detail, and effective cross functional collaboration.     
                            </p>
                            <a href="https://drive.google.com/file/d/14QbeshcKOogmOsVVg6Gd4jFSW9Gvx4s6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Button>View Resume</Button>
                            </a>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
   