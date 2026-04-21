import Image from 'next/image'
import { SocialMediaCard } from '@/components/services/social-media-card'

export function SectionSocialMedia() {
  return (
    <section className="relative bg-[#1a1a1a] py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/service/social-media.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none mt-auto">
          <Image
            src="/logo-footer.svg"
            alt="Background watermark"
            width={180}
            height={180}
            className="w-[180px] h-[180px] object-contain"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          <div className="flex flex-col justify-start relative">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-white leading-snug">
              Gestion des réseaux sociaux
            </h2>
            <p className="text-md leading-relaxed text-white mb-8">
              Nous développons la présence digitale des marques grâce à une gestion stratégique et créative des réseaux sociaux.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SocialMediaCard
              icon='service/logo-socialmedia.png'
              title="Gestion des pages professionnelles"
              description="Création, optimisation et gestion des pages officielles des organisations sur les principales plateformes sociales."
            />
            <SocialMediaCard
              icon='service/logo-socialmedia.png'
              title="Community management"
              description="Animation quotidienne des communautés en ligne à travers la publication de contenus, l'interaction avec les abonnés et la gestion des commentaires."
            />
            <SocialMediaCard
              icon='service/logo-socialmedia.png'
              title="Création de contenus"
              description="Production de contenus visuels, vidéos et éditoriaux adaptés aux différents réseaux sociaux afin d'augmenter la visibilité et l'engagement."
            />
            <SocialMediaCard
              icon='service/logo-socialmedia.png'
              title="Stratégie éditoriale"
              description="Définition d'une ligne éditoriale cohérente avec l'identité de la marque et planification des publications à travers un calendrier éditorial structuré."
            />
            <SocialMediaCard
              icon='service/logo-socialmedia.png'
              title="Analyse des performances"
              description="Suivi et analyse des indicateurs de performance (engagement, portée, croissance de la communauté) afin d'optimiser les stratégies de communication."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
