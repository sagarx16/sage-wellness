'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: "easeOut" as const },
  }),
}

function FAQItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false)

  return (
    <div
      className={cn(
        'rounded-2xl p-4 sm:p-6 transition-all duration-300',
        open
          ? 'bg-[var(--color-surface-container)] shadow-sm'
          : 'bg-[var(--color-surface-container-low)]',
      )}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between text-left gap-3.5 sm:gap-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className="text-[var(--color-primary)] font-medium"
          style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(17px, 3.8vw, 22px)', lineHeight: '1.3', fontWeight: 500 }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            'text-[var(--color-secondary)] shrink-0 transition-transform duration-300 sm:w-[22px] sm:h-[22px]',
            open && 'rotate-180',
          )}
          strokeWidth={1.8}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 mt-3 sm:mt-4 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <p className="text-[var(--color-on-surface-variant)] leading-relaxed text-xs sm:text-base pr-1 sm:pr-8" style={{ lineHeight: '1.6' }}>
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="w-full bg-[var(--color-surface)] py-12 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.span variants={fadeUp} custom={0} className="block text-[var(--color-secondary)] uppercase tracking-widest font-semibold" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em' }}>
            Got Questions?
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 text-[var(--color-primary)] tracking-tight"
            style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(26px, 5.5vw, 40px)', lineHeight: '1.2', fontWeight: 400, letterSpacing: '-0.015em' }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-3 sm:mt-4 text-[var(--color-on-surface-variant)] text-sm sm:text-lg" style={{ lineHeight: '1.6' }}>
            Clear answers to help you take the first step with confidence.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-14 space-y-3 sm:space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div key={item.question} variants={fadeUp} custom={i}>
              <FAQItem {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
