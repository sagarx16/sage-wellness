'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [hoveredHref, setHoveredHref] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-25% 0px -55% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close mobile drawer on escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 pt-3 sm:pt-4 px-3 sm:px-6">
      <div className="max-w-[1240px] mx-auto pointer-events-auto">
        {/* Floating Capsule Shell */}
        <div
          className={cn(
            'relative flex items-center justify-between gap-2.5 sm:gap-4 px-3 sm:px-5 rounded-full transition-all duration-300',
            scrolled
              ? 'h-14 sm:h-16 bg-[var(--color-surface)]/90 backdrop-blur-xl shadow-[0_12px_32px_-6px_rgba(49,67,53,0.12)] border border-[var(--color-outline-variant)]/60'
              : 'h-[60px] sm:h-[68px] bg-[var(--color-surface)]/80 backdrop-blur-md shadow-[0_8px_24px_-4px_rgba(49,67,53,0.06)] border border-[var(--color-outline-variant)]/40',
          )}
        >
          {/* Brand Monogram & Title */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none"
              aria-label="Dr. Maya Reynolds homepage"
            >
              <div className="relative flex items-center justify-center shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-1 ring-[var(--color-outline-variant)]/60 bg-[var(--color-surface-container)] transition-all duration-300 group-hover:ring-[var(--color-primary)]/40 group-hover:scale-105 shadow-xs">
                <Image
                  src="/logo.png"
                  alt="Dr. Maya Reynolds, PsyD emblem"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center text-left min-w-0">
                <span
                  className="text-[var(--color-primary)] font-medium leading-tight tracking-tight transition-colors duration-200 group-hover:text-[var(--color-primary-container)] truncate"
                  style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(15px, 4vw, 19px)' }}
                >
                  Dr. Maya Reynolds, PsyD
                </span>
                <span
                  className="text-[var(--color-on-surface-variant)] tracking-wider uppercase mt-0.5 hidden sm:block whitespace-nowrap"
                  style={{ fontSize: '10px', lineHeight: '12px', letterSpacing: '0.06em', fontWeight: 600 }}
                >
                  Santa Monica · Telehealth CA
                </span>
              </div>
            </Link>
          </div>

          {/* Center Navigation Dock with Sliding Highlight Pill */}
          <div className="hidden lg:flex items-center justify-center shrink-0">
            <nav
              className="flex items-center gap-0.5 p-1 rounded-full bg-[var(--color-surface-container-low)]/80 border border-[var(--color-outline-variant)]/35 shadow-inner"
              aria-label="Main navigation"
              onMouseLeave={() => setHoveredHref(null)}
            >
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                const isHovered = hoveredHref === link.href

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredHref(link.href)}
                    className={cn(
                      'relative inline-flex items-center justify-center h-8 px-3.5 rounded-full text-center whitespace-nowrap select-none transition-colors duration-200',
                      isActive
                        ? 'text-[var(--color-primary)] font-semibold'
                        : isHovered
                          ? 'text-[var(--color-primary)] font-medium'
                          : 'text-[var(--color-on-surface-variant)] font-medium hover:text-[var(--color-on-surface)]',
                    )}
                    style={{ fontSize: '13px', letterSpacing: '0.01em' }}
                  >
                    {/* Hover Pill */}
                    {isHovered && (
                      <motion.div
                        layoutId="navbar-hover-pill"
                        className="absolute inset-0 rounded-full bg-white/95 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[var(--color-outline-variant)]/30"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}

                    {/* Active Section Pill (shown when not hovered) */}
                    {!isHovered && isActive && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 rounded-full bg-[var(--color-secondary-container)]/70 border border-[var(--color-secondary)]/20"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}

                    <span className="relative z-10 leading-none">{link.label}</span>
                  </a>
                )
              })}
            </nav>
          </div>

          {/* Right Action Cluster */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-3 shrink-0">
            {/* Phone Quick Link (Desktop) */}
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 h-8 rounded-full text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)] transition-all whitespace-nowrap"
              style={{ fontSize: '12px', fontWeight: 500 }}
              title="Call Dr. Reynolds directly"
            >
              <Phone size={13} className="text-[var(--color-primary)] shrink-0" />
              <span className="leading-none">{CONTACT_INFO.phone}</span>
            </a>

            {/* Elevated Primary CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex group relative items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 h-9 sm:h-10 rounded-full bg-[var(--color-primary-container)] text-[var(--color-on-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:shadow-[0_6px_22px_-2px_rgba(49,67,53,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] whitespace-nowrap shrink-0"
              style={{ fontSize: '13px', letterSpacing: '0.02em', fontWeight: 500 }}
            >
              <span className="leading-none">Book Consultation</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--color-surface-container)] text-[var(--color-primary)] border border-[var(--color-outline-variant)]/50 transition-colors hover:bg-[var(--color-surface-container-high)] shrink-0 active:scale-95"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* Floating Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-black/25 backdrop-blur-[2px] z-40 pointer-events-auto lg:hidden"
                aria-hidden="true"
              />

              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="relative z-50 lg:hidden mt-2 p-5 sm:p-6 rounded-3xl bg-[var(--color-surface)]/98 backdrop-blur-2xl shadow-[0_16px_40px_-8px_rgba(49,67,53,0.22)] border border-[var(--color-outline-variant)]/60 overflow-hidden"
              >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[var(--color-outline-variant)]/30">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[var(--color-primary)]">
                    Dr. Maya Reynolds, PsyD
                  </span>
                  <span className="text-[10px] text-[var(--color-on-surface-variant)] uppercase tracking-wider font-semibold leading-tight">
                    Santa Monica & CA
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-surface-container)] text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-high)] border border-[var(--color-outline-variant)]/60 transition-all active:scale-90 shrink-0"
                  aria-label="Close navigation menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 py-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => {
                  const id = link.href.replace('#', '')
                  const isActive = activeSection === id
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick}
                      className={cn(
                        'flex items-center justify-between py-2.5 px-3.5 rounded-xl transition-all',
                        isActive
                          ? 'bg-[var(--color-secondary-container)]/50 text-[var(--color-primary)] font-semibold'
                          : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container-low)]',
                      )}
                      style={{ fontSize: '15px' }}
                    >
                      <span className="leading-none">{link.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                      )}
                    </a>
                  )
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-[var(--color-outline-variant)]/30 flex flex-col gap-2.5">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[var(--color-primary-container)] text-[var(--color-on-primary)] font-semibold transition-all hover:bg-[var(--color-primary)] shadow-sm"
                  style={{ fontSize: '14px' }}
                >
                  <Sparkles size={16} className="shrink-0" />
                  <span className="leading-none">Book Free Consultation</span>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--color-outline-variant)]/50 text-[var(--color-primary)] font-medium hover:bg-[var(--color-surface-container)] text-xs transition-colors"
                >
                  <Phone size={14} className="shrink-0" />
                  <span className="leading-none">Call {CONTACT_INFO.phone}</span>
                </a>

                <p className="mt-1 text-center text-[var(--color-on-surface-variant)] leading-normal" style={{ fontSize: '11px' }}>
                  {CONTACT_INFO.address.split(',')[0]} · {CONTACT_INFO.license}
                </p>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-full mt-1 py-2 flex items-center justify-center gap-1.5 text-xs font-medium text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors active:scale-98 border-t border-[var(--color-outline-variant)]/20 pt-2.5"
                  aria-label="Close navigation menu"
                >
                  <X size={14} />
                  <span>Close Menu</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </header>
  )
}

