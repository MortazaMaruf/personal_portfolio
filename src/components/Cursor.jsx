import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { div } from 'framer-motion/client';
const Cursor = () => {
       const cursorRef =  useRef(null)
        useEffect(()=> {
          const cursorMove = (e)=>{
              gsap.from(cursorRef.current,{
                x:e.x,
                y:e.y,
                duration:0.5,
                delay:0.04,
                ease:"power3.inOut",
                opacity:1,
                
            })
          }
          const cursorLeave = () => {
            gsap.to(cursorRef.current,{
                opacity:0,
            })
          };
          
          return ()=>{
            document.body.addEventListener("mousemove",cursorMove);
          document.body.addEventListener("mouseleave",cursorLeave);
          }
        },[])

  return (
    <div>
        
        <div 
     ref={cursorRef}
    className='fixed z-100 w-4 h-4 opacity-0 bg-[#DF5E04] rounded-full cursor '>
      
    </div>
    </div>
  )
}

export default Cursor
