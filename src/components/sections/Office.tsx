'use client'

import { Building2, Video, CheckCircle2, MapPin, Footprints, ParkingSquare, ExternalLink } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

const inPersonFeatures = [
  { label: 'Address', value: CONTACT_INFO.address },
  { label: 'Parking', value: 'Dedicated structure parking with validated visitor stalls directly under the building.' },
  { label: 'Accessibility', value: 'Full ADA compliance, elevator access, and discrete waiting alcove.' },
]

const telehealthFeatures = [
  { label: 'Coverage', value: 'Silicon Valley, San Francisco, Orange County, San Diego — all of California.' },
  { label: 'Full Modality', value: 'Virtual EMDR equipped with specialized bilateral light and audio tools.' },
  { label: 'Flexibility', value: 'Fits midday schedule gaps without Westside commute strain.' },
]

export default function Office() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapEmbedUrl = googleMapsApiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(CONTACT_INFO.address)}`
    : `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section id="office" className="relative w-full overflow-hidden bg-[var(--color-surface)] py-12 sm:py-20 lg:py-28 scroll-mt-20">
      {/* Atmospheric Background Gradients */}
      <div className="pointer-events-none absolute -right-48 top-10 h-96 w-96 rounded-full bg-[var(--color-secondary-fixed)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-36 bottom-10 h-80 w-80 rounded-full bg-[var(--color-primary-fixed)]/20 blur-3xl" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="block text-[var(--color-secondary)] uppercase tracking-widest font-semibold" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em' }}>
            Where We Meet
          </span>
          <h2
            className="mt-3 text-[var(--color-primary)] tracking-tight"
            style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(26px, 5.5vw, 40px)', lineHeight: '1.2', fontWeight: 400, letterSpacing: '-0.015em' }}
          >
            In-Person Sanctuary & California Telehealth
          </h2>
          <p className="mt-3 sm:mt-4 text-[var(--color-on-surface-variant)] text-sm sm:text-lg" style={{ lineHeight: '1.6' }}>
            Care adapted to your schedule and nervous system needs. Meet in our sunlit West Los Angeles space or from the quiet comfort of your home.
          </p>
        </div>

        {/* Modality Split */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {/* In-Person Card */}
          <div className="rounded-2xl sm:rounded-3xl bg-[var(--color-surface-container-low)] p-5 sm:p-8 lg:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-3 sm:px-3.5 py-1 text-[var(--color-primary)]">
                <Building2 size={15} strokeWidth={1.8} />
                <span style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }} className="uppercase">Santa Monica Suite</span>
              </div>
              <h3 className="mt-4 sm:mt-6 text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(22px, 3.5vw, 28px)', lineHeight: '1.25', fontWeight: 500, letterSpacing: '-0.01em' }}>
                In-Person Santa Monica Sanctuary
              </h3>
              <p className="mt-3 text-[var(--color-on-surface-variant)] leading-relaxed text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
                Located just three blocks from the Pacific Ocean, our office is intentionally designed to serve as an atmospheric container for deep work. Enjoy quiet soundproof suites, natural linen furnishings, filtered air, gentle daylight, and private ocean breezes.
              </p>
              <ul className="mt-5 space-y-2.5 sm:space-y-3">
                {inPersonFeatures.map(({ label, value }) => (
                  <li key={label} className="flex items-start gap-2.5 text-[var(--color-on-surface-variant)] text-xs sm:text-sm" style={{ lineHeight: '20px' }}>
                    <CheckCircle2 size={17} className="text-[var(--color-secondary)] shrink-0 mt-0.5" strokeWidth={1.8} />
                    <span><strong className="text-[var(--color-on-surface)]">{label}:</strong> {value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[var(--color-surface-variant)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[var(--color-on-surface)] font-medium text-xs sm:text-sm">Session Days: Monday – Thursday</span>
              <a href="#contact" className="text-[var(--color-primary)] font-semibold hover:underline" style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}>
                Reserve Suite Session →
              </a>
            </div>
          </div>

          {/* Telehealth Card */}
          <div className="rounded-2xl sm:rounded-3xl bg-[var(--color-surface-container-low)] p-5 sm:p-8 lg:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-3 sm:px-3.5 py-1 text-[var(--color-primary)]">
                <Video size={15} strokeWidth={1.8} />
                <span style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }} className="uppercase">Statewide Care</span>
              </div>
              <h3 className="mt-4 sm:mt-6 text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(22px, 3.5vw, 28px)', lineHeight: '1.25', fontWeight: 500, letterSpacing: '-0.01em' }}>
                Secure Telehealth Across California
              </h3>
              <p className="mt-3 text-[var(--color-on-surface-variant)] leading-relaxed text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
                Clinical psychological treatment accessible wherever you are in California. Our encrypted portal delivers seamless, high-definition care suited for demanding executive schedules.
              </p>
              <ul className="mt-5 space-y-2.5 sm:space-y-3">
                {telehealthFeatures.map(({ label, value }) => (
                  <li key={label} className="flex items-start gap-2.5 text-[var(--color-on-surface-variant)] text-xs sm:text-sm" style={{ lineHeight: '20px' }}>
                    <CheckCircle2 size={17} className="text-[var(--color-secondary)] shrink-0 mt-0.5" strokeWidth={1.8} />
                    <span><strong className="text-[var(--color-on-surface)]">{label}:</strong> {value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[var(--color-surface-variant)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[var(--color-on-surface)] font-medium text-xs sm:text-sm">Virtual Days: Monday – Friday</span>
              <a href="#contact" className="text-[var(--color-primary)] font-semibold hover:underline" style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}>
                Book Telehealth →
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Google Map Card */}
        <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl bg-[var(--color-surface-container)] overflow-hidden shadow-sm border border-[var(--color-outline-variant)]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Real Interactive Google Map */}
            <div className="lg:col-span-8 h-[230px] sm:min-h-[340px] lg:min-h-[420px] w-full relative overflow-hidden bg-[var(--color-surface-container-high)]">
              <iframe
                title="Dr. Maya Reynolds Office Location - Google Maps"
                src={mapEmbedUrl}
                className="w-full h-full border-0 block"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Directions Sidebar */}
            <div className="lg:col-span-4 p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-[var(--color-surface)]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary-container)]/50 px-3 py-1 text-[var(--color-secondary)] mb-3">
                  <MapPin size={14} strokeWidth={2} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">Santa Monica Office</span>
                </div>
                <h4 className="text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-newsreader)', fontSize: '22px', lineHeight: '30px', fontWeight: 500 }}>
                  Easy Coastal Access
                </h4>
                <p className="mt-2 text-[var(--color-on-surface)] font-medium text-sm">
                  {CONTACT_INFO.address}
                </p>
                <p className="mt-2.5 text-[var(--color-on-surface-variant)] leading-relaxed text-xs sm:text-sm">
                  A serene walk to the beach cliffs, perfect for a grounding somatic stroll before or after therapy.
                </p>
                <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                  <p className="flex items-center gap-2 text-[var(--color-on-surface)] text-xs font-medium">
                    <Footprints size={15} className="text-[var(--color-secondary)] shrink-0" strokeWidth={1.8} />
                    4 min walk to Downtown Santa Monica Expo Station
                  </p>
                  <p className="flex items-center gap-2 text-[var(--color-on-surface)] text-xs font-medium">
                    <ParkingSquare size={15} className="text-[var(--color-secondary)] shrink-0" strokeWidth={1.8} />
                    Structure 4 and on-site subterranean parking
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[var(--color-outline-variant)]/30 flex flex-col gap-2">
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-container)] px-5 py-3 text-[var(--color-on-primary)] shadow-sm hover:bg-[var(--color-primary)] transition-all font-medium text-xs tracking-wide"
                >
                  <ExternalLink size={15} strokeWidth={1.8} />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
