import { useState } from "react";


export default function Hero(){
    return(
        <>
            <div className="flex justify-center">
                <div className="lg:max-w-2xl md:max-w-2xl lg:pt-16 lg:px-16 md:pt-16 md:px-16 w-full flex p-4 items-center gap-4 flex-col">
                    <div className="flex items-center gap-3">
                        <div className="w-18 h-18 lg:w-24 lg:h-24 md:w-24 md:h-24  dark bg-[var(--bg)] rounded-full overflow-hidden">
                            <img src="#" alt="trigusmaetaf" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[var(--text)]">
                            <div className="flex items-center gap-1 lg:text-2xl md:text-2xl">
                                <span className="font-semibold">Trigusmaetaf</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
	                                <path d="M0 0h24v24H0z" fill="none" />
	                                <path fill="oklch(62.3% 0.214 259.815)" fill-rule="evenodd" d="M21.007 8.27C22.194 9.125 23 10.45 23 12s-.806 2.876-1.993 3.73c.24 1.442-.134 2.958-1.227 4.05c-1.095 1.095-2.61 1.459-4.046 1.225C14.883 22.196 13.546 23 12 23c-1.55 0-2.878-.807-3.731-1.996c-1.438.235-2.954-.128-4.05-1.224c-1.095-1.095-1.459-2.611-1.217-4.05C1.816 14.877 1 13.551 1 12s.816-2.878 2.002-3.73c-.242-1.439.122-2.955 1.218-4.05c1.093-1.094 2.61-1.467 4.057-1.227C9.125 1.804 10.453 1 12 1c1.545 0 2.88.803 3.732 1.993c1.442-.24 2.956.135 4.048 1.227s1.468 2.608 1.227 4.05m-4.426-.084a1 1 0 0 1 .233 1.395l-5 7a1 1 0 0 1-1.521.126l-3-3a1 1 0 0 1 1.414-1.414l2.165 2.165l4.314-6.04a1 1 0 0 1 1.395-.232" clip-rule="evenodd" />
                                </svg>

                            </div>

                            <div className="flex gap-1 items-center mt-1">
                                <a href="" className="text-[var(--text-sec)] hover:text-[var(--text)] transition-all hover:-translate-y-1 duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
	                                    <path d="M0 0h24v24H0z" fill="none" />
	                                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                    </svg>   
                                </a>


                                <a href="" className="grayscale hover:grayscale-0 transition-all hover:-translate-y-1 duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 128 128">
	                                    <path d="M0 0h128v128H0z" fill="none" />
	                                    <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" />
	                                    <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" />
                                    </svg>
                                </a>

                                <a href="" className="text-[var(--text-sec)] hover:text-red-700 transition-all hover:-translate-y-1 duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
	                                    <path d="M0 0h24v24H0z" fill="none" />
	                                    <path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>Web Developer</span>
                    </div>
                </div>
                
            </div>
        </>
    )
}
   