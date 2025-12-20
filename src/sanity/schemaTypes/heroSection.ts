import { defineField, defineType } from 'sanity'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Imagen de Fondo',
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
      name: 'ctaText',
      title: 'Texto del Botón',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Link del Botón',
      type: 'string',
      description: 'URL o ancla (ej: #about)',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Section',
      }
    },
  },
})
