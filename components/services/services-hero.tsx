'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ServicesHero() {
  return (
  <section
  className="relative flex items-center overflow-hidden pt-24 pb-20"
  style={{
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.81), rgba(0,0,0,0.5)), url(/service/bg-service-hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 max-w-[900px] text-[clamp(2.2rem,5.5vw,3.5rem)] font-extrabold leading-[1.1] text-white">
            Nos services
          </h1>

          <p className="mb-10 max-w-[700px] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed text-white/75">
            Nous concevons et déployons des stratégies de communication capables de toucher un large public, en combinant
            les outils digitaux, les médias audiovisuels et les campagnes d&apos;intérêt général. Et bien au-delà.
          </p>

          <Link
            href="/realisations"
            className="
              inline-flex items-center justify-center
               px-8 py-3
              text-[0.8rem] font-bold uppercase tracking-[0.1em] text-white
              transition-colors duration-200 hover:bg-[#c93f10]
            "
          >
            Voir nos réalisations
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
