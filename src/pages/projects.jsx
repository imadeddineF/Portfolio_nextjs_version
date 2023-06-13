import AnimatedText from '@/components/animatedText';
import { GithubIcon } from '@/components/icons';
import Layout from '@/components/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TransitionPageEffect from '@/components/transitionPageEffect';

// Import The projects images
import leonProjectPic from '../../public/images/projects/leon.bmp';
import kasperProjectPic from '../../public/images/projects/kasper.bmp';
import friendsProjectPic from '../../public/images/projects/friends.bmp';
import specialBitProjectPic from '../../public/images/projects/specialBit.bmp';
import typingSpeedProjectPic from '../../public/images/projects/typingSpeed.bmp';
import oldPortfolioProjectPic from '../../public/images/projects/oldPortfolio.bmp';
import metaversusProject from '../../public/images/projects/metaversus.bmp';

// The project component
const SProject = ({ title, technologies, summary, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 transition-all duration-300 border shadow-2xl hover:border-4 group dark:border-light dark:bg-dark rounded-br-2xl bg-light rounded-3xl border-dark xs:p-4">
      {/* Add the dark shadows to your project */}
      <div className="absolute dark:bg-light rounded-br-3xl top-0 -right-3 group-hover:right-0 group-hover:w-full group-hover:h-full -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark md:-right-2 md:w-[101%] xs:h-[102%] transition-all duration-300 xs:rounded-[1.5rem]" />
      {/* The project image */}
      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-[1.05] transition-all duration-200"
        />
      </Link>
      {/* The description part of the project */}
      <div className="flex flex-col items-start justify-between w-full mt-4">
        {/* The project technologies */}
        <span className="font-medium text-md dark:text-primaryDark text-primary lg:text-lg md:text-base">
          Technologies : {technologies}
        </span>
        {/* The project title */}
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl ">
            {title}
          </h2>
        </Link>
        {/* The summary of the project */}
        <p className="my-2 font-medium text-dark/70 dark:text-light sm:text-sm dark:text-light/50 ">
          {summary}
        </p>
        {/* The Links part of the project */}
        <div className="flex items-center justify-between w-full mt-2">
          {/* Demo Link */}
          <Link
            className="px-5 py-1.5 hover:px-6 ml-4 text-lg font-semibold rounded-md bg-dark text-light dark:bg-light dark:text-dark md:text-base dark:hover:bg-gray-400 duration-300 hover:bg-gray-600 transition-all"
            href={link}
            target="_blank"
          >
            Demo
          </Link>
          {/* Github Link */}
          <Link
            className="w-10 transition-all hover:scale-110"
            href={github}
            target="_blank md:w-6"
          >
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
            text="What I Built!"
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 mt-[80px] xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {/* Project Zero */}
            <div className="col-span-6 transition-all duration-300 sm:col-span-12 hover:-translate-y-3">
              <SProject
                title="Metaversus"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={metaversusProject}
                link="https://metaverse-mu-nine.vercel.app"
                technologies="(NEXT JS, TAILWIND CSS, FRAMER-MOTION)"
                github="https://github.com/imadeddineF/Metaverse-app"
              />
            </div>
            {/* Project One */}
            <div className="col-span-6 transition-all duration-300 sm:col-span-12 hover:-translate-y-3">
              <SProject
                title="Kasper"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={kasperProjectPic}
                link="https://imadeddinef.github.io/Kasper"
                technologies="(HTML, CSS)"
                github="https://github.com/imadeddineF/Kasper"
              />
            </div>
            {/* Project Two */}
            <div className="col-span-6 transition-all duration-300 sm:col-span-12 hover:-translate-y-3">
              <SProject
                title="Friends"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={friendsProjectPic}
                link="https://imadeddinef.github.io/Friends"
                technologies="(HTML, CSS, JAVASCRIPT)"
                github="https://github.com/imadeddineF/Friends"
              />
            </div>
            {/* Project Three */}
            <div className="col-span-6 transition-all duration-300 sm:col-span-12 hover:-translate-y-3">
              <SProject
                title="Typing Speed Test Game"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={typingSpeedProjectPic}
                link="https://imadeddinef.github.io/Typing-Speed-Test-Game"
                technologies="(HTML, CSS, JAVASCRIPT)"
                github="https://github.com/imadeddineF/Typing-Speed-Test-Game"
              />
            </div>
            {/* Project Four */}
            <div className="col-span-6 transition-all duration-300 sm:col-span-12 hover:-translate-y-3">
              <SProject
                title="My Old Portfolio"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={oldPortfolioProjectPic}
                link="https://imadeddinef.github.io/Old_Portfolio"
                technologies="(HTML, CSS, JAVASCRIPT)"
                github="https://github.com/imadeddineF/Old_Portfolio"
              />
            </div>
            {/* Project Five */}
            <div className="col-span-6 transition-all duration-300 sm:col-span-12 hover:-translate-y-3">
              <SProject
                title="Leon"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={leonProjectPic}
                link="https://imadeddinef.github.io/Leon"
                technologies="(HTML, CSS)"
                github="https://github.com/imadeddineF/Leon"
              />
            </div>
            {/* Project Six */}
            <div className="col-span-6 transition-all duration-300 sm:col-span-12 hover:-translate-y-3">
              <SProject
                title="SpecialBit"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                img={specialBitProjectPic}
                link="https://imadeddinef.github.io/SpecialBit"
                technologies="(HTML, CSS, JAVASCRIPT)"
                github="https://github.com/imadeddineF/SpecialBit"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
