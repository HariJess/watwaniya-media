'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Upload, X, Loader2, Save, ArrowLeft, Star, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Alert, AlertDescription } from '@/components/ui/alert'

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

  function handleFilesSelected(files: FileList | null) {
    if (!files) return
    setNewFiles((prev) => [...prev, ...Array.from(files)])
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

  const totalImages = existingImages.length + newFiles.length

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Informations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="title">
              Titre <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nom du projet"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                type="number"
                inputMode="numeric"
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
              />
              <p className="text-xs text-neutral-500">
                Ordre d&apos;affichage (plus petit = en premier)
              </p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="large">Mise en avant</Label>
              <div className="flex items-center gap-3 h-9">
                <Switch id="large" checked={large} onCheckedChange={setLarge} />
                <span className="text-sm text-neutral-600 flex items-center gap-1.5">
                  {large && <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />}
                  {large ? 'Grande vignette activée' : 'Vignette standard'}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2">
            <span>Images</span>
            <span className="text-sm font-normal text-neutral-500">
              {totalImages} fichier{totalImages > 1 ? 's' : ''}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {(existingImages.length > 0 || newFiles.length > 0) && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-3">
              {existingImages.map((img) => (
                <div
                  key={`existing-${img.id}`}
                  className="relative group aspect-square rounded-md overflow-hidden ring-1 ring-neutral-200"
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeExistingImage(img.id)}
                    aria-label="Retirer"
                    className="absolute top-1.5 right-1.5 w-7 h-7 sm:w-6 sm:h-6 bg-black/70 hover:bg-red-600 text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all"
                  >
                    <X className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              ))}
              {newFiles.map((f, i) => (
                <div
                  key={`new-${i}`}
                  className="relative group aspect-square rounded-md overflow-hidden ring-1 ring-orange-300"
                >
                  <img
                    src={URL.createObjectURL(f)}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1.5 left-1.5 text-[10px] font-medium bg-orange-500 text-white px-1.5 py-0.5 rounded">
                    nouveau
                  </span>
                  <button
                    type="button"
                    onClick={() => removeNewFile(i)}
                    aria-label="Retirer"
                    className="absolute top-1.5 right-1.5 w-7 h-7 sm:w-6 sm:h-6 bg-black/70 hover:bg-red-600 text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all"
                  >
                    <X className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <label
            htmlFor="images"
            className="border-2 border-dashed border-neutral-300 rounded-lg p-5 sm:p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-orange-400 hover:bg-orange-50/30 transition-colors"
          >
            <Upload className="w-7 h-7 text-neutral-400 mb-2" />
            <span className="text-sm font-medium">Cliquer pour ajouter des images</span>
            <span className="text-xs text-neutral-500 mt-0.5">
              JPG, PNG, WEBP, AVIF ou GIF — max 8 Mo chacun
            </span>
            <Input
              id="images"
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleFilesSelected(e.target.files)}
              className="hidden"
            />
          </label>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="w-4 h-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 sticky bottom-0 bg-neutral-50 py-3 -mx-4 sm:mx-0 px-4 sm:px-0 border-t sm:border-t-0 sm:static sm:bg-transparent sm:py-0">
        <Button
          type="button"
          variant="ghost"
          onClick={() => router.push('/admin/realisations')}
          disabled={loading}
          className="w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Annuler
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {loading
            ? 'Enregistrement…'
            : mode === 'create'
              ? 'Créer la réalisation'
              : 'Enregistrer'}
        </Button>
      </div>
    </form>
  )
}
