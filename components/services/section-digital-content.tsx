import { DigitalContentCard } from '@/components/services/digital-content-card'

export function SectionDigitalContent() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-2xl md:text-3xl font-bold text-[#e84e1b] leading-snug">
            Création de contenus digitaux
          </h2>
          <p className="text-md leading-relaxed text-white max-w-2xl mx-auto font-[500]">
            Nous produisons des contenus visuels et éditoriaux adaptés aux plateformes
            digitales afin de renforcer la visibilité et l&apos;image des marques.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DigitalContentCard
            iconImage="/service/contenus-digitaux.png"
            title="Design graphique"
            description="Conception d'éléments visuels professionnels (identité visuelle, chartes graphiques) permettant de renforcer l'identité et la cohérence de la communication."
          />
          <DigitalContentCard
            iconImage="/service/contenus-digitaux.png"
            title="Création de visuels"
            description="Production de visuels destinés aux campagnes digitales, réseaux sociaux, sites web ou supports promotionnels."
          />
          <DigitalContentCard
            iconImage="/service/contenus-digitaux.png"
            title="Motion design"
            description="Création de contenus graphiques animés permettant d'expliquer des concepts, valoriser des projets ou présenter des informations de manière dynamique."
          />
          <DigitalContentCard
            iconImage="/service/contenus-digitaux.png"
            title="Photographie professionnelle (shooting)"
            description="Réalisation de séances photo professionnelles pour valoriser les produits, événements, équipes ou projets des organisations."
          />
        </div>
      </div>
    </section>
  )
}
