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

          <div className="">
            <h3 className=" text-dark dark:text-light">
              Feel free to contact me ( imadeddinefillalipro@gmail.com )
            </h3>
            <form action="">div</form>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
