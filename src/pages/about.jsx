import React, { useRef, useEffect } from "react";
import Head from "next/head";
import AnimatedText from "@/components/animatedText";
import Layout from "@/components/layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/me.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import TransitionPageEffect from "@/components/transitionPageEffect";

const AnimatedNumbres = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 5000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>3imad | About</title>
        <meta name="description" content="imad eddine fillali about page" />
      </Head>

      {/* The page transition effect */}
      <TransitionPageEffect />

      <main className="flex flex-col items-center justify-center w-full dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Who is 3imad!"
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* Descreption */}
            <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-xl font-bold uppercase dark:text-light text-dark/75">
                About Me
              </h2>
              <p className="font-medium leading-7">
                - Hello! I am 3imad, a talented web developer specializing in
                front-end development. My passion lies in crafting captivating
                and interactive digital experiences that are not only visually
                stunning but also highly functional and responsive. With over a
                year of experience in the field, I am constantly seeking fresh
                and innovative approaches to transform my clients designs into
              </p>

              <p className="mt-4 font-medium leading-7">
                - Whenever I work on a new website, I bring my unwavering
                commitment to transforming the design into a pixel-perfect
                masterpiece. I eagerly anticipate the opportunity to utilize my
                skills and passion in your next project.
              </p>
            </div>

            {/* My Photo */}
            <div className="relative col-span-3 p-8 border-2 border-solid dark:border-light dark:bg-dark bg-light h-max rounded-2xl border-dark xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="imad eddine fillali 3imad"
                className="w-full h-auto duration-300 ease-linear cursor-pointer rounded-2xl hover:sepia hover:scale-110 "
                priority
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
              />
            </div>

            {/* Some Statistics */}
            <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:gap-4 md:gap-2 sm:gap-1">
                <span className="inline-block font-bold text-7xl xl:!mx-auto lg:!text-5xl md:!text-4xl sm:text-3xl xs:text-2xl">
                  {" "}
                  <AnimatedNumbres value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/50 text-dark/75 xl:text-center lg:text-lg md:text-md sm:text-base xs:text-sm">
                  Satsfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:gap-4 md:gap-2 sm:gap-1">
                <span className="inline-block font-bold text-7xl xl:!mx-auto lg:!text-5xl md:!text-4xl sm:text-3xl xs:text-2xl">
                  {" "}
                  <AnimatedNumbres value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/50 text-dark/75 xl:text-center lg:text-lg md:text-md sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:gap-4 md:gap-2 sm:gap-1">
                <span className="inline-block font-bold text-7xl xl:!mx-auto lg:!text-5xl md:!text-4xl sm:text-3xl xs:text-2xl">
                  {" "}
                  <AnimatedNumbres value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/50 text-dark/75 xl:text-center lg:text-lg md:text-md sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
