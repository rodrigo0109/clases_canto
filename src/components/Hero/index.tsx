"use client";

import { motion } from "framer-motion";
import { SectionBackgrounds } from "@/sanity/lib/types";

interface HeroProps {
  backgrounds: SectionBackgrounds | null;
}

const Hero = ({ backgrounds }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative z-10 flex h-[800px] items-center justify-center overflow-hidden pb-4 pt-20 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      {backgrounds?.heroBackground && (
        <>
          <div
            className="absolute -inset-2 -z-10"
            style={{
              backgroundImage: `url(${backgrounds.heroBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(0px)",
              transform: "scale(1.05)",
            }}
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
        </>
      )}
      <div className="container m-auto text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col text-center font-sequel text-4xl font-bold tracking-wide xl:text-7xl"
        >
          <h1>Clases de canto</h1>
          <span className="text-2xl font-semibold xl:text-4xl">
            Evangelina Pérez
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
