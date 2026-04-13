import Image from 'next/image'
import { ContactForm } from './contact-form'

export function ContactContent() {
  return (
    <section className="bg-[#1a1a1a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: Image — no border-radius, sharp edges */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-full min-h-[480px] overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Équipe Watwaniya Média"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Form */}
          <div className="flex flex-col justify-start pt-0 lg:pt-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}