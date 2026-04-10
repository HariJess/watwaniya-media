'use client'

import { Check } from 'lucide-react'

const reasons = [
  {
    number: '1',
    title: 'Expertise locale avec vision internationale'
  },
  {
    number: '2',
    title: 'Créativité et innovation'
  },
  {
    number: '3',
    title: 'Production audiovisuelle de qualité'
  },
  {
    number: '4',
    title: 'Compréhension du public africain'
  },
  {
    number: '5',
    title: 'Solutions digitales complètes'
  }
]

export function CtaSection() {
  return (
    <section className="bg-black py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Pourquoi choisir<br />
              <span className="text-white">Watwaniya Média</span>
            </h2>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.number} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-orange-500 text-white font-bold">
                    {reason.number}
                  </div>
                  <p className="text-gray-300 text-base">{reason.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gray-800 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Watwaniya Média Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
