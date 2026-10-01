import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { saveUploadedImage } from '@/lib/upload'

export async function GET() {
  const items = await prisma.realization.findMany({
    orderBy: [{ position: 'asc' }, { id: 'asc' }],
    include: { images: { orderBy: { position: 'asc' } } },
  })
  return NextResponse.json(items)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const form = await req.formData()
  const title = String(form.get('title') || '').trim()
  const large = form.get('large') === 'true'
  const position = Number(form.get('position') || 0)

  if (!title) {
    return NextResponse.json({ error: 'Le titre est requis' }, { status: 400 })
  }

  const files = form.getAll('images').filter((f): f is File => f instanceof File && f.size > 0)
  const urls: string[] = []
  for (const file of files) {
    try {
      urls.push(await saveUploadedImage(file))
    } catch (e) {
      return NextResponse.json(
        { error: e instanceof Error ? e.message : 'Upload échoué' },
        { status: 400 },
      )
    }
  }

  const created = await prisma.realization.create({
    data: {
      title,
      large,
      position,
      images: { create: urls.map((url, i) => ({ url, position: i })) },
    },
    include: { images: true },
  })

  return NextResponse.json(created, { status: 201 })
}
