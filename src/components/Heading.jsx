
import React from 'react'
import AnimatedImage from './AnimateImage'
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { MdOutlineFileDownload } from "react-icons/md"
import headingImg from '../photo/headingphoto.jpeg'
import { Typewriter } from 'react-simple-typewriter'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Heading = () => {

  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".headingText",{
        y:-50,
        delay:.2,
        duration:.3,
        opacity:0,
      
    })
    tl.from(".headingName",{
        y:50,
        duration:.1,
        opacity:0,  
    })
    tl.from(".socialIcon",{
        y:-50,
        duration:.1,
        opacity:0,
        stagger:{
          amount:0.5,
        }  
    })
    tl.from(".CVBtn",{
        x:50,
        duration:.1,
        opacity:0,
       
    })
    tl.from(".stat",{
        y:50,
        duration:.1,
        opacity:0,
       
    })
    gsap.from(".right",{
      x:50,
      duration:.3,
      delay:.2,
      opacity:0
    })

  })


  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between h-screen text-white px-4 pt-35 lg:pt-10 md:px-0">
      
      {/* Left Side */}
      <div className="left flex-1 flex flex-col gap-3 md:gap-10">
        <h1 className="headingText text-4xl md:text-5xl font-bold flex flex-col lg:flex-row gap-5">
          Hi, I'm{' '}
          <span className="headingName text-[#DF5E04]">
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
        <div className="flex gap-4 text-2xl mt-2 md:mt-4 socialIcon">
          <a href="https://www.facebook.com/share/17mi6gqoRQ/" target='_blank' rel="noreferrer" className="hover:text-[#DF5E04] transition-all duration-200">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/mortaza_maruf?igsh=aHJuZ3M3d285aXYz" target='_blank' rel="noreferrer" className="hover:text-[#DF5E04] transition-all duration-200">
            <FaInstagramSquare />
          </a>
        </div>

        {/* CV Button */}
        <div className="mt-4 lg:mt-6 CVBtn">
          <a
            href="/CV/marufCV.pdf"
            download="marufCV.pdf"
            className=" inline-flex items-center gap-2 px-6 py-2 border border-[#DF5E04] rounded-xl text-white hover:bg-[#DF5E04] transition-all duration-200"
          >
            Download CV <MdOutlineFileDownload size={25} />
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mt-6 bg-gray-700/30 rounded-2xl p-4 w-full max-w-md stat">
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
       
        <AnimatedImage Img={headingImg}/>
      </div>

    </div>
  )
}

export default Heading
