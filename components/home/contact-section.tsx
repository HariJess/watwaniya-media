'use client'

import { Phone } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="bg-black py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm mb-4">VOICI UN PROJET DE COMMUNICATION OU DE PRODUCTION AUDIOVISUELLE ?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contactez notre équipe pour transformer<br />
            <span className="text-orange-500">vos idées en projets à impact</span>
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition font-medium">
            NOUS CONTACTER
          </button>
          <button className="border-2 border-white hover:bg-white text-white hover:text-black px-8 py-4 rounded-lg transition font-medium flex items-center justify-center gap-2">
            <Phone size={20} />
            APPELER LE +256 611 2227
          </button>
        </div>
      </div>
    </section>
  )
}
