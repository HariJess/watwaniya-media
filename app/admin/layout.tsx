import type { Metadata } from 'next'
import Image from 'next/image'
import { LogoutButton } from './_components/logout-button'
import { SidebarContent } from './_components/sidebar-nav'
import { MobileSidebar } from './_components/mobile-sidebar'
import { getSession } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Back-office — Watwaniya Média',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  if (!session) {
    return <div className="min-h-screen bg-neutral-50">{children}</div>
  }

  const initial = session.email[0]?.toUpperCase()

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col z-30">
        <SidebarContent />
      </aside>

      <div className="lg:pl-64 flex flex-col min-h-screen">
        <header className="h-16 bg-white border-b border-neutral-200 sticky top-0 z-20">
          <div className="h-full px-4 sm:px-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 lg:hidden">
              <MobileSidebar />
              <Image
                src="/logo-footer.svg"
                alt="Watwaniya Média"
                width={70}
                height={30}
                className="h-7 w-auto"
                priority
              />
            </div>

            <div className="flex items-center gap-3 sm:gap-4 ml-auto">
              <div className="hidden sm:block text-right leading-tight">
                <div className="text-sm font-medium">{session.email}</div>
                <div className="text-xs text-neutral-500">Administrateur</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                {initial}
              </div>
              <LogoutButton />
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1600px]">{children}</div>
        </main>
      </div>
    </div>
  )
}
