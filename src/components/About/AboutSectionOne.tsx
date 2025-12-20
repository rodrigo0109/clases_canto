import Card from "./Card";
import { client } from "@/sanity/lib/client";
import {
  SERVICE_CARDS_QUERY,
  INTRO_SECTION_QUERY,
  SECTION_BACKGROUNDS_QUERY,
} from "@/sanity/lib/queries";
import {
  ServiceCard,
  IntroSection,
  SectionBackgrounds,
} from "@/sanity/lib/types";

const AboutSectionOne = async () => {
  const [serviceCards, introSection, backgrounds]: [
    ServiceCard[],
    IntroSection | null,
    SectionBackgrounds | null,
  ] = await Promise.all([
    client.fetch(SERVICE_CARDS_QUERY, {}, { next: { revalidate: 60 } }),
    client.fetch(INTRO_SECTION_QUERY, {}, { next: { revalidate: 60 } }),
    client.fetch(SECTION_BACKGROUNDS_QUERY, {}, { next: { revalidate: 60 } }),
  ]);

  return (
    <section
      id="about"
      className="relative overflow-hidden pb-10 pt-16 md:pb-10 md:pt-20 lg:pb-28 lg:pt-20"
    >
      {backgrounds?.aboutSectionOneBackground && (
        <>
          <div
            className="absolute -inset-2 -z-10"
            style={{
              backgroundImage: `url(${backgrounds.aboutSectionOneBackground})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              filter: "blur(3px)",
              // transform: "scale(1.05)",
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
      <div className="container w-full">
        <div className="">
          <div className="flex w-full flex-col flex-wrap items-center sm:px-0 lg:mx-4 xl:px-5">
            <h2 className="mx-auto mb-4 font-sequel text-2xl font-bold !leading-tight text-white sm:text-3xl md:text-[55px]">
              Servicios
            </h2>
            <div className="mt-10 flex w-full flex-col items-center justify-center lg:flex-row lg:flex-wrap">
              {serviceCards.map((card) => (
                <Card
                  key={card._id}
                  title={card.title}
                  message={card.whatsappMessage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
