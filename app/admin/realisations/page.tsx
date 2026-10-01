import Link from 'next/link'
import { Plus, Pencil, Images as ImagesIcon, Star } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DeleteButton } from './_components/delete-button'

export default async function AdminRealisationsPage() {
  const items = await prisma.realization.findMany({
    orderBy: [{ position: 'asc' }, { id: 'asc' }],
    include: { images: true },
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-tight">
            Réalisations
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-1">
            {items.length} entrée{items.length > 1 ? 's' : ''} dans la bibliothèque
          </p>
        </div>
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
          <Link href="/admin/realisations/new">
            <Plus className="w-4 h-4" />
            Nouvelle
          </Link>
        </Button>
      </div>

      {items.length === 0 ? (
        <Card>
          <CardContent className="py-12 sm:py-16 text-center px-4">
            <ImagesIcon className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
            <h2 className="font-medium">Aucune réalisation</h2>
            <p className="text-sm text-neutral-500 mt-1 mb-6">
              Commence par créer ta première réalisation.
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/admin/realisations/new">
                <Plus className="w-4 h-4" />
                Nouvelle réalisation
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <ul className="divide-y">
            {items.map((r) => (
              <li
                key={r.id}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden bg-neutral-100 flex-shrink-0 ring-1 ring-neutral-200">
                    {r.images[0] ? (
                      <img src={r.images[0].url} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImagesIcon className="w-5 h-5 text-neutral-300" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium truncate">{r.title}</span>
                      {r.large && (
                        <Badge
                          variant="secondary"
                          className="bg-orange-100 text-orange-700 hover:bg-orange-100"
                        >
                          <Star className="w-3 h-3" />
                          large
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-neutral-500 flex gap-2 sm:gap-3 mt-0.5 flex-wrap">
                      <span className="font-mono">#{r.id}</span>
                      <span className="hidden sm:inline">·</span>
                      <span>position {r.position}</span>
                      <span className="hidden sm:inline">·</span>
                      <span>
                        {r.images.length} image{r.images.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 ml-auto sm:ml-0 flex-shrink-0">
                  <Button asChild variant="ghost" size="sm">
                    <Link
                      href={`/admin/realisations/${r.id}/edit`}
                      aria-label={`Éditer ${r.title}`}
                    >
                      <Pencil className="w-4 h-4" />
                      <span className="hidden sm:inline">Éditer</span>
                    </Link>
                  </Button>
                  <DeleteButton id={r.id} title={r.title} />
                </div>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  )
}
