import React, { useState, useEffect,useRef,useLayoutEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaGithub, FaBars, FaTimes } from "react-icons/fa"
import ScrollProgress from "./ScrollProgress"
import { gsap } from "gsap";
import './Navbar.css'
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { name: 'Home', to: 'home' },
    { name: 'About Me', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact Me', to: 'contact' },
  ]

  // Offset for scroll link
  const getOffset = () => (window.innerWidth < 768 ? -60 : -80)

  // Scroll listener for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + Math.abs(getOffset()) + 5
      const windowBottom = window.scrollY + window.innerHeight
      const sections = links.map(link => document.getElementById(link.to))

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i]) {
          // Last section detection
          if (windowBottom >= sections[i].offsetTop + sections[i].offsetHeight / 2) {
            setActive(links[i].to)
            break
          } else if (scrollPos >= sections[i].offsetTop) {
            setActive(links[i].to)
            break
          }
        }
      }
    }

  

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const logoRef = useRef([]);
   logoRef.current = []; // reset on every render

  const addToRefs = (el) => {
    if (el && !logoRef.current.includes(el)) {
      logoRef.current.push(el);
    }
  };
  useLayoutEffect(()=>{
    let ctx =gsap.context( () => {
      const tl = gsap.timeline();
      tl.from(logoRef.current[0]  ,{
        y:-100,
        duration:.1,
        delay:.4,
        opacity:0
      })
      tl.from(logoRef.current[1],{
        x:-100,
        duration:.1,
        opacity:0,
      })
     
    })
    return ()=> ctx.revert();
    
  },[])
useGSAP(()=>{
  gsap.from(".navItems",{
    y:50,
    duration:.2,
    delay:.4,
    opacity:0,
    stagger:{
      amount:0.4
    }
  })
})
  return (
    <div className='bg-[#121212] border-b border-[#DF5E04] fixed w-full z-40'>
      <div className='w-11/12 mx-auto flex items-center justify-between  py-3'>
        {/* Logo */}
        <div 
          className='cursor-pointer hover:text-[#84A98C]  text-[#DF5E04] logo hover:scale-105'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h1 ref={addToRefs}  className='text-2xl logo tracking-wide'>mortaza.</h1>
          <h1 ref={addToRefs}  className='text-5xl logo tracking-wider'>maruf.</h1>
        </div>

        {/* Desktop Links */}
        <nav className='hidden md:flex gap-10 items-center justify-center text-xl capitalize navItems text-white '>
      
            {links.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={getOffset()}
              className={`cursor-pointer transition-all duration-200 ${
                active === link.to ? 'text-[#84A98C]' : 'hover:text-[#DF5E04]'
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* GitHub icon */}
      <div className='navItems'>
          <a
          className='text-white hidden  md:flex hover:text-[#DF5E04] transition-all duration-200'
          href="https://github.com/MortazaMaruf"
          target='_blank'
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
      </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center gap-6'>
          {/* GitHub icon for mobile */}
          <a
            className='text-white hover:text-[#DF5E04] transition-all duration-200'
            href="https://github.com/MortazaMaruf"
            target='_blank'
            rel="noreferrer"
          >
            <FaGithub size={25} />
          </a>

          <div className='text-2xl' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-[#121212] w-full flex flex-col items-center gap-6 py-6 border-t border-[#DF5E04]'>
          {links.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={getOffset()}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer text-xl transition-all duration-200 ${
                active === link.to ? 'text-[#84A98C]' : 'hover:text-[#DF5E04]'
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      )}
       
        <ScrollProgress />
      
    </div>
  )
}

export default Navbar
