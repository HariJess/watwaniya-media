import { ServicesHero } from '@/components/services/services-hero'
import { SectionCommunication } from '@/components/services/section-communication'
import { SectionSocialMedia } from '@/components/services/section-social-media'
import { SectionDigitalContent } from '@/components/services/section-digital-content'
import { SectionAudiovisuelDigital } from '@/components/services/section-audiovisuel-digital'
import { SectionEmissions } from '@/components/services/section-emissions'
import { SectionWebDevelopment } from '@/components/services/section-web-development'
import { Header } from '@/components/home/header'
import { ContactSection } from '@/components/home/contact-section'
import { Footer } from '@/components/home/footer'

export default function ServicesPage() {
  return (
    <div className="bg-black">
      <Header />
      <ServicesHero />
      <SectionCommunication />
      <SectionSocialMedia />
      <SectionDigitalContent />
      <SectionAudiovisuelDigital />
      <SectionEmissions />
      <SectionWebDevelopment />
      <ContactSection />
      <Footer />
    </div>
  )
}
