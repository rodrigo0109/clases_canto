import { defineField, defineType } from 'sanity'

export const introSectionType = defineType({
  name: 'introSection',
  title: 'Texto Introductorio',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Descubrí tu voz y disfrutá el proceso',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Párrafos',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Cada item es un párrafo de texto',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
      description: 'Ej: Balvanera, CABA',
    }),
    defineField({
      name: 'duration',
      title: 'Duración de las Clases',
      type: 'string',
      description: 'Ej: 1h',
    }),
    defineField({
      name: 'limitedSpots',
      title: 'Texto de Cupos Limitados',
      type: 'string',
      initialValue: 'Cupos limitados.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Texto Introductorio',
      }
    },
  },
})
