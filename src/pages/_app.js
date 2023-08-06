import Layout from '@/components/general/global/Layout'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';
import AOS from "aos";

import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Evangelina Perez</title>
        <meta name="description" content="Clases de canto" />
        <link rel="icon" href="/tab.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    </>
  )
}
