
import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll() // window scroll
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="fixed top-0 right-0 lg:right-10 w-1 h-full z-50 bg-gray-800/20">
      <motion.div
        className="w-1 bg-[#DF5E04] origin-top h-full"
        style={{ scaleY }}
      />
    </div>
  )
}
