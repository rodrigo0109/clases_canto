"use client";
import { NewsItem } from "@/sanity/lib/types";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface NewsCardProps {
  newsItem: NewsItem;
  onClick: () => void;
}

const NewsCard = ({ newsItem, onClick }: NewsCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      style={{
        backgroundColor: "#2C3E50",
      }}
    >
      {newsItem.featuredImage && (
        <div className="h-48 w-full flex-shrink-0 overflow-hidden">
          <img
            src={newsItem.featuredImage}
            alt={newsItem.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 min-h-[24px]">
          {newsItem.category && (
            <span
              className="inline-block rounded px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: "rgba(236, 72, 153, 0.1)",
                color: "#EC4899",
              }}
            >
              {newsItem.category}
            </span>
          )}
        </div>
        <h3
          className="mb-2 line-clamp-2 font-sequel text-xl font-bold"
          style={{ color: "#FFFFFF" }}
        >
          {newsItem.title}
        </h3>
        <p
          className="mb-4 line-clamp-3 flex-1 font-sequel text-sm"
          style={{ color: "#94A3B8" }}
        >
          {newsItem.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs uppercase" style={{ color: "#64748B" }}>
            {format(new Date(newsItem.publishDate), "dd MMMM, yyyy", {
              locale: es,
            })}
          </span>
          <span
            className="text-sm font-semibold transition-opacity group-hover:opacity-80"
            style={{ color: "#EC4899" }}
          >
            LEER MÁS →
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
