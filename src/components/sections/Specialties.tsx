'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sun, Heart, Zap, Calendar } from 'lucide-react'
import { SPECIALTIES } from '@/lib/constants'

const icons = { sun: Sun, heart: Heart, zap: Zap, calendar: Calendar }

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
}

export default function Specialties() {
  return (
    <section id="specialties" className="relative w-full overflow-hidden bg-[var(--color-surface)] py-12 sm:py-20 lg:py-28 scroll-mt-20">
      {/* Atmospheric Background Gradients */}
      <div className="pointer-events-none absolute -right-36 top-16 h-96 w-96 rounded-full bg-[var(--color-secondary-fixed)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-36 bottom-20 h-80 w-80 rounded-full bg-[var(--color-primary-fixed)]/20 blur-3xl" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} custom={0} className="block text-[var(--color-secondary)] uppercase tracking-widest font-semibold" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em' }}>
            Clinical Focus
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 text-[var(--color-primary)] tracking-tight"
            style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(26px, 4vw, 40px)', lineHeight: '1.2', fontWeight: 400, letterSpacing: '-0.015em' }}
          >
            Areas of Specialty
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-3 sm:mt-4 text-[var(--color-on-surface-variant)] text-sm sm:text-lg" style={{ lineHeight: '1.6' }}>
            Thoughtfully tailored care for complex minds and high-functioning lives.
          </motion.p>
        </motion.div>

        {/* Specialty Cards */}
        <motion.div
          className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SPECIALTIES.map(({ pillar, title, description, tags, icon, image }, i) => {
            const Icon = icons[icon as keyof typeof icons]
            return (
              <motion.div
                key={pillar}
                variants={fadeUp}
                custom={i}
                className="group flex flex-col rounded-3xl bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Unsplash Photo Banner */}
                {image && (
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[var(--color-surface-container)]">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                    {/* Floating Badge Cluster */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white/95 backdrop-blur-md text-[var(--color-primary)] shadow-md border border-white/60 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[var(--color-primary)] text-[11px] font-semibold tracking-wider uppercase shadow-xs border border-white/60">
                        Pillar {pillar}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3
                      className="text-[var(--color-primary)] font-medium"
                      style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(20px, 3vw, 24px)', lineHeight: '28px', fontWeight: 500 }}
                    >
                      {title}
                    </h3>
                    <p className="mt-2.5 text-[var(--color-on-surface-variant)] leading-relaxed text-sm sm:text-base" style={{ lineHeight: '1.65' }}>
                      {description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[var(--color-outline-variant)]/30 flex flex-wrap gap-1.5 sm:gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--color-surface)] px-2.5 sm:px-3 py-1 text-[var(--color-primary)] font-medium border border-[var(--color-outline-variant)]/40 shadow-2xs"
                        style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.02em' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
