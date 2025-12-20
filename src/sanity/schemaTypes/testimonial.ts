import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'studentName',
      title: 'Nombre del Estudiante',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email privado, no se muestra públicamente',
      hidden: ({ currentUser }) => !currentUser?.roles.some(role => role.name === 'administrator'),
    }),
    defineField({
      name: 'photo',
      title: 'Foto del Estudiante',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        },
      ],
    }),
    defineField({
      name: 'rating',
      title: 'Calificación',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
      description: 'Estrellas de 1 a 5',
    }),
    defineField({
      name: 'quote',
      title: 'Comentario',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: '⏳ Pendiente', value: 'pending' },
          { title: '✅ Aprobado', value: 'approved' },
          { title: '❌ Rechazado', value: 'rejected' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      description: 'Mostrar en posición destacada',
      initialValue: false,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Fecha de Envío',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'studentName',
      subtitle: 'quote',
      media: 'photo',
      status: 'status',
      rating: 'rating',
    },
    prepare(selection) {
      const { title, subtitle, media, status, rating } = selection
      const statusEmoji = {
        pending: '⏳',
        approved: '✅',
        rejected: '❌',
      }
      const stars = '⭐'.repeat(rating || 0)
      return {
        title: `${statusEmoji[status]} ${title}`,
        subtitle: `${stars} - ${subtitle?.substring(0, 60)}...`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Más Recientes',
      name: 'recentFirst',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Por Estado',
      name: 'statusOrder',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'submittedAt', direction: 'desc' },
      ],
    },
  ],
})
