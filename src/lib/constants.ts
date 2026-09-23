export const SITE_URL = 'https://drmayareynolds.com'
export const SITE_NAME = 'Dr. Maya Reynolds, PsyD'
export const SITE_DESCRIPTION =
  'Licensed clinical psychologist in Santa Monica, CA offering therapy for anxiety, trauma (EMDR), burnout, and perfectionism. In-person & telehealth across California.'

export const CONTACT_INFO = {
  address: '123th Street 45 W, Santa Monica, CA 90401',
  addressShort: '123th Street 45 W\nSanta Monica, CA 90401',
  phone: '(310) 555-0184',
  email: 'contact@drmayareynolds.com',
  license: 'CA License #PSY31982',
  mapsUrl: 'https://maps.google.com/?q=Santa+Monica+CA+90401',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'My Approach', href: '#approach' },
  { label: 'Office & Telehealth', href: '#office' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const SPECIALTIES = [
  {
    pillar: '01',
    title: 'Anxiety, Panic & Chronic Worry',
    description:
      'Overcome racing thoughts, somatic tension, social apprehension, and the relentless inner critic. We pair nervous-system stabilization with cognitive tools to disarm anxious spirals and restore daily equilibrium.',
    tags: ['Panic Attacks', 'GAD', 'Health Anxiety'],
    icon: 'sun',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    pillar: '02',
    title: 'Trauma & EMDR Therapy',
    description:
      'Process single-incident shock or long-standing childhood relational wounds without having to relive every agonizing detail. EMDR activates your brain\'s natural healing system to unlock somatic release and felt safety.',
    tags: ['Complex PTSD', 'Bilateral Stimulation', 'Attachment Repair'],
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80',
  },
  {
    pillar: '03',
    title: 'Burnout & Perfectionism in High-Achievers',
    description:
      'Support for founders, tech executives, attorneys, and entertainment professionals caught in chronic overdrive, imposter fears, and sensory overload. Shift from survival stamina to aligned, sustainable vitality.',
    tags: ['Executive Overwhelm', 'People-Pleasing', 'Boundary Work'],
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
  },
  {
    pillar: '04',
    title: 'Life Transitions & Identity',
    description:
      'Navigating major career pivots, marriage or divorce, parenthood, existential grief, and redefining personal purpose. We build self-trust and emotional resilience to guide you through threshold seasons.',
    tags: ['Career Shifts', 'Grief & Loss', 'Values Alignment'],
    icon: 'calendar',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80',
  },
]

export const APPROACH_STEPS = [
  {
    step: '1',
    title: 'Felt Safety & Stabilization',
    description:
      'We establish reliable physiological grounding practices and self-soothing anchors before opening difficult memories, ensuring you remain anchored in your body.',
    footer: 'Foundation • Resourcing',
    icon: 'shield',
  },
  {
    step: '2',
    title: 'CBT & Cognitive Insight',
    description:
      'Illuminating subconscious core beliefs, cognitive distortions, and internal narratives that perpetuate anxiety and imposter feelings.',
    footer: 'Clarity • Cognitive Shift',
    icon: 'sparkles',
  },
  {
    step: '3',
    title: 'EMDR & Somatic Integration',
    description:
      'Reprocessing past adverse experiences utilizing eye movement and bilateral cues, detaching traumatic charge from your present physiology.',
    footer: 'Deep Processing • Somatic',
    icon: 'waves',
  },
  {
    step: '4',
    title: 'Relational & Sustainable Growth',
    description:
      'Cultivating enduring self-attunement, unapologetic boundaries, and authentic relationship patterns that carry you well beyond therapy sessions.',
    footer: 'Embodiment • Long-Term',
    icon: 'leaf',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'What happens during the free 15-minute consultation?',
    answer:
      'This brief phone or video conversation is an informal, low-pressure opportunity to share a bit about what is prompting you to seek therapy right now. You can ask me any questions about my clinical style, treatment modalities, or scheduling availability. Together, we will decide if my expertise aligns with your needs, or I can provide trusted Westside referrals.',
    defaultOpen: true,
  },
  {
    question: 'What can I expect in our first full session?',
    answer:
      'Our initial 60-minute intake session is paced deliberately. Rather than interrogating you through a rapid questionnaire, we co-create a comfortable dialogue exploring your background, what your body and mind are currently experiencing, and what meaningful healing looks like for you. You are always in control of how much you choose to share.',
    defaultOpen: false,
  },
  {
    question: 'Do you accept health insurance?',
    answer:
      'I am an out-of-network provider. This model guarantees maximum privacy, allows us to tailor care without arbitrary managed care restrictions, and prevents diagnoses from being permanently mandated to insurance registries. I provide monthly courtesy superbills that clients easily submit for substantial PPO reimbursement. HSA/FSA health cards are also accepted.',
    defaultOpen: false,
  },
  {
    question: 'Is telehealth therapy as effective as in-person sessions?',
    answer:
      'Yes. Extensive peer-reviewed empirical research demonstrates that virtual psychodynamic therapy and EMDR yield equivalent outcomes to in-office care. Many clients find that attending therapy from their own sanctuary allows for heightened vulnerability, reduced travel agitation, and an easier transition into somatic reflection afterward.',
    defaultOpen: false,
  },
  {
    question: 'How often will we meet?',
    answer:
      'To build momentum, neuroplastic rewiring, and a secure therapeutic container, I see clients weekly for 50-minute sessions during the initial phases of treatment. As symptoms stabilize and emotional regulation becomes automatic, clients often taper to bi-weekly or monthly maintenance consultations.',
    defaultOpen: false,
  },
]
