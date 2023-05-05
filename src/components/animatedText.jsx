import React from "react";
import { animate, motion } from "framer-motion";

// add animation to all the title
const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
// add animation for every single word in the title
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="flex dark:text-light items-center justify-center w-full pt-2 pb-[20px] mx-auto overflow-hidden text-center sm:py-0">
      <motion.h2
        className={`inline-block w-full dark:text-light text-dark font-extrabold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate">
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default AnimatedText;
