import { formatRealizations, Realization } from './formatRealizations'

export async function getRealizations(): Promise<Realization[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/realizations?populate=images`,
      { next: { revalidate: 60 } }
    )

    if (!res.ok) {
      console.error(`Erreur Strapi : ${res.status} ${res.statusText}`)
      return []
    }

    const json = await res.json()

    if (!json?.data) {
      console.error('Réponse Strapi invalide :', json)
      return []
    }

    return formatRealizations(json.data)
  } catch (error) {
    console.error('Fetch Strapi échoué :', error)
    return []  // ← la page s'affiche quand même, juste sans données
  }
}