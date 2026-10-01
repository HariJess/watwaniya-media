'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function DeleteButton({ id, title }: { id: number; title: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm(`Supprimer définitivement « ${title} » ?`)) return
    setLoading(true)
    const res = await fetch(`/api/realizations/${id}`, { method: 'DELETE' })
    setLoading(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      alert(data.error || 'Suppression échouée')
      return
    }
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="text-sm border border-red-200 text-red-600 px-3 py-1 rounded hover:bg-red-50 disabled:opacity-50"
    >
      {loading ? '...' : 'Supprimer'}
    </button>
  )
}
