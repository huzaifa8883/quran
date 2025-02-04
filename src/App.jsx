import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
function App() {


  return (
    <>
     
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        </Routes>
  
      
    </>
  )
}

export default App
