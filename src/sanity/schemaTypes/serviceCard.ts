import { defineField, defineType } from 'sanity'

export const serviceCardType = defineType({
  name: 'serviceCard',
  title: 'Service Cards',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Servicio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'Mensaje de WhatsApp',
      type: 'text',
      description: 'Mensaje que se enviará por WhatsApp cuando el usuario haga clic en "+ Info"',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de visualización (menor número = aparece primero)',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: 'Activo',
      type: 'boolean',
      description: 'Mostrar u ocultar este servicio',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage',
      order: 'order',
      active: 'active',
    },
    prepare(selection) {
      const { title, media, order, active } = selection
      return {
        title: title,
        subtitle: `Orden: ${order} ${active ? '✅ Activo' : '❌ Inactivo'}`,
        media: media,
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
