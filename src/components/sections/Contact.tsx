'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Timer, Lock, CheckCircle2, Send } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

const concerns = [
  { value: 'anxiety', label: 'Anxiety / Panic' },
  { value: 'trauma', label: 'Trauma / EMDR' },
  { value: 'burnout', label: 'Burnout / Work' },
  { value: 'transitions', label: 'Life Transitions' },
  { value: 'perfectionism', label: 'Perfectionism' },
  { value: 'other', label: 'Other' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Basic validation
    const newErrors: Record<string, string> = {}
    if (!data.get('fullName')) newErrors.fullName = 'Full name is required.'
    if (!data.get('email')) newErrors.email = 'Email address is required.'
    if (!data.get('phone')) newErrors.phone = 'Phone number is required.'
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }

    setStatus('submitting')
    setErrors({})

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-[var(--color-surface-container-low)] py-12 sm:py-20 lg:py-28 scroll-mt-20">
      {/* Atmospheric Background Gradients */}
      <div className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-[var(--color-secondary-fixed)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-20 h-96 w-96 rounded-full bg-[var(--color-primary-fixed)]/25 blur-3xl" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.span variants={fadeUp} custom={0} className="block text-[var(--color-secondary)] uppercase tracking-widest font-semibold" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em' }}>
            Get in Touch
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 text-[var(--color-primary)] tracking-tight"
            style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(26px, 5.5vw, 40px)', lineHeight: '1.2', fontWeight: 400, letterSpacing: '-0.015em' }}
          >
            Begin Your Journey Toward Healing
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-3 sm:mt-4 text-[var(--color-on-surface-variant)] text-sm sm:text-lg" style={{ lineHeight: '1.6' }}>
            Schedule a free 15-minute video consultation or reach out with any questions. You don&apos;t have to carry this alone.
          </motion.p>
        </motion.div>

        <div className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Practice Coordinates */}
            <motion.div variants={fadeUp} custom={0} className="rounded-2xl sm:rounded-3xl bg-[var(--color-surface)] p-5 sm:p-8 shadow-sm space-y-4 sm:space-y-5">
              <h3 className="text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-newsreader)', fontSize: '22px', lineHeight: '30px', fontWeight: 500 }}>
                Practice Coordinates
              </h3>
              <div className="space-y-3.5 sm:space-y-4 text-[var(--color-on-surface-variant)]" style={{ fontSize: '15px', lineHeight: '24px' }}>
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group hover:text-[var(--color-primary)] transition-colors"
                >
                  <MapPin size={20} className="text-[var(--color-secondary)] shrink-0 mt-0.5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.8} />
                  <div>
                    <p className="text-[var(--color-primary)] font-semibold text-sm sm:text-base leading-snug">Santa Monica Office</p>
                    <p className="group-hover:underline text-[var(--color-on-surface-variant)] text-xs sm:text-sm">{CONTACT_INFO.address}</p>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-start gap-3 group hover:text-[var(--color-primary)] transition-colors"
                >
                  <Phone size={20} className="text-[var(--color-secondary)] shrink-0 mt-0.5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.8} />
                  <div>
                    <p className="text-[var(--color-primary)] font-semibold text-sm sm:text-base leading-snug">Direct Telephone</p>
                    <p className="group-hover:underline text-[var(--color-on-surface-variant)] text-xs sm:text-sm">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3 group hover:text-[var(--color-primary)] transition-colors"
                >
                  <Mail size={20} className="text-[var(--color-secondary)] shrink-0 mt-0.5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.8} />
                  <div>
                    <p className="text-[var(--color-primary)] font-semibold text-sm sm:text-base leading-snug">Confidential Email</p>
                    <p className="group-hover:underline text-[var(--color-on-surface-variant)] break-all text-xs sm:text-sm">{CONTACT_INFO.email}</p>
                  </div>
                </a>
              </div>
              {/* Response Badge */}
              <div className="rounded-xl bg-[var(--color-secondary-container)]/40 p-3.5 sm:p-4 flex items-center gap-2.5 sm:gap-3">
                <Timer size={20} className="text-[var(--color-secondary)] shrink-0 sm:w-[22px] sm:h-[22px]" strokeWidth={1.8} />
                <p className="text-[var(--color-on-surface-variant)] text-xs sm:text-sm leading-relaxed">
                  <strong>Response time:</strong> All clinical inquiries are answered personally within 24–48 business hours.
                </p>
              </div>
            </motion.div>

            {/* HIPAA Card */}
            <motion.div variants={fadeUp} custom={1} className="rounded-2xl bg-[var(--color-surface-container)] p-5 sm:p-6 shadow-sm flex items-start gap-3.5 sm:gap-4">
              <Lock size={24} className="text-[var(--color-primary)] shrink-0 sm:w-7 sm:h-7" strokeWidth={1.5} />
              <div>
                <h4 className="text-[var(--color-primary)] text-sm sm:text-[17px] font-semibold">
                  100% Confidential & HIPAA-Compliant
                </h4>
                <p className="mt-1 text-[var(--color-on-surface-variant)] text-xs sm:text-sm leading-relaxed">
                  Your privacy is paramount. Communications submitted via this encrypted portal are protected under state and federal medical confidentiality standards.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-[var(--color-surface)] p-5 sm:p-8 lg:p-10 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-secondary-container)] text-[var(--color-secondary)]">
                  <CheckCircle2 size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-newsreader)', fontSize: '22px', lineHeight: '30px', fontWeight: 500 }}>
                  Thank you for reaching out
                </h3>
                <p className="text-[var(--color-on-surface-variant)] max-w-md mx-auto" style={{ fontSize: '16px', lineHeight: '26px' }}>
                  Your consultation request has been received securely. Dr. Reynolds will review your details and contact you within 24–48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="fullName" className="block font-medium mb-2 text-[var(--color-on-surface)]" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em', fontWeight: 500 }}>
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Jordan Hayes"
                      className="w-full rounded-xl bg-[var(--color-surface-container-low)] px-4 py-3 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-container)]"
                      style={{ fontSize: '16px', lineHeight: '26px' }}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && <p id="fullName-error" className="mt-1 text-[var(--color-error)]" style={{ fontSize: '13px' }}>{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium mb-2 text-[var(--color-on-surface)]" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em', fontWeight: 500 }}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      className="w-full rounded-xl bg-[var(--color-surface-container-low)] px-4 py-3 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-container)]"
                      style={{ fontSize: '16px', lineHeight: '26px' }}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="mt-1 text-[var(--color-error)]" style={{ fontSize: '13px' }}>{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Modality */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="phone" className="block font-medium mb-2 text-[var(--color-on-surface)]" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em', fontWeight: 500 }}>
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(310) 555-0100"
                      className="w-full rounded-xl bg-[var(--color-surface-container-low)] px-4 py-3 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-container)]"
                      style={{ fontSize: '16px', lineHeight: '26px' }}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && <p id="phone-error" className="mt-1 text-[var(--color-error)]" style={{ fontSize: '13px' }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="modality" className="block font-medium mb-2 text-[var(--color-on-surface)]" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em', fontWeight: 500 }}>
                      Preferred Modality
                    </label>
                    <select
                      id="modality"
                      name="modality"
                      className="w-full rounded-xl bg-[var(--color-surface-container-low)] px-4 py-3 text-[var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-container)]"
                      style={{ fontSize: '16px', lineHeight: '26px' }}
                    >
                      <option value="in-person">In-Person (Santa Monica)</option>
                      <option value="telehealth">Telehealth (Anywhere in CA)</option>
                      <option value="either">Open to Either</option>
                    </select>
                  </div>
                </div>

                {/* Areas of Concern */}
                <div>
                  <fieldset>
                    <legend className="block font-medium mb-2.5 text-[var(--color-on-surface)]" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em', fontWeight: 500 }}>
                      Areas of Primary Concern (Select all that apply)
                    </legend>
                    <div className="grid grid-cols-2 min-[480px]:grid-cols-3 gap-2 sm:gap-2.5">
                      {concerns.map(({ value, label }) => (
                        <label
                          key={value}
                          className="flex items-center gap-2 rounded-xl bg-[var(--color-surface-container-low)] p-2.5 sm:p-3 cursor-pointer hover:bg-[var(--color-surface-container)] transition-colors select-none"
                        >
                          <input
                            type="checkbox"
                            name="concerns"
                            value={value}
                            className="h-4 w-4 rounded accent-[var(--color-primary)] shrink-0"
                          />
                          <span className="text-[var(--color-on-surface)] text-xs sm:text-sm leading-snug">{label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block font-medium mb-2 text-[var(--color-on-surface)]" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em', fontWeight: 500 }}>
                    Brief Note (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Briefly share what you are hoping to address or any preferred scheduling windows..."
                    className="w-full rounded-xl bg-[var(--color-surface-container-low)] p-4 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-container)] resize-none"
                    style={{ fontSize: '16px', lineHeight: '26px' }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-xl bg-[var(--color-primary-container)] py-4 text-[var(--color-on-primary)] shadow-md hover:bg-[var(--color-primary)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5"
                  style={{ fontSize: '15px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 600 }}
                >
                  <Lock size={20} strokeWidth={1.8} />
                  <span>{status === 'submitting' ? 'Sending...' : 'Request Free 15-Min Consultation'}</span>
                  {status === 'idle' && <Send size={18} strokeWidth={1.8} />}
                </button>

                {status === 'error' && (
                  <p className="text-center text-[var(--color-error)]" style={{ fontSize: '14px' }}>
                    Something went wrong. Please email us directly at {CONTACT_INFO.email}
                  </p>
                )}

                <p className="text-center text-[var(--color-outline)]" style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}>
                  Your details are kept strictly private. By submitting, you agree to receive a confidential response from Dr. Maya Reynolds.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
