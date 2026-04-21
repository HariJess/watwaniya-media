import { Header } from '@/components/Layout/header'
import { ContactSection } from '@/components/home/contact-section'
import { Footer } from '@/components/Layout/footer'
import { RealizationsHero } from '@/components/realisations/realizations-hero'
import { SectionFirstRealization } from '@/components/realisations/SectionFirstRealization'
import { SectionOtherRealizations } from '@/components/realisations/SectionOtherRealizations'
import { getRealizations } from '@/lib/realization/getRealizations'

export default async function RealizationsPage() {
  const allRealizations = await getRealizations()

  const first = allRealizations[0] ?? null
  const others = allRealizations.slice(1)

  if (!allRealizations.length) {
    return (
      <div className="bg-black">
        <Header />
        <RealizationsHero />
        <div className="py-20 text-center text-gray-500">
          Aucune réalisation disponible pour le moment.
        </div>
        <ContactSection />
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-black">
      <Header />
      <RealizationsHero />
      {first && <SectionFirstRealization item={first} />}
      <SectionOtherRealizations items={others} />
      <ContactSection />
      <Footer />
    </div>
  )
}
