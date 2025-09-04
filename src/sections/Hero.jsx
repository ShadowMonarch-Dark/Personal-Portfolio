import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const next = document.querySelector("#about");
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden px-3 sm:px-6"
      style={{
        background:
          "linear-gradient(-45deg, #050510, #0a0f1f, #111827, #1a1a2e)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -150],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Cube */}
      <motion.div
        drag
        dragConstraints={sectionRef}
        className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 mb-6 cube-container cursor-grab active:cursor-grabbing"
      >
        <div className="cube">
          <div className="face front">C++</div>
          <div className="face back">Java</div>
          <div className="face left">React</div>
          <div className="face right">LeetCode</div>
          <div className="face top">Codeforces</div>
          <div className="face bottom">DSA</div>
        </div>
      </motion.div>

      {/* Floating keywords */}
      <motion.div
        className="absolute left-2 sm:left-10 top-[60%] sm:top-1/2 text-pink-400 font-bold text-xs sm:text-sm md:text-lg cursor-grab"
        drag
        dragConstraints={sectionRef}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        Arrays
      </motion.div>
      <motion.div
        className="absolute right-2 sm:right-10 top-[60%] sm:top-1/2 text-green-400 font-bold text-xs sm:text-sm md:text-lg cursor-grab"
        drag
        dragConstraints={sectionRef}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        Graphs
      </motion.div>
      <motion.div
        className="absolute bottom-20 sm:bottom-24 text-yellow-400 font-bold text-xs sm:text-sm md:text-lg cursor-grab"
        drag
        dragConstraints={sectionRef}
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        DP
      </motion.div>
      <motion.div
        className="absolute top-16 sm:top-24 left-4 sm:left-20 text-yellow-400 font-bold text-xs sm:text-sm md:text-lg cursor-grab"
        drag
        dragConstraints={sectionRef}
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        Binary Tree
      </motion.div>
      <motion.div
        className="absolute top-16 sm:top-24 right-4 sm:right-20 text-yellow-400 font-bold text-xs sm:text-sm md:text-lg cursor-grab"
        drag
        dragConstraints={sectionRef}
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        Binary Search
      </motion.div>

      {/* Hero text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl sm:text-3xl md:text-5xl font-extrabold text-center z-10 leading-snug mt-4"
      >
        Deepak Kumar
        <br />
        <span className="text-cyan-400 block text-sm sm:text-lg md:text-2xl">
          Full Stack Developer & DSA Enthusiast
        </span>
      </motion.h1>

      {/* Scroll down button */}
      <motion.div
        onClick={handleScroll}
        className="absolute bottom-4 sm:bottom-8 flex flex-col items-center justify-center cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/40 hover:bg-cyan-500/20">
          <span className="text-cyan-400">↓</span>
        </div>
        <span className="text-[10px] sm:text-xs text-gray-300 mt-1">
          Scroll
        </span>
      </motion.div>

      {/* CSS */}
      <style>{`
        @keyframes gradientShift {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .cube-container { perspective: 1400px; }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spin 16s infinite linear;
        }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
          color: #00ffff;
          background: rgba(15, 23, 42, 0.3);
          border: 2px solid rgba(0, 255, 255, 0.5);
          box-shadow: inset 0 0 20px rgba(0, 255, 255, 0.3),
                      0 0 25px rgba(0, 255, 255, 0.5);
          backdrop-filter: blur(6px);
          text-shadow: 0 0 8px #00ffff, 0 0 15px #00ffff;
        }
        @media (min-width: 640px) {
          .face { font-size: 1rem; }
        }
        @media (min-width: 768px) {
          .face { font-size: 1.3rem; }
        }
        .front  { transform: translateZ(90px); }
        .back   { transform: rotateY(180deg) translateZ(90px); }
        .right  { transform: rotateY(90deg) translateZ(90px); }
        .left   { transform: rotateY(-90deg) translateZ(90px); }
        .top    { transform: rotateX(90deg) translateZ(90px); }
        .bottom { transform: rotateX(-90deg) translateZ(90px); }

        @keyframes spin {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
