'use client'

const reasons = [
  {
    number: '1',
    title: 'Expertise locale avec vision internationale',
  },
  {
    number: '2',
    title: 'Créativité et innovation',
  },
  {
    number: '3',
    title: 'Production audiovisuelle professionnelle',
  },
  {
    number: '4',
    title: 'Compréhension du public africain',
  },
  {
    number: '5',
    title: 'Solutions digitales complètes',
  },
]

export function CtaSection() {
  return (
    <section className="bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Decorative line + title */}
            <div className="flex items-start gap-4 mb-10">
              <div className="w-8 h-0.5 bg-white my-7 flex-shrink-0" />
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="text-orange-500">Pourquoi choisir</span>
                <br />
                <span className="text-white">Watwaniya Média</span>
              </h2>
            </div>

            {/* Reasons List */}
            <div className="space-y-7 pl-12">
              {reasons.map((reason) => (
                <div key={reason.number} className="flex items-start gap-5">
                  <span className="text-orange-500 font-extrabold text-2xl leading-tight flex-shrink-0 w-5">
                    {reason.number}
                  </span>
                  <p className="text-white font-semibold text-base md:text-lg leading-snug">
                    {reason.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content — Image */}
          <div className="relative w-full">
            <div className="rounded-lg overflow-hidden w-full aspect-[4/3] lg:aspect-[3/2.5]">
              <img
                src="/placeholder.svg"
                alt="Watwaniya Média Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}