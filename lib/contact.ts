import { z } from 'zod'

// Zod validation schema
export const contactFormSchema = z.object({
  nom: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne doit pas dépasser 100 caractères'),
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide'),
  objet: z
    .string()
    .min(5, 'L\'objet doit contenir au moins 5 caractères')
    .max(150, 'L\'objet ne doit pas dépasser 150 caractères'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(5000, 'Le message ne doit pas dépasser 5000 caractères'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
