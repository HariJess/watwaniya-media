"use client";

import { useState } from "react";
import Image from "next/image";

interface Spot {
  id: number;
  title: string;
  image: string;
}

const spots: Spot[] = [
 { id: 1, title: '#SPOT 1', image: '/placeholder.svg' },
 { id: 2, title: '#SPOT 2', image: '/placeholder.svg' },
 { id: 3, title: '#SPOT 3', image: '/placeholder.svg' },
 { id: 4, title: '#SPOT 4', image: '/placeholder.svg' },
   { id: 5, title: '#SPOT 5', image: '/placeholder.svg' },
];

export function SectionAudiovisualProductions() {
  const [activeIndex, setActiveIndex] = useState(1); // start on second item = center

  const prev = () =>
    setActiveIndex((i) => (i - 1 + spots.length) % spots.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % spots.length);

  // Returns the 3 visible spots: [left, center, right]
  const getVisible = () => {
    const left = (activeIndex - 1 + spots.length) % spots.length;
    const right = (activeIndex + 1) % spots.length;
    return [
      { ...spots[left], pos: "left" },
      { ...spots[activeIndex], pos: "center" },
      { ...spots[right], pos: "right" },
    ] as const;
  };

  const visible = getVisible();

  return (
<section className="relative bg-black py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
 
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-0">
            Productions audiovisuelles
          </h2>
          <button className="w-fit px-6 py-3 bg-[#e84e1b] hover:bg-[#d63f0f] text-white font-bold text-sm transition-colors">
            NOUS CONTACTER
          </button>
        </div>
 
        {/* ── MOBILE : 1 image + flèches sur les côtés ── */}
        <div className="sm:hidden relative flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="z-20 w-10 h-10 shrink-0 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors"
            aria-label="Précédent"
          >
            <Image
              src="/Arrow 4.svg"
              alt="Précédent"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
          </button>
 
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={spots[activeIndex].image}
              alt={spots[activeIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-3 left-4 text-white font-bold text-sm tracking-wide">
              {spots[activeIndex].title}
            </div>
          </div>
 
          <button
            onClick={next}
            className="z-20 w-10 h-10 shrink-0 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors"
            aria-label="Suivant"
          >
            <Image
              src="/Arrow 3.svg"
              alt="Suivant"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
          </button>
        </div>
 
        {/* ── DESKTOP : 3 images (left / center / right) ── */}
        <div className="hidden sm:flex relative items-center justify-center gap-3">
 
          <button
            onClick={prev}
            className="absolute left-0 z-20 w-10 h-10 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors"
            aria-label="Précédent"
          >
            <Image
              src="/Arrow 4.svg"
              alt="Précédent"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
          </button>
 
          <div className="flex items-center justify-center gap-3 w-full">
            {visible.map(({ id, title, image, pos }) => {
              const isCenter = pos === "center";
              return (
                <div
                  key={id}
                  className={`
                    relative group overflow-hidden rounded-lg transition-all duration-500
                   ${isCenter
                      ? "w-[42%] aspect-[16/9] z-10"
                      : "w-[30%] aspect-[16/9] opacity-80"
                    }
                  `}
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isCenter
                        ? "bg-black/30 group-hover:bg-black/10"
                        : "bg-black/50 group-hover:bg-black/30"
                    }`}
                  />
                  <div className="absolute bottom-3 left-4 text-white font-bold text-sm tracking-wide">
                    {title}
                  </div>
                </div>
              );
            })}
          </div>
 
          <button
            onClick={next}
            className="absolute right-0 z-20 w-10 h-10 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors"
            aria-label="Suivant"
          >
            <Image
              src="/Arrow 3.svg"
              alt="Suivant"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
          </button>
        </div>
 
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {spots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-[#e84e1b] w-5"
                  : "bg-gray-600 hover:bg-gray-400 w-2"
              }`}
              aria-label={`Spot ${i + 1}`}
            />
          ))}
        </div>
 
      </div>
    </section>
  );
}