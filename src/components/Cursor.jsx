import React from 'react'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import cursor from '../photo/cursor.png'
const Cursor = () => {
       const cursorRef =  useRef(null)
        useLayoutEffect(()=> {
          const cursorMove = (dts)=>{
              gsap.from(cursorRef.current,{
                x:dts.x,
                y:dts.y,
                // duration:-1,
                // delay:0.04,
                // ease:"power.out",
                opacity:1,
                // skew:20
                
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
    className=' hidden lg:block fixed z-50 w-10 opacity-0  rounded-full pointer-events-none '>
      <img src={cursor} alt="" />
    </div>
    </div>
  )
}

export default Cursor