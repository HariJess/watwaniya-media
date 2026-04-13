'use client'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section className="relative bg-[#1a1a1a] py-20 overflow-hidden">

      {/* Large watermark "CONTACT" text in background */}
      <div
        className="absolute inset-0 flex items-end justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[clamp(80px,18vw,220px)] font-extrabold tracking-widest text-[#2a2a2a] leading-none pb-0"
          style={{ letterSpacing: '0.15em' }}
        >
          CONTACT
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">

        {/* Eyebrow text */}
        <p className="text-white text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Vous avez un projet de communication
          <br />
          ou de production audiovisuelle&nbsp;?
        </p>

        {/* Decorative line */}
        <div className="w-8 h-px bg-white mx-auto mb-8" />

        {/* Main heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-orange-500 leading-tight mb-12">
          Contactez notre équipe pour transformer
          <br />
          vos idées en projets à impact
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link href="/contact" className="cursor-pointer bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-colors text-white font-extrabold tracking-[0.15em] text-sm uppercase px-12 py-5">
            Nous contacter
          </Link>
          <Link href="tel:+2694012231" className="cursor-pointer border border-white hover:bg-white hover:text-black active:bg-gray-200 transition-colors text-white font-extrabold tracking-[0.15em] text-sm uppercase px-12 py-5">
            Appeler le +269 401 2231
          </Link>
        </div>

      </div>
    </section>
  )
}