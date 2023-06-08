import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center px-6 py-3 
                font-semibold rounded-full cursor-pointer dark:text-dark
                dark:bg-light bg-dark text-light shadow-dark lg:py-2 
                lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent 
                xs:dark:bg-transparent xs:text-dark xs:dark:text-light 
                xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32 sm:text-4xl">
        Skills
      </h2>
      <div
        className="relative flex items-center justify-center w-full h-screen 
                  rounded-full dark:bg-circularDark bg-circularLight lg:h-[80vh] 
                  md:h-[70vh] sm:h-[60vh] xs:h-[50vh] 
                  lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                  md:bg-circularLightMd md:dark:bg-circularDarkMd
                  sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center p-8 font-extrabold rounded-full cursor-pointer dark:text-dark dark:bg-light bg-dark text-light shadow-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}>
          WEB
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-27vw" y="2vw" />
        <Skill name="JavaScript" x="19vw" y="6vw" />
        <Skill name="TypeScript" x="15vw" y="18vw" />
        <Skill name="SASS" x="0vw" y="11vw" />
        <Skill name="Bootstrap" x="-20vw" y="-15vw" />
        <Skill name="Tailwind" x="15vw" y="-12vw" />
        <Skill name="React JS" x="33vw" y="-5vw" />
        <Skill name="Next JS" x="0vw" y="-21vw" />
      </div>
    </>
  );
};

export default Skills;
