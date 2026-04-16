const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export interface Realization {
  id: number
  title: string
  images: string[]  // liste d'URLs complètes prêtes à l'emploi
  large: boolean
}

interface StrapiItem {
  id: number
  title: string
  large: boolean | null
  images: { url: string }[]
}

export function formatRealizations(data: StrapiItem[]): Realization[] {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    large: item.large ?? false,
    images: item.images.map((img) => `${STRAPI_URL}${img.url}`),
  }))
}