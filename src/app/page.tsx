import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Specialties from '@/components/sections/Specialties'
import Approach from '@/components/sections/Approach'
import Office from '@/components/sections/Office'
import Gallery from '@/components/sections/Gallery'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} — Clinical Psychologist Santa Monica, CA`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — Clinical Psychologist Santa Monica, CA`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Dr. Maya Reynolds, PsyD — Clinical Psychologist Santa Monica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Clinical Psychologist Santa Monica, CA`,
    description: SITE_DESCRIPTION,
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Specialties />
      <Approach />
      <Office />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  )
}
