"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Realization } from "@/lib/realization/formatRealizations";

function RealizationCarousel({ item }: { item: Realization }) {
  const [page, setPage] = useState(0);

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(item.images.length / ITEMS_PER_PAGE);
  const visible = item.images.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="relative bg-[#1a1a1a] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            {item.title}
          </h2>
          <button className="w-fit px-6 py-3 bg-[#e84e1b] hover:bg-[#d63f0f] text-white font-bold text-sm transition-colors whitespace-nowrap">
            NOUS CONTACTER
          </button>
        </div>

        {/* Grid */}
        <div className="relative">
          <button onClick={prev} className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-12 h-12 items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors z-10">
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visible.map((url, i) => (
              <div key={i} className="relative group">
                <div className="relative w-full aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src={url}
                    alt={`${item.title} ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-sm">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          <button onClick={next} className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-12 h-12 items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors z-10">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden gap-4 mt-6 justify-center">
          <button onClick={prev} className="w-12 h-12 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="w-12 h-12 flex items-center justify-center bg-[#e84e1b] hover:bg-[#d63f0f] text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === page ? "bg-[#e84e1b] w-5" : "bg-gray-600 hover:bg-gray-400 w-2"}`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export function SectionOtherRealizations({ items }: { items: Realization[] }) {
  if (!items.length) return null;

  return (
    <>
      {items.map((item) => (
        <RealizationCarousel key={item.id} item={item} />
      ))}
    </>
  );
}