import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { RealizationForm } from '../../_components/realization-form'

type Params = { params: Promise<{ id: string }> }

export default async function EditRealizationPage({ params }: Params) {
  const { id } = await params
  const idNum = Number(id)
  if (!Number.isInteger(idNum) || idNum <= 0) notFound()

  const item = await prisma.realization.findUnique({
    where: { id: idNum },
    include: { images: { orderBy: { position: 'asc' } } },
  })
  if (!item) notFound()

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <nav className="flex items-center gap-1.5 text-sm text-neutral-500 mb-3">
          <Link href="/admin/realisations" className="hover:text-neutral-900">
            Réalisations
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-neutral-900 truncate max-w-xs">{item.title}</span>
        </nav>
        <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-tight">
          Éditer la réalisation
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 mt-1">
          Modifie les informations ou gère les images existantes.
        </p>
      </div>

      <RealizationForm
        mode="edit"
        id={item.id}
        initial={{
          title: item.title,
          large: item.large,
          position: item.position,
          images: item.images.map((i) => ({ id: i.id, url: i.url })),
        }}
      />
    </div>
  )
}
