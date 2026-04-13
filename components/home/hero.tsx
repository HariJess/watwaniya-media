'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="accueil"
      className="
        relative flex items-center overflow-hidden
        bg-[url('/bg-hero.svg')] bg-cover bg-center bg-no-repeat
      "
    >
      {/* Animated light streaks background */}
      {/* <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_80%_60%_at_65%_50%,rgba(80,40,120,0.35)_0%,rgba(40,20,80,0.2)_35%,transparent_70%)]
        "
      /> */}

      {/* Light streaks / lens flare effect */}
      {/* <div
        className="
          pointer-events-none absolute inset-0
          skew-x-[-5deg]
          bg-[repeating-linear-gradient(30deg,transparent_0%,transparent_2%,rgba(255,80,30,0.03)_2.5%,transparent_3%,transparent_5%,rgba(100,60,200,0.04)_5.5%,transparent_6%)]
        "
      /> */}

      {/* Top-right decorative orb */}
      {/* <div
        className="
          pointer-events-none absolute right-0 top-0
          h-[420px] w-[420px] translate-x-[30%] translate-y-[-30%] rounded-full blur-[2px]
          bg-[radial-gradient(circle,rgba(50,50,80,0.8)_0%,rgba(20,20,40,0.4)_50%,transparent_75%)]
        "
      /> */}

      {/* Horizontal colored streaks */}
      {/* <div
        className="
          pointer-events-none absolute right-0 top-1/2 h-[300px] w-[55%] -translate-y-1/2 blur-[1px]
          bg-[linear-gradient(to_right,transparent_0%,rgba(200,80,30,0.12)_20%,rgba(255,100,50,0.18)_40%,rgba(150,50,200,0.15)_60%,rgba(80,30,150,0.1)_80%,transparent_100%)]
        "
      /> */}

      {/* Fine diagonal light lines */}
      {/* <div
        className="
          pointer-events-none absolute inset-0 opacity-40
          bg-[repeating-linear-gradient(25deg,transparent,transparent_18px,rgba(255,80,30,0.06)_18px,rgba(255,80,30,0.06)_19px),repeating-linear-gradient(25deg,transparent,transparent_35px,rgba(120,60,200,0.05)_35px,rgba(120,60,200,0.05)_36px)]
        "
      /> */}

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 mt-12 py-24">
        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/55 sm:text-sm">
          Watwaniya Média
        </p>

        <h1 className="mb-5 max-w-[820px] text-[clamp(2.2rem,5.5vw,2.5rem)] font-extrabold leading-[1.1] text-white">
          Agence de{' '}
          <span className="text-[#e84e1b]">communication digitale</span>
          <br />
          et de{' '}
          <span className="text-[#e84e1b]">production audiovisuelle</span>
        </h1>

        <div className="mb-8 flex items-center gap-4">
          <div className="h-[2px] w-[40px] shrink-0 bg-white/80" />
          <p className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
            DES IDÉES QUI{' '}
            <span className="border-b-2 border-[#1a6ef5] pb-[1px]">
              MARQUENT
            </span>
            , DES CONTENUS QUI{' '}
            <span className="border-b-2 border-[#1a6ef5] pb-[1px]">
              IMPACTENT
            </span>
          </p>
        </div>

        <p className="mb-10 max-w-[600px] text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed text-white/75">
          Votre marque et votre vision méritent d&apos;être vue et entendue.
          <br />
          Grâce à nos stratégies de communication et à nos productions digitales, vos messages atteignent les
          bonnes personnes au bon moment.
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link href='/services'
            className="
              inline-flex min-w-[220px] items-center justify-center
              bg-[#e84e1b] px-7 py-[14px]
              text-[0.8rem] font-bold uppercase tracking-[0.1em] text-white
              transition-colors duration-200 hover:bg-[#c93f10] cursor-pointer
            "
          >
            DÉCOUVRIR NOS SERVICES
          </Link>

          <Link href='/realisations'
            className="
              group inline-flex items-center gap-3
              bg-transparent px-7 py-[14px]
              text-[0.8rem] font-bold uppercase tracking-[0.1em] text-white
              transition-all duration-200 cursor-pointer
            "
          >
            VOIR NOS RÉALISATIONS
            <span className="inline-flex transition-transform duration-200 group-hover:translate-x-1.5">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}