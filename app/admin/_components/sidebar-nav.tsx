'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Images, ExternalLink, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type NavItem = { href: string; label: string; icon: LucideIcon }

const nav: NavItem[] = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/realisations', label: 'Réalisations', icon: Images },
]

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="h-full flex flex-col bg-neutral-950 text-neutral-100">
      <div className="h-16 px-5 flex items-center gap-3 border-b border-neutral-800 flex-shrink-0">
        <Image
          src="/logo-footer.svg"
          alt="Watwaniya Média"
          width={70}
          height={30}
          className="h-9 w-auto"
          priority
        />
        <div className="leading-tight">
          <div className="text-xs text-neutral-400 uppercase tracking-wider">Back-office</div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {nav.map((item) => {
          const Icon = item.icon
          const active =
            item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                active
                  ? 'bg-orange-500/15 text-orange-400'
                  : 'text-neutral-300 hover:bg-neutral-800 hover:text-white',
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-3 border-t border-neutral-800 flex-shrink-0">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Site public
        </a>
      </div>
    </div>
  )
}
