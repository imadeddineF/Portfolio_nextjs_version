import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./lilcon";

const Details = ({ position, company, companyLink, time, address, work, technologies }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 firt:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="text-2xl font-bold capitalize cursor-pointer sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark hover:underline">
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>

        <p className="w-full mt-2 font-medium text-red-200 md:text-sm">
          <span className="w-full font-medium text-blue-400 md:text-sm">Technologies : </span>
          {technologies}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute dark:bg-light left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            position="Front-end Web Developer"
            companyLink="https://www.atlas-marketspace.com"
            company="Atlas Marketplace"
            time="Juin 23 - September 23"
            address="Algiers, Algeria"
            work="Worked on a team responsible for developing the entire Dashboards
              and the main website (I built the main website all by myself) of the project including improving the SEO results 
              and developing new tools for the main dashboard and the super admin dashboard."
            technologies="Next Js, React Js, Typescript, Redux, Material UI, Tailwind, and multiple packages.."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
