import { Header } from '@/components/home/header'
import { ContactSection } from '@/components/home/contact-section'
import { Footer } from '@/components/home/footer'
import { RealizationsHero } from '@/components/realisations/realizations-hero'
import { SectionAudiovisualProductions } from '@/components/realisations/section-audiovisual-productions'
import { SectionEmissions } from '@/components/realisations/section-emissions'
import { SectionDigitalCampaigns } from '@/components/realisations/section-digital-campaigns'

export default function RealizationsPage() {
  return (
    <div className="bg-black">
      <Header />
      <RealizationsHero />
      <SectionAudiovisualProductions />
      <SectionEmissions />
      <SectionDigitalCampaigns />
      <ContactSection />
      <Footer />
    </div>
  )
}
