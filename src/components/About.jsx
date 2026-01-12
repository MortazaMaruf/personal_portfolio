
import React from 'react'
import Title from './Title'
import Progress from './Progress'
import AnimatedImage from './AnimateImage'
import aboutImg from '../photo/aboutphoto.jpeg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const About = () => {

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",

      }
    })
    tl.from(".title", {
      x: 50,
      duration: .2,
      delay: .3,
      opacity: 0,

    })
    tl.from(".title-dics", {
      x: -50,
      duration: .2,
      opacity: 0,
    })
    tl.from(".leftabout",{
      y:-50,
      duration:.2,
      opacity:0,
    })
    tl.from(".rightabout",{
      y:-50,
      duration:.2,
      opacity:0
    })
  })
  return (
    <div className="w-11/12 mx-auto text-white md:py-0 py-30 about">
      {/* Section Title */}
      <div className='title'>

        <Title text="About Me" />
      </div>
      <h2 className="mt-2 text-xl md:text-2xl text-[#DF5E04] capitalize title-dics">
        User Interface and User Experience
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 gap-10">
        {/* Left: Illustration / image placeholder */}
        <div className="leftabout flex-1 flex justify-center ">

          <AnimatedImage Img={aboutImg} />
        </div>

        {/* Right: About text */}
        <div className="rightabout flex-1  lg:leading-8 text-gray-400 text-base md:text-lg">
          <p className="mb-6">
            I am a passionate MERN Stack Front-End Developer with a strong focus on building modern, responsive, and user-friendly web applications. I specialize in creating clean UI and smooth user experiences using React.js, JavaScript, HTML, and CSS, along with modern styling frameworks.
          </p>

          <p className="mb-6">
            I enjoy turning complex problems into simple, elegant solutions and always strive to write clean, maintainable, and scalable code. I have experience working with REST APIs, state management, and responsive design to ensure applications perform well across all devices.
          </p>

          <p>
            I am continuously learning new technologies and best practices to improve my skills and stay up to date with the latest trends in front-end development. My goal is to contribute to meaningful projects, grow as a developer, and deliver high-quality digital experiences.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      

      {/* Progress Bars */}
      <Progress />
    </div>
  )
}

export default About
