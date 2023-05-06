import AnimatedText from "@/components/animatedText";
import { GithubIcon } from "@/components/icons";
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TransitionPageEffect from "@/components/transitionPageEffect";

// Import The projects images
import leonProjectPic from "../../public/images/projects/leon.bmp";
import kasperProjectPic from "../../public/images/projects/kasper.bmp";
import friendsProjectPic from "../../public/images/projects/friends.bmp";
import specialBitProjectPic from "../../public/images/projects/specialBit.bmp";
import typingSpeedProjectPic from "../../public/images/projects/typingSpeed.bmp";
import oldPortfolioProjectPic from "../../public/images/projects/oldPortfolio.bmp";

// The BIG project component
const BProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between p-12 border border-solid shadow-2xl dark:border-light dark:bg-dark rounded-br-2xl w-fu ll bg-light rounded-3xl border-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      {/* Add the dark shadows to your project */}
      <div className="dark:bg-light absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      {/* The project image */}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-[1.05] transition-all duration-200"
        />
      </Link>

      {/* The description part of the project */}
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        {/* The project Type */}
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        {/* The project title */}
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank">
          <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        {/* The summary of the project */}
        <p className="my-2 font-medium text-dark/70 dark:text-light sm:text-sm dark:text-light/50 ">
          {summary}
        </p>
        {/* The Links part of the project */}
        <div className="flex items-center justify-start w-full gap-3 mt-2">
          {/* Github Link */}
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          {/* Demo Link */}
          <Link
            className="px-5 py-2 text-lg font-semibold rounded-md dark:bg-light dark:text-dark bg-dark text-light sm:px-4 sm:text-base"
            href={link}
            target="_blank">
            Project Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

// The small project component
const SProject = ({ title, type, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid shadow-2xl dark:border-light dark:bg-dark rounded-br-2xl bg-light rounded-3xl border-dark xs:p-4">
      {/* Add the dark shadows to your project */}
      <div className="absolute dark:bg-light rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      {/* The project image */}
      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer ">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-[1.05] transition-all duration-200"
        />
      </Link>
      {/* The description part of the project */}
      <div className="flex flex-col items-start justify-between w-full mt-4">
        {/* The project Type */}
        <span className="text-xl font-medium dark:text-primaryDark text-primary lg:text-lg md:text-base">
          {type}
        </span>
        {/* The project title */}
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank">
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl ">
            {title}
          </h2>
        </Link>
        {/* The Links part of the project */}
        <div className="flex items-center justify-between w-full mt-2">
          {/* Demo Link */}
          <Link
            className="px-5 py-1.5 ml-4 text-lg font-semibold rounded-md bg-dark text-light dark:bg-light dark:text-dark md:text-base"
            href={link}
            target="_blank">
            Demo
          </Link>
          {/* Github Link */}
          <Link className="w-10" href={github} target="_blank md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

// The main component
const Projects = () => {
  return (
    <>
      <Head>
        <title>3imad | Projects</title>
        <meta name="description" content="imad eddine fillali projects page" />
      </Head>

      {/* The page transition effect */}
      <TransitionPageEffect />

      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 mt-[80px] xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <BProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={leonProjectPic}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={kasperProjectPic}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={friendsProjectPic}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <BProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={specialBitProjectPic}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={typingSpeedProjectPic}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={oldPortfolioProjectPic}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
