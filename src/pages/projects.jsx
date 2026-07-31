import Project from "../components/project";
import { projects } from "../data/projects";

export default function Projects({Projects, showButton = false}){

    return(
        <>
            <div className="pt-16">
                <Project project={projects} title="Selected Project"/>
            </div>  
        </>
    )
}