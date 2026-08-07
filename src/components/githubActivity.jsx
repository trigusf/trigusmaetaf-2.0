import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";


export default function Github(){
    const years = [2023, 2024, 2025, 2026];
    const [year, setYear] = useState("")

    


    return(
        <>
            <section className="w-full text-[var(--text)] p-4 max-w-3xl">
                <div className="flex flex-col gap-4 md:gap-8">
                    <div className="flex flex-col md:flex-row justify-between">
                        <span className="text-lg font-medium md:text-3xl items-start w-full self-start">Github Activity</span>
                        <div className="flex gap-1">
                            {years.map((y) => (
                                <button key={y} onClick={() => setYear(y)} className={`rounded-md border border-[var(--border)] p-1 text-xs ${year === y ? "active text-[var(--text-btn)] bg-[var(--button)]" : "bg-[var(--surface)]"}`}>
                                    {y}
                                </button>
                            ))}
                        </div>
                    </div>
                    <GitHubCalendar username="trigusf" year={year ? year : new Date().getFullYear()} colorScheme="dark" />
                </div>
            </section>
        </>
    )
}