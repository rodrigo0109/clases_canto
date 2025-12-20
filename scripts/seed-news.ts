import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '1kwmibvd',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Necesitarás crear un token en sanity.io
});

const sampleNews = [
  {
    _type: 'newsItem',
    title: 'Nuevo taller de técnica vocal - Enero 2025',
    excerpt: 'Este enero comenzamos con un taller intensivo de técnica vocal para todos los niveles. Cupos limitados!',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Estamos muy emocionados de anunciar nuestro taller intensivo de técnica vocal que comenzará en enero 2025. Este taller está diseñado para estudiantes de todos los niveles que quieran profundizar en el desarrollo de su voz.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Durante 4 semanas trabajaremos en:',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Respiración diafragmática y apoyo vocal',
          },
        ],
        listItem: 'bullet',
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Resonancia y proyección de la voz',
          },
        ],
        listItem: 'bullet',
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Afinación y control del tono',
          },
        ],
        listItem: 'bullet',
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cupos limitados a 8 personas. Inscripciones abiertas hasta el 15 de diciembre!',
          },
        ],
        style: 'normal',
      },
    ],
    category: 'Talleres',
    publishDate: '2024-12-10',
    published: true,
    featured: true,
  },
  {
    _type: 'newsItem',
    title: 'Recital de fin de año - Presentación de alumnos',
    excerpt: 'Nuestros alumnos se presentarán en un recital especial para cerrar el año. ¡Los esperamos!',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'El próximo 20 de diciembre realizaremos nuestro tradicional recital de fin de año, donde los alumnos tendrán la oportunidad de mostrar todo lo aprendido durante este año.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'El evento será en un ambiente íntimo y familiar, donde cada alumno podrá interpretar la canción que más le guste. Es una hermosa oportunidad para vencer el miedo escénico y compartir la música con amigos y familiares.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Fecha: 20 de diciembre, 19hs',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Entrada libre y gratuita. Confirmar asistencia por WhatsApp.',
          },
        ],
        style: 'normal',
      },
    ],
    category: 'Eventos',
    publishDate: '2024-12-08',
    published: true,
    featured: true,
  },
  {
    _type: 'newsItem',
    title: 'Nuevos horarios disponibles para clases particulares',
    excerpt: 'A partir de enero abrimos nuevos horarios de mañana y tarde para clases individuales.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Debido a la gran demanda, estamos ampliando nuestros horarios disponibles para clases particulares. A partir de enero 2025 contaremos con más opciones tanto en la mañana como en la tarde.',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Nuevos horarios disponibles:',
          },
        ],
        style: 'h3',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Lunes a viernes: 9:00 - 13:00 y 15:00 - 20:00',
          },
        ],
        listItem: 'bullet',
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Sábados: 10:00 - 14:00',
          },
        ],
        listItem: 'bullet',
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Reservá tu horario preferido completando el formulario de contacto o escribiendo por WhatsApp.',
          },
        ],
        style: 'normal',
      },
    ],
    category: 'Novedades',
    publishDate: '2024-12-05',
    published: true,
    featured: false,
  },
];

async function seedNews() {
  try {
    console.log('Creando noticias de muestra...');

    for (const news of sampleNews) {
      const result = await client.create(news);
      console.log(`✓ Creada: ${news.title} (ID: ${result._id})`);
    }

    console.log('\n¡Noticias de muestra creadas exitosamente!');
  } catch (error) {
    console.error('Error creando noticias:', error);
  }
}

seedNews();
