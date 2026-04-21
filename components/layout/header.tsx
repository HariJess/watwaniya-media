'use client'

import Link from 'next/link'
import { ArrowRight, X, Menu } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'ACCUEIL' },
  { href: '/services', label: 'SERVICES' },
  { href: '/realisations', label: 'RÉALISATIONS' },
  { href: '/apropos', label: 'A PROPOS DE NOUS' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="fixed top-0 z-20 w-full backdrop-blur-md"
      style={{
        background: 'linear-gradient(to right, rgba(10,10,10,0.20) 70%, rgba(17,17,17,0.4) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-stretch h-[72px] sm:h-20">

        {/* Logo block */}
        <div className="flex items-center pl-6 sm:pl-10 pr-6 sm:pr-10 gap-4 sm:gap-6 flex-shrink-0">
          {/* Logo SVG mark */}
          <Link href="/" className="flex flex-col items-start">
            <Image 
              src="/Watwaniya-white-logo.svg" 
              alt="Watwaniya Média Logo" 
              width={100} 
              height={100} 
              className="w-14 h-14" />
          </Link>

          {/* Vertical divider */}
          <div className="h-10 w-px bg-gray-600 flex-shrink-0" />
        </div>

        {/* Desktop Nav — centered */}
        <nav className="hidden lg:flex items-center flex-1 justify-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-xs font-bold tracking-[0.12em] uppercase hover:text-orange-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact CTA — full-height orange block */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-colors px-8 lg:px-12 flex-shrink-0 group"
        >
          <span className="text-white text-xs font-black tracking-[0.18em] uppercase">CONTACT</span>
          <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        {/* Mobile: hamburger + orange contact strip */}
        <div className="lg:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white px-5 h-full flex items-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-orange-500 h-full px-5"
          >
            <span className="text-white text-[10px] font-black tracking-[0.15em] uppercase">CONTACT</span>
            <ArrowRight size={13} className="text-white" />
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav
          className="lg:hidden bg-[#0d0d0d] border-t border-gray-800 flex flex-col"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-xs font-bold tracking-[0.15em] uppercase px-6 py-4 border-b border-gray-800 hover:text-orange-400 hover:bg-[#111] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}