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
 const logoText1 = "mortaza.";
  const logoText2 = "maruf.";

//  Offset for scroll link
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

  const logoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(".logo-letter-1", {
        y: -80,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: "power3.out",
      }).from(
        ".logo-letter-2",
        {
          y: 80,
          opacity: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power3.out",
        },
        
      );
    }, logoRef);

    return () => ctx.revert();
  }, []);
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
    <div className='bg-[#121212]  fixed w-full z-40'>
      <div className='w-11/12 mx-auto flex items-center justify-between  py-3'>
        {/* Logo */}
          <div
          ref={logoRef}
          className="cursor-pointer text-[#DF5E04] hover:text-[#84A98C] hover:scale-105 transition-all"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <h1 className="text-2xl tracking-wide logo">
            {logoText1.split("").map((char, i) => (
              <span key={i} className="logo-letter-1">
                {char}
              </span>
            ))}
          </h1>

          <h1 className="text-5xl tracking-wider logo">
            {logoText2.split("").map((char, i) => (
              <span key={i} className="logo-letter-2">
                {char}
              </span>
            ))}
          </h1>
        </div>
      {/* Desktop Links */}
         <nav className='hidden md:flex gap-10 items-center justify-center text-xl capitalize navItems text-white '>
      
            {links.map(link => (            <ScrollLink
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
        <div className='md:hidden bg-[#121212] w-full flex flex-col items-center gap-6 py-6 border-b border-[#DF5E04]'>
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






// import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
// import ScrollProgress from "./ScrollProgress";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [active, setActive] = useState("home");
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: "Home", to: "home" },
//     { name: "About Me", to: "about" },
//     { name: "Projects", to: "projects" },
//     { name: "Contact Me", to: "contact" },
//   ];

//   const logoText1 = "mortaza.";
//   const logoText2 = "maruf.";

//   /* ---------------- Scroll Offset ---------------- */
//   const getOffset = () => (window.innerWidth < 768 ? -60 : -80);

//   /* ---------------- Active Section Scroll ---------------- */
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + Math.abs(getOffset()) + 5;
//       const windowBottom = window.scrollY + window.innerHeight;
//       const sections = links.map((link) =>
//         document.getElementById(link.to)
//       );

//       for (let i = sections.length - 1; i >= 0; i--) {
//         if (!sections[i]) continue;

//         if (
//           windowBottom >=
//           sections[i].offsetTop + sections[i].offsetHeight / 2
//         ) {
//           setActive(links[i].to);
//           break;
//         } else if (scrollPos >= sections[i].offsetTop) {
//           setActive(links[i].to);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ---------------- Logo Letter Animation ---------------- */
//   const logoRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 0.3 });

//       tl.from(".logo-letter-1", {
//         y: -80,
//         opacity: 0,
//         duration: 0.4,
//         stagger: 0.06,
//         ease: "power3.out",
//       }).from(
//         ".logo-letter-2",
//         {
//           y: 80,
//           opacity: 0,
//           duration: 0.4,
//           stagger: 0.06,
//           ease: "power3.out",
//         },
//         "-=0.2"
//       );
//     }, logoRef);

//     return () => ctx.revert();
//   }, []);

//   /* ---------------- Nav Items Animation ---------------- */
//   useGSAP(
//     () => {
//       gsap.from(".navItems", {
//         y: 40,
//         opacity: 0,
//         duration: 0.3,
//         stagger: 0.1,
//         ease: "power2.out",
//       });
//     },
//     { dependencies: [] }
//   );

//   return (
//     <div className="bg-[#121212] fixed w-full z-40">
//       <div className="w-11/12 mx-auto flex items-center justify-between py-3">
//         {/* Logo */}
//         <div
//           ref={logoRef}
//           className="cursor-pointer text-[#DF5E04] hover:text-[#84A98C] hover:scale-105 transition-all"
//           onClick={() =>
//             window.scrollTo({ top: 0, behavior: "smooth" })
//           }
//         >
//           <h1 className="text-2xl tracking-wide logo">
//             {logoText1.split("").map((char, i) => (
//               <span key={i} className="logo-letter-1">
//                 {char}
//               </span>
//             ))}
//           </h1>

//           <h1 className="text-5xl tracking-wider logo">
//             {logoText2.split("").map((char, i) => (
//               <span key={i} className="logo-letter-2">
//                 {char}
//               </span>
//             ))}
//           </h1>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-10 items-center text-xl capitalize text-white">
//           {links.map((link) => (
//             <ScrollLink
//               key={link.to}
//               to={link.to}
//               smooth
//               duration={500}
//               offset={getOffset()}
//               className={`navItems cursor-pointer transition-all ${
//                 active === link.to
//                   ? "text-[#84A98C]"
//                   : "hover:text-[#DF5E04]"
//               }`}
//             >
//               {link.name}
//             </ScrollLink>
//           ))}
//         </nav>

//         {/* GitHub Desktop */}
//         <div className="hidden md:flex navItems">
//           <a
//             href="https://github.com/MortazaMaruf"
//             target="_blank"
//             rel="noreferrer"
//             className="text-white hover:text-[#DF5E04]"
//           >
//             <FaGithub size={25} />
//           </a>
//         </div>

//         {/* Mobile Buttons */}
//         <div className="md:hidden flex items-center gap-6">
//           <a
//             href="https://github.com/MortazaMaruf"
//             target="_blank"
//             rel="noreferrer"
//             className="text-white hover:text-[#DF5E04]"
//           >
//             <FaGithub size={25} />
//           </a>

//           <div
//             className="text-2xl text-white cursor-pointer"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#121212] w-full flex flex-col items-center gap-6 py-6 border-b border-[#DF5E04]">
//           {links.map((link) => (
//             <ScrollLink
//               key={link.to}
//               to={link.to}
//               smooth
//               duration={500}
//               offset={getOffset()}
//               onClick={() => setIsOpen(false)}
//               className={`cursor-pointer text-xl transition-all ${
//                 active === link.to
//                   ? "text-[#84A98C]"
//                   : "hover:text-[#DF5E04]"
//               }`}
//             >
//               {link.name}
//             </ScrollLink>
//           ))}
//         </div>
//       )}

//       <ScrollProgress />
//     </div>
//   );
// };

// export default Navbar;
