import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Projects from './pages/projects'
import Navbar from './components/navbar'
import Footer from './components/footer'


export default function App() {

  return (
    <BrowserRouter>
    <div className='flex flex-col gap-8 items-center'>
      <Navbar />
      <Routes>

        <Route 
          path="/"
          element={<Home />}
        />

        <Route 
          path='/projects'
          element={<Projects />}
        />

      </Routes>
      <Footer />
    </div>
      

    </BrowserRouter>
  )
}

