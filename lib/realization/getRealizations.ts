import { prisma } from '@/lib/prisma'
import type { Realization } from './formatRealizations'

export async function getRealizations(): Promise<Realization[]> {
  try {
    const rows = await prisma.realization.findMany({
      orderBy: [{ position: 'asc' }, { id: 'asc' }],
      include: { images: { orderBy: { position: 'asc' } } },
    })
    return rows.map((r) => ({
      id: r.id,
      title: r.title,
      large: r.large,
      images: r.images.map((i) => i.url),
    }))
  } catch (error) {
    console.error('Erreur Prisma getRealizations:', error)
    return []
  }
}
