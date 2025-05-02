import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Evangelina Pérez - Clases de Canto",
            description:
              "Clases de canto personalizadas para todos los niveles en Buenos Aires. Aprende técnica vocal con una profesora experimentada.",
            url: "https://www.evangelinaperez.com",
            telephone: "+54 9 11 5456 8278",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ciudad Autónoma de Buenos Aires",
              addressRegion: "Buenos Aires",
              addressCountry: "AR",
            },
            image: "https://www.evangelinaperez.com/imagen.png",
            priceRange: "$$",
            sameAs: [
              "https://www.instagram.com/edeevangelina/",
              "https://wa.me/5491154568278",
            ],
          }),
        }}
      />
    </Head>
  );
}
