"use client";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Testimonial } from "@/sanity/lib/types";

// Swiper styles
import "swiper/swiper-bundle.min.css";

interface StudentsSwiperProps {
  testimonials: Testimonial[];
}

const StudentsSwiper = ({ testimonials }: StudentsSwiperProps) => {
  return (
    <div className="flex h-full w-full flex-row items-center justify-start lg:w-1/2">
      <Swiper
        className="h-[500px] w-full"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div
              className="mx-auto mt-20 flex h-[250px] w-[90%] flex-col items-center justify-center overflow-hidden rounded-lg border-white/40 px-6 text-center font-sequel italic tracking-wide text-white shadow-lg backdrop-blur-md"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
              data-wow-delay=".15s"
            >
              <p className="mb-4 text-base">{`"${testimonial.quote}"`}</p>
              <p className="font-bold not-italic text-white opacity-50">
                - {testimonial.studentName}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentsSwiper;
