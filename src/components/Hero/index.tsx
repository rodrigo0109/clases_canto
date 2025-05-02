"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="z-10 flex h-[800px] items-center justify-center overflow-hidden bg-hero bg-cover bg-center bg-no-repeat pb-4 pt-20 opacity-80 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container m-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-sequel flex flex-col text-center text-4xl font-bold tracking-wide xl:text-7xl"
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
