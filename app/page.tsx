import { Header } from '@/components/layout/header'
import { Hero } from '@/components/home/hero'
import { Presentation } from '@/components/home/presentation'
import { Services } from '@/components/home/services'
import { Realizations } from '@/components/home/realizations'
import { CtaSection } from '@/components/home/cta-section'
import { ContactSection } from '@/components/home/contact-section'
import { Footer } from '@/components/layout/footer'
import { getRealizations } from '@/lib/realization/getRealizations'

export default async function Home() {
  const realizations = await getRealizations()
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Presentation />
      <Services />
      <Realizations  realizations={realizations}/>
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
