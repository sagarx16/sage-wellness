import type { Metadata } from 'next'
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Clinical Psychologist Santa Monica`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'psychologist santa monica',
    'therapy los angeles',
    'EMDR therapy california',
    'anxiety therapist santa monica',
    'trauma therapy los angeles',
    'burnout therapist california',
    'telehealth psychologist california',
    'cognitive behavioral therapy CBT',
    'somatic therapy santa monica',
  ],
  authors: [{ name: 'Dr. Maya Reynolds, PsyD' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: `${SITE_NAME} — Clinical Psychologist Santa Monica`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Clinical Psychologist Santa Monica`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="bg-[var(--color-background)] text-[var(--color-on-surface)] antialiased selection:bg-[var(--color-secondary-container)] selection:text-[var(--color-on-secondary-fixed)]">
        <Header />
        <main className="w-full pt-28 sm:pt-32 lg:pt-36">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
