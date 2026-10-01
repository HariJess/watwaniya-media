import type { Metadata } from 'next'
import Link from 'next/link'
import { LogoutButton } from './_components/logout-button'
import { getSession } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Back-office — Watwaniya Média',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {session && (
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/admin" className="font-semibold">Dashboard</Link>
              <Link href="/admin/realisations" className="text-neutral-600 hover:text-neutral-900">
                Réalisations
              </Link>
              <Link href="/" className="text-neutral-600 hover:text-neutral-900" target="_blank">
                Site public ↗
              </Link>
            </nav>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-neutral-500">{session.email}</span>
              <LogoutButton />
            </div>
          </div>
        </header>
      )}
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
