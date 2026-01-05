
import React from 'react'
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";

const skills = [
  { name: 'HTML 5', icon: <FaHtml5 size={50} />, hover: 'hover:text-black' },
  { name: 'CSS 3', icon: <IoLogoCss3 size={50} />, hover: 'hover:text-[#2652E6]' },
  { name: 'Tailwind', icon: <BiLogoTailwindCss size={50} />, hover: 'hover:text-[#08BBD9]' },
  { name: 'JavaScript', icon: <IoLogoJavascript size={50} />, hover: 'hover:text-[#F7E024]' },
  { name: 'React', icon: <FaReact size={50} />, hover: 'hover:text-[#58C4DC]' },
];

const Progress = () => {
  return (
    <div className="lg:mt-12">
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className={`border-4 border-[#DF5E04] p-7 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-[#DF5E04] cursor-pointer ${skill.hover}`}>
              {skill.icon}
            </div>
            <h1 className="text-2xl font-semibold uppercase text-center">{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Progress
