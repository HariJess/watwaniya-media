'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/admin'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Erreur de connexion')
        return
      }
      router.push(from)
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white border rounded-lg p-6 shadow-sm space-y-4"
      >
        <div>
          <h1 className="text-xl font-semibold">Connexion back-office</h1>
          <p className="text-sm text-neutral-500 mt-1">Watwaniya Média</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-medium py-2 rounded"
        >
          {loading ? 'Connexion…' : 'Se connecter'}
        </button>
      </form>
    </div>
  )
}
