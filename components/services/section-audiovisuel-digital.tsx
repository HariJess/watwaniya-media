import Image from 'next/image'
import { SocialMediaCard } from '@/components/services/social-media-card'

export function SectionAudiovisuelDigital() {
  return (
    <section className="relative bg-[#1a1a1a] py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/service/bg-digital.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-20 scale-x-[-1]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none mt-auto">
          <Image
            src="/logo-footer.svg"
            alt="Background watermark"
            width={180}
            height={180}
            className="w-[180px] h-[180px] object-contain"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-12 items-start">
          <div className="flex flex-col justify-start relative">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-white leading-snug">
              Production audiovisuelle digitale
            </h2>
            <p className="text-md leading-relaxed text-white mb-8">
              Nous réalisons des productions audiovisuelles destinées aux supports numériques et aux campagnes de communication.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SocialMediaCard
              icon='service/audiovisuel.png'
              title="Vidéos promotionnelles et capsules digitales"
              description="Production de vidéos courtes et dynamiques destinées aux campagnes de communication, aux réseaux sociaux ou à la promotion de projets et d'événements."
            />
            <SocialMediaCard
              icon='service/audiovisuel.png'
              title="Spot audio"
              description="Création de messages audio destinés à la radio, aux podcasts ou aux plateformes digitales pour promouvoir des campagnes ou initiatives."
            />
            <SocialMediaCard
              icon='service/audiovisuel.png'
              title="Films institutionnels"
              description="Réalisation de films présentant l'identité, les missions et les projets d'une organisation ou d'une institution."
            />
            <SocialMediaCard
              icon='service/audiovisuel.png'
              title="Interview et portraits"
              description="Production de vidéos mettant en valeur des personnalités, des experts, des entrepreneurs ou des acteurs du changement."
            />
            <SocialMediaCard
              icon='service/audiovisuel.png'
              title="Couverture vidéo d'événements"
              description="Captation et production de vidéos lors d'événements, conférences, concerts ou cérémonies afin de valoriser ces moments et d'en assurer la diffusion."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
