import { defineField, defineType } from 'sanity'

export const seoConfigType = defineType({
  name: 'seoConfig',
  title: 'SEO Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Título del Sitio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descripción del Sitio',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Palabras clave para SEO',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Imagen para compartir en redes sociales (1200x630px recomendado)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'SEO Configuration',
      }
    },
  },
})
