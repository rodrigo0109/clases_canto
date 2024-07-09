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
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
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

