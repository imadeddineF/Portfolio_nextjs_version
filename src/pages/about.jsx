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
        <title>3imad | About Page</title>
        <meta name="description" content="imad eddine fillali about page" />
      </Head>

      {/* The page transition effect */}
      <TransitionPageEffect />

      <main className="flex flex-col items-center justify-center w-full dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* Descreption */}
            <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-xl font-bold uppercase dark:text-light text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                - Hi, I am CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="my-4 font-medium">
                - I believe that design is about more than just making things
                look pretty, it is about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                - Whether I am working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            {/* My Photo */}
            <div className="relative col-span-3 p-8 border-2 border-solid dark:border-light dark:bg-dark bg-light h-max rounded-2xl border-dark xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="imad eddine fillali 3imad"
                className="w-full h-auto rounded-2xl hover:sepia cursor-pointer ease-linear duration-300 hover:scale-110 "
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
                  <AnimatedNumbres value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/50 text-dark/75 xl:text-center lg:text-lg md:text-md sm:text-base xs:text-sm">
                  Satsfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:gap-4 md:gap-2 sm:gap-1">
                <span className="inline-block font-bold text-7xl xl:!mx-auto lg:!text-5xl md:!text-4xl sm:text-3xl xs:text-2xl">
                  {" "}
                  <AnimatedNumbres value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/50 text-dark/75 xl:text-center lg:text-lg md:text-md sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:gap-4 md:gap-2 sm:gap-1">
                <span className="inline-block font-bold text-7xl xl:!mx-auto lg:!text-5xl md:!text-4xl sm:text-3xl xs:text-2xl">
                  {" "}
                  <AnimatedNumbres value={2} />+
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
