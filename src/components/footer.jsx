import React from "react";
import Layout from "./layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid dark:text-light dark:border-light border-dark sm:text-base">
      <Layout className="flex items-center justify-between py-8 lg:!text-[16px] md:flex-col md:gap-2 xl:!py-10 lg:!py-8 md:!py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Made with <span className="px-1 text-2xl text-red-500">&hearts;</span>{" "}
          by&nbsp;
          <Link href="/" className="font-bold underline underline-offset-4">
            3imad
          </Link>
        </div>
        <Link
          href="/contact"
          className="underline transition-all underline-offset-4 hover:mb-1">
          Say hello 👋
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
