import { groq } from 'next-sanity'

// Service Cards
export const SERVICE_CARDS_QUERY = groq`*[_type == "serviceCard" && active == true] | order(order asc) {
  _id,
  title,
  whatsappMessage,
  backgroundImage,
  order,
  active
}`

// Testimonials (approved only for public display)
export const APPROVED_TESTIMONIALS_QUERY = groq`*[_type == "testimonial" && status == "approved"] | order(submittedAt desc) {
  _id,
  studentName,
  "photo": photo.asset->url,
  rating,
  quote,
  featured,
  submittedAt
}`

// News Items (published only)
export const PUBLISHED_NEWS_QUERY = groq`*[_type == "newsItem" && published == true] | order(publishDate desc) {
  _id,
  title,
  slug,
  excerpt,
  content,
  "featuredImage": featuredImage.asset->url,
  videoUrl,
  "gallery": gallery[]{
    "url": asset->url,
    alt,
    caption
  },
  category,
  publishDate,
  featured
}`

export const NEWS_BY_SLUG_QUERY = groq`*[_type == "newsItem" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  "featuredImage": featuredImage.asset->url,
  videoUrl,
  "gallery": gallery[]{
    "url": asset->url,
    alt,
    caption
  },
  category,
  publishDate
}`

// Videos (active only)
export const ACTIVE_VIDEOS_QUERY = groq`*[_type == "video" && active == true] | order(order asc) {
  _id,
  title,
  youtubeId,
  "thumbnail": thumbnail.asset->url,
  category,
  order
}`

// Singletons
export const HERO_SECTION_QUERY = groq`*[_type == "heroSection"][0] {
  _id,
  title,
  subtitle,
  "backgroundImage": backgroundImage.asset->url,
  ctaText,
  ctaLink
}`

export const INTRO_SECTION_QUERY = groq`*[_type == "introSection"][0] {
  _id,
  heading,
  paragraphs,
  location,
  duration,
  limitedSpots
}`

export const PROFILE_SECTION_QUERY = groq`*[_type == "profileSection"][0] {
  _id,
  heading,
  paragraphs,
  "profileImage": profileImage.asset->url,
  photoCredit
}`

export const CONTACT_INFO_QUERY = groq`*[_type == "contactInfo"][0] {
  _id,
  whatsappNumber,
  instagramUrl,
  spotifyUrl,
  email,
  address,
  mapEmbedUrl
}`

export const SEO_CONFIG_QUERY = groq`*[_type == "seoConfig"][0] {
  _id,
  siteTitle,
  siteDescription,
  keywords,
  "ogImage": ogImage.asset->url,
  "favicon": favicon.asset->url
}`

export const SECTION_BACKGROUNDS_QUERY = groq`*[_type == "sectionBackgrounds"][0] {
  _id,
  "heroBackground": heroBackground.asset->url,
  "aboutSectionOneBackground": aboutSectionOneBackground.asset->url,
  "aboutSectionTwoBackground": aboutSectionTwoBackground.asset->url,
  "studentsBackground": studentsBackground.asset->url,
  "newsBackground": newsBackground.asset->url,
  "reviewBackground": reviewBackground.asset->url
}`
