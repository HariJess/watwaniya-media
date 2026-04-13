'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormData, contactFormSchema } from '@/lib/contact'

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log(' Form submitted with validated data:', data)
      setSubmitStatus('success')
      reset()

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      console.error(' Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass =
    'w-full bg-[#8a8a8a] text-white placeholder-white/80 font-semibold px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      {/* Full Name */}
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Nom complet"
          {...register('nom')}
          className={`${inputClass} ${errors.nom ? 'ring-2 ring-red-500' : ''}`}
        />
        {errors.nom && (
          <span className="text-red-400 text-xs mt-1 font-semibold">{errors.nom.message}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Adresse email"
          {...register('email')}
          className={`${inputClass} ${errors.email ? 'ring-2 ring-red-500' : ''}`}
        />
        {errors.email && (
          <span className="text-red-400 text-xs mt-1 font-semibold">{errors.email.message}</span>
        )}
      </div>

      {/* Subject */}
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Objet du message"
          {...register('objet')}
          className={`${inputClass} ${errors.objet ? 'ring-2 ring-red-500' : ''}`}
        />
        {errors.objet && (
          <span className="text-red-400 text-xs mt-1 font-semibold">{errors.objet.message}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <textarea
          placeholder="Votre message"
          rows={7}
          {...register('message')}
          className={`${inputClass} resize-y ${errors.message ? 'ring-2 ring-red-500' : ''}`}
        />
        {errors.message && (
          <span className="text-red-400 text-xs mt-1 font-semibold">{errors.message.message}</span>
        )}
      </div>

      {/* Status Message */}
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

      {/* Submit Button */}
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
