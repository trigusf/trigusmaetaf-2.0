import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from './components/navbar'
import Hero from './components/hero'
import Project from './components/project'
import Experience from './components/experience'
import Technologie from './components/technologie'
import Education from './components/education'
import Footer from './components/footer'


export default function Home() {

  return (
    <>
      <Navbar />
    <div className='flex flex-col gap-8 items-center'>
      <Hero />
      <Project />
      <Experience />
      <Technologie />
      <Education />
      <Footer />
    </div>
    </>
  )
}

