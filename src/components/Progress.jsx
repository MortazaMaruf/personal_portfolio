
import React from 'react'
import { FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io"
import { IoLogoJavascript } from "react-icons/io5"
import { BiLogoTailwindCss } from "react-icons/bi"

const Progress = () => {
  const skills = [
    { icon: <FaHtml5 size={45} />, name: 'HTML5', color: 'hover:text-orange-500' },
    { icon: <IoLogoCss3 size={45} />, name: 'CSS3', color: 'hover:text-blue-500' },
    { icon: <BiLogoTailwindCss size={45} />, name: 'Tailwind', color: 'hover:text-sky-400' },
    { icon: <IoLogoJavascript size={45} />, name: 'JavaScript', color: 'hover:text-yellow-400' },
    { icon: <FaReact size={45} />, name: 'React', color: 'hover:text-cyan-400' },
  ]

  return (
    <div className="mt-12 md:mt-2">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6"
          >
            <div
              className={`border-4 border-[#DF5E04] p-6 rounded-full transition-all duration-300 
              hover:bg-[#DF5E04] hover:scale-110 cursor-pointer ${skill.color}`}
            >
              {skill.icon}
            </div>
            <h1 className="uppercase text-lg font-semibold">
              {skill.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Progress
