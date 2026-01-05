
import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', to: 'home' },
    { name: 'About Me', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact Me', to: 'contact' },
  ];

  return (
    <div className='bg-[#121212] border-b border-[#DF5E04] fixed w-full z-50'>
      <div className='w-11/12 mx-auto flex items-center justify-between py-3'>
        {/* Logo */}
        <div className='cursor-pointer hover:text-[#84A98C] text-[#DF5E04]'>
          <h1 className='text-2xl logo tracking-tighter'>mortaza.</h1>
          <h1 className='text-5xl logo tracking-tighter'>maruf.</h1>
        </div>

        {/* Desktop Links */}
        <nav className='hidden md:flex gap-10 items-center justify-center text-xl capitalize text-white'>
          {links.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onSetActive={() => setActive(link.to)}
              className={`cursor-pointer transition-all duration-200 ${
                active === link.to ? 'text-[#84A98C]' : 'hover:text-[#DF5E04]'
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Github icon */}
        <nav className='hidden md:flex text-white'>
          <a
            className='hover:text-[#DF5E04] transition-all duration-200'
            href="https://github.com/MortazaMaruf"
            target='_blank'
            rel="noreferrer"
          >
            <FaGithub size={25} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className='md:hidden text-white text-2xl' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
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
              offset={-80}
              spy={true}
              onSetActive={() => setActive(link.to)}
              onClick={() => setIsOpen(false)} // close menu on click
              className={`cursor-pointer text-xl transition-all duration-200 ${
                active === link.to ? 'text-[#84A98C]' : 'hover:text-[#DF5E04]'
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}

          <a
            className='hover:text-[#DF5E04] transition-all duration-200 text-xl'
            href="https://github.com/MortazaMaruf"
            target='_blank'
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar
