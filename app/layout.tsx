import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LoadingProvider } from "@/components/LoadingProvider";
import CookieBanner from '@/components/CookieBanner';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Watwaniya Média — Agence de communication digitale',
    template: '%s | Watwaniya Média',
  },
  description:
    'Agence de communication digitale et de production audiovisuelle. Expertise locale avec vision internationale.',
  keywords: [
    'communication digitale',
    'production audiovisuelle',
    'agence communication',
    'Watwaniya Média',
  ],
  authors: [{ name: 'Watwaniya Média' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Watwaniya Média',
    title: 'Watwaniya Média — Agence de communication digitale',
    description:
      'Agence de communication digitale et de production audiovisuelle. Expertise locale avec vision internationale.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watwaniya Média',
    description: 'Agence de communication digitale et de production audiovisuelle.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <LoadingProvider>
          {children}
          <CookieBanner />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LoadingProvider>
      </body>
    </html>
  )
}
