import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-16 cursor-grab select-none"
      src={image}
      alt="Tech logo"
      style={style}
      whileHover={{ scale: 1.1, rotate: 3 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.4}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    />
  ) : (
    <motion.div
      className="absolute px-3 py-2 text-lg text-center rounded-full ring ring-gray-700 font-light bg-storm w-[12rem] cursor-grab select-none shadow-md"
      style={style}
      whileHover={{ scale: 1.1, rotate: -2 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.4}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {text}
    </motion.div>
  );
};

export default Card;
