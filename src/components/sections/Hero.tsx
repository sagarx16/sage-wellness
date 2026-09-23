'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CalendarDays, ArrowDown, ShieldCheck, Brain, Heart, X } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

const trustPills = [
  { icon: Brain, label: 'Evidence-Based (EMDR & CBT)' },
  { icon: ShieldCheck, label: 'Trauma-Informed & Somatic' },
  { icon: Heart, label: 'Warm & Collaborative' },
]

export default function Hero() {
  const [isPortraitOpen, setIsPortraitOpen] = useState(false)

  const bioParagraphs = [
    "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
    "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
    "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.",
    "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.",
    "In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
    "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
    "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
    "If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit."
  ]

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[var(--color-surface)] pb-10 sm:pb-14 lg:pb-28 pt-4 sm:pt-10 lg:pt-12">
      {/* Atmospheric Background Gradients */}
      <div className="pointer-events-none absolute -left-48 top-0 h-96 w-96 rounded-full bg-[var(--color-secondary-fixed)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-[var(--color-primary-fixed)]/20 blur-3xl" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Messaging & CTAs */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-surface-container)] px-3 sm:px-4 py-1.5 shadow-xs max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0 animate-pulse" />
              <span className="text-[var(--color-on-surface-variant)] font-medium text-center truncate" style={{ fontSize: 'clamp(11px, 3.2vw, 13px)', lineHeight: '18px', letterSpacing: '0.02em' }}>
                Accepting New In-Person & Telehealth Clients
              </span>
            </div>

            {/* Hero Headline */}
            <h1
              className="mt-4 sm:mt-6 text-[var(--color-primary)] tracking-tight"
              style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(28px, 6.2vw, 56px)', lineHeight: 1.15, fontWeight: 400, letterSpacing: '-0.02em' }}
            >
              A safe, grounded space to heal, find clarity, and reconnect with yourself.
            </h1>

            {/* Subtitle */}
            <p
              className="mt-3.5 sm:mt-5 text-[var(--color-on-surface-variant)] max-w-xl leading-relaxed text-sm sm:text-lg"
              style={{ lineHeight: '1.6' }}
            >
              Therapy for anxiety, trauma, and burnout — in-person at our quiet Santa Monica sanctuary & secure telehealth across California.
            </p>

            {/* Trust Pills */}
            <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-1.5 sm:gap-2.5">
              {trustPills.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-secondary-container)]/50 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[var(--color-secondary)] font-medium"
                  style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.02em' }}
                >
                  <Icon size={14} strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-container)] px-5 sm:px-7 py-3.5 text-[var(--color-on-primary)] shadow-md transition-all duration-300 hover:bg-[var(--color-primary)] hover:-translate-y-0.5 active:scale-[0.99] text-center"
                style={{ fontSize: '15px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 600 }}
              >
                <span>Book a Free 15-Min Consultation</span>
                <CalendarDays size={18} strokeWidth={1.8} />
              </a>
              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 text-[var(--color-primary)] hover:text-[var(--color-primary-container)] transition-colors group"
                style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em', fontWeight: 500 }}
              >
                <span>Explore My Approach</span>
                <ArrowDown size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Mobile-only: Side-by-Side Row (Name & License on Left, Photo Headshot on Right) */}
            <div className="mt-6 sm:mt-8 w-full md:hidden">
              <div className="relative overflow-hidden rounded-2xl bg-[var(--color-surface-container)]/90 p-3.5 sm:p-4 shadow-sm border border-[var(--color-outline-variant)]/40 flex items-center justify-between gap-3.5">
                {/* Left: Name and License */}
                <div className="flex flex-col justify-center min-w-0 pr-1">
                  <div className="inline-flex items-center gap-1.5 text-[var(--color-secondary)] mb-1">
                    <ShieldCheck size={14} strokeWidth={2} className="shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                      Licensed Psychologist
                    </span>
                  </div>
                  <h3
                    className="text-[var(--color-primary)] font-semibold text-[16px] sm:text-[17px] leading-snug truncate"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    Dr. Maya Reynolds, PsyD
                  </h3>
                  <p
                    className="mt-0.5 text-[var(--color-on-surface-variant)] text-[12px] font-medium tracking-wide"
                  >
                    {CONTACT_INFO.license}
                  </p>
                </div>

                {/* Right: Compact rounded-square headshot */}
                <div className="relative shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsPortraitOpen(true)}
                    aria-label="Open Dr. Maya Reynolds portrait and bio"
                    className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-[var(--color-surface)] shadow-md bg-[var(--color-surface-container-high)] transition-transform duration-200 active:scale-[0.98]"
                  >
                    <Image
                      src="/images/dr-maya-reynolds.jpg"
                      alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, California"
                      width={160}
                      height={160}
                      className="h-full w-full object-cover object-top block"
                      priority
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Card (Desktop & Tablet only) */}
          <div className="relative hidden md:flex justify-center lg:col-span-5 lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-md">
              {/* Organic Backdrop */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[var(--color-secondary-fixed)]/50 via-[var(--color-tertiary-fixed)]/30 to-[var(--color-surface-container-high)] -rotate-1" />
              {/* Portrait Frame */}
              <div className="relative overflow-hidden rounded-[2.25rem] bg-[var(--color-surface-container)] shadow-xl border border-[var(--color-outline-variant)]/40">
                <Image
                  src="/images/dr-maya-reynolds.jpg"
                  alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, California"
                  width={600}
                  height={780}
                  className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-top transition-transform duration-700 hover:scale-[1.02] block"
                  priority
                />
                {/* Gradient scrim */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--color-inverse-surface)]/80 via-[var(--color-inverse-surface)]/40 to-transparent" />
                {/* Credibility Chip */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 rounded-xl bg-[var(--color-surface)]/95 backdrop-blur-md p-3 sm:p-3.5 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[var(--color-secondary-container)] text-[var(--color-secondary)] shrink-0">
                      <ShieldCheck size={18} strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[var(--color-primary)] leading-snug truncate" style={{ fontFamily: 'var(--font-jakarta)', fontSize: '15px', fontWeight: 600 }}>
                        Dr. Maya Reynolds, PsyD
                      </p>
                      <p className="text-[var(--color-on-surface-variant)] tracking-wider uppercase truncate" style={{ fontSize: '10px', lineHeight: '14px', letterSpacing: '0.04em', fontWeight: 600 }}>
                        {CONTACT_INFO.license}
                      </p>
                    </div>
                  </div>
                  <ShieldCheck size={18} className="text-[var(--color-secondary)] shrink-0 ml-2" strokeWidth={1.8} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPortraitOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/65 backdrop-blur-sm md:hidden"
          onClick={() => setIsPortraitOpen(false)}
        >
          <div
            className="w-full max-h-[88vh] overflow-y-auto rounded-t-[2rem] bg-[var(--color-surface)] p-4 pb-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary)]">
                  About Dr. Reynolds
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-newsreader)' }}>
                  Dr. Maya Reynolds, PsyD
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsPortraitOpen(false)}
                aria-label="Close portrait modal"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface-container)] text-[var(--color-primary)]"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-[var(--color-outline-variant)]/60 bg-[var(--color-surface-container)] shadow-sm">
              <Image
                src="/images/dr-maya-reynolds.jpg"
                alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, California"
                width={900}
                height={1100}
                className="h-[420px] w-full object-cover object-top block"
                priority
              />
            </div>

            <div className="mt-5 space-y-4 rounded-[1.5rem] bg-[var(--color-surface-container-low)] p-4 text-left shadow-sm">
              {bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-sm leading-6 text-[var(--color-on-surface-variant)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
