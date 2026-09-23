'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, X, ShieldCheck, FileText } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, SITE_NAME } from '@/lib/constants'

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'estimate' | null>(null)

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLegalModal(null)
    }
    if (legalModal) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [legalModal])

  return (
    <footer className="w-full bg-[var(--color-surface-container-low)] border-t border-[var(--color-outline-variant)]/50 pt-14 pb-8 sm:pt-16 sm:pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[var(--spacing-space-lg)] mb-[var(--spacing-space-xl)]">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-[var(--spacing-space-xs)]">
            <div className="flex items-center gap-3.5 mb-[var(--spacing-space-xs)]">
              <Image
                src="/logo.png"
                alt="Dr. Maya Reynolds emblem"
                width={48}
                height={48}
                className="h-12 w-12 object-contain rounded-full"
              />
              <div className="flex flex-col justify-center">
                <span
                  className="text-[var(--color-primary)] font-medium leading-snug"
                  style={{ fontFamily: 'var(--font-newsreader)', fontSize: '22px', lineHeight: '30px' }}
                >
                  {SITE_NAME}
                </span>
              </div>
            </div>
            <p className="text-[var(--color-on-surface-variant)] max-w-md leading-relaxed" style={{ fontSize: '14px', lineHeight: '22px' }}>
              California Licensed Psychologist · {CONTACT_INFO.license}
            </p>
            <p className="text-[var(--color-on-surface-variant)] max-w-md leading-relaxed mt-[var(--spacing-space-xs)]" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Providing compassionate, evidence-based psychodynamic and mindfulness-based therapy tailored for high-achieving adults, professionals, and mindful individuals in Southern California.
            </p>
          </div>

          {/* Practice Info */}
          <div className="lg:col-span-4 flex flex-col gap-[var(--spacing-space-xs)]">
            <h4
              className="text-[var(--color-primary)] mb-[var(--spacing-space-xs)] uppercase tracking-wider"
              style={{ fontSize: '15px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 600 }}
            >
              Practice & Care Details
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3.5 sm:gap-4 md:gap-0 md:space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <p className="text-[var(--color-on-surface-variant)] text-[13px] sm:text-[14px] leading-snug sm:leading-[22px]">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <p className="text-[var(--color-on-surface-variant)] text-[13px] sm:text-[14px] leading-snug sm:leading-[22px]">
                  <span className="hidden sm:inline">In-Person Sessions:</span>
                  <span className="sm:hidden">In-Person:</span> Mon – Thu
                  <br />
                  <span className="hidden sm:inline">California Telehealth:</span>
                  <span className="sm:hidden">Telehealth:</span> Mon – Fri
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-[var(--spacing-space-xs)]">
            <h4
              className="text-[var(--color-primary)] mb-[var(--spacing-space-xs)] uppercase tracking-wider"
              style={{ fontSize: '15px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 600 }}
            >
              Navigation
            </h4>
            <nav className="grid grid-cols-2 min-[520px]:grid-cols-3 md:flex md:flex-col gap-x-4 gap-y-2.5 md:gap-0 md:space-y-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors py-0.5"
                  style={{ fontSize: '14px', lineHeight: '22px' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-outline-variant)]/40 pt-[var(--spacing-space-md)] flex flex-col gap-[var(--spacing-space-sm)]">
          <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3">
            <p className="text-[var(--color-outline)]" style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}>
              © {new Date().getFullYear()} Dr. Maya Reynolds Psychological Services, Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-[var(--color-outline)]" style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}>
              <span>Santa Monica, California</span>
              <span>·</span>
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-[var(--color-primary)] transition-colors underline-offset-2 hover:underline cursor-pointer"
              >
                Privacy Notice
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setLegalModal('estimate')}
                className="hover:text-[var(--color-primary)] transition-colors underline-offset-2 hover:underline cursor-pointer"
              >
                Good Faith Estimate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* In-Page Legal Notices Modal (No Page Navigation) */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLegalModal(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="legal-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[var(--color-surface)] rounded-3xl shadow-2xl border border-[var(--color-outline-variant)]/60 z-10 overflow-hidden my-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-outline-variant)]/40 bg-[var(--color-surface-container-low)]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-full bg-[var(--color-secondary-container)]/70 text-[var(--color-primary)]">
                    {legalModal === 'privacy' ? <ShieldCheck size={20} /> : <FileText size={20} />}
                  </div>
                  <div>
                    <h3 id="legal-modal-title" className="text-base font-semibold text-[var(--color-primary)] leading-tight">
                      {legalModal === 'privacy' ? 'Notice of Privacy Practices' : 'Good Faith Estimate Notice'}
                    </h3>
                    <p className="text-xs text-[var(--color-on-surface-variant)]">
                      {legalModal === 'privacy' ? 'HIPAA & California Confidentiality Standards' : 'Under the Federal "No Surprises Act"'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="p-2 rounded-full hover:bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors active:scale-95"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-4 text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                {legalModal === 'privacy' ? (
                  <>
                    <div>
                      <h4 className="font-semibold text-[var(--color-on-surface)] mb-1 text-sm">Protected Health Information (PHI)</h4>
                      <p>
                        This notice describes how medical and psychological information about you may be used and disclosed and how you can get access to this information. Your clinical sessions, intake notes, and all personal communications are strictly confidential under California state law and federal HIPAA regulations.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--color-on-surface)] mb-1 text-sm">Strict Confidentiality & Exceptions</h4>
                      <p>
                        Information shared during therapy will never be released without your explicit written consent, except in rare legal circumstances where disclosure is mandated by law:
                      </p>
                      <ul className="list-disc pl-5 mt-1.5 space-y-1 text-xs sm:text-sm">
                        <li>Imminent danger or threat of harm to yourself or another identified person.</li>
                        <li>Reasonable suspicion of child, dependent adult, or elder abuse or neglect.</li>
                        <li>A valid, legally binding court subpoena signed by a judge.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--color-on-surface)] mb-1 text-sm">Digital Security & Telehealth</h4>
                      <p>
                        All telehealth appointments and electronic records are transmitted and securely stored using enterprise-grade, HIPAA-compliant encrypted software. We never sell, track, or share client data for advertising purposes.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--color-on-surface)] mb-1 text-sm">Your Individual Rights</h4>
                      <p>
                        You have the right to inspect and receive a copy of your health records, request restrictions on disclosures, and request confidential communication through alternative channels. For inquiries regarding privacy practices, please contact <a href={`mailto:${CONTACT_INFO.email}`} className="text-[var(--color-primary)] underline">{CONTACT_INFO.email}</a>.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h4 className="font-semibold text-[var(--color-on-surface)] mb-1 text-sm">Your Right to a Good Faith Estimate</h4>
                      <p>
                        Under Section 2799B-6 of the Public Health Service Act (also known as the &quot;No Surprises Act&quot;), health care providers must give clients who don&apos;t have insurance or who are not using insurance an estimate of the bill for medical items and mental health services.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--color-on-surface)] mb-1 text-sm">Out-of-Network Psychotherapy Services</h4>
                      <p>
                        Dr. Maya Reynolds is an out-of-network provider. You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services:
                      </p>
                      <ul className="list-disc pl-5 mt-1.5 space-y-1 text-xs sm:text-sm">
                        <li>Standard 50-minute Individual Psychotherapy session: $250 per session.</li>
                        <li>Initial 60-minute Comprehensive Clinical Intake: $290.</li>
                        <li>You will receive your personalized Good Faith Estimate in writing at least 1 business day before your scheduled medical service or intake.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--color-on-surface)] mb-1 text-sm">Dispute Rights & Transparency</h4>
                      <p>
                        If you receive a bill that is at least $400 more than your Good Faith Estimate, you have the right to dispute the bill through the federal dispute resolution process. Make sure to save a copy or picture of your Good Faith Estimate.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--color-on-surface)] mb-1 text-sm">Questions & Federal Inquiries</h4>
                      <p>
                        For questions or more information about your right to a Good Faith Estimate, visit <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline">www.cms.gov/nosurprises</a> or call the HHS No Surprises Help Desk at (800) 985-3059.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-3.5 border-t border-[var(--color-outline-variant)]/40 bg-[var(--color-surface-container-low)] flex justify-end">
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white text-xs font-semibold hover:bg-[var(--color-primary-container)] transition-colors active:scale-95"
                >
                  Close Notice
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  )
}

