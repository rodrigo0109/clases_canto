"use client";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  message: string;
}

const Card = ({ title, message }: CardProps) => {
  return (
    <div
      className="mt-8 flex h-[350px] w-full flex-col items-center justify-between rounded-lg px-6 py-8 text-center font-sequel shadow-lg transition-all duration-300 hover:shadow-xl lg:mr-8 xl:w-1/4"
      style={{ backgroundColor: "#2C3E50" }}
    >
      <div className="flex flex-1 items-center justify-center">
        <h4
          className="text-3xl font-bold tracking-wide"
          style={{ color: "#FFFFFF" }}
        >
          {title}
        </h4>
      </div>
      <Link
        href={`https://wa.me/5491154568278?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative h-[45px] w-[80%] overflow-hidden rounded border-2 font-semibold tracking-wide transition-all duration-300 hover:scale-105"
        style={{
          borderColor: "#EC4899",
          color: "#EC4899",
        }}
      >
        <span className="relative z-10 flex h-full items-center justify-center">
          + INFO
        </span>
        <span
          className="absolute left-0 top-0 z-0 h-full w-0 transition-all duration-500 group-hover:w-full"
          style={{
            backgroundColor: "rgba(236, 72, 153, 0.1)",
          }}
        ></span>
      </Link>
    </div>
  );
};

export default Card;
