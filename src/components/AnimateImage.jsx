import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import aboutImg from '../photo/aboutphoto.jpeg'

const getRandom = (min, max) => Math.random() * (max - min) + min;

const DynamicAnimatedImage = ({Img}) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateLoop = async () => {
      while (true) {
        await controls.start({
          y: getRandom(-15, 15),
          rotate: getRandom(-10, 10),
          scale: getRandom(0.95, 1.05),
          transition: { duration: getRandom(1, 3), ease: "easeInOut" },
        });
      }
    };
    animateLoop();
  }, [controls]);

  return (
    <motion.div
      className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-gray-800/40 flex items-center justify-center overflow-hidden"
      animate={controls}
    >
      <img
        src={Img}
        alt="Hero"
        className="w-full h-full object-contain rounded-full"
      />
    </motion.div>
  );
};

export default DynamicAnimatedImage;
