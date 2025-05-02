import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Students from "@/components/Students";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clases de canto particulares en Buenos Aires - CABA",
  description:
    "Clases de canto personalizadas para todos los niveles en la ciudad de Buenos Aires. Aprende técnicas vocales y mejora tu voz con una profesora experimentada.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Students />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
