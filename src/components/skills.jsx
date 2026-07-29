import { useState } from "react";
import { skills } from "../data/skills";
import { Icon } from "@iconify/react";

export default function Skills({id, category}){

    const skill = id ? skills.find((skill) => skill.name === id) : null;
    const filterdSkills = category ? skills.filter((skill) => skill.category === category) : skills;    

    if(skill){
        return(
            <>
                <span key={skill.id} className="inline-flex text-xs md:text-sm lg:text-sm gap-1 items-center border border-[var(--border)] w-fit px-1 py-0.5 border-dashed rounded-md">
                    <Icon icon={skill.icon} className="w-5 h-5"/>
                    {skill.name}
                </span>
            </>
        )
    }
    return(
    <>
        {filterdSkills.map((skill) => (
        <div key={skill.id} className="shadow-sm text-[var(--text)] flex gap-1 items-center border border-[var(--border)] w-fit px-1 py-0.5 border-dashed rounded-md mt-1 hover:-translate-y-1 duration-150">
            <Icon icon={skill.icon} className=""/>
            <span className="text-xs md:text-sm lg:text-sm">
                {skill.name}
            </span>
        </div>
        ))}
    </>
    )
}

