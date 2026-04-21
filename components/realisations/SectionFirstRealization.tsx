"use client";

import { useState } from "react";
import Image from "next/image";
import { Realization } from "@/lib/realization/formatRealizations";

export function SectionFirstRealization({ item }: { item: Realization }) {
  const slides = item.images
  const [activeIndex, setActiveIndex] = useState(slides.length > 1 ? 1 : 0)

  if (!slides.length) return null

  const prev = () => setActiveIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setActiveIndex((i) => (i + 1) % slides.length)

  const left  = (activeIndex - 1 + slides.length) % slides.length
  const right = (activeIndex + 1) % slides.length
  const visible = [
    { url: slides[left],         idx: left,         pos: "left"   },
    { url: slides[activeIndex],  idx: activeIndex,  pos: "center" },
    { url: slides[right],        idx: right,        pos: "right"  },
  ] as const

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-0">
            {item.title}
          </h2>
          <button className="w-fit px-6 py-3 bg-[#e84e1b] hover:bg-[#d63f0f] text-white font-bold text-sm transition-colors">
            NOUS CONTACTER
          </button>
        </div>

        {/* MOBILE */}
        <div className="sm:hidden relative flex items-center justify-center gap-3">
          <button onClick={prev} className="z-20 w-10 h-10 shrink-0 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors" aria-label="Précédent">
            <Image src="/Arrow 4.svg" alt="Précédent" width={20} height={20} className="brightness-0 invert" />
          </button>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image src={slides[activeIndex]} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-3 left-4 text-white font-bold text-sm tracking-wide">{item.title}</div>
          </div>
          <button onClick={next} className="z-20 w-10 h-10 shrink-0 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors" aria-label="Suivant">
            <Image src="/Arrow 3.svg" alt="Suivant" width={20} height={20} className="brightness-0 invert" />
          </button>
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:flex relative items-center justify-center gap-3">
          <button onClick={prev} className="absolute left-0 z-20 w-10 h-10 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors" aria-label="Précédent">
            <Image src="/Arrow 4.svg" alt="Précédent" width={20} height={20} className="brightness-0 invert" />
          </button>
          <div className="flex items-center justify-center gap-3 w-full">
            {visible.map(({ url, idx, pos }) => {
              const isCenter = pos === "center"
              return (
                <div key={idx} className={`relative group overflow-hidden rounded-lg transition-all duration-500 ${isCenter ? "w-[42%] aspect-[16/9] z-10" : "w-[30%] aspect-[16/9] opacity-80"}`}>
                  <Image src={url} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 transition-colors duration-300 ${isCenter ? "bg-black/30 group-hover:bg-black/10" : "bg-black/50 group-hover:bg-black/30"}`} />
                  <div className="absolute bottom-3 left-4 text-white font-bold text-sm tracking-wide">{item.title}</div>
                </div>
              )
            })}
          </div>
          <button onClick={next} className="absolute right-0 z-20 w-10 h-10 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors" aria-label="Suivant">
            <Image src="/Arrow 3.svg" alt="Suivant" width={20} height={20} className="brightness-0 invert" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-[#e84e1b] w-5" : "bg-gray-600 hover:bg-gray-400 w-2"}`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}