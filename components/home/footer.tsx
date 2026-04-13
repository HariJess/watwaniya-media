'use client'
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 py-6">

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo-footer.svg"
              alt="Watwaniya Media Logo"
              width={70}
              height={30}
              className="object-cover w-auto h-auto"
            />
          </div>

          {/* Center: Nav links */}
          <nav className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {[
              { href: '/', label: 'ACCUEIL' },
              { href: '/services', label: 'SERVICES' },
              { href: '/realisations', label: 'REALISATIONS' },
              { href: '/apropos', label: 'A PROPOS' },
            ].map((link, i, arr) => (
              <span key={link.href} className="flex items-center gap-2 sm:gap-3">
                <a
                  href={link.href}
                  className="text-white text-xs font-semibold tracking-[0.12em] uppercase hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </a>
                {i < arr.length - 1 && (
                  <span className="text-gray-600 text-xs">|</span>
                )}
              </span>
            ))}
          </nav>

          {/* Right: Social + copyright */}
          <div className="flex flex-col items-start gap-1 text-right">
            <div className="flex items-center gap-2">
              <a href="#" className="text-white text-xs font-semibold hover:text-orange-400 transition-colors tracking-wide">Facebook</a>
              <span className="text-white text-xs">.</span>
              <a href="#" className="text-white text-xs font-semibold hover:text-orange-400 transition-colors tracking-wide">LinkedIn</a>
            </div>
            <p className="text-white text-xs tracking-wide">
              WATWANIYA MEDIA © 2026 - Tous droits réservés
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}