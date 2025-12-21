import NewsSection from "./index";
import { client } from "@/sanity/lib/client";
import { PUBLISHED_NEWS_QUERY, SECTION_BACKGROUNDS_QUERY } from "@/sanity/lib/queries";
import { NewsItem, SectionBackgrounds } from "@/sanity/lib/types";

const NewsWrapper = async () => {
  const [newsItems, backgrounds]: [NewsItem[], SectionBackgrounds | null] =
    await Promise.all([
      client.fetch(PUBLISHED_NEWS_QUERY, {}, { next: { revalidate: 60 } }),
      client.fetch(SECTION_BACKGROUNDS_QUERY, {}, { next: { revalidate: 60 } }),
    ]);

  return <NewsSection newsItems={newsItems} backgrounds={backgrounds} />;
};

export default NewsWrapper;
