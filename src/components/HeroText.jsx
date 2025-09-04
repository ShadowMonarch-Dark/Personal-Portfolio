import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Efficient", "Optimized", "Scalable"]; // aligned with DSA/CP
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-32 md:text-left">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col c-space">
        <motion.h1
          className="text-3xl md:text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Deepak
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.p
            className="text-3xl md:text-4xl font-medium text-neutral-300 leading-snug"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Competitive Programmer <br /> Passionate About Problem Solving
          </motion.p>

          <motion.div
            className="mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-5xl md:text-6xl"
            />
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl font-medium text-neutral-300 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            and Full-Stack Development
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.p
          className="text-2xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Deepak Kumar
        </motion.p>

        <div>
          <motion.p
            className="text-3xl font-bold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Solving
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-4xl"
            />
          </motion.div>

          <motion.p
            className="text-2xl font-bold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            with Code & Logic
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
