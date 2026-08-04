import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Project from "../components/project"
import Experience from '../components/experience'
import Technologie from "../components/technologie"
import Education from "../components/education"
import Footer from "../components/footer"
import { BrowserRouter } from "react-router-dom"
import { projects } from "../data/projects"
import { motion } from "motion/react"


export default function Home() {

  return (
    <>
    <div className='flex flex-col gap-4 md:gap-8 items-center'>
      <Hero />
      <Project project={projects.slice(0, 4)} showButton={true} title="Project"/>
      <Experience />
      <Technologie />
      <Education /> 
    </div>
    </>
  )
}