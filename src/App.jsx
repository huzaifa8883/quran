import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import AllCourses from './components/Allcourses'
import Contactpage from "./components/Contact"
function App() {


  return (
    <>
     
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/contact" element={<Contactpage />} />

        </Routes>
  
      
    </>
  )
}

export default App
