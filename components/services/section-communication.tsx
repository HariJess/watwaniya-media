import Image from 'next/image'
import { CommunicationCard } from '@/components/services/communication-card'

export function SectionCommunication() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          <div className="flex flex-col justify-start relative">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-white leading-snug">
              Expertise en communication de masse
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 mb-8">
              Nous concevons des campagnes de communication destinées à toucher un large public et à maximiser l&apos;impact des messages.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CommunicationCard
              iconImage="/service/communication-de-base.png"
              title="Campagnes de sensibilisation"
              description="Conception et mise en œuvre de campagnes visant à informer et sensibiliser le public sur des thématiques sociales, environnementales, sanitaires ou éducatives."
            />
            <CommunicationCard
              iconImage="/service/communication-de-base.png"
              title="Communication institutionnelle"
              description="Accompagnement des institutions dans la valorisation de leurs actions, programmes et initiatives auprès du public, des partenaires et des médias."
            />
            <CommunicationCard
              iconImage="/service/communication-de-base.png"
              title="Stratégies de diffusion digitale"
              description="Définition des canaux et outils numériques les plus adaptés pour diffuser efficacement les messages auprès des audiences ciblées."
            />
            <CommunicationCard
              iconImage="/service/communication-de-base.png"
              title="Campagnes d'intérêt public"
              description="Conception de campagnes de communication visant à promouvoir des initiatives publiques ou sociétales ayant un impact positif sur la population."
            />
            <CommunicationCard
              iconImage="/service/communication-de-base.png"
              title="Communication citoyenne"
              description="Développement d'actions de communication favorisant la participation citoyenne, l'information du public et le dialogue entre institutions et communautés."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
