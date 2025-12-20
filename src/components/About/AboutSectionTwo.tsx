import { client } from "@/sanity/lib/client";
import {
  PROFILE_SECTION_QUERY,
  SECTION_BACKGROUNDS_QUERY,
} from "@/sanity/lib/queries";
import { ProfileSection, SectionBackgrounds } from "@/sanity/lib/types";

const AboutSectionTwo = async () => {
  const [profileSection, backgrounds]: [
    ProfileSection | null,
    SectionBackgrounds | null,
  ] = await Promise.all([
    client.fetch(PROFILE_SECTION_QUERY, {}, { next: { revalidate: 60 } }),
    client.fetch(SECTION_BACKGROUNDS_QUERY, {}, { next: { revalidate: 60 } }),
  ]);

  // Fallback if no content in Sanity yet
  if (!profileSection) {
    return (
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="w-full border"></div>
          <div className="flex flex-col items-center pt-8">
            <p className="text-body-color">
              Configurá la sección "Sobre mí" en el Studio de Sanity.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden pb-10 pt-10 md:pb-10 md:pt-10 lg:pb-10 lg:pt-10"
    >
      {backgrounds?.aboutSectionTwoBackground && (
        <>
          <div
            className="absolute -inset-4 -z-10 bg-cover bg-center md:-inset-2"
            style={{
              backgroundImage: `url(${backgrounds.aboutSectionTwoBackground})`,
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
      <div className="container">
        <div className="flex flex-col items-center py-8 lg:flex-row">
          <div className="flex w-full flex-col px-4 leading-relaxed text-white lg:w-1/2">
            <h2 className="mx-auto mb-4 font-sequel text-2xl font-bold !leading-tight text-white sm:text-3xl md:text-[55px]">
              {profileSection.heading}
            </h2>
            <div className="flex flex-col text-center font-sequel font-light tracking-wide">
              {profileSection.paragraphs.map((paragraph, index) => (
                <span key={index} className="mt-2">
                  {paragraph}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
