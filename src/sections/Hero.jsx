import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full Stack Developer",
    "DSA Enthusiast",
    "Problem Solver",
    "Open Source Learner",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const next = document.querySelector("#about");
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Generate sparkles once
  const sparkles = Array.from({ length: 25 }, () => ({
    x: Math.random() * window.innerWidth,
    yStart: -50 - Math.random() * 300,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden px-3 sm:px-6"
      style={{
        background: "radial-gradient(circle at center, #0a0f1f, #050510 70%)",
      }}
    >
      {/* Sparkling particles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400 rounded-full opacity-50"
            style={{
              width: `${s.size}px`,
              height: `${s.size}px`,
              left: s.x,
              top: s.yStart,
              willChange: "transform",
            }}
            animate={{ y: window.innerHeight + 10 }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              repeatType: "loop",
              delay: s.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating keywords */}
      <motion.div
        className="absolute left-4 sm:left-10 top-[30%] text-pink-400 font-bold text-xs sm:text-sm md:text-lg"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        Arrays
      </motion.div>
      <motion.div
        className="absolute right-4 sm:right-10 top-[40%] text-green-400 font-bold text-xs sm:text-sm md:text-lg"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        Graphs
      </motion.div>
      <motion.div
        className="absolute left-10 sm:left-20 bottom-28 text-yellow-400 font-bold text-xs sm:text-sm md:text-lg"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        DP
      </motion.div>
      <motion.div
        className="absolute right-10 sm:right-20 bottom-32 text-purple-400 font-bold text-xs sm:text-sm md:text-lg"
        animate={{ x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        Binary Tree
      </motion.div>

      {/* Cube */}
      <motion.div
        drag
        dragConstraints={sectionRef}
        className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mb-10 cube-container cursor-grab active:cursor-grabbing z-10"
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

      {/* Hero text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center z-10 leading-snug"
      >
        Deepak Kumar
      </motion.h1>

      {/* Typewriter roles */}
      <motion.span
        key={roleIndex}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-cyan-300 text-sm sm:text-lg md:text-xl mt-2 h-6"
      >
        {roles[roleIndex]}
      </motion.span>

      {/* Scroll down */}
      <motion.div
        onClick={handleScroll}
        className="absolute bottom-8 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center items-start p-1">
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
        <span className="text-xs text-gray-400 mt-2">Scroll</span>
      </motion.div>

      {/* CSS */}
      <style>{`
        .cube-container { perspective: 1400px; }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spin 18s infinite linear;
        }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: bold;
          color: #00ffff;
          background: rgba(10, 25, 47, 0.6);
          border: 2px solid rgba(0, 255, 255, 0.4);
          box-shadow: inset 0 0 25px rgba(0, 255, 255, 0.3),
                      0 0 35px rgba(0, 255, 255, 0.5);
          backdrop-filter: blur(8px);
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
          border-radius: 8px;
        }
        .cube:hover {
          animation-play-state: paused;
          transform: scale(1.05);
        }
        .front  { transform: rotateY(0deg) translateZ(80px); }
        .back   { transform: rotateY(180deg) translateZ(80px); }
        .right  { transform: rotateY(90deg) translateZ(80px); }
        .left   { transform: rotateY(-90deg) translateZ(80px); }
        .top    { transform: rotateX(90deg) translateZ(80px); }
        .bottom { transform: rotateX(-90deg) translateZ(80px); }
        @keyframes spin {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
