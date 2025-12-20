import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Panel de Administración')
    .items([
      // Contenido del Sitio (Singletons)
      S.listItem()
        .title('📝 Contenido del Sitio')
        .child(
          S.list()
            .title('Contenido del Sitio')
            .items([
              S.listItem()
                .title('Hero Section')
                .child(
                  S.document()
                    .schemaType('heroSection')
                    .documentId('heroSection')
                ),
              S.listItem()
                .title('Texto Introductorio')
                .child(
                  S.document()
                    .schemaType('introSection')
                    .documentId('introSection')
                ),
              S.listItem()
                .title('Sección Sobre Mí (con foto)')
                .child(
                  S.document()
                    .schemaType('profileSection')
                    .documentId('profileSection')
                ),
              S.listItem()
                .title('Contacto')
                .child(
                  S.document()
                    .schemaType('contactInfo')
                    .documentId('contactInfo')
                ),
              S.listItem()
                .title('SEO')
                .child(
                  S.document()
                    .schemaType('seoConfig')
                    .documentId('seoConfig')
                ),
              S.listItem()
                .title('🖼️ Fondos de Secciones')
                .child(
                  S.document()
                    .schemaType('sectionBackgrounds')
                    .documentId('sectionBackgrounds')
                ),
            ])
        ),

      S.divider(),

      // Servicios
      S.listItem()
        .title('🎯 Servicios')
        .child(
          S.documentTypeList('serviceCard')
            .title('Service Cards')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),

      S.divider(),

      // Testimonios con filtros por estado
      S.listItem()
        .title('👥 Testimonios')
        .child(
          S.list()
            .title('Testimonios')
            .items([
              S.listItem()
                .title('✅ Aprobados')
                .child(
                  S.documentTypeList('testimonial')
                    .title('Testimonios Aprobados')
                    .filter('status == "approved"')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}])
                ),
              S.listItem()
                .title('⏳ Pendientes')
                .child(
                  S.documentTypeList('testimonial')
                    .title('Testimonios Pendientes')
                    .filter('status == "pending"')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}])
                ),
              S.listItem()
                .title('❌ Rechazados')
                .child(
                  S.documentTypeList('testimonial')
                    .title('Testimonios Rechazados')
                    .filter('status == "rejected"')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}])
                ),
              S.divider(),
              S.listItem()
                .title('📋 Todos los Testimonios')
                .child(
                  S.documentTypeList('testimonial')
                    .title('Todos los Testimonios')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}])
                ),
            ])
        ),

      S.divider(),

      // Noticias
      S.listItem()
        .title('📰 Noticias')
        .child(
          S.documentTypeList('newsItem')
            .title('Noticias / Novedades')
            .defaultOrdering([{field: 'publishDate', direction: 'desc'}])
        ),

      S.divider(),

      // Videos
      S.listItem()
        .title('🎥 Videos')
        .child(
          S.documentTypeList('video')
            .title('Videos')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),
    ])
