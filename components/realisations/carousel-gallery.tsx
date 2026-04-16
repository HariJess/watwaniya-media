'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselItem {
  id: string
  title: string
  image: string
}

interface CarouselGalleryProps {
  items: CarouselItem[]
  title: string
  description?: string
  onContactClick?: () => void
}

export function CarouselGallery({ items, title, description, onContactClick }: CarouselGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Pour desktop: afficher 3 items
  const itemsPerPage = 3
  const desktopItems = []
  for (let i = 0; i < itemsPerPage; i++) {
    desktopItems.push(items[(currentIndex + i) % items.length])
  }

  return (
    <section className="relative bg-black py-20 overflow-hidden border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {title}
            </h2>
            {description && (
              <p className="text-gray-300 text-sm sm:text-base">
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onContactClick}
            className="w-fit px-6 py-3 bg-[#e84e1b] hover:bg-[#d63f0f] text-white font-bold text-sm transition-colors whitespace-nowrap"
          >
            NOUS CONTACTER
          </button>
        </div>

        {/* Desktop Carousel - 3 items */}
        <div className="hidden sm:block relative">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-12 h-12 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-3 gap-4">
            {desktopItems.map((item) => (
              <div key={item.id} className="relative group">
                <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="absolute bottom-4 left-4 bg-[#e84e1b] px-4 py-2 text-white font-bold text-sm">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-12 h-12 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Carousel - 1 item */}
        <div className="sm:hidden">
          <div className="relative w-full">
            <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={items[currentIndex].image}
                alt={items[currentIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="absolute bottom-4 left-4 bg-[#e84e1b] px-4 py-2 text-white font-bold text-sm">
              {items[currentIndex].title}
            </div>
          </div>

          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-[#e84e1b]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="w-12 h-12 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Pagination Dots */}
        <div className="hidden sm:flex gap-2 mt-8 justify-center">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-[#e84e1b]' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
