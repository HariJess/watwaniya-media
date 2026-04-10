'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-95 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold">W</div>
            <span className="text-white font-bold text-lg hidden sm:inline">Watwaniya</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#accueil" className="text-gray-300 hover:text-white transition">ACCUEIL</Link>
            <Link href="#services" className="text-gray-300 hover:text-white transition">SERVICES</Link>
            <Link href="#realisations" className="text-gray-300 hover:text-white transition">RÉALISATIONS</Link>
            <Link href="#apropos" className="text-gray-300 hover:text-white transition">À PROPOS DE NOUS</Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition font-medium">
            CONTACT
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#accueil" className="block text-gray-300 hover:text-white transition py-2">ACCUEIL</Link>
            <Link href="#services" className="block text-gray-300 hover:text-white transition py-2">SERVICES</Link>
            <Link href="#realisations" className="block text-gray-300 hover:text-white transition py-2">RÉALISATIONS</Link>
            <Link href="#apropos" className="block text-gray-300 hover:text-white transition py-2">À PROPOS DE NOUS</Link>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition font-medium">
              CONTACT
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
