import { defineField, defineType } from 'sanity'

export const profileSectionType = defineType({
  name: 'profileSection',
  title: 'Sección Sobre Mí (con foto)',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Sobre mí',
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
      name: 'profileImage',
      title: 'Foto de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photoCredit',
      title: 'Crédito Fotográfico',
      type: 'string',
      description: 'Ej: @selene.rgb',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'profileImage',
    },
  },
})
