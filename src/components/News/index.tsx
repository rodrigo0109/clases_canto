"use client";
import { useState, useEffect } from "react";
import { NewsItem, SectionBackgrounds } from "@/sanity/lib/types";
import NewsCard from "./NewsCard";
import NewsModal from "./NewsModal";
import FeaturedNews from "./FeaturedNews";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface NewsSectionProps {
  newsItems: NewsItem[];
  backgrounds: SectionBackgrounds | null;
}

const NewsSection = ({ newsItems, backgrounds }: NewsSectionProps) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (newsItems.length === 0) {
    return null;
  }

  // Separate featured news from regular news
  const featuredNewsItem = newsItems.find((item) => item.featured);
  const regularNewsItems = newsItems.filter((item) => !item.featured);

  return (
    <>
      <section
        id="news"
        className="relative overflow-hidden py-16 md:py-20 lg:py-28"
      >
        {backgrounds?.newsBackground && (
          <>
            <div
              className="absolute -inset-2 -z-10"
              style={{
                backgroundImage: `url(${backgrounds.newsBackground})`,
                backgroundSize: "cover",
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
        <div className="container">
          <div className=" pb-8 ">
            <h2 className="mb-4 text-center font-sequel text-2xl font-bold !leading-tight text-white sm:text-3xl md:text-[55px]">
              Noticias y Novedades
            </h2>
            <p className="text-center font-sequel text-base tracking-wide text-white">
              Enterate de las últimas novedades y eventos
            </p>
          </div>

          {/* Featured News */}
          {featuredNewsItem && (
            <div className="mt-12">
              <FeaturedNews
                news={featuredNewsItem}
                onOpenModal={() => setSelectedNews(featuredNewsItem)}
              />
            </div>
          )}

          {/* Regular News Carousel */}
          {isClient && regularNewsItems.length > 0 && (
            <div className="mt-12 w-full">
              <Swiper
                spaceBetween={32}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                loop={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                }}
                className="news-carousel pb-12"
              >
                {regularNewsItems.map((newsItem) => (
                  <SwiperSlide key={newsItem._id} className="h-auto">
                    <NewsCard
                      newsItem={newsItem}
                      onClick={() => setSelectedNews(newsItem)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </section>

      {selectedNews && (
        <NewsModal
          newsItem={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </>
  );
};

export default NewsSection;
