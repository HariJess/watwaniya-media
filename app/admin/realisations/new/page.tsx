import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { RealizationForm } from '../_components/realization-form'

export default function NewRealizationPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <nav className="flex items-center gap-1.5 text-sm text-neutral-500 mb-3">
          <Link href="/admin/realisations" className="hover:text-neutral-900">
            Réalisations
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-neutral-900">Nouvelle</span>
        </nav>
        <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-tight">
          Nouvelle réalisation
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 mt-1">
          Renseigne les informations puis ajoute les visuels du projet.
        </p>
      </div>

      <RealizationForm mode="create" />
    </div>
  )
}
