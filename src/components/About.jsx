
import React from 'react'
import Title from './Title'
import Progress from './Progress'

const About = () => {
  return (
    <div className="w-11/12 mx-auto text-white lg:py-20">
      {/* Section Title */}
      <Title text="About Me" />
      <h2 className="mt-2 text-xl md:text-2xl text-[#DF5E04] capitalize">
        User Interface and User Experience
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-10">
        {/* Left: Illustration / image placeholder */}
        <div className="left flex-1 flex justify-center">
          <div className="sm:h-64 lg:h-100 w-full max-w-sm bg-gray-800/40 rounded-t-full rounded-b-2xl"></div>
        </div>

        {/* Right: About text */}
        <div className="right flex-1 leading-8 text-gray-400 text-base md:text-lg">
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
      <div className="my-16 text-center">
        <Title text="Skills" />
      </div>

      {/* Progress Bars */}
      <Progress />
    </div>
  )
}

export default About
