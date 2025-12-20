import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/write-client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentName, rating, quote } = body;

    // Validate required fields
    if (!studentName || !rating || !quote) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "La calificación debe estar entre 1 y 5" },
        { status: 400 }
      );
    }

    // Create testimonial document in Sanity with pending status
    const testimonial = await writeClient.create({
      _type: "testimonial",
      studentName,
      rating,
      quote,
      featured: false,
      status: "pending",
      submittedAt: new Date().toISOString(),
    });

    // Send notification to admin
    // In production, integrate with email service
    console.log("New review notification:", {
      studentName,
      rating,
      quote,
      testimonialId: testimonial._id,
    });

    // TODO: Send email notification to admin
    // Example:
    // await resend.emails.send({
    //   from: 'noreply@yoursite.com',
    //   to: 'admin@yoursite.com',
    //   subject: 'Nueva reseña pendiente de aprobación',
    //   html: `<h2>Nueva reseña</h2><p>De: ${studentName}</p><p>Calificación: ${rating}/5</p><p>${quote}</p>`
    // });

    return NextResponse.json(
      {
        success: true,
        testimonialId: testimonial._id,
        message: "Reseña enviada exitosamente. Será publicada tras aprobación.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Error al crear la reseña" },
      { status: 500 }
    );
  }
}
