
import React from 'react'
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { MdOutlineFileDownload } from "react-icons/md"
import headingImg from '../photo/removebgbw.png'
import { Typewriter } from 'react-simple-typewriter'

const Heading = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between h-screen text-white px-4 pt-10 md:px-0">
      
      {/* Left Side */}
      <div className="left flex-1 flex flex-col gap-6 md:gap-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm{' '}
          <span className="text-[#DF5E04]">
            <Typewriter
              words={['Mortaza Maruf', 'Web Developer', 'Frontend Developer']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={75}
              delaySpeed={1000}
            />
          </span>
        </h1>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mt-4">
          <a href="https://www.facebook.com/share/17mi6gqoRQ/" target='_blank' rel="noreferrer" className="hover:text-[#DF5E04] transition-all duration-200">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/mortaza_maruf?igsh=aHJuZ3M3d285aXYz" target='_blank' rel="noreferrer" className="hover:text-[#DF5E04] transition-all duration-200">
            <FaInstagramSquare />
          </a>
        </div>

        {/* CV Button */}
        <div className="mt-6">
          <a
            href="/path-to-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2 border border-[#DF5E04] rounded-xl text-white hover:bg-[#DF5E04] transition-all duration-200"
          >
            Download CV <MdOutlineFileDownload size={25} />
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mt-6 bg-gray-700/30 rounded-2xl p-4 w-full max-w-md">
          <div className="border-r border-gray-500 pr-6">
            <h2 className="text-2xl text-[#DF5E04] font-bold">2+</h2>
            <p className="text-lg">Years Experience</p>
          </div>
          <div className="pl-6">
            <h2 className="text-2xl text-[#DF5E04] font-bold">25+</h2>
            <p className="text-lg">Projects Done</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-gray-800/40 flex items-center justify-center overflow-hidden">
          <img
            src=''
            alt="Hero"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      </div>

    </div>
  )
}

export default Heading
