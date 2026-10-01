import Link from 'next/link'
import { Images, Plus, TrendingUp, Pencil, Star } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function AdminHome() {
  const [count, totalImages, featured, latest] = await Promise.all([
    prisma.realization.count(),
    prisma.realizationImage.count(),
    prisma.realization.count({ where: { large: true } }),
    prisma.realization.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 5,
      include: { images: true },
    }),
  ])

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-1">
            Vue d&apos;ensemble du contenu publié.
          </p>
        </div>
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
          <Link href="/admin/realisations/new">
            <Plus className="w-4 h-4" />
            Nouvelle réalisation
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Réalisations</CardTitle>
            <Images className="w-4 h-4 text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl 2xl:text-4xl font-bold">{count}</div>
            <p className="text-xs text-neutral-500 mt-1">publiées sur le site</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Images</CardTitle>
            <TrendingUp className="w-4 h-4 text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl 2xl:text-4xl font-bold">{totalImages}</div>
            <p className="text-xs text-neutral-500 mt-1">au total</p>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">Mises en avant</CardTitle>
            <Star className="w-4 h-4 text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl 2xl:text-4xl font-bold">{featured}</div>
            <p className="text-xs text-neutral-500 mt-1">en grande vignette</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <CardTitle>Dernières modifications</CardTitle>
            <p className="text-sm text-neutral-500 mt-0.5">Les 5 réalisations récemment éditées</p>
          </div>
          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
            <Link href="/admin/realisations">Tout voir</Link>
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          {latest.length === 0 ? (
            <div className="text-center py-10 sm:py-12 px-4 sm:px-6">
              <Images className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
              <p className="text-sm text-neutral-500 mb-4">Aucune réalisation pour le moment.</p>
              <Button
                asChild
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Link href="/admin/realisations/new">
                  <Plus className="w-4 h-4" />
                  Créer la première
                </Link>
              </Button>
            </div>
          ) : (
            <ul className="divide-y">
              {latest.map((r) => (
                <li
                  key={r.id}
                  className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 hover:bg-neutral-50 transition-colors"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden bg-neutral-100 flex-shrink-0">
                    {r.images[0] ? (
                      <img src={r.images[0].url} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Images className="w-5 h-5 text-neutral-300" />
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
                          <span className="hidden sm:inline">large</span>
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-neutral-500 mt-0.5 truncate">
                      {r.images.length} image{r.images.length > 1 ? 's' : ''} ·{' '}
                      <span className="hidden sm:inline">mis à jour </span>
                      {new Date(r.updatedAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="flex-shrink-0">
                    <Link href={`/admin/realisations/${r.id}/edit`} aria-label="Éditer">
                      <Pencil className="w-4 h-4" />
                      <span className="hidden sm:inline">Éditer</span>
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
