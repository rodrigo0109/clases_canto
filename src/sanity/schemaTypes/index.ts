import { type SchemaTypeDefinition } from 'sanity'

// Import all schema types
import { serviceCardType } from './serviceCard'
import { heroSectionType } from './heroSection'
import { introSectionType } from './introSection'
import { profileSectionType } from './profileSection'
import { contactInfoType } from './contactInfo'
import { seoConfigType } from './seoConfig'
import { testimonialType } from './testimonial'
import { newsItemType } from './newsItem'
import { videoType } from './video'
import { sectionBackgroundsType } from './sectionBackgrounds'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    serviceCardType,
    testimonialType,
    newsItemType,
    videoType,

    // Singletons
    heroSectionType,
    introSectionType,
    profileSectionType,
    contactInfoType,
    seoConfigType,
    sectionBackgroundsType,
  ],
}
