import { formatRealizations } from './formatRealizations'

export async function getRealizations() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/realizations?populate=images`,
    { next: { revalidate: 60 } } // revalidation toutes les 60s (ISR)
  )
  const json = await res.json()
  return formatRealizations(json.data)
}