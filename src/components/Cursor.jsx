import React from 'react'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { div } from 'framer-motion/client';
const Cursor = () => {
       const cursorRef =  useRef(null)
        useLayoutEffect(()=> {
          const cursorMove = (dts)=>{
              gsap.from(cursorRef.current,{
                x:dts.x,
                y:dts.y,
                duration:0.5,
                delay:0.04,
                ease:"elastic.out(1.2,0.4)",
                opacity:1,
                
            })
          }
          const cursorLeave = () => {
            gsap.to(cursorRef.current,{
                opacity:0,
                delay:.04
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
    className='fixed z-100 w-4 h-4 opacity-0 bg-[#DF5E04] rounded-full'>
      
    </div>
    </div>
  )
}

export default Cursor
