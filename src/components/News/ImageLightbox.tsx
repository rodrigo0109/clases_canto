"use client";

import { useEffect } from "react";

interface ImageLightboxProps {
  images: Array<{
    url: string;
    alt?: string;
    caption?: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageLightbox = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
        aria-label="Cerrar"
      >
        ×
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Anterior"
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Siguiente"
        >
          ›
        </button>
      )}

      {/* Image */}
      <div className="flex h-full w-full flex-col items-center justify-center p-4">
        <img
          src={currentImage.url}
          alt={currentImage.alt || `Imagen ${currentIndex + 1}`}
          className="max-h-[85vh] max-w-full object-contain"
        />

        {/* Caption and counter */}
        {(currentImage.caption || images.length > 1) && (
          <div className="mt-4 text-center">
            {currentImage.caption && (
              <p className="mb-2 text-lg text-white">{currentImage.caption}</p>
            )}
            {images.length > 1 && (
              <p className="text-sm text-white/70">
                {currentIndex + 1} / {images.length}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
