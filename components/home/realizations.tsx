'use client'

const realizations = [
  {
    id: 1,
    title: 'Productions audiovisuelles',
    image: '/placeholder.svg?height=400&width=550',
    large: true,
    dots: true,
    activeDot: 1,
  },
  {
    id: 2,
    title: 'Émissions et interview',
    image: '/placeholder.svg?height=400&width=280',
    large: false,
  },
  {
    id: 3,
    title: 'Campagnes digitales',
    image: '/placeholder.svg?height=400&width=280',
    large: false,
  },
  {
    id: 4,
    title: 'Projets institutionnels',
    image: '/placeholder.svg?height=400&width=280',
    large: false,
  },
  {
    id: 5,
    title: 'Shooting Photos',
    image: '/placeholder.svg?height=400&width=280',
    large: false,
  },
  {
    id: 6,
    title: 'Plateformes digitales développées',
    image: '/placeholder.svg?height=400&width=550',
    large: true,
    dots: true,
    activeDot: 0,
  },
]

function DotIndicator({ activeDot }: { activeDot: number }) {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${
            i === activeDot ? 'bg-orange-500' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  )
}

export function Realizations() {
  return (
    <section id="realisations" className="bg-[#111] py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-0.5 bg-orange-500 flex-shrink-0" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
              Nos réalisations
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-px h-8 bg-gray-500" />
            <span className="text-white font-bold text-base">
              Nos réalisations parlent pour nous
            </span>
          </div>
        </div>

        {/* Row 1: 1 large (left) + 2 small (right) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.9fr_1fr_1fr] gap-3 mb-3">
          {/* Large card */}
          <div className="relative rounded-xl overflow-hidden h-[380px] cursor-pointer group">
            <img
              src={realizations[0].image}
              alt={realizations[0].title}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end">
              <h3 className="text-white font-bold text-xl leading-tight max-w-[60%]">
                {realizations[0].title}
              </h3>
              <DotIndicator activeDot={1} />
            </div>
          </div>

          {/* Small card 2 */}
          <div className="relative rounded-xl overflow-hidden h-[380px] cursor-pointer group">
            <img
              src={realizations[1].image}
              alt={realizations[1].title}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-bold text-xl leading-tight">
                {realizations[1].title}
              </h3>
            </div>
          </div>

          {/* Small card 3 */}
          <div className="relative rounded-xl overflow-hidden h-[380px] cursor-pointer group">
            <img
              src={realizations[2].image}
              alt={realizations[2].title}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-bold text-xl leading-tight">
                {realizations[2].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Row 2: 2 small (left) + 1 large (right) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.9fr] gap-3">
          {/* Small card 4 */}
          <div className="relative rounded-xl overflow-hidden h-[380px] cursor-pointer group">
            <img
              src={realizations[3].image}
              alt={realizations[3].title}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-bold text-xl leading-tight">
                {realizations[3].title}
              </h3>
            </div>
          </div>

          {/* Small card 5 */}
          <div className="relative rounded-xl overflow-hidden h-[380px] cursor-pointer group">
            <img
              src={realizations[4].image}
              alt={realizations[4].title}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-bold text-xl leading-tight">
                {realizations[4].title}
              </h3>
            </div>
          </div>

          {/* Large card 6 */}
          <div className="relative rounded-xl overflow-hidden h-[380px] cursor-pointer group">
            <img
              src={realizations[5].image}
              alt={realizations[5].title}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end">
              <h3 className="text-white font-bold text-xl leading-tight max-w-[60%]">
                {realizations[5].title}
              </h3>
              <DotIndicator activeDot={0} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}