"use client";
import SectionTitle from "../Common/SectionTitle";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Opinions from "./opinions.json";

import "swiper/css";
import "swiper/css/pagination";

const Students = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container flex flex-col">
        <div className="w-full border"></div>
        <h2 className="font-sequel mx-auto mb-4 mt-4 text-2xl font-bold !leading-tight text-black sm:text-3xl md:text-[35px]">
          Mis alumnos
        </h2>
        <div className="flex w-full flex-col pt-8 lg:flex-row">
          <div className="bg-students mr-2.5 h-[400px] w-full bg-cover bg-center bg-no-repeat px-4 sm:mt-0 lg:w-1/2"></div>
          <div className="flex h-full w-full flex-row items-center justify-center lg:ml-2.5 lg:w-1/2">
            <Swiper
              className="xs:h-[250px] xs:w-[80%] md:h-[500px] xl:w-[800px]"
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              loop
            >
              {Opinions.map((v, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="font-sequel mx-auto mt-20 flex h-[250px] w-[80%] items-center overflow-hidden rounded-lg border bg-gray-100 px-6 text-center italic tracking-wide text-black shadow-lg "
                    data-wow-delay=".15s"
                  >
                    {v}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
