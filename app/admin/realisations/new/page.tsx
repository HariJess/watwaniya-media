import { RealizationForm } from '../_components/realization-form'

export default function NewRealizationPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Nouvelle réalisation</h1>
      <RealizationForm mode="create" />
    </div>
  )
}
