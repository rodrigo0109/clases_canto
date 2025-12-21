import ReviewForm from "./ReviewForm";
import { client } from "@/sanity/lib/client";
import { SECTION_BACKGROUNDS_QUERY } from "@/sanity/lib/queries";
import { SectionBackgrounds } from "@/sanity/lib/types";

const ReviewWrapper = async () => {
  const backgrounds: SectionBackgrounds | null = await client.fetch(
    SECTION_BACKGROUNDS_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  return <ReviewForm backgrounds={backgrounds} />;
};

export default ReviewWrapper;
