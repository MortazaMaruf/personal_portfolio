import React from 'react'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
       const cursorRef =  useRef(null)
        useLayoutEffect(()=> {
          const cursorMove = (dts)=>{
              gsap.from(cursorRef.current,{
                x:dts.x,
                y:dts.y,
                duration:0.5,
                delay:0.04,
                ease:"power3.out",
                opacity:1,
                skew:20
                
            })
          }
          const cursorLeave = () => {
            gsap.to(cursorRef.current,{
                opacity:0,
                delay:.04
            })
          };
             document.body.addEventListener("mousemove",cursorMove);
          document.body.addEventListener("mouseleave",cursorLeave);
          return ()=>{
            document.body.addEventListener("mousemove",cursorMove);
          document.body.addEventListener("mouseleave",cursorLeave);
          }
        },[])

  return (
    <div>
        
        <div 
     ref={cursorRef}
    className='fixed z-50 w-4 h-4 opacity-0 bg-[#DF5E04] rounded-full pointer-events-none'>
      
    </div>
    </div>
  )
}

export default Cursor
