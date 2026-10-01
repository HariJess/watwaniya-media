'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type ExistingImage = { id: number; url: string }

type Props = {
  mode: 'create' | 'edit'
  id?: number
  initial?: {
    title: string
    large: boolean
    position: number
    images: ExistingImage[]
  }
}

export function RealizationForm({ mode, id, initial }: Props) {
  const router = useRouter()
  const [title, setTitle] = useState(initial?.title ?? '')
  const [large, setLarge] = useState(initial?.large ?? false)
  const [position, setPosition] = useState(initial?.position ?? 0)
  const [existingImages, setExistingImages] = useState<ExistingImage[]>(initial?.images ?? [])
  const [newFiles, setNewFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function removeExistingImage(imgId: number) {
    setExistingImages((prev) => prev.filter((i) => i.id !== imgId))
  }

  function removeNewFile(index: number) {
    setNewFiles((prev) => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const form = new FormData()
      form.append('title', title)
      form.append('large', String(large))
      form.append('position', String(position))
      for (const file of newFiles) form.append('images', file)
      if (mode === 'edit') {
        for (const img of existingImages) form.append('keepImageIds', String(img.id))
      }

      const url = mode === 'create' ? '/api/realizations' : `/api/realizations/${id}`
      const method = mode === 'create' ? 'POST' : 'PUT'
      const res = await fetch(url, { method, body: form })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Enregistrement échoué')
        return
      }
      router.push('/admin/realisations')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white border rounded-lg p-6 max-w-2xl">
      <div className="space-y-1">
        <label className="text-sm font-medium" htmlFor="title">Titre</label>
        <input
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="position">
            Position <span className="text-neutral-400">(ordre d&apos;affichage)</span>
          </label>
          <input
            id="position"
            type="number"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <label className="flex items-end gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={large}
            onChange={(e) => setLarge(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm">Mettre en avant (grande vignette)</span>
        </label>
      </div>

      {mode === 'edit' && existingImages.length > 0 && (
        <div className="space-y-2">
          <div className="text-sm font-medium">Images actuelles</div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {existingImages.map((img) => (
              <div key={img.id} className="relative group">
                <img src={img.url} alt="" className="w-full h-24 object-cover rounded border" />
                <button
                  type="button"
                  onClick={() => removeExistingImage(img.id)}
                  className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition"
                >
                  retirer
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="images">
          {mode === 'create' ? 'Images' : 'Ajouter des images'}
        </label>
        <input
          id="images"
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setNewFiles(Array.from(e.target.files || []))}
          className="text-sm"
        />
        {newFiles.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-2">
            {newFiles.map((f, i) => (
              <div key={i} className="relative group">
                <img
                  src={URL.createObjectURL(f)}
                  alt=""
                  className="w-full h-24 object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => removeNewFile(i)}
                  className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition"
                >
                  retirer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex items-center gap-3 pt-2 border-t">
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white px-4 py-2 rounded text-sm font-medium"
        >
          {loading ? 'Enregistrement…' : mode === 'create' ? 'Créer' : 'Enregistrer'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/realisations')}
          className="text-sm text-neutral-600 hover:text-neutral-900"
        >
          Annuler
        </button>
      </div>
    </form>
  )
}
