import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function AdminHome() {
  const count = await prisma.realization.count()
  const latest = await prisma.realization.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 5,
    include: { images: true },
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-neutral-500 text-sm mt-1">Vue d&apos;ensemble du contenu publié.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-5">
          <div className="text-sm text-neutral-500">Réalisations</div>
          <div className="text-3xl font-bold mt-1">{count}</div>
          <Link
            href="/admin/realisations"
            className="text-sm text-orange-600 hover:underline mt-3 inline-block"
          >
            Gérer →
          </Link>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Dernières modifications</h2>
          <Link
            href="/admin/realisations/new"
            className="text-sm bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded"
          >
            + Nouvelle réalisation
          </Link>
        </div>
        {latest.length === 0 ? (
          <p className="text-sm text-neutral-500">Aucune réalisation pour le moment.</p>
        ) : (
          <ul className="divide-y bg-white border rounded-lg">
            {latest.map((r) => (
              <li key={r.id} className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3 min-w-0">
                  {r.images[0] && (
                    <img
                      src={r.images[0].url}
                      alt=""
                      className="w-12 h-12 object-cover rounded flex-shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <div className="font-medium truncate">{r.title}</div>
                    <div className="text-xs text-neutral-500">
                      {r.images.length} image{r.images.length > 1 ? 's' : ''} · mis à jour{' '}
                      {new Date(r.updatedAt).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/admin/realisations/${r.id}/edit`}
                  className="text-sm text-orange-600 hover:underline"
                >
                  Éditer
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
