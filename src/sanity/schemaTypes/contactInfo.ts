import { defineField, defineType } from 'sanity'

export const contactInfoType = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({
      name: 'whatsappNumber',
      title: 'Número de WhatsApp',
      type: 'string',
      description: 'Formato: 5491154568278',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instagramUrl',
      title: 'URL de Instagram',
      type: 'url',
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'URL de Spotify',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'URL del Mapa Embebido',
      type: 'url',
      description: 'URL de Google Maps para embeber',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Info',
      }
    },
  },
})
