"use-client";
import Link from "next/link";
import React from "react";

const Card = ({ title, index, message }: any) => {
  const bgImages = [
    "/images/card/1.jpeg",
    "/images/card/2.jpeg",
    "/images/card/3.jpeg",
    "/images/card/4.jpeg",
    "/images/card/5.jpeg",
  ];
  return (
    <div
      className="font-sequel mt-8 flex h-[350px] w-full flex-col items-center justify-between border bg-cover bg-center px-4 py-6 text-center text-2xl font-bold tracking-wide text-white shadow-lg lg:mr-8 xl:w-1/4"
      style={{ backgroundImage: `url(${bgImages[index]})` }}
    >
      <h4>{title}</h4>
      <button className="group relative z-0 h-[45px] w-[80%] overflow-hidden border-[2px] bg-transparent font-semibold tracking-wide text-white backdrop-blur transition-all duration-300">
        <Link
          href={`https://wa.me/5491154568278?text=${message}`}
          target="blank_"
          passHref
        >
          <span className="relative z-10">+ Info</span>
          <span className="absolute left-0 top-0 z-0 h-full w-0 skew-x-[-20deg] bg-white opacity-20 transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </button>
    </div>
  );
};

export default Card;
