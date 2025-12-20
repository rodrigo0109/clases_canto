import { createClient } from '@sanity/client'

import { apiVersion, dataset, projectId } from '../env'

// Client with write permissions for API routes
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN, // This will be set in .env.local
})
