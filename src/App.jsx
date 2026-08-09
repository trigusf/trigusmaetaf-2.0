import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Projects from './pages/projects'
import Experiences from './pages/experiences'
import Navbar from './components/navbar'
import Footer from './components/footer'
import UpButton from './components/upButton'


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

        <Route
          path='/Experiences'
          element={<Experiences />}
          />

      </Routes>
      <Footer />
      <UpButton />
    </div>
      

    </BrowserRouter>
  )
}

