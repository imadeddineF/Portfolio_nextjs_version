import React from "react";
import { CircularText } from "./icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed bottom-0 flex items-center justify-center overflow-hidden left-4 md:right-[-30px] xs:right-[-40px]  md:left-auto md:top-[-15px] md:bottom-auto">
      <div className="relative flex items-center justify-center w-48 h-auto ">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow md:w-32"}
        />
        <Link
          href="mailto:imadeddinefillalipro@gmail.com"
          target="_blank"
          className="absolute flex transition-all items-center justify-center w-[70px] md:!w-[45px] md:!h-[45px] md:!text-[10px] h-[70px] font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md left-1/2 top-1/2 bg-dark text-light border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
