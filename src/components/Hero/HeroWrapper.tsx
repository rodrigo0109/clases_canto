import { client } from "@/sanity/lib/client";
import { SECTION_BACKGROUNDS_QUERY } from "@/sanity/lib/queries";
import { SectionBackgrounds } from "@/sanity/lib/types";
import Hero from "./index";

const HeroWrapper = async () => {
  const backgrounds: SectionBackgrounds | null = await client.fetch(
    SECTION_BACKGROUNDS_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  return <Hero backgrounds={backgrounds} />;
};

export default HeroWrapper;
