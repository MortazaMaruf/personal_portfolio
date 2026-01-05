import React from 'react'
import Navbar from './Navbar'
import Heading from './heading'
import About from './About'
import Project from './Project'
import Contact from './Contact'

import '../App.css'

const Home = () => {
    return (
        <div>
            <Navbar />

            {/* Home / Hero Section */}
            <section id="home" className='h-screen  bg-[#121212] pt-20'>
                <Heading />
            </section>

            {/* About Section */}
            <section id="about" className='h-screen  bg-[#121212]  '>
                <About/>
            </section>

            {/* Projects Section */}
            <section id="projects" className='h-screen pt-20  bg-[#121212]  '>
                <Project/>
            </section>

            {/* Contact Section */}
            <section id="contact" className='h-screen pt-20 bg-[#121212] '>
                <Contact/>
            </section>
        </div>
    )
}

export default Home
