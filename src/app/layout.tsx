"use client";

import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      
      <head /> 
        <link rel="icon" href={`/tab.png`} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Clases de canto personalizadas para todos los niveles en la ciudad de Buenos Aires. Aprende técnicas vocales y mejora tu voz con una profesora experimentada." />
        <meta name="keywords" content="clases de canto, técnica vocal, lecciones de canto, profesora de canto, canto para principiantes, entrenamiento vocal, clases de canto particulares, clases de canto caba" />
        <meta name="author" content="Evangelina Pérez" />
        <link rel="icon" href={`/tab.png`} />
        <title>Evangelina Pérez</title>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Clases de canto - Evangelina Pérez" />
        <meta property="og:description" content="Clases de canto personalizadas para todos los niveles. Aprende técnicas vocales y mejora tu voz con una profesora experimentada." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evangelinaperez.com" />
        <meta property="og:image" content="https://www.evangelinaperez.com/imagen.png" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clases de Canto con Evangelina Pérez" />
        <meta name="twitter:description" content="Clases de canto personalizadas para todos los niveles. Aprende técnicas vocales y mejora tu voz con una profesora experimentada." />
        <meta name="twitter:image" content="https://www.evangelinaperez.com/imagen.png" />
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`} suppressHydrationWarning={true}>
        <Providers>
          {children}
          <Footer />
          <ScrollToTop />
          <DyWpp />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";import DyWpp from "@/components/DynamicComps/DynamicWpp";

