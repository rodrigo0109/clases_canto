"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white dark:bg-[#000]">
        <div className="font-sequel container h-[50px] text-center font-bold">
          <h5>
            Desarrollado por{" "}
            <span className="hover:underline">
              <Link
                href={
                  "https://www.linkedin.com/in/rodrigo-perez-full-stack-developer/"
                }
                target="_blank"
                passHref
              >
                Rodrigo Pérez
              </Link>
            </span>{" "}
            - &copy;{new Date().getFullYear()}
          </h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
