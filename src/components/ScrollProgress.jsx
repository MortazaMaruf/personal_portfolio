
import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (

    <div className="w-full h-1 leading-none">
      <motion.div
        className="h-full origin-left bg-[#DF5E04]"
        style={{ scaleX }}
      />
    </div>
  )
}
