'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Wind, VolumeX } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
}

export default function Gallery() {
  return (
    <section className="w-full bg-[var(--color-surface-container-low)] py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.span variants={fadeUp} custom={0} className="block text-[var(--color-secondary)] uppercase tracking-widest font-semibold" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em' }}>
            Office Tour
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 text-[var(--color-primary)] tracking-tight"
            style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(26px, 5.5vw, 40px)', lineHeight: '1.2', fontWeight: 400, letterSpacing: '-0.015em' }}
          >
            The Space: Designed for Calm
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-3 sm:mt-4 text-[var(--color-on-surface-variant)] text-sm sm:text-lg" style={{ lineHeight: '1.6' }}>
            A physical sanctuary thoughtfully appointed with natural light, organic materials, and soothing acoustics.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Large Hero Photo */}
          <motion.div variants={fadeUp} custom={0} className="lg:col-span-8 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[var(--color-surface-container)] shadow-md">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG8E1pLnJFNWGISAh1NOar6i0rpVJC54IQ3Bw1oOwp2nZ2dD6U-BNOgJHTFu2PXY-OVn7vkAmeq1L7fwBeOWybuBDAhffzi6D883GLLbpOF_vtJl_UtPNBqmcK0W5LFqmJCiow1b4efMXB4-AOSz1k8bNg26oikyubjMgy7VhDiKQkhY9iXPSTF_fRWF6-oIdTcxscqqOovVutN0P3xFpAaHTbtCAuS3bmzDxWeiwRNYUrxrizd4yQGYDYgBxfaaFVQQ"
              alt="Main consultation suite — sunlit therapy room with organic linen furnishings and restorative greenery, Santa Monica"
              width={1200}
              height={800}
              className="w-full h-full min-h-[250px] sm:min-h-[380px] lg:h-[480px] object-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] block"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-inverse-surface)]/85 via-[var(--color-inverse-surface)]/40 to-transparent p-4 sm:p-6 lg:p-8">
              <span
                className="rounded-full bg-[var(--color-surface)]/20 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 text-[var(--color-inverse-on-surface)] uppercase tracking-wider"
                style={{ fontSize: '10px', lineHeight: '14px', letterSpacing: '0.04em', fontWeight: 600 }}
              >
                Main Consultation Suite
              </span>
              <p className="mt-1.5 sm:mt-2 text-[var(--color-inverse-on-surface)]" style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(18px, 4vw, 22px)', lineHeight: '26px', fontWeight: 500 }}>
                Sunlit main therapy room featuring organic linen furnishings and restorative greenery
              </p>
            </div>
          </motion.div>

          {/* Stacked Right Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
            {/* Nook Card */}
            <motion.div variants={fadeUp} custom={1} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[var(--color-surface-container)] shadow-md flex-1">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpW3DvPIT8RzGCuHHXZ_i1dQycxFNhVpeHyWHwJX9nvxdIJY6gCPunmPTfr1-fuGc6EFC8C8mPhaBZfTSQluqpLVm1NPukx8LVjjbJ74L-UPObKgTax8ZonBzV1sbjmU9KaQiLIdyfUR4i7aXpMxbk3rlFMbLTTF7VFSl7jyTxjEWzalSHWWPkOWTrosB5HeUCDLFqxFZOux7TA9su3vWeDYMONK7Qo1JQ0XUUIcZqpJxrtknufWhmTxBdhFbDwvZaTQ"
                alt="Quiet corner of therapy office with warm bookshelf, plush seating, and soft lighting"
                width={600}
                height={450}
                className="w-full h-48 sm:h-64 lg:h-56 object-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] block"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-inverse-surface)]/85 via-[var(--color-inverse-surface)]/30 to-transparent p-4 sm:p-5">
                <span
                  className="rounded-full bg-[var(--color-surface)]/20 backdrop-blur-md px-2.5 py-0.5 text-[var(--color-inverse-on-surface)] uppercase"
                  style={{ fontSize: '10px', lineHeight: '14px', letterSpacing: '0.04em', fontWeight: 600 }}
                >
                  Quiet Corner
                </span>
                <p className="mt-1 text-[var(--color-inverse-on-surface)]" style={{ fontSize: '16px', lineHeight: '22px', fontWeight: 600 }}>Reading & Grounding Nook</p>
                <p className="text-[var(--color-inverse-on-surface)]/80 text-xs sm:text-sm" style={{ lineHeight: '20px' }}>Psychology texts, warm task lighting, and artisan ceramics.</p>
              </div>
            </motion.div>

            {/* Restorative Touches Card */}
            <motion.div variants={fadeUp} custom={2} className="rounded-2xl sm:rounded-3xl bg-[var(--color-surface)] p-5 sm:p-6 shadow-md flex flex-col justify-center flex-1 border border-[var(--color-outline-variant)]/30">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--color-secondary-container)] text-[var(--color-secondary)] shrink-0">
                  <Wind size={18} strokeWidth={1.8} />
                </div>
                <h4 className="text-[var(--color-primary)] text-base sm:text-[17px] font-semibold">Restorative Touches</h4>
              </div>
              <p className="mt-2.5 sm:mt-3 text-[var(--color-on-surface-variant)] leading-relaxed text-xs sm:text-sm" style={{ lineHeight: '20px' }}>
                Complementary organic herbal infusions, specialized white-noise sound dampening between suites, and a calm, quiet foyer without reception desks or crowded lobbies.
              </p>
              <div className="mt-3.5 sm:mt-4 flex items-center gap-3 sm:gap-4 text-[var(--color-secondary)]" style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}>
                <span className="flex items-center gap-1"><VolumeX size={15} strokeWidth={1.8} /> Acoustically Private</span>
                <span className="flex items-center gap-1"><Wind size={15} strokeWidth={1.8} /> HEPA Filtration</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
