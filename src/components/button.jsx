import { useState } from "react";
import { MoveRight } from "lucide-react";

export default function Button({href, children}){
    return(
        <>
            <div className="aura aura-dual aura-sm w-fit transition-all ease-in-out hover:scale-110">
                <a href={href} target="blank_" className="flex items-center gap-1 text-xs md:text-sm lg:text-sm bg-[var(--button)] text-[var(--text-btn)] w-fit p-2 rounded-md">
                    {children} <MoveRight size={14}/>
                </a>
            </div>    
        </>
    )
}