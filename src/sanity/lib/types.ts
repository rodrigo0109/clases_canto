import { SanityImageSource } from "@sanity/image-url/lib/types/types"

// Service Card Type
export interface ServiceCard {
  _id: string
  title: string
  whatsappMessage: string
  backgroundImage: SanityImageSource
  order: number
  active: boolean
}

// Testimonial Type
export interface Testimonial {
  _id: string
  studentName: string
  photo?: string
  rating: number
  quote: string
  featured: boolean
  submittedAt: string
}

// News Item Type
export interface NewsItem {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content?: any[] // Portable Text
  featuredImage: string
  videoUrl?: string
  gallery?: Array<{
    url: string
    alt?: string
    caption?: string
  }>
  category?: string
  publishDate: string
  featured: boolean
}

// Video Type
export interface Video {
  _id: string
  title: string
  youtubeId: string
  thumbnail?: string
  category?: string
  order: number
}

// Hero Section Type
export interface HeroSection {
  _id: string
  title: string
  subtitle?: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
}

// Intro Section Type (texto introductorio)
export interface IntroSection {
  _id: string
  heading: string
  paragraphs: string[]
  location?: string
  duration?: string
  limitedSpots?: string
}

// Profile Section Type (sobre mí con foto)
export interface ProfileSection {
  _id: string
  heading: string
  paragraphs: string[]
  profileImage: string
  photoCredit?: string
}

// Contact Info Type
export interface ContactInfo {
  _id: string
  whatsappNumber: string
  instagramUrl?: string
  spotifyUrl?: string
  email?: string
  address?: string
  mapEmbedUrl?: string
}

// SEO Config Type
export interface SeoConfig {
  _id: string
  siteTitle: string
  siteDescription: string
  keywords?: string[]
  ogImage?: string
  favicon?: string
}

// Section Backgrounds Type
export interface SectionBackgrounds {
  _id: string
  heroBackground?: string
  aboutSectionOneBackground?: string
  aboutSectionTwoBackground?: string
  studentsBackground?: string
  newsBackground?: string
  reviewBackground?: string
}
