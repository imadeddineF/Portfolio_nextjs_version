import React from "react";
import Head from "next/head";
import TransitionPageEffect from "@/components/transitionPageEffect";

const Articles = () => {
  return (
    <>
      <Head>
        <title>3imad | Articles</title>
        <meta name="description" content="imad eddine fillali articles page" />
      </Head>

      {/* The page transition */}
      <TransitionPageEffect />

      <main className="min-h-[calc(100vh-190px)] relative dark:text-light">
        <p className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          Coming Soon ...
        </p>
      </main>
    </>
  );
};

export default Articles;
