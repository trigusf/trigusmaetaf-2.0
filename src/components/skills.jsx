import { useState } from "react";
import { skills } from "../data/skills";
import { Icon } from "@iconify/react";

export default function Skills({id}){

    const skill = id ? skills.find((skill) => skill.name === id) : null;

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
        {skills.map((skill) => (
        <div key={skill.id} className="flex gap-1 items-center border border-[var(--border)] w-fit px-1 py-0.5 border-dashed rounded-md">
            <Icon icon={skill.icon} className="w-5 h-5"/>
            <span className="text-xs md:text-sm lg:text-sm">
                {skill.name}
            </span>
        </div>
        ))}
    </>
    )
}

