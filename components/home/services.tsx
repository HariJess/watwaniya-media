'use client'

const expertises = [
  {
    id: 1,
    image: '/placeholder.svg',
    title: 'Expertise en communication de masse',
    description: 'Nous concevons et déployons des stratégies de communication capables de toucher un large public, en combinant les outils digitaux, les médias audiovisuels et les campagnes d\'intérêt général.',
  },
  {
    id: 2,
    image: '/placeholder.svg',
    title: 'Gestion des réseaux sociaux',
    description: 'Nous accompagnons les organisations dans la gestion stratégique et opérationnelle de leur présence sur les réseaux sociaux. Notre objectif est de développer des communautés engagées, renforcer la visibilité des marques et créer une interaction durable avec les publics cibles.',
  },
  {
    id: 3,
    image: '/placeholder.svg',
    title: 'Création de contenus digitaux',
    description: 'Nous produisons des contenus visuels, graphiques et éditoriaux adaptés aux plateformes digitales afin de valoriser l\'image des marques, capter l\'attention du public et favoriser l\'engagement en ligne.',
  },
  {
    id: 4,
    image: '/placeholder.svg',
    title: 'Production audiovisuelle digitale',
    description: 'Watwaniya Média réalise des contenus audiovisuels professionnels destinés aux plateformes numériques, aux campagnes de communication et aux médias. Ces productions permettent de raconter des histoires, valoriser des projets et transmettre des messages de manière impactante.',
  },
  {
    id: 5,
    image: '/placeholder.svg',
    title: "Production d'émissions audiovisuelles",
    description: "Nous concevons et produisons des émissions et programmes audiovisuels mettant en valeur la culture, la musique, l'éducation, la santé, l'entrepreneuriat et les initiatives citoyennes. Nos productions visent à informer, inspirer et promouvoir les talents ainsi que les initiatives locales et internationales.",
  },
  {
    id: 6,
    image: '/placeholder.svg',
    title: 'Création de sites web et plateformes digitales',
    description: 'Nous concevons et développons des sites web et des plateformes digitales modernes permettant aux organisations de renforcer leur présence en ligne, diffuser leurs contenus et interagir avec leurs publics.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#111] py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <div className="w-px h-10 bg-gray-600 mb-6" />
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-300 font-semibold">
            NOS EXPERTISES
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {expertises.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#1a1a1a] border border-gray-800 p-0 flex flex-col"
            >
              {/* Image */}
              <div className="px-6 -mt-8 w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-orange-500 font-bold text-base leading-snug mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}