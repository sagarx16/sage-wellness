'use client'

import { APPROACH_STEPS } from '@/lib/constants'

export default function Approach() {
  return (
    <section id="approach" className="relative w-full overflow-hidden bg-[var(--color-surface-container)] py-12 sm:py-20 lg:py-28 scroll-mt-20">
      {/* Atmospheric Background Gradients */}
      <div className="pointer-events-none absolute -left-48 top-10 h-96 w-96 rounded-full bg-[var(--color-secondary-fixed)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-10 h-80 w-80 rounded-full bg-[var(--color-primary-fixed)]/25 blur-3xl" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="block text-[var(--color-secondary)] uppercase tracking-widest font-semibold" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em' }}>
            Therapeutic Modality
          </span>
          <h2
            className="mt-3 text-[var(--color-primary)] tracking-tight"
            style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(26px, 4vw, 40px)', lineHeight: '1.2', fontWeight: 400, letterSpacing: '-0.015em' }}
          >
            An Integrative, Paced & Nervous-System-Informed Philosophy
          </h2>
          <p className="mt-3 sm:mt-4 text-[var(--color-on-surface-variant)] leading-relaxed text-sm sm:text-lg" style={{ lineHeight: '1.6' }}>
            Therapy is never one-size-fits-all. Paced carefully with emphasis on safety and stabilization; our goal is deep insight, nervous system resilience, and a stronger relationship with yourself — not just quick symptom relief.
          </p>
        </div>

        {/* 4-Pillar Grid without icons */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {APPROACH_STEPS.map(({ step, title, description, footer }) => (
            <div
              key={step}
              className="relative rounded-2xl border border-[var(--color-outline-variant)]/70 bg-[var(--color-surface)] p-5 sm:p-7 shadow-sm flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--color-primary-container)]/70 transition-all duration-300"
            >
              <div>
                <div className="flex items-center">
                  <span
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[var(--color-primary-container)] text-[var(--color-on-primary)] shadow-[0_8px_18px_-10px_rgba(49,67,53,0.55)] font-semibold"
                    style={{ fontFamily: 'var(--font-newsreader)', fontSize: '18px', lineHeight: '24px', fontWeight: 500 }}
                  >
                    {step}
                  </span>
                </div>
                <h3
                  className="mt-4 sm:mt-6 text-[var(--color-primary)] font-medium"
                  style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(18px, 3vw, 22px)', lineHeight: '26px', fontWeight: 500 }}
                >
                  {title}
                </h3>
                <p className="mt-2 text-[var(--color-on-surface-variant)] leading-relaxed text-sm" style={{ lineHeight: '1.6' }}>
                  {description}
                </p>
              </div>
              <div
                className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[var(--color-surface-container)] text-[var(--color-primary)] font-medium"
                style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}
              >
                {footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
