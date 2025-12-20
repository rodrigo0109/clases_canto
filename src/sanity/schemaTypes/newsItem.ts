import { defineField, defineType } from 'sanity'

export const newsItemType = defineType({
  name: 'newsItem',
  title: 'Noticias / Novedades',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen',
      type: 'text',
      rows: 3,
      description: 'Texto corto que se muestra en la card',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
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
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Imagen Destacada',
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
      name: 'videoUrl',
      title: 'Video de Fondo (YouTube URL)',
      type: 'url',
      description: 'URL de YouTube para noticia destacada. Si se completa, se reproduce de fondo en lugar de la imagen.',
    }),
    defineField({
      name: 'gallery',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [
        {
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
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      description: 'Imágenes adicionales que se muestran en el modal',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Eventos', value: 'eventos' },
          { title: 'Tips', value: 'tips' },
          { title: 'Logros', value: 'logros' },
          { title: 'Noticias', value: 'noticias' },
        ],
      },
    }),
    defineField({
      name: 'publishDate',
      title: 'Fecha de Publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      description: 'Mostrar en posición destacada en home',
      initialValue: false,
    }),
    defineField({
      name: 'published',
      title: 'Publicado',
      type: 'boolean',
      description: 'Mostrar u ocultar esta noticia',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      category: 'category',
      featured: 'featured',
      published: 'published',
    },
    prepare(selection) {
      const { title, media, category, featured, published } = selection
      const categoryLabel = category || 'Sin categoría'
      const featuredIcon = featured ? '⭐' : ''
      const publishedIcon = published ? '✅' : '❌'
      return {
        title: `${publishedIcon} ${featuredIcon} ${title}`,
        subtitle: categoryLabel,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Más Recientes',
      name: 'publishDateDesc',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Por Categoría',
      name: 'byCategory',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'publishDate', direction: 'desc' },
      ],
    },
  ],
})
