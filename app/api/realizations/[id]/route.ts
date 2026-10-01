import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { saveUploadedImage, deleteUploadedImage } from '@/lib/upload'

type Params = { params: Promise<{ id: string }> }

async function requireAuth() {
  const s = await getSession()
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return null
}

function parseId(raw: string): number | null {
  const n = Number(raw)
  return Number.isInteger(n) && n > 0 ? n : null
}

export async function GET(_req: NextRequest, { params }: Params) {
  const id = parseId((await params).id)
  if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const item = await prisma.realization.findUnique({
    where: { id },
    include: { images: { orderBy: { position: 'asc' } } },
  })
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(item)
}

export async function PUT(req: NextRequest, { params }: Params) {
  const unauth = await requireAuth()
  if (unauth) return unauth

  const id = parseId((await params).id)
  if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const existing = await prisma.realization.findUnique({
    where: { id },
    include: { images: true },
  })
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const form = await req.formData()
  const title = String(form.get('title') || '').trim()
  const large = form.get('large') === 'true'
  const position = Number(form.get('position') || 0)
  const keepImageIds = form
    .getAll('keepImageIds')
    .map((v) => Number(v))
    .filter((n) => Number.isInteger(n))

  if (!title) {
    return NextResponse.json({ error: 'Le titre est requis' }, { status: 400 })
  }

  const toDelete = existing.images.filter((img) => !keepImageIds.includes(img.id))
  for (const img of toDelete) await deleteUploadedImage(img.url)

  const newFiles = form.getAll('images').filter((f): f is File => f instanceof File && f.size > 0)
  const newUrls: string[] = []
  for (const file of newFiles) {
    try {
      newUrls.push(await saveUploadedImage(file))
    } catch (e) {
      return NextResponse.json(
        { error: e instanceof Error ? e.message : 'Upload échoué' },
        { status: 400 },
      )
    }
  }

  const basePos = existing.images.length
  const updated = await prisma.$transaction(async (tx) => {
    if (toDelete.length) {
      await tx.realizationImage.deleteMany({
        where: { id: { in: toDelete.map((i) => i.id) } },
      })
    }
    if (newUrls.length) {
      await tx.realizationImage.createMany({
        data: newUrls.map((url, i) => ({ url, position: basePos + i, realizationId: id })),
      })
    }
    return tx.realization.update({
      where: { id },
      data: { title, large, position },
      include: { images: { orderBy: { position: 'asc' } } },
    })
  })

  return NextResponse.json(updated)
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const unauth = await requireAuth()
  if (unauth) return unauth

  const id = parseId((await params).id)
  if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const existing = await prisma.realization.findUnique({
    where: { id },
    include: { images: true },
  })
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  for (const img of existing.images) await deleteUploadedImage(img.url)
  await prisma.realization.delete({ where: { id } })

  return NextResponse.json({ ok: true })
}
