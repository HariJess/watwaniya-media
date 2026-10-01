import { randomUUID } from 'node:crypto'
import { mkdir, writeFile, unlink } from 'node:fs/promises'
import path from 'node:path'

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads')
const ALLOWED = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'])
const MAX_SIZE = 8 * 1024 * 1024

function extFromMime(mime: string): string {
  switch (mime) {
    case 'image/jpeg': return '.jpg'
    case 'image/png':  return '.png'
    case 'image/webp': return '.webp'
    case 'image/avif': return '.avif'
    case 'image/gif':  return '.gif'
    default:            return ''
  }
}

export async function saveUploadedImage(file: File): Promise<string> {
  if (!ALLOWED.has(file.type)) {
    throw new Error(`Format d'image non supporté: ${file.type}`)
  }
  if (file.size > MAX_SIZE) {
    throw new Error(`Fichier trop volumineux (max ${MAX_SIZE / 1024 / 1024} Mo)`)
  }
  await mkdir(UPLOAD_DIR, { recursive: true })
  const name = `${randomUUID()}${extFromMime(file.type)}`
  const buffer = Buffer.from(await file.arrayBuffer())
  await writeFile(path.join(UPLOAD_DIR, name), buffer)
  return `/uploads/${name}`
}

export async function deleteUploadedImage(publicUrl: string): Promise<void> {
  if (!publicUrl.startsWith('/uploads/')) return
  const filePath = path.join(process.cwd(), 'public', publicUrl)
  try {
    await unlink(filePath)
  } catch {
    // Fichier déjà manquant : ignorer
  }
}
