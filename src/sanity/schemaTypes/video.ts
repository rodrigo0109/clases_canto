import { defineField, defineType } from 'sanity'

export const videoType = defineType({
  name: 'video',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'El ID del video de YouTube (ej: si la URL es youtube.com/watch?v=ABC123, el ID es ABC123)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Personalizado',
      type: 'image',
      description: 'Opcional: usar imagen personalizada en lugar del thumbnail de YouTube',
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
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Performances', value: 'performances' },
          { title: 'Clases', value: 'clases' },
          { title: 'Tips', value: 'tips' },
          { title: 'Estudiantes', value: 'estudiantes' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de visualización (menor número = aparece primero)',
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: 'Activo',
      type: 'boolean',
      description: 'Mostrar u ocultar este video',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      youtubeId: 'youtubeId',
      thumbnail: 'thumbnail',
      category: 'category',
      order: 'order',
      active: 'active',
    },
    prepare(selection) {
      const { title, youtubeId, thumbnail, category, order, active } = selection
      return {
        title: title,
        subtitle: `${category || 'Sin categoría'} - Orden: ${order} ${active ? '✅' : '❌'}`,
        media: thumbnail || { youtubeId },
      }
    },
  },
  orderings: [
    {
      title: 'Orden, Ascendente',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
