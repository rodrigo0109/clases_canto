import { defineType, defineField } from 'sanity'

export const sectionBackgroundsType = defineType({
  name: 'sectionBackgrounds',
  title: 'Fondos de Secciones',
  type: 'document',
  fields: [
    defineField({
      name: 'heroBackground',
      title: 'Fondo - Hero Section',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Imagen de fondo para la sección Hero',
    }),
    defineField({
      name: 'aboutSectionOneBackground',
      title: 'Fondo - About Section One',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Imagen de fondo para la primera sección About',
    }),
    defineField({
      name: 'aboutSectionTwoBackground',
      title: 'Fondo - About Section Two',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Imagen de fondo para la segunda sección About',
    }),
    defineField({
      name: 'studentsBackground',
      title: 'Fondo - Sección Alumnos',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Imagen de fondo para la sección de Alumnos',
    }),
    defineField({
      name: 'newsBackground',
      title: 'Fondo - Sección Noticias',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Imagen de fondo para la sección de Noticias',
    }),
    defineField({
      name: 'reviewBackground',
      title: 'Fondo - Sección Reseñas',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Imagen de fondo para la sección de Reseñas',
    }),
  ],
})
