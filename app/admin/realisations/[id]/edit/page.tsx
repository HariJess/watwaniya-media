import { notFound } from 'next/navigation'
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
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Éditer la réalisation</h1>
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
