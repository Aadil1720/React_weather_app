import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from "./pages/About"
import Weather from "./pages/Weather"
import NotFound from "./pages/NotFound"


function App() {
 
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/weather" element={<Weather/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     <ToastContainer/>
     <Footer/>
    </>
  )
}

export default App
