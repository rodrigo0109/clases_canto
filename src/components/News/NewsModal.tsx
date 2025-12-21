"use client";
import { NewsItem } from "@/sanity/lib/types";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageLightbox from "./ImageLightbox";

// Swiper styles
import "swiper/swiper-bundle.min.css";

interface NewsModalProps {
  newsItem: NewsItem;
  onClose: () => void;
}

const NewsModal = ({ newsItem, onClose }: NewsModalProps) => {
  const [isClient, setIsClient] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = newsItem.videoUrl ? getYouTubeId(newsItem.videoUrl) : null;

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNextImage = () => {
    if (newsItem.gallery) {
      setLightboxIndex((prev) => (prev + 1) % newsItem.gallery.length);
    }
  };

  const handlePrevImage = () => {
    if (newsItem.gallery) {
      setLightboxIndex(
        (prev) =>
          (prev - 1 + newsItem.gallery.length) % newsItem.gallery.length
      );
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg shadow-2xl"
        style={{ backgroundColor: "#2C3E50" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-2xl font-bold shadow-lg transition-all hover:scale-110"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "#2C3E50",
          }}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Video or Featured Image */}
        {isClient && videoId ? (
          <div className="h-64 w-full overflow-hidden md:h-96">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?controls=1&rel=0&modestbranding=1`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={newsItem.title}
            />
          </div>
        ) : newsItem.featuredImage ? (
          <div className="h-64 w-full overflow-hidden md:h-96">
            <img
              src={newsItem.featuredImage}
              alt={newsItem.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}

        {/* Content */}
        <div className="p-6 md:p-10">
          {newsItem.category && (
            <span
              className="mb-3 inline-block rounded px-4 py-1.5 text-sm font-semibold"
              style={{
                backgroundColor: "rgba(236, 72, 153, 0.1)",
                color: "#EC4899",
              }}
            >
              {newsItem.category}
            </span>
          )}

          <h2
            className="mb-3 font-sequel text-2xl font-bold sm:text-3xl md:text-4xl"
            style={{ color: "#FFFFFF" }}
          >
            {newsItem.title}
          </h2>

          <p className="mb-6 text-sm uppercase" style={{ color: "#64748B" }}>
            {format(new Date(newsItem.publishDate), "dd 'de' MMMM, yyyy", {
              locale: es,
            })}
          </p>

          <div
            className="prose prose-lg max-w-none font-sequel tracking-wide"
            style={{ color: "#94A3B8" }}
          >
            {newsItem.content ? (
              <PortableText value={newsItem.content} />
            ) : (
              <p>{newsItem.excerpt}</p>
            )}
          </div>

          {/* Image Gallery Carousel */}
          {isClient && newsItem.gallery && newsItem.gallery.length > 0 && (
            <div className="mt-8">
              <h3
                className="mb-4 font-sequel text-xl font-bold"
                style={{ color: "#FFFFFF" }}
              >
                Galería de Imágenes
              </h3>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                className="news-gallery-swiper rounded-lg"
              >
                {newsItem.gallery.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative h-[300px] w-full cursor-pointer overflow-hidden rounded-lg md:h-[400px]"
                      onClick={() => handleOpenLightbox(index)}
                    >
                      <img
                        src={image.url}
                        alt={image.alt || `Imagen ${index + 1}`}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p className="text-sm text-white">{image.caption}</p>
                        </div>
                      )}
                      {/* Fullscreen icon hint */}
                      <div className="absolute right-2 top-2 rounded-full bg-black/50 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>

      {/* Image Lightbox */}
      {lightboxOpen && newsItem.gallery && (
        <ImageLightbox
          images={newsItem.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
};

export default NewsModal;
