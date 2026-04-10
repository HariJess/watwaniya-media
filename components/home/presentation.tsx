'use client'
import React from 'react'
import Image from 'next/image'

export function Presentation() {
  return (
    <section className="bg-black py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* "PRÉSENTATION" label */}
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-2">
              Présentation
            </p>

            {/* Decorative line + Big title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-0.5 bg-orange-500 flex-shrink-0" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight">
                Qui sommes nous
              </h2>
            </div>

            {/* Paragraph 1 */}
            <p className="text-white text-base leading-relaxed mb-6">
              <span className="text-orange-500 font-semibold">Watwaniya Média</span>{' '}
              est une agence spécialisée dans la communication digitale, la production audiovisuelle et la création de plateformes digitales.
            </p>

            {/* Paragraph 2 */}
            <p className="text-white text-base leading-relaxed mb-6">
              Nous accompagnons les entreprises, institutions et organisations dans la conception de stratégies de communication modernes, la production de contenus innovants et le développement d&apos;outils digitaux performants.
            </p>

            {/* Paragraph 3 with mixed colors */}
            <p className="text-white text-base leading-relaxed">
              Notre mission est de{' '}
              <span className="text-orange-500">valoriser les marques, promouvoir la culture et amplifier les messages qui comptent</span>
              <span className="text-white">.</span>
            </p>
          </div>

          {/* Right Content - Logo (untouched) */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/Watwaniya-white-logo.svg"
                alt="Watwaniya Média Logo"
                width={400}
                height={400}
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}