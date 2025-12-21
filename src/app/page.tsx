import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import HeroWrapper from "@/components/Hero/HeroWrapper";
import Students from "@/components/Students";
import ReviewWrapper from "@/components/Review/ReviewWrapper";
import NewsWrapper from "@/components/News/NewsWrapper";
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
      <HeroWrapper />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Students />
      <NewsWrapper />
      <ReviewWrapper />
      <Contact />
    </>
  );
}
