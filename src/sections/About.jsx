import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiCplusplus, SiJavascript } from "react-icons/si";
import { useRef } from "react";

const techStack = [
  {
    name: "C++",
    icon: <SiCplusplus size={40} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Java",
    icon: <FaJava size={40} />,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} />,
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "React",
    icon: <FaReact size={40} />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} />,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} />,
    color: "from-emerald-400 to-green-600",
  },
];

const highlights = [
  "⚡ Solved 1000+ DSA problems on LeetCode & Codeforces",
  "🏆 Specialized in Dynamic Programming, Graphs & Trees",
  "🌐 Built full-stack apps with React, Node.js, Express & MongoDB",
  "🎨 Crafted responsive UIs using TailwindCSS & modern JS",
  "🚀 Deployed production-ready apps with Vite & Firebase",
  "🤖 Exploring AI-powered web apps & smart integrations",
];

const About = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#111] text-gray-200 py-20 px-8 overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,132,255,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,0,200,0.15),transparent_50%)]"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
      >
        Who Am I?
      </motion.h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Bio + Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold text-white">
            Hi, I’m <span className="text-blue-400">Deepak Kumar</span> 👋
          </h3>
          <p className="text-lg leading-relaxed text-gray-300">
            A <span className="text-pink-400">Competitive Programmer</span> &{" "}
            <span className="text-cyan-400">Frontend Developer</span>
            passionate about solving problems and building interactive user
            experiences. I love designing algorithms and crafting full-stack
            applications with modern technologies.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {highlights.map((point, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 25px rgba(0,255,255,0.4)",
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 + i * 0.5 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-sm"
              >
                {point}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Tech Orbs */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex flex-wrap justify-center items-center gap-10"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className={`relative w-28 h-28 rounded-full flex flex-col justify-center items-center bg-gradient-to-br ${tech.color} border border-gray-700/50 backdrop-blur-lg cursor-grab`}
              whileHover={{ scale: 1.2, rotate: 12 }}
              drag
              dragConstraints={containerRef}
              dragElastic={0.7}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + index * 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="text-4xl text-white drop-shadow-lg">
                {tech.icon}
              </div>
              <p className="mt-2 text-sm text-white font-medium">{tech.name}</p>
              <div className="absolute inset-0 rounded-full bg-white/10 blur-xl animate-pulse" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fixed CTA Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px rgba(59,130,246,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 rounded-full font-semibold text-lg 
                     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                     text-white shadow-lg transition-all duration-300 animate-bounce"
        >
          Let’s Build Together 🚀
        </motion.a>
      </div>
    </section>
  );
};

export default About;
