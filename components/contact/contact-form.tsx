'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ nom: '', email: '', objet: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass =
    'w-full bg-[#8a8a8a] text-white placeholder-white/80 font-semibold px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        name="nom"
        placeholder="Nom complet"
        value={formData.nom}
        onChange={handleChange}
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Adresse email"
        value={formData.email}
        onChange={handleChange}
        required
        className={inputClass}
      />
      <input
        type="text"
        name="objet"
        placeholder="Objet du message"
        value={formData.objet}
        onChange={handleChange}
        required
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={7}
        className={`${inputClass} resize-none`}
      />

      {submitStatus === 'success' && (
        <div className="bg-green-600 text-white px-4 py-3 text-center text-sm font-semibold">
          Message envoyé avec succès ! Notre équipe vous recontactera bientôt.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-red-600 text-white px-4 py-3 text-center text-sm font-semibold">
          Une erreur est survenue. Veuillez réessayer.
        </div>
      )}

      {/* Button aligned right */}
      <div className="flex justify-start mt-1">
        <button
          type="submit"
          disabled={isLoading}
          className="cursor-pointer bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-500 text-white font-black tracking-[0.18em] uppercase text-sm px-16 py-5 transition-colors"
        >
          {isLoading ? 'Envoi...' : 'ENVOYER'}
        </button>
      </div>
    </form>
  )
}