"use client";

import { NewsItem } from "@/sanity/lib/types";
import { useState, useEffect } from "react";

interface FeaturedNewsProps {
  news: NewsItem;
  onOpenModal: () => void;
}

const FeaturedNews = ({ news, onOpenModal }: FeaturedNewsProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = news.videoUrl ? getYouTubeId(news.videoUrl) : null;

  return (
    <div
      className="relative mb-12 h-[500px] w-full cursor-pointer overflow-hidden rounded-lg lg:h-[600px]"
      onClick={onOpenModal}
    >
      {/* Background - Video or Image */}
      {isClient && videoId ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2"
            style={{
              pointerEvents: "none",
              border: "none",
            }}
            allow="autoplay; encrypted-media"
            title={news.title}
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${news.featuredImage})`,
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-end p-8 lg:p-12">
        {news.category && (
          <span
            className="mb-3 inline-block w-fit rounded px-4 py-1.5 text-xs font-semibold uppercase"
            style={{
              backgroundColor: "rgba(236, 72, 153, 0.2)",
              color: "#EC4899",
            }}
          >
            {news.category}
          </span>
        )}
        <h2 className="mb-4 font-sequel text-3xl font-bold text-white lg:text-5xl">
          {news.title}
        </h2>
        <p
          className="mb-4 max-w-3xl text-base lg:text-lg"
          style={{ color: "#94A3B8" }}
        >
          {news.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="uppercase" style={{ color: "#64748B" }}>
            {new Date(news.publishDate).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="font-semibold" style={{ color: "#EC4899" }}>
            → LEER MÁS
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
