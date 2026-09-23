'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Activity, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
}

const credentials = [
  {
    icon: GraduationCap,
    title: 'PsyD Degree',
    body: 'Doctorate in Clinical Psychology with specialized focus on attachment & somatic regulation.',
    color: 'text-[var(--color-primary)]',
  },
  {
    icon: Activity,
    title: 'EMDR & CBT',
    body: 'Certified EMDR practitioner with advanced training in cognitive and trauma-informed care.',
    color: 'text-[var(--color-secondary)]',
  },
  {
    icon: Clock,
    title: '12+ Years',
    body: 'Extensive outpatient hospital and private practice experience serving diverse adult populations.',
    color: 'text-[var(--color-primary)]',
  },
  {
    icon: Users,
    title: 'Creative & Exec',
    body: 'Trusted therapist for Santa Monica entrepreneurs, media leaders, attorneys, and artists.',
    color: 'text-[var(--color-secondary)]',
  },
]

export default function About() {
  const [isBioExpanded, setIsBioExpanded] = useState(false)

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
    <section id="about" className="relative w-full overflow-hidden bg-[var(--color-surface-container-low)] py-16 sm:py-20 lg:py-28 scroll-mt-[100px] sm:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} custom={0} className="block text-[var(--color-secondary)] uppercase tracking-widest font-semibold" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em' }}>
            About Dr. Reynolds
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 text-[var(--color-primary)] tracking-tight"
            style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(28px, 5.5vw, 40px)', lineHeight: '1.2', fontWeight: 400, letterSpacing: '-0.015em' }}
          >
            Compassionate, collaborative therapy rooted in genuine connection.
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Story Column */}
          <motion.div
            className="space-y-4 sm:space-y-5 lg:col-span-7 text-[var(--color-on-surface-variant)] leading-relaxed text-base sm:text-lg"
            style={{ lineHeight: '1.65' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.blockquote
              variants={fadeUp}
              custom={0}
              className="text-[var(--color-on-surface)] italic border-l-2 border-[var(--color-primary-container)] pl-4"
              style={{ fontSize: '16px', lineHeight: '26px', fontWeight: 400 }}
            >
              &ldquo;I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.&rdquo;
            </motion.blockquote>

            {/* Paragraph 0 (always visible preview) */}
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: '16px', lineHeight: '26px' }}>
              {bioParagraphs[0]}
            </motion.p>

            {/* Mobile Read Full Bio / Show Less Button */}
            <div className="pt-1 md:hidden">
              <button
                type="button"
                onClick={() => setIsBioExpanded((prev) => !prev)}
                aria-expanded={isBioExpanded}
                aria-controls="about-dr-reynolds-bio-extended"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition-all duration-200 hover:bg-[var(--color-surface-container-high)] hover:border-[var(--color-primary)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] active:scale-[0.98]"
              >
                <span>{isBioExpanded ? 'Show Less' : 'Read Full Bio'}</span>
                {isBioExpanded ? (
                  <ChevronUp size={16} strokeWidth={2.2} className="text-[var(--color-secondary)]" />
                ) : (
                  <ChevronDown size={16} strokeWidth={2.2} className="text-[var(--color-secondary)]" />
                )}
              </button>
            </div>

            {/* Extended Paragraphs (revealed below the button on mobile; always shown on desktop) */}
            <div
              id="about-dr-reynolds-bio-extended"
              className={isBioExpanded ? 'space-y-4 sm:space-y-5 block' : 'hidden md:block md:space-y-4 sm:space-y-5'}
            >
              {bioParagraphs.slice(1).map((para, i) => (
                <motion.p key={i + 1} variants={fadeUp} custom={i + 2} style={{ fontSize: '16px', lineHeight: '26px' }}>
                  {para}
                </motion.p>
              ))}

              {/* Bottom Show Less button on mobile for quick collapse after reading */}
              {isBioExpanded && (
                <div className="pt-2 md:hidden">
                  <button
                    type="button"
                    onClick={() => setIsBioExpanded(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition-all duration-200 hover:bg-[var(--color-surface-container-high)] focus:outline-none active:scale-[0.98]"
                  >
                    <span>Show Less</span>
                    <ChevronUp size={16} strokeWidth={2.2} className="text-[var(--color-secondary)]" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Bento Credential Grid */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5 self-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {credentials.map(({ icon: Icon, title, body, color }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl bg-[var(--color-surface)] p-3.5 sm:p-6 shadow-sm flex flex-col justify-between border border-[var(--color-outline-variant)]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[var(--color-surface-container)] shrink-0">
                  <Icon size={20} strokeWidth={1.6} className={color} />
                </div>
                <div className="mt-3 sm:mt-5">
                  <span className="text-[var(--color-primary)] font-semibold block" style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(17px, 3.6vw, 22px)', lineHeight: '24px', fontWeight: 500 }}>
                    {title}
                  </span>
                  <p className="mt-1 text-[var(--color-on-surface-variant)] text-[12px] sm:text-[14px] leading-snug sm:leading-[22px]">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
