'use client'

import { useState } from 'react'
import { Realization } from '@/lib/realization/formatRealizations'

const FALLBACK_IMAGE = '/placeholder.svg?height=400&width=550'

function RealizationCard({ item, large }: { item: Realization; large: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imgError, setImgError] = useState(false)

  const images = item.images?.length > 0 ? item.images : [FALLBACK_IMAGE]
  const hasMultiple = images.length > 1
  const currentImage = imgError ? FALLBACK_IMAGE : images[activeIndex]

  return (
    <div className="relative rounded-xl overflow-hidden h-[380px] cursor-pointer group">
      <img
        src={currentImage}
        alt={item.title ?? 'Réalisation'}
        onError={() => setImgError(true)}
        className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end">
        <h3 className={`text-white font-bold text-xl leading-tight ${large ? 'max-w-[60%]' : ''}`}>
          {item.title ?? 'Sans titre'}
        </h3>
        {hasMultiple && !imgError && (
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setImgError(false) }}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === activeIndex ? 'bg-orange-500' : 'bg-gray-400 hover:bg-gray-200'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function Realizations({ realizations }: { realizations?: Realization[] }) {
  // ✅ Garde : données absentes ou vides
  if (!realizations || realizations.length === 0) {
    return (
      <section id="realisations" className="bg-[#111] py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-center">Aucune réalisation disponible.</p>
        </div>
      </section>
    )
  }

  const row1 = realizations.slice(0, 3)
  const row2 = realizations.slice(3, 6)

  return (
    <section id="realisations" className="bg-[#111] py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-0.5 bg-orange-500 flex-shrink-0" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
              Nos réalisations
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-px h-8 bg-gray-500" />
            <span className="text-white font-bold text-base">
              Nos réalisations parlent pour nous
            </span>
          </div>
        </div>

        {row1.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-[1.9fr_1fr_1fr] gap-3 mb-3">
            {row1.map((item, i) => (
              <RealizationCard key={item.id} item={item} large={i === 0} />
            ))}
          </div>
        )}

        {row2.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.9fr] gap-3">
            {row2.map((item, i) => (
              <RealizationCard key={item.id} item={item} large={i === 2} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}