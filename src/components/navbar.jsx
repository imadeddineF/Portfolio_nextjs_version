import { React, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./icons";
import { motion } from "framer-motion";
import UseThemeSwitcher from "./hooks/useThemeSwitcher";

// cteate a custom Link component for large screens
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {/* add the innerHTML here  */}
      {title}
      {/* add the underline when hovering & when being in it's path using useRouter */}
      <span
        className={`absolute dark:bg-light left-0 inline-block h-[1.5px] -bottom-0.5 bg-dark group-hover:w-full transition-[width] ease duration-300  ${
          router.asPath === href ? "w-full" : "w-0"
        }`}>
        &nbsp;
      </span>
    </Link>
  );
};

// cteate a custom Link component for medium & small screens
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  // function for close the window menu when the user go to another page
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}>
      {/* add the innerHTML here  */}
      {title}
      {/* add the underline when hovering & when being in it's path using useRouter */}
      <span
        className={`absolute  left-0 inline-block h-[1.5px] -bottom-0.5 bg-light dark:bg-dark group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}>
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  // add the switcher icon
  const [mode, setMode] = UseThemeSwitcher();

  // The burger icon
  const [isOpen, setIsOpen] = useState(false);

  // Function for handle the burger icon
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px-20 md:px-16 sm:px-12">
      {/* Add the burger icon when the screen size in small enouth */}
      <button
        className="flex-col items-center justify-center hidden my-2 xl:flex"
        onClick={handleClick}>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
          }`}></span>
      </button>

      {/* Navbar for large screens */}
      <div className="flex items-center justify-between w-full xl:hidden">
        {/* pages links part */}
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink
            href="/certifications"
            title="Certifications"
            className="ml-4"
          />
          <CustomLink href="/articles" title="Articles" className="mx-4" />
        </nav>
        {/* social media icons links part */}
        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href="https://www.linkedin.com/in/imad-eddine-fillali-7303b5222"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3">
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/imadeddineF"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3">
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https//twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3">
            <TwitterIcon />
          </motion.a>

          {/* Add Dark Theme Button Switcher */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center p-1 ml-3 rounded-full ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}>
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Navbar for mobile screens */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center z-30 bg-dark/90 dark:bg-light/60 rounded-lg backdrop-blur-md py-32 justify-between min-w-[40vw] lg:min-w-[60vw] sm:min-w-[75vw] xs:min-w-[85vw] flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-75">
          {/* pages links part */}
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/certifications"
              title="Certifications"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>
          {/* social media icons links part */}
          <nav className="flex flex-wrap items-center justify-center mt-5">
            <motion.a
              href="https://www.linkedin.com/in/imad-eddine-fillali-7303b5222"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1">
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/imadeddineF"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-3 rounded-full w-7 bg-light dark:bg-dark sm:mx-1">
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https//twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1">
              <TwitterIcon />
            </motion.a>

            {/* Add Dark Theme Button Switcher */}
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`flex items-center justify-center p-1 ml-3 rounded-full ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}>
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      {/* The logo in the middle part */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
