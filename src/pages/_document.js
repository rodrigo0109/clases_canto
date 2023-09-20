import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const clairtyCode = `
(function (c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ixvxdpl9kj");
`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script id="ms-clarity" strategy="beforeInteractive">
            {clairtyCode}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
