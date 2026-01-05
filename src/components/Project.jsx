import React, { useEffect, useState } from 'react'
import Title from './Title'
import { MdOutlineStar } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
const featuredProjects = [
  'Clothing-Store',
  'Car-rental',
  'Tic-Tac-Toe-',
  "bubble-shooter",
  'todo-list',
  'calculator'
]

const Project = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('https://api.github.com/users/MortazaMaruf/repos')
        .then(res => res.json())
        .then(data => {
          const selected = data.
          filter(repo =>featuredProjects.includes(repo.name))
          .sort((a,b)=> b.stargazers_count - a.stargazers_count)
          setProjects(selected)
          setLoading(false)
        })
        .catch(err => {
          console.error(err)
          setLoading(false)
        })
    }, 1200) // 1.2 sec loader

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-11/12 mx-auto lg:py-20'>
      <Title text={"Projects"} />

      {loading ? (
        <p className="text-center text-white mt-10 flex items-center justify-center h-[40h] w-full">
          <span className="loading loading-ring loading-xl w-20 text-[#DF5E04]"></span>
        </p>
      ) : (
        <div className='grid md:grid-cols-3 gap-8 mt-16'>
          {projects.map(project => (
            <div
              key={project.id}
              className='bg-gray-700/30 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-300'
            >
              <h2 className='text-3xl capitalize font-bold text-[#DF5E04]'>
                {project.name}
              </h2>

              <p className='text-sm leading-6 text-gray-400 capitalize  mt-3 min-h-[60px]'>
                {project.description || 'No description available'}
              </p>

              <div className='flex justify-between items-center mt-4 text-sm text-white'>
                <span className='text-xl font-semibold '>{project.language || 'Unknown'}</span>
                <span className='flex items-center justify-center gap-2'><MdOutlineStar size={20} /> {project.stargazers_count}</span>
              </div>

              <div className='flex gap-4 mt-6'>
                <a
                  href={project.html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center justify-center gap-2 px-4 py-2 border border-[#DF5E04] text-white rounded hover:bg-[#DF5E04]  transition-all duration-200 text-lg'
                >
                  GitHub 
                  <GoArrowUpRight size={25} />
                </a>

                {project.homepage && (
                  <a
                    href={project.homepage}
                    target='_blank'
                    rel='noreferrer'
                    className='px-4 text-lg py-2 bg-[#DF5E04] text-white border border-[#DF5E04] rounded hover:bg-transparent transition-all duration-200'
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Project
