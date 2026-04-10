import { Header } from '@/components/home/header'
import { Hero } from '@/components/home/hero'
import { Presentation } from '@/components/home/presentation'
import { Services } from '@/components/home/services'
import { Realizations } from '@/components/home/realizations'
import { CtaSection } from '@/components/home/cta-section'
import { ContactSection } from '@/components/home/contact-section'
import { Footer } from '@/components/home/footer'

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Presentation />
      <Services />
      <Realizations />
      {/* <CtaSection /> */}
      {/* <ContactSection /> */}
      {/* <Footer /> */}
    </div>
  )
}
