'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function LogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleLogout() {
    setLoading(true)
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="text-sm text-neutral-600 hover:text-red-600 disabled:opacity-50"
    >
      {loading ? '...' : 'Déconnexion'}
    </button>
  )
}
