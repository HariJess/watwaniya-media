import { Header } from '@/components/Layout/header'
import { Footer } from '@/components/Layout/footer'
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
