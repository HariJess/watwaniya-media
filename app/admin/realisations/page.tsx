import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { DeleteButton } from './_components/delete-button'

export default async function AdminRealisationsPage() {
  const items = await prisma.realization.findMany({
    orderBy: [{ position: 'asc' }, { id: 'asc' }],
    include: { images: true },
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Réalisations</h1>
          <p className="text-neutral-500 text-sm mt-1">
            {items.length} entrée{items.length > 1 ? 's' : ''}
          </p>
        </div>
        <Link
          href="/admin/realisations/new"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1.5 rounded"
        >
          + Nouvelle
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="bg-white border rounded-lg p-10 text-center text-neutral-500">
          Aucune réalisation. Clique sur « Nouvelle » pour commencer.
        </div>
      ) : (
        <div className="bg-white border rounded-lg divide-y">
          {items.map((r) => (
            <div key={r.id} className="flex items-center gap-4 p-3">
              <div className="w-16 h-16 bg-neutral-100 rounded overflow-hidden flex-shrink-0">
                {r.images[0] ? (
                  <img src={r.images[0].url} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-400 text-xs">
                    aucune
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{r.title}</div>
                <div className="text-xs text-neutral-500 flex gap-3 mt-0.5">
                  <span>#{r.id}</span>
                  <span>pos. {r.position}</span>
                  <span>{r.images.length} img</span>
                  {r.large && <span className="text-orange-600">large</span>}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/admin/realisations/${r.id}/edit`}
                  className="text-sm border px-3 py-1 rounded hover:bg-neutral-50"
                >
                  Éditer
                </Link>
                <DeleteButton id={r.id} title={r.title} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
