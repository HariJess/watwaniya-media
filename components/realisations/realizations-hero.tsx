import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function RealizationsHero() {
  return (
    <section className="relative bg-black py-20 sm:py-32 overflow-hidden"
     style={{
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.81), rgba(0,0,0,0.5)), url(/bg-rea.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="mb-6 text-2xl sm:text-3xl md:text-3xl font-bold text-white leading-tight">
            Nos réalisations
          </h1>
          <p className="mb-8 text-sm sm:text-lg text-white font-bold  max-w-3xl mx-auto tracking-wider
">
            PRODUCTIONS AUDIOVISUELLES - ÉMISSIONS - CAMPAGNES DIGITALES
            <br className="hidden sm:block" />
            PROJETS INSTITUTIONNELS - SHOOTING PHOTOS - PLATEFORMES DIGITALES
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2  hover:bg-[#d63f0f] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 transition-colors"
          >
            PARLEZ-NOUS DE VOTRE PROJECT
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
