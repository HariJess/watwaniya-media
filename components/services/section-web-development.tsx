import Image from 'next/image'
import { DigitalContentCard } from '@/components/services/digital-content-card'

export function SectionWebDevelopment() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/service/bg-web-dev.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-10"
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-lg md:text-2xl font-bold text-[#e84e1b] leading-snug">
            Création de sites web et plateformes digitales
          </h2>
          <p className="text-lg leading-relaxed text-white max-w-4xl mx-auto">
            Nous concevons et développons des sites web et plateformes digitales permettant aux organisations de renforcer leur présence en ligne et d&apos;offrir une expérience professionnelle à leurs publics.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DigitalContentCard
            iconImage="/service/web-dev.png"
            title="Création de sites web institutionnels"
            description="Développement de sites destinés aux institutions et organisations afin de présenter leurs missions, projets, actualités et services."
          />
          <DigitalContentCard
            iconImage="/service/web-dev.png"
            title="Création de sites vitrines"
            description="Conception de sites web permettant aux entreprises et organisations de présenter leur activité, leurs services et leurs réalisations."
          />
          <DigitalContentCard
            iconImage="/service/web-dev.png"
            title="Développement de plateformes médias"
            description="Création de plateformes digitales dédiées à la diffusion de contenus multimédias (vidéos, émissions, articles, podcasts)."
          />
          <DigitalContentCard
            iconImage="/service/web-dev.png"
            title="Maintenance et gestion technique des sites"
            description="Assistance technique, mises à jour, sécurité et gestion continue des sites web afin d'assurer leur bon fonctionnement et leur performance."
          />
        </div>
      </div>
    </section>
  )
}
