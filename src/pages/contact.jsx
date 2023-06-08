import { React, useState } from "react";
import TransitionPageEffect from "@/components/transitionPageEffect";
import Head from "next/head";
import AnimatedText from "@/components/animatedText";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const onChange = (e) => {
    setContactData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (
      contactData.fullName.trim() !== "" &&
      contactData.email.trim() !== "" &&
      contactData.message.trim() !== ""
    ) {
      setLoading(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          e.target,
          process.env.NEXT_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            alert(
              "Message Sent, We will get back to you shortly" + result.text
            );
          },
          (error) => {
            alert("An error occurred, Please try again" + error.text);
          }
        )
        .finally(() => setLoading(false));
    } else {
      alert("some fields must not be empty!");
    }
  };

  return (
    <>
      <Head>
        <title>3imad | Contact</title>
        <meta name="description" content="imad eddine fillali about page" />
      </Head>

      {/* The page transition effect */}
      <TransitionPageEffect />

      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Get In Touch 📨!"
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />

          {/* The main from */}
          <form
            onSubmit={onsubmit}
            action=""
            className="flex flex-col gap-5 text-lg font-bold dark:text-light">
            {/* Fullname & email */}
            <div className="flex items-center justify-between w-full gap-10 md:gap-6 md:flex-wrap flex-nowrap">
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 1, duration: 0.7, type: "spring" }}
                className="w-full p-2 sm:p-1 bg-dark dark:bg-light">
                <input
                  onChange={onChange}
                  name="fullName"
                  value={contactData.fullName}
                  type="text"
                  className="w-full p-4 sm:p-3 rounded-br-3xl dark:bg-dark"
                  placeholder="Full name"
                />
              </motion.div>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, type: "spring", delay: 1.4 }}
                className="w-full p-2 sm:p-1 bg-dark dark:bg-light ">
                <input
                  onChange={onChange}
                  name="email"
                  value={contactData.email}
                  type="email"
                  className="w-full p-4 sm:p-3 rounded-br-3xl dark:bg-dark"
                  placeholder="Email"
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, type: "spring", delay: 1.8 }}
              className="w-full p-2 sm:p-1 bg-dark dark:bg-light">
              <input
                onChange={onChange}
                name="subject"
                value={contactData.subject}
                type="text"
                className="w-full p-4 sm:p-3 rounded-br-3xl dark:bg-dark"
                placeholder="Subject"
              />
            </motion.div>

            {/* message */}
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, type: "spring", delay: 2.2 }}
              className="w-full p-2 pb-0 sm:p-1 sm:pb-0 bg-dark dark:bg-light">
              <textarea
                onChange={onChange}
                name="message"
                value={contactData.message}
                className="w-full p-4 sm:p-3 rounded-br-3xl dark:bg-dark min-h-[200px]"
                placeholder="Message.."
              />
            </motion.div>

            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, type: "spring", delay: 2.6 }}
              className="w-full mt-5 text-right md:text-center ">
              <button className="relative px-16 py-3 text-white duration-300 ease-linear sm:px-10 group bg-dark hover:text-dark hover:bg-light dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark ">
                {loading ? "loading ..." : "Send message"}
                <div className="absolute w-full h-full duration-300 ease-linear border-2 border-dark top-1 left-2 group-hover:top-0 group-hover:left-0 dark:hover:border-light dark:border-light"></div>
              </button>
            </motion.div>
          </form>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
