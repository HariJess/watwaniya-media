export function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/contact/bg-contact.svg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 lg:px-16 pt-40 pb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Nous contacter
        </h1>
        <p className="text-white font-semibold text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
          Vous avez un projet de communication, de production audiovisuelle ou de création de contenu ?<br />
          Notre équipe vous accompagne à chaque étape, de la réflexion stratégique à la réalisation
          opérationnelle.
        </p>
      </div>

      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
    </section>
  )
}