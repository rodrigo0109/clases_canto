import Layout from '@/components/general/global/Layout'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';
import AOS from "aos";
import Script from 'next/script'


import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  
  const clairtyCode = `
  (function (c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "xxxxxxxxxxx");
  `
  
  return (
    <>
      <Head>
        <title>Evangelina Perez</title>
        <meta name="description" content="clases de canto zona sur Lomas de Zamora" />
        <link rel="icon" href="/tab.png" />
        <Script id="ms-clarity" strategy="beforeInteractive">
            {clairtyCode}
        </Script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    </>
  )
}
