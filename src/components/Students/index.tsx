import StudentsSwiper from "./StudentsSwiper";
import { client } from "@/sanity/lib/client";
import {
  APPROVED_TESTIMONIALS_QUERY,
  SECTION_BACKGROUNDS_QUERY,
} from "@/sanity/lib/queries";
import { Testimonial, SectionBackgrounds } from "@/sanity/lib/types";

const Students = async () => {
  const [testimonials, backgrounds]: [
    Testimonial[],
    SectionBackgrounds | null,
  ] = await Promise.all([
    client.fetch(APPROVED_TESTIMONIALS_QUERY, {}, { next: { revalidate: 60 } }),
    client.fetch(SECTION_BACKGROUNDS_QUERY, {}, { next: { revalidate: 60 } }),
  ]);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-20 lg:py-28"
    >
      {backgrounds?.studentsBackground && (
        <>
          <div
            className="absolute -inset-4 -z-10 bg-cover bg-center md:-inset-2"
            style={{
              backgroundImage: `url(${backgrounds.studentsBackground})`,
              filter: "blur(3px)",
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
      <div className="container flex flex-col">
        <h2 className="mx-auto mb-4 mt-4 font-sequel text-2xl font-bold !leading-tight text-white sm:text-3xl md:text-[55px]">
          Mis alumnos
        </h2>
        <div className="flex w-full justify-start pt-8">
          <StudentsSwiper testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Students;
