"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionBackgrounds } from "@/sanity/lib/types";

const reviewSchema = z.object({
  studentName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  rating: z.number().min(1, "Selecciona una calificación").max(5),
  quote: z
    .string()
    .min(10, "La reseña debe tener al menos 10 caracteres")
    .max(500, "La reseña no puede exceder 500 caracteres"),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
  backgrounds: SectionBackgrounds | null;
}

const ReviewForm = ({ backgrounds }: ReviewFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage(
          "¡Gracias por tu reseña! La publicaremos una vez que sea aprobada.",
        );
        reset();
        setSelectedRating(0);
      } else {
        setSubmitMessage("Error al enviar la reseña. Intenta nuevamente.");
      }
    } catch (error) {
      setSubmitMessage("Error al enviar la reseña. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    setValue("rating", rating);
  };

  return (
    <section
      id="review"
      className="relative overflow-hidden py-16 md:py-20 lg:py-28"
    >
      {backgrounds?.reviewBackground && (
        <>
          <div
            className="absolute -inset-2 -z-10"
            style={{
              backgroundImage: `url(${backgrounds.reviewBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
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
        <div className="mx-auto max-w-2xl">
          <div className=" border-body-color/[.15] pb-8 dark:border-white/[.15]">
            <h2 className="mb-4 text-center font-sequel text-2xl font-bold !leading-tight text-white sm:text-3xl md:text-[55px]">
              Dejá tu reseña
            </h2>
            <p className="text-center font-sequel text-base tracking-wide text-white">
              Compartí tu experiencia con las clases de canto
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-black">
                Tu nombre *
              </label>
              <input
                {...register("studentName")}
                className="w-full rounded border border-gray-300 px-4 py-3 text-black focus:border-primary focus:outline-none"
                type="text"
                placeholder="Tu nombre"
              />
              {errors.studentName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.studentName.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-white">
                Calificación *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="text-4xl transition-colors focus:outline-none"
                  >
                    <span
                      className={
                        star <= (hoveredRating || selectedRating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  </button>
                ))}
              </div>
              {errors.rating && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.rating.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-white">
                Tu reseña *
              </label>
              <textarea
                {...register("quote")}
                className="w-full rounded border border-gray-300 px-4 py-3 text-black focus:border-primary focus:outline-none"
                rows={5}
                placeholder="Contanos sobre tu experiencia con las clases..."
                maxLength={500}
              />
              {errors.quote && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.quote.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded bg-primary px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar reseña"}
            </button>

            {submitMessage && (
              <div
                className={`mt-4 rounded border px-4 py-3 text-sm ${
                  submitMessage.includes("Gracias")
                    ? "border-green-400 bg-green-50 text-green-700"
                    : "border-red-400 bg-red-50 text-red-700"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
