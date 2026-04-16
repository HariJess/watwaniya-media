import { DigitalContentCard } from '@/components/services/digital-content-card'

export function SectionEmissions() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-xl md:text-3xl font-bold text-[#e84e1b] leading-snug">
            Production d&apos;émissions
          </h2>
          <p className="text-lg leading-relaxed text-white max-w-3xl mx-auto">
            Watwaniya Média conçoit et produit des programmes d&apos;émissions mettant en valeur la culture, la musique, l&apos;éducation, la santé, l&apos;entrepreneuriat et les initiatives citoyennes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DigitalContentCard
            iconImage="/service/production.png"
            title="Conception de formats d'émissions"
            description="Création de concepts originaux d'émissions adaptés aux médias audiovisuels et aux plateformes digitales."
          />
          <DigitalContentCard
            iconImage="/service/production.png"
            title="Production d'émissions"
            description="Réalisation complète d'émissions, depuis la préparation éditoriale jusqu'à la production et la diffusion."
          />
          <DigitalContentCard
            iconImage="/service/production.png"
            title="Podcasts vidéo"
            description="Production de podcasts filmés permettant d'aborder des thématiques d'actualité, de société ou d'entrepreneuriat."
          />
          <DigitalContentCard
            iconImage="/service/production.png"
            title="Captation de concerts"
            description="Réalisation et diffusion audiovisuelle de concerts et d'événements musicaux afin de valoriser les artistes et les initiatives culturelles."
          />
        </div>
      </div>
    </section>
  )
}
