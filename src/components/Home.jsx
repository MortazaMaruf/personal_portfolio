import React from 'react'
import Navbar from './Navbar'
import Heading from './Heading'
import About from './About'
import Project from './Project'
import Contact from './Contact'

import '../App.css'


const Home = () => {
  return (
    <div className="bg-[#121212] text-white scroll-smooth">
      <Navbar />

      <section id="home" className="min-h-screen sm:pt-24 md:pt-4 lg:pt-0 scroll-mt-24">
        <Heading />
      </section>

      <section id="about" className="sm:py-32 md:py-5 lg:py-0 scroll-mt-24">
        <About />
      </section>

      <section id="projects" className="sm:py-32 md:py-5 lg:py-0 scroll-mt-24">
        <Project />
      </section>

      <section id="contact" className="sm:py-32 md:py-5 lg:py-0 scroll-mt-24">
        <Contact />
      </section>
    </div>
  )
}

export default Home
