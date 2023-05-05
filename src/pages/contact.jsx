import React from "react";
import TransitionPageEffect from "@/components/transitionPageEffect";
import Head from "next/head";
import AnimatedText from "@/components/animatedText";
import Layout from "@/components/layout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>3imad | Contact Page</title>
        <meta name="description" content="imad eddine fillali about page" />
      </Head>

      {/* The page transition effect */}
      <TransitionPageEffect />

      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Contact 📨!"
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />

          {/* The main from */}
          <form
            action=""
            className="flex flex-col gap-5 text-lg font-bold dark:text-light">
            {/* Fullname & email */}
            <div className="flex items-center justify-between w-full gap-10 md:gap-6 md:flex-wrap flex-nowrap">
              <div className="w-full p-2 sm:p-1 bg-dark dark:bg-light">
                <input
                  type="text"
                  className="w-full p-4 rounded-br-3xl dark:bg-dark"
                  placeholder="Full name"
                />
              </div>
              <div className="w-full p-2 sm:p-1 bg-dark dark:bg-light ">
                <input
                  type="email"
                  className="w-full p-4 rounded-br-3xl dark:bg-dark"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="w-full p-2 sm:p-1 bg-dark dark:bg-light">
              <input
                type="text"
                className="w-full p-4 rounded-br-3xl dark:bg-dark"
                placeholder="Subject"
              />
            </div>

            {/* message */}
            <div className="w-full p-2 pb-0 sm:p-1 sm:pb-0 bg-dark dark:bg-light">
              <textarea
                className="w-full p-4 rounded-br-3xl dark:bg-dark min-h-[200px]"
                placeholder="Message.."
              />
            </div>

            <div className="w-full mt-5 text-right md:text-center ">
              <button className="relative px-16 py-3 text-white duration-300 ease-linear sm:px-10 group bg-dark hover:text-dark hover:bg-light dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark ">
                Send message
                <div className="absolute w-full h-full duration-300 ease-linear border-2 border-dark top-1 left-2 group-hover:top-0 group-hover:left-0 dark:hover:border-light dark:border-light"></div>
              </button>
            </div>
          </form>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
