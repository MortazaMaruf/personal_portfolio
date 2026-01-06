
// import React from 'react'
// import { FaHtml5, FaReact } from "react-icons/fa"
// import { IoLogoCss3 } from "react-icons/io"
// import { IoLogoJavascript } from "react-icons/io5"
// import { BiLogoTailwindCss } from "react-icons/bi"

// const Progress = () => {
//   const skills = [
//     { icon: <FaHtml5 size={45} />, name: 'HTML5', color: 'hover:text-orange-500' },
//     { icon: <IoLogoCss3 size={45} />, name: 'CSS3', color: 'hover:text-blue-500' },
//     { icon: <BiLogoTailwindCss size={45} />, name: 'Tailwind', color: 'hover:text-sky-400' },
//     { icon: <IoLogoJavascript size={45} />, name: 'JavaScript', color: 'hover:text-yellow-400' },
//     { icon: <FaReact size={45} />, name: 'React', color: 'hover:text-cyan-400' },
//   ]

//   return (
//     <div className="mt-12 md:mt-2">
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center gap-6"
//           >
//             <div
//               className={`border-4 border-[#DF5E04] p-6 rounded-full transition-all duration-300 
//               hover:bg-[#DF5E04] hover:scale-110 cursor-pointer ${skill.color}`}
//             >
//               {skill.icon}
//             </div>
//             <h1 className="uppercase text-lg font-semibold">
//               {skill.name}
//             </h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Progress
import React, { useEffect, useState } from 'react'
import { FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io"
import { IoLogoJavascript } from "react-icons/io5"
import { BiLogoTailwindCss } from "react-icons/bi"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Progress = () => {
  const skills = [
    { icon: <FaHtml5 size={45} />, name: 'HTML', percentage: 70, color: 'bg-orange-500' },
    { icon: <IoLogoCss3 size={45} />, name: 'CSS', percentage: 65, color: 'bg-blue-500' },
    { icon: <BiLogoTailwindCss size={45} />, name: 'Tailwind', percentage: 80, color: 'bg-sky-400' },
    { icon: <IoLogoJavascript size={45} />, name: 'JavaScript', percentage: 60, color: 'bg-yellow-400' },
    { icon: <FaReact size={45} />, name: 'React', percentage: 80, color: 'bg-cyan-400' },
  ]

  // Intersection Observer
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start(i => ({ width: `${skills[i].percentage}%`, transition: { duration: 1.2 } }))
    }
  }, [inView])

  return (
    <div className="mt-12 md:mt-2" ref={ref}>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-6">
            {/* Icon */}
            <div className={`border-2 border-[#DF5E04] p-6 rounded-full transition-all duration-300 hover:bg-[#DF5E04] hover:scale-110 cursor-pointer ${skill.color}`}>
              {skill.icon}
            </div>

            {/* Skill Name */}
            <h1 className="uppercase text-lg font-semibold">{skill.name}</h1>

            {/* Progress Bar */}
            <div className="w-full  bg-gray-600 h-3 rounded-full overflow-hidden mt-4">
              <motion.div
                className={`${skill.color} h-3 rounded-full`}
                custom={index}
                initial={{ width: 0 }}
                animate={controls}
              />
            </div>

            {/* Percentage */}
            <span className="text-sm font-medium mb-3">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Progress
