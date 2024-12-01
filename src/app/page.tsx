
import React from 'react'
import { Hero } from './component/Hero'
import Navbar from './component/Navbar'
import Contact from './component/Contact'
import About from './component/About'
import { Skills } from './component/Skills'
import Project from './component/Project'





const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Project/>
      <Skills/>
      <Contact />
      
     
    </div>
  )
}

export default page
