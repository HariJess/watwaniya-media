import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Emission {
  id: string
  title: string
  image: string
}

const emissions: Emission[] = [
  { id: '1', title: 'Émission 1', image: '/placeholder.svg' },
  { id: '2', title: 'Émission 2', image: '/placeholder.svg' },
  { id: '3', title: 'Émission 3', image: '/placeholder.svg' },
  { id: '4', title: 'Émission 4', image: '/placeholder.svg' },
]

export function SectionEmissions() {
  return (
    <section className="relative bg-[#1a1a1a] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Émissions
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mx-auto max-w-2xl">
              Service de conception et production d'émissions et d'interviews pour valoriser votre message et capter efficacement votre audience.
            </p>
          </div>
          <button className="w-fit px-6 py-3 bg-[#e84e1b] hover:bg-[#d63f0f] text-white font-bold text-sm transition-colors whitespace-nowrap">
            NOUS CONTACTER
          </button>
        </div>

        {/* Carousel Grid */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-12 h-12 items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors z-10">
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {emissions.map((emission) => (
              <div key={emission.id} className="relative group">
                <div className="relative w-full aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src={emission.image}
                    alt={emission.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-sm">
                  {emission.title}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-12 h-12 items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors z-10">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden gap-4 mt-6 justify-center">
          <button className="w-12 h-12 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
