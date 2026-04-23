import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactContent } from '@/components/contact/contact-content'

export const metadata = {
  title: 'Contact - Watwaniya Média',
  description: 'Contactez notre équipe pour discuter de votre projet de communication, production audiovisuelle ou création de contenu.',
}

export default function ContactPage() {
  return (
    <main className="bg-black">
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
    </main>
  )
}
