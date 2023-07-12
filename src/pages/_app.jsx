import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

// add the font familly
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {/* add the head html section */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* the main app */}
      <main
        className={`${montserrat.variable} font-mont dark:bg-dark bg-light w-full min-h-screen `}
      >
        {/* add the navbar as component */}
        <Navbar />

        {/* Add the animate presence for add the page transition */}
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
