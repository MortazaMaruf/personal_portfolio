
import React, { useEffect, useState } from 'react'
import Title from './Title'
import { MdOutlineStar } from "react-icons/md"
import { GoArrowUpRight } from "react-icons/go"

const featuredProjects = [
  'Clothing-Store',
  'Car-rental',
  'Tic-Tac-Toe-',
  'bubble-shooter',
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
          const selected = data
            .filter(repo => featuredProjects.includes(repo.name))
            .sort((a, b) => b.stargazers_count - a.stargazers_count)

          setProjects(selected)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-11/12 mx-auto py-24 md:py-28">
      <Title text="Projects" />

      {loading ? (
        <div className="flex items-center justify-center h-[40vh]">
          <span className="loading loading-ring loading-xl text-[#DF5E04]"></span>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-gray-700/30 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold capitalize text-[#DF5E04]">
                {project.name}
              </h2>

              <p className="text-gray-400 mt-3 leading-6 min-h-[70px]">
                {project.description || 'No description available'}
              </p>

              <div className="flex justify-between items-center mt-4 text-white">
                <span className="font-semibold">{project.language || 'Unknown'}</span>
                <span className="flex items-center gap-1">
                  <MdOutlineStar /> {project.stargazers_count}
                </span>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[#DF5E04] rounded hover:bg-[#DF5E04] transition"
                >
                  GitHub <GoArrowUpRight />
                </a>

                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#DF5E04] rounded hover:bg-transparent border border-[#DF5E04] transition"
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
