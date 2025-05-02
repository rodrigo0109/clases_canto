import React from "react";

const Card = ({ title, index }: any) => {
  const bgImages = [
    "/images/card/1.jpeg",
    "/images/card/2.jpeg",
    "/images/card/3.jpeg",
    "/images/card/4.jpeg",
    "/images/card/5.jpeg",
  ];
  return (
    <div
      className="mr-8 mt-8 flex h-[350px] w-1/4 cursor-pointer flex-col items-center justify-between border bg-cover bg-center px-4 py-6 text-center text-2xl font-semibold tracking-wide text-white shadow-lg"
      style={{ backgroundImage: `url(${bgImages[index]})` }}
    >
      <h4>{title}</h4>
      <button className="h-[45px] w-[80%] border-[2px] bg-transparent font-semibold tracking-wide text-white backdrop-blur">
        + Info
      </button>
    </div>
  );
};

export default Card;
