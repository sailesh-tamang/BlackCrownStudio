import { AnimatePresence, motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import logoMark from '../assets/logo.png'
import pawanKhatiwada from '../assets/pawan-khatiwada.png'
import restaurantHero from '../assets/restaurant-hero.png'
import saileshTamang from '../assets/sailesh-tamang.png'

const phoneNumber = '+977-9813056871'
const emailAddress = 'contact@blackcrownstudio.com'
const bookingPath = '/book'
const dashboardPath = '/dashboard'

const navItems = [
  { label: 'Services', target: 'services' },
  { label: 'Portfolio', target: 'portfolio' },
  { label: 'About', target: 'about' },
  { label: 'Listing Media', target: 'listing-media' },
  { label: 'Social Media', target: 'social-media' },
]

const processSteps = [
  {
    number: '1',
    title: 'Book Your Shoot',
    description: 'Schedule your shoot online or by phone.',
  },
  {
    number: '2',
    title: 'Select Package',
    description: 'Choose the services and add-ons you need.',
  },
  {
    number: '3',
    title: 'Shoot Day',
    description: 'Our team arrives to capture your listing perfectly.',
  },
  {
    number: '4',
    title: 'Media Delivery',
    description: 'Receive your edited media in 1-2 business days.',
  },
]

const packages = [
  {
    name: 'Starter',
    price: '$750',
    accent: 'Best for entry listings',
    services: ['Professional MLS Photography', 'Drone Photography', 'Signature Listing Video'],
  },
  {
    name: 'Signature',
    price: '$1,100',
    accent: 'Most requested',
    services: [
      'Professional MLS Photography',
      'Drone Photography',
      'Signature Listing Video',
      'Twilight Add’l Stills',
    ],
  },
  {
    name: 'Full Stable',
    price: '$1,425',
    accent: 'Complete premium stack',
    services: [
      'Professional MLS Photography',
      'Drone Photography',
      'Signature Listing Video',
      'Twilight Add’l Stills',
      'Platinum Reel',
      'Custom Listing Website',
    ],
  },
]

const outOfStatePackages = [
  {
    title: 'Package 01',
    price: '$6,500',
    bullets: [
      '2 full days on-site filming',
      '10 fully produced videos',
      'Drone footage included',
      'Pre-shoot strategy, location, and script planning',
      'Social media guidance and posting support',
      'On-camera coaching and direction',
      'Custom editing, captions, audio, and platform optimization',
    ],
  },
  {
    title: 'Package 02',
    price: '$7,500',
    bullets: [
      '3 full days on-site filming',
      '10 fully produced videos',
      'Drone and A-roll coverage',
      'Custom editing, captions, audio, and platform optimization',
      'Personal brand authority development',
      'Social media deep dive',
    ],
  },
  {
    title: 'Package 03',
    price: '$8,500',
    bullets: [
      'Up to 3 full days on-site filming',
      '12 fully produced videos',
      'Drone package integrated in every video',
      'Pre-shoot strategy sessions',
      'Social media story sessions',
      'Personal brand authority development',
    ],
  },
]

const portfolioTabs = ['Bordered Estate', 'Home Showcase', 'Agent Feature', 'Interior Cinematic']

const portfolioItems = [
  {
    title: 'Bordered Estate',
    category: 'Bordered Estate',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sunlit Showcase',
    category: 'Home Showcase',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Agent Feature',
    category: 'Agent Feature',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Interior Cinematic',
    category: 'Interior Cinematic',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Modern Detail Cut',
    category: 'Interior Cinematic',
    image:
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Exterior Storyboard',
    category: 'Bordered Estate',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  },
]

const values = [
  {
    title: 'Creativity & Innovation',
    description:
      'BlackCrown Studio is driven by a passion for pushing creative boundaries and using innovative techniques to craft visually stunning, impactful content.',
  },
  {
    title: 'Authenticity & Collaboration',
    description:
      'We prioritize authentic storytelling and value close collaboration with clients, ensuring every project aligns with their unique vision and message.',
  },
  {
    title: 'Excellence & Impact',
    description:
      'With a commitment to delivering high-quality results, we create meaningful content that resonates deeply and leaves a lasting impression.',
  },
]

const team = [
  { name: 'Pawan Khatiwada', title: 'Founder', image: pawanKhatiwada },
  { name: 'Sailesh Tamang', title: 'Co-Founder', image: saileshTamang },
  { name: 'Fourehouse Media', title: 'Partner & Creative Director' },
]

const listingLevels = [
  {
    title: 'Level 1: Walk-Through Video',
    description:
      'Smooth speed ramps, high-end audio, and a polished walk-through designed for Instagram and TikTok.',
  },
  {
    title: 'Level 2: Signature Video',
    description:
      'Scripted, directed, algorithm-optimized content with cinematic colors and effects.',
  },
]

const socialPillars = [
  'Consistent Strategic Posting',
  'Elevated On-Brand Content',
  'Clear Communication & Approvals',
  'A System That Removes the Daily Pressure',
]

const socialPlans = [
  {
    name: 'Just Management',
    price: '$1,700/mo',
    features: [
      'Up to 24 posts/mo (6x/wk)',
      '8-10 reels (client-provided)',
      'Instagram + Facebook',
      'Monthly reporting',
      '1 Zoom call/mo',
    ],
  },
  {
    name: 'Starter Engine',
    price: '$2,200/mo',
    features: [
      'Up to 24 posts/mo',
      '8-10 reels (filmed by us)',
      '1 shoot day/mo (4hr max)',
      'Instagram + Facebook',
      'Monthly reporting',
      '1 Zoom call/mo',
    ],
  },
  {
    name: 'Growth Engine',
    price: '$4,000/mo',
    features: [
      '32 posts/mo (7x/wk)',
      '12-15 reels',
      '1 shoot day/mo',
      'Instagram + Facebook + weekday DM management',
      'Monthly reporting with insights',
      '2 Zoom calls/mo',
    ],
  },
]

const socialTableRows = [
  ['Investment', '$1,700/mo', '$2,200/mo', '$4,000/mo'],
  ['Posts/month', 'Up to 24', 'Up to 24', '32'],
  ['Reels/month', '8-10 (client-provided)', '8-10 (filmed by us)', '12-15'],
  ['Shoot days', '0', '1 shoot day/mo (4hr max)', '1 shoot day/mo'],
  ['Platforms', 'Instagram + Facebook', 'Instagram + Facebook', 'Instagram + Facebook + DM'],
  ['DM Management', 'No', 'No', 'Weekday DM management'],
  ['Reporting', 'Monthly reporting', 'Monthly reporting', 'Monthly reporting with insights'],
  ['Zoom Calls', '1/mo', '1/mo', '2/mo'],
  ['Content Creation', 'Client-provided reels', 'Filmed by BlackCrown Studio', 'Filmed by BlackCrown Studio'],
]

const onboardingSteps = [
  'Account Access - IG login/admin and FB business page access',
  'Brand Alignment - tone, voice, brand guidelines, target audience, and preferences',
  'Workflow Setup - Google Drive folder, scheduling system, and posting cadence',
]

const communicationItems = [
  'Monthly Zoom strategy call',
  'Slack for quick communication',
  '48-hour approval window',
  'Clear timelines for every delivery',
]

const stats = [
  { label: 'Filmed in Real Estate', display: '$2 BILLION', value: 2 },
  { label: 'Happy clients', display: '1000+', value: 1000 },
  { label: 'Monthly views', display: '5,000,000+', value: 5000000 },
  { label: 'Months active', display: '24', value: 24 },
]

const testimonials = [
  {
    name: 'Kelsie Blevins',
    quote:
      'BlackCrown Studio gave my listings more exposure and strengthened my personal brand at the same time.',
  },
  {
    name: 'Anthony Swain',
    quote:
      'Phenomenal to work with. The team drives leads, gets compliments, and is simply the best in the market.',
  },
  {
    name: 'Steven Custer',
    quote:
      'Consistent content from BlackCrown Studio helped me land a major listing and close the deal.',
  },
  {
    name: 'Austin Quick',
    quote:
      'Professional, creative, strong communication, and a flawless final product every time.',
  },
]

const faqSections = {
  'General Questions': [
    {
      question: 'What does BlackCrown Studio specialize in?',
      answer:
        'We create cinematic real estate content for agents, including listing videos, photography, drone footage, social content, and done-for-you marketing.',
    },
    {
      question: 'Who do you work with?',
      answer:
        'We work with real estate agents, brokers, and teams who want their listings and personal brand to stand out.',
    },
    {
      question: 'What markets do you serve?',
      answer:
        'We serve local listings, out-of-state campaigns, and agents who need a consistent production partner wherever the project takes them.',
    },
  ],
  'Booking & Scheduling': [
    {
      question: 'How do I book a shoot?',
      answer:
        'Use the booking form below, click Book a Shoot in the header, or call the studio to reserve your date.',
    },
  ],
  'Pricing & Packages': [
    {
      question: 'Can packages be customized?',
      answer:
        'Yes. We can adjust deliverables, add-ons, and timelines so the package fits the property and your goals.',
    },
  ],
  'Video & Content Production': [
    {
      question: 'Do you provide hooks and scripts?',
      answer:
        'Yes. Hooks and scripts are included so agents know exactly what to say on camera.',
    },
  ],
  'Turnaround & Delivery': [
    {
      question: 'When do I receive my media?',
      answer:
        'Most edited media is delivered in 1-2 business days, organized for easy Dropbox delivery and sharing.',
    },
  ],
  'Revisions & Edits': [
    {
      question: 'Are revisions included?',
      answer:
        'Yes. We include a clear approval window and revision workflow so the final media matches your expectations.',
    },
  ],
  'Licensing & Usage': [
    {
      question: 'Can I use the content on every platform?',
      answer:
        'Yes. Final media is prepared for listing, social, and ad usage with platform-friendly formatting.',
    },
  ],
  'Shoot Day Expectations': [
    {
      question: 'What should I expect on shoot day?',
      answer:
        'Our crew arrives with a plan, captures the property efficiently, and directs the shoot so the process stays smooth.',
    },
  ],
  'Payments & Policies': [
    {
      question: 'How does payment work?',
      answer:
        'We confirm the shoot, schedule the production, and keep the process straightforward with clear payment expectations.',
    },
  ],
  'Results & Growth': [
    {
      question: 'What kind of results do clients see?',
      answer:
        'Clients see stronger listing presentation, more consistent branding, and content that supports exposure and growth.',
    },
  ],
}

const faqCategoryList = Object.keys(faqSections)

function scrollToId(id) {
  if (id === 'book') {
    navigateToPath(bookingPath)
    return
  }

  if (normalizePath(window.location.pathname) === bookingPath) {
    navigateToPath('/')

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const nextTarget = document.getElementById(id)
        if (nextTarget) {
          nextTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })

    return
  }

  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  return pathname.replace(/\/+$/, '')
}

function usePagePath() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return pathname
}

function navigateToPath(pathname) {
  const nextPath = normalizePath(pathname)

  if (normalizePath(window.location.pathname) !== nextPath) {
    window.history.pushState({}, '', nextPath)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

async function readApiResponse(response) {
  const body = await response.text()
  let result = {}

  if (body) {
    try {
      result = JSON.parse(body)
    } catch {
      throw new Error('The booking service returned an invalid response. Please try again.')
    }
  }

  if (!response.ok) {
    throw new Error(result.error || `The booking service returned error ${response.status}.`)
  }

  return result
}

function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-18% 0px -60% 0px',
        threshold: [0.18, 0.3, 0.5, 0.7],
      },
    )

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}

function useHeaderScrolled() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrolled
}

function Reveal({ id, className = '', children, variant = 'dark' }) {
  const base = variant === 'light' ? 'bg-white text-slate-950' : 'bg-[#0a0a0a] text-pearl'

  return (
    <motion.section
      id={id}
      className={`scroll-mt-28 px-6 py-20 md:px-10 lg:px-12 ${base} ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </motion.section>
  )
}

function SectionHeading({ eyebrow, title, subtitle, light = false, centered = false }) {
  return (
    <div className={`${centered ? 'text-center' : ''} max-w-3xl ${light ? 'text-slate-950' : 'text-pearl'}`}>
      <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.3em] ${light ? 'text-amber-700' : 'text-accent'}`}>
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className={`mt-4 text-sm leading-7 sm:text-base ${light ? 'text-slate-700' : 'text-pearl/75'}`}>{subtitle}</p>}
    </div>
  )
}

function ActionButton({ children, onClick, href, type = 'button', variant = 'primary', className = '', disabled = false }) {
  const baseClass =
    variant === 'primary'
      ? 'border border-accent bg-accent text-black shadow-[0_10px_30px_rgba(212,175,55,0.18)]'
      : 'border border-white/15 bg-white/5 text-pearl'

  const shared =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-shadow duration-300'

  const motionProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.98 },
  }

  if (href) {
    return (
      <motion.a {...motionProps} href={href} className={`${shared} ${baseClass} ${className}`}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick} disabled={disabled} className={`${shared} ${baseClass} ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${className}`}>
      {children}
    </motion.button>
  )
}

function StatCounter({ prefix = '', value, suffix = '', label, display }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.45 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    const startTime = performance.now()
    const duration = 1600

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(value * eased)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    const frame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(frame)
  }, [isInView, value])

  const formatted = useMemo(() => {
      if (display) {
        return display
      }

      if (value >= 1000000) {
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(count)
    }

    if (value >= 1000) {
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(count)
    }

    return Math.round(count).toString()
  }, [count, display, value])

  return (
    <article ref={ref} className="rounded-[1.1rem] border border-amber-300/60 bg-[linear-gradient(160deg,#efd885,#e0c251)] p-7 text-left shadow-[0_14px_24px_rgba(15,23,42,0.08)] sm:p-8">
      <p className="font-display text-4xl leading-none text-slate-950 sm:text-5xl">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="mt-5 text-[1.05rem] text-black/65">{label}</p>
    </article>
  )
}

function SiteHeader({ activeSection, isBookingPage = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useHeaderScrolled()

  useEffect(() => {
    setMenuOpen(false)
  }, [activeSection])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 px-6 transition-all duration-300 md:px-10 ${
        scrolled ? 'bg-[#090909]/88 shadow-[0_10px_30px_rgba(0,0,0,0.32)] backdrop-blur-xl' : 'bg-[#090909]/55 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex lg:justify-self-start">
          {navItems.map((item) => {
            const isActive = activeSection === item.target
            return (
              <motion.button
                key={item.label}
                type="button"
                onClick={() => scrollToId(item.target)}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`transition-colors duration-200 hover:text-accent ${
                  isActive ? 'text-accent' : 'text-pearl/78'
                }`}
              >
                {item.label}
              </motion.button>
            )
          })}
        </nav>

        <motion.button
          type="button"
          onClick={() => scrollToId('home')}
          whileHover={{ y: -1, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-3 text-left lg:justify-self-center"
        >
          <img src={logoMark} alt="BlackCrown Studio" className="h-12 w-12 shrink-0 rounded-full object-cover" />
          <span className="leading-[0.9]">
            <span className="block text-[1.05rem] font-black uppercase tracking-[0.2em] text-pearl sm:text-[1.15rem]">
              BlackCrown
            </span>
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-pearl/72 sm:text-[0.72rem]">
              Studio
            </span>
          </span>
        </motion.button>

        <div className="hidden items-center justify-end gap-4 lg:flex lg:justify-self-end">
          <motion.a
            href={`tel:${phoneNumber.replace(/[^+\d]/g, '')}`}
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-semibold text-pearl/85 transition-colors hover:text-accent"
          >
            {phoneNumber}
          </motion.a>
          <ActionButton onClick={() => scrollToId(isBookingPage ? 'home' : 'book')}>
            {isBookingPage ? 'Home' : 'Book a Shoot'}
          </ActionButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-pearl transition-colors hover:border-accent hover:text-accent lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span className="block text-xl leading-none">{menuOpen ? '×' : '≡'}</span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#090909]/95 px-6 py-5 backdrop-blur-xl md:px-10 lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.target
                return (
                  <motion.button
                    key={item.label}
                    type="button"
                    onClick={() => scrollToId(item.target)}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-white/10 bg-white/5 text-pearl/85 hover:border-accent/40 hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                )
              })}
              <div className="mt-2 grid gap-3 border-t border-white/10 pt-4">
                <motion.a
                  href={`tel:${phoneNumber.replace(/[^+\d]/g, '')}`}
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-sm font-semibold text-pearl/85 transition-colors hover:text-accent"
                >
                  {phoneNumber}
                </motion.a>
                <ActionButton onClick={() => scrollToId(isBookingPage ? 'home' : 'book')} className="w-full">
                  {isBookingPage ? 'Home' : 'Book a Shoot'}
                </ActionButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function HeroSection() {
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 700], [0, 120])
  const fade = useTransform(scrollY, [0, 480], [1, 0.82])

  return (
    <section id="home" className="relative overflow-hidden pb-12 pt-0">
      <motion.div
        className="relative min-h-[82vh] w-full overflow-hidden bg-[#0d0d0d]"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ y: parallaxY, opacity: fade, backgroundImage: `url(${restaurantHero})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.3)_36%,rgba(0,0,0,0.82)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(212,175,55,0.2),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.12),transparent_24%)]" aria-hidden="true" />

        <div className="relative flex min-h-[82vh] items-end px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="max-w-4xl pb-2 text-left">
            <motion.p
              className="inline-flex items-center gap-2 text-sm font-semibold text-pearl/92 sm:text-base"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <span className="text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" />
                  <circle cx="12" cy="10" r="2.2" />
                </svg>
              </span>
              North Carolina Based Real Estate Media Company
            </motion.p>

            <motion.h1
              className="mt-5 max-w-5xl font-display text-[clamp(2.2rem,4.9vw,4.2rem)] uppercase leading-[0.95] tracking-[-0.01em] text-pearl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              <span className="text-accent">Cinematic Content</span> That Wins Listings And Gets Clients.
            </motion.h1>

            <motion.ul
              className="mt-6 max-w-3xl space-y-3 text-[0.92rem] leading-relaxed text-pearl/86 sm:text-[0.98rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path d="M4 20h4l10-10a2.8 2.8 0 1 0-4-4L4 16v4Z" />
                  </svg>
                </span>
                <span>
                  <strong className="font-semibold text-pearl">Hooks + scripts included:</strong> we tell you exactly what to say.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <circle cx="12" cy="7.5" r="3" />
                    <path d="M5 20a7 7 0 0 1 14 0" />
                  </svg>
                </span>
                <span>
                  <strong className="font-semibold text-pearl">Made for agents:</strong> branding videos, short-form reels, photos, drone and more for the agents that want to stand out.
                </span>
              </li>
            </motion.ul>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
            >
              <ActionButton onClick={() => scrollToId('packages')} className="min-w-[180px] justify-between gap-3 px-5 py-3 text-sm">
                <span>Our Packages</span>
                <span aria-hidden="true" className="text-lg leading-none">›</span>
              </ActionButton>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ProcessSection() {
  const previews = [
    <div className="grid gap-2" key="booking-preview">
      <p className="mb-1 text-[0.62rem] text-white/55">Book a New Order</p>
      {['Property address', 'Shoot date', 'Package'].map((label) => (
        <div key={label} className="rounded bg-white/[0.07] px-3 py-1.5 text-[0.6rem] text-white/35">{label}</div>
      ))}
    </div>,
    <div className="grid gap-1.5" key="package-preview">
      {['Starter — $750', 'Signature — $1,100', 'Full Stable — $1,425'].map((label, index) => (
        <div
          key={label}
          className={`flex items-center justify-between rounded px-2.5 py-1.5 text-[0.6rem] ${
            index === 1 ? 'bg-accent font-bold text-black' : 'bg-white/[0.07] text-white/45'
          }`}
        >
          <span>{label}</span>
          {index === 1 && <span aria-hidden="true">✓</span>}
        </div>
      ))}
    </div>,
    <div className="flex h-full flex-col items-center justify-center gap-2 text-accent" key="shoot-preview">
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" className="h-9 w-9" aria-hidden="true">
        <path d="M15 16h5l3-4h7l3 4h4a4 4 0 0 1 4 4v15H11V20a4 4 0 0 1 4-4Z" />
        <circle cx="26" cy="26" r="6" />
      </svg>
      <p className="text-[0.65rem] text-white/45">Team on location</p>
    </div>,
    <div className="grid gap-1.5" key="delivery-preview">
      <p className="text-[0.62rem] text-white/55">Your videos</p>
      <div className="grid grid-cols-2 gap-1">
        {['Listing Video', 'Drone Reel', 'BTS Photos', 'Thumbnails'].map((label) => (
          <div key={label} className="rounded bg-white/[0.045] px-1.5 py-2 text-[0.52rem] text-white/25">{label}</div>
        ))}
      </div>
      <div className="rounded bg-[#0878ff] py-1.5 text-center text-[0.58rem] font-bold text-white">Download from Dropbox</div>
    </div>,
  ]

  return (
    <Reveal id="process" variant="dark">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <SectionHeading
          eyebrow="Process"
          title="It's as easy as one, two three"
          subtitle="A simple production flow keeps the shoot efficient and the final media consistent."
        />

        <div className="lg:justify-self-end">
          <ActionButton onClick={() => scrollToId('packages')} className="min-w-[190px] justify-between gap-3 px-5 py-3 text-sm">
            <span>Our Packages</span>
            <span aria-hidden="true" className="text-lg leading-none">›</span>
          </ActionButton>
        </div>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <motion.article
            key={step.number}
            className="rounded-[0.9rem] border border-white/[0.07] bg-[#181818] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.25)] transition-shadow duration-300"
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="h-[8.9rem] rounded-[0.8rem] border border-white/[0.08] bg-[linear-gradient(145deg,#2b2b2b,#202020)] p-3">
              {previews[index]}
            </div>
            <p className="mt-3 inline-flex rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold text-black">
              Step {step.number}
            </p>
            <h3 className="mt-3 font-display text-base uppercase text-pearl">{step.title}</h3>
            <p className="mt-2 text-sm leading-5 text-pearl/55">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </Reveal>
  )
}

function PackagesSection() {
  return (
    <Reveal id="services" variant="dark">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <SectionHeading
          eyebrow="What We Offer"
          title="Packages built for listings that need to move"
          subtitle="Three tiers that scale from listing essentials to a complete premium content stack."
        />

        <div className="lg:justify-self-end">
          <ActionButton onClick={() => scrollToId('book')} className="min-w-[190px] justify-between gap-3 px-5 py-3 text-sm">
            <span>Book a Shoot</span>
            <span aria-hidden="true" className="text-lg leading-none">›</span>
          </ActionButton>
        </div>
      </div>

      <div id="packages" className="mt-10 grid gap-5 lg:grid-cols-3">
        {packages.map((item, index) => (
          <motion.article
            key={item.name}
            className="rounded-[2rem] border border-white/10 bg-[#121212] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.34)]"
            whileHover={{ y: -8, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{item.accent}</p>
            <div className="mt-4 flex items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl uppercase text-pearl">{item.name}</h3>
                <p className="mt-2 text-sm text-pearl/62">{item.services.length} included services</p>
              </div>
              <p className="font-display text-4xl leading-none text-accent">{item.price}</p>
            </div>

            <ul className="mt-6 space-y-3">
              {item.services.map((service) => (
                <li key={service} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-pearl/82">
                  <span className="mt-0.5 text-accent">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <ActionButton onClick={() => scrollToId('book')} className="mt-6 w-full">
              Explore Package
            </ActionButton>
          </motion.article>
        ))}
      </div>
    </Reveal>
  )
}

function OutOfStateSection() {
  return (
    <Reveal id="out-of-state" variant="light" className="border-y border-slate-200">
      <SectionHeading
        eyebrow="Out-of-State Packages"
        title="Not Based Locally? Not a Problem."
        subtitle="Built for agents and teams that need a production partner on the road with strategy, direction, and content volume baked in."
        light
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {outOfStatePackages.map((item, index) => (
          <motion.article
            key={item.title}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            whileHover={{ y: -8, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">{item.title}</p>
            <div className="mt-4 flex items-end justify-between gap-4">
              <h3 className="font-display text-3xl uppercase text-slate-950">{item.price}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                  {bullet}
                </li>
              ))}
            </ul>
            <ActionButton onClick={() => scrollToId('book')} variant="secondary" className="mt-6 w-full border-slate-300 text-slate-950">
              Book a Shoot
            </ActionButton>
          </motion.article>
        ))}
      </div>
    </Reveal>
  )
}

function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('Bordered Estate')

  const visibleItems = useMemo(
    () => portfolioItems.filter((item) => item.category === activeTab),
    [activeTab],
  )

  return (
    <Reveal id="portfolio" variant="light" className="border-y border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f6f3ec)]">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Portfolio"
          subtitle="Professional listing photos, videos, and content that showcase your vision to buyers before they even set foot on the property so you sell homes faster, easier, and for more."
          light
        />

        <div className="flex flex-wrap gap-3 lg:justify-end">
          {portfolioTabs.map((tab) => {
            const isActive = activeTab === tab
            return (
              <motion.button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-amber-500 bg-amber-500 text-slate-950'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-amber-500 hover:text-slate-950'
                }`}
              >
                {tab}
              </motion.button>
            )
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item, index) => (
          <motion.article
            key={item.title}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-amber-300">{item.category}</p>
                <h3 className="mt-2 font-display text-2xl uppercase">{item.title}</h3>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Reveal>
  )
}

function AboutSection() {
  return (
    <Reveal id="about" variant="dark">
      <div className="grid gap-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Our Values</p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] text-pearl sm:text-4xl lg:text-5xl">
            Our Values
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              className="rounded-[0.9rem] border border-white/[0.06] bg-[#191919] px-7 py-7 shadow-[0_18px_44px_rgba(0,0,0,0.28)]"
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2c2400] text-accent">
                {index === 0 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
                    <path d="M9 18h6M10 22h4M8.2 14.5A6 6 0 1 1 15.8 14.5c-.9.7-1.3 1.4-1.3 2.5h-5c0-1.1-.4-1.8-1.3-2.5Z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
                    <path d="m8.5 13.5 3 3a2 2 0 0 0 3-2.6l1 .8a2 2 0 0 0 2.8-2.8l-5.1-4.6a3 3 0 0 0-3.8-.2L7 9" />
                    <path d="m2.5 7 3-2 3 5-3.5 2.2L2.5 7Zm19 0-3-2-2.2 3.6 3.2 2.4 2-4Z" />
                    <path d="m7.5 11 2-2 3.5 3.2" />
                  </svg>
                )}
                {index === 2 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
                    <circle cx="12" cy="9" r="5" />
                    <path d="m9 13-1 8 4-2 4 2-1-8M10 9l1.3 1.3L14 7.7" />
                  </svg>
                )}
              </div>
              <h3 className="mt-6 text-sm font-black uppercase leading-5 tracking-[0.02em] text-accent">{value.title}</h3>
              <p className="mt-3 text-[0.82rem] leading-5 text-pearl/55">{value.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center py-2">
          <div className="inline-flex rounded-[2rem] border border-white/8 bg-[#111111] px-6 py-5 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
            <img src={logoMark} alt="BlackCrown Studio logo" className="h-28 w-auto sm:h-32" />
          </div>
        </div>

        <div className="rounded-[2.2rem] bg-[#f5f3ef] px-5 py-10 text-slate-950 sm:px-8 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-700">Meet Our Team</p>
            <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-slate-950 sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h3>
            <p className="mx-auto mt-5 max-w-5xl text-sm leading-8 text-slate-700 sm:text-base lg:text-[1.08rem]">
              BlackCrown Studio specializes in real estate storytelling through high-end visual marketing.
              We help agents, brokers, designers, and builders present their listings with polished
              photography, cinematic video, and a consistent brand presence that feels premium.
            </p>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {team.map((member, index) => (
                <motion.article
                  key={member.name}
                  className="overflow-hidden rounded-[1.7rem] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="relative aspect-[4/4.35] bg-[linear-gradient(135deg,#fff,#f7efcf)]">
                    {member.image ? (
                      <>
                        <img
                          src={member.image}
                          alt={`${member.name}, ${member.title}`}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/10" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(212,175,55,0.18),transparent_35%)]" />
                    )}
                    <div className={`absolute left-5 top-5 z-10 ${member.image ? 'text-white' : 'text-slate-950'}`}>
                      <h4 className="font-display text-[1.6rem] uppercase leading-none">{member.name}</h4>
                      <p className={`mt-2 text-sm ${member.image ? 'text-white/80' : 'text-slate-600'}`}>{member.title}</p>
                    </div>

                    {!member.image && <div className="absolute inset-x-0 bottom-0 flex justify-center px-6 pb-0">
                      <div className="flex h-[72%] w-full items-end justify-center">
                        <div className="flex h-[88%] w-[82%] items-end justify-center rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.9))] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-slate-950 text-lg font-black uppercase tracking-[0.12em] text-accent shadow-[0_16px_30px_rgba(0,0,0,0.18)]">
                            {member.name
                              .split(' ')
                              .map((part) => part[0])
                              .join('')}
                          </div>
                        </div>
                      </div>
                    </div>}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function ListingMediaSection() {
  return (
    <Reveal id="listing-media" variant="dark">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <SectionHeading
          eyebrow="Listing Media"
          title="Listing Media"
          subtitle="Professional listing photos, videos, and content that showcase your vision to buyers before they even set foot on the property so you sell homes faster, easier, and for more."
        />

        <div className="lg:justify-self-end">
          <ActionButton onClick={() => scrollToId('book')} className="min-w-[190px] justify-between gap-3 px-5 py-3 text-sm">
            <span>Book a Shoot</span>
            <span aria-hidden="true" className="text-lg leading-none">›</span>
          </ActionButton>
        </div>

      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(17,17,17,0.96))] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
          <div className="grid gap-4">
            {listingLevels.map((level) => (
              <motion.article
                key={level.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5"
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="font-display text-2xl uppercase text-pearl">{level.title}</h3>
                <p className="mt-3 text-sm leading-7 text-pearl/75">{level.description}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ActionButton onClick={() => scrollToId('book')}>Book a Shoot</ActionButton>
                  <ActionButton variant="secondary" onClick={() => scrollToId('packages')}>
                    Custom Videos
                  </ActionButton>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Next level photography with social-ready framing.',
            'Cinematic motion that translates across listing and social channels.',
            'Drone coverage that gives properties context and scale.',
            'Structured hooks, captions, and delivery for easy publishing.',
          ].map((item) => (
            <motion.article
              key={item}
              className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5"
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <p className="text-sm leading-7 text-pearl/78">{item}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

function SocialMediaSection() {
  const [accessStage, setAccessStage] = useState('Account Access')

  const onboardingMap = {
    'Account Access': 'IG login/admin and FB business page access',
    'Brand Alignment': 'Tone, voice, brand guidelines, target audience, and content preferences',
    'Workflow Setup': 'Google Drive folder, scheduling system, and posting cadence',
  }

  return (
    <Reveal id="social-media" variant="dark">
      <div className="grid gap-10">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <SectionHeading
            eyebrow="Social Media Management"
            title="Built for the agent who is tired of juggling it all."
            subtitle="Between showings and client calls, social media slips. BlackCrown Studio keeps your brand active with done-for-you content and management."
          />

          <div className="lg:justify-self-end">
            <ActionButton onClick={() => scrollToId('book')} className="min-w-[190px] justify-between gap-3 px-5 py-3 text-sm">
              <span>Book a Shoot</span>
              <span aria-hidden="true" className="text-lg leading-none">›</span>
            </ActionButton>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl">

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {socialPillars.map((pillar) => (
              <motion.article
                key={pillar}
                className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{pillar}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#121212] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What a Month Looks Like</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {['Week 1 Plan + Shoot', 'Week 2 Edit + First Delivery', 'Weeks 3-4 Posting + Ongoing Delivery', 'Always: Content Approval (48-hr review window)'].map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4 text-sm text-pearl/80"
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">0{index + 1}</p>
                  <p className="mt-3 leading-6">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-[0_18px_44px_rgba(0,0,0,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Pricing Tiers</p>
          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            {socialPlans.map((plan, index) => (
              <motion.article
                key={plan.name}
                className={`rounded-[1.6rem] border p-5 ${index === 1 ? 'border-amber-500 bg-amber-50' : 'border-slate-200 bg-white'}`}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl uppercase text-slate-950">{plan.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{plan.price}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="break-words rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 leading-6">
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200">
            <table className="min-w-[760px] w-full border-collapse text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold">Feature</th>
                  {socialPlans.map((plan) => (
                    <th key={plan.name} className="px-4 py-4 font-semibold">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {socialTableRows.map((row, index) => (
                  <tr key={row[0]} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    {row.map((cell, cellIndex) => (
                      <td key={cell} className="border-t border-slate-200 px-4 py-3 align-top text-slate-700">
                        {cellIndex === 0 ? <span className="font-semibold text-slate-950">{cell}</span> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Onboarding in 3 Steps</p>
            <div className="mt-4 grid gap-3">
              {onboardingSteps.map((step) => (
                <motion.div
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {step}
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {Object.keys(onboardingMap).map((stage) => (
                <motion.button
                  key={stage}
                  type="button"
                  onClick={() => setAccessStage(stage)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                    accessStage === stage
                      ? 'border-amber-500 bg-amber-500 text-slate-950'
                      : 'border-slate-300 bg-white text-slate-700'
                  }`}
                >
                  {stage}
                </motion.button>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">{onboardingMap[accessStage]}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {communicationItems.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function ResultsSection() {
  return (
    <Reveal id="results" variant="light" className="border-y border-slate-200 bg-[#e7e7e7]">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <SectionHeading
          eyebrow="Results"
          title="The return on a consistent presence"
          subtitle="Social media is a long-term investment. Here's what you can expect as we build consistency and strategy over time."
          light
        />

        <div className="lg:justify-self-end">
          <ActionButton onClick={() => scrollToId('book')} className="min-w-[190px] justify-between gap-3 px-5 py-3 text-sm">
            <span>Contact us</span>
            <span aria-hidden="true" className="text-lg leading-none">›</span>
          </ActionButton>
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </Reveal>
  )
}

function TestimonialsSection() {
  return (
    <Reveal id="testimonials" variant="light" className="bg-[#e7e7e7] pt-28">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <SectionHeading
          eyebrow="Testimonials"
          title="What customers say after the shoot"
          subtitle=""
          light
        />

        <div className="lg:justify-self-end">
          <ActionButton onClick={() => scrollToId('book')} className="min-w-[190px] justify-between gap-3 px-5 py-3 text-sm">
            <span>Contact us</span>
            <span aria-hidden="true" className="text-lg leading-none">›</span>
          </ActionButton>
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((testimonial) => (
          <motion.article
            key={testimonial.name}
            className="rounded-[1.1rem] border border-slate-200 bg-[#f5f5f5] p-5 shadow-[0_10px_18px_rgba(15,23,42,0.06)]"
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-500 text-sm font-black text-white">
                {testimonial.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <div>
                <h3 className="text-[1.35rem] font-black text-slate-800">{testimonial.name}</h3>
                <p className="text-sm tracking-widest text-amber-600">★★★★★</p>
              </div>
            </div>
            <p className="mt-5 text-[1.02rem] leading-8 text-slate-600">{testimonial.quote}</p>
          </motion.article>
        ))}
      </div>
    </Reveal>
  )
}

function FaqSection() {
  const [category, setCategory] = useState('General Questions')
  const [openIndex, setOpenIndex] = useState(0)
  const questions = faqSections[category]

  useEffect(() => {
    setOpenIndex(0)
  }, [category])

  return (
    <Reveal id="faq" variant="light" className="border-y border-slate-200 bg-[#e7e7e7] pt-28">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle=""
          light
        />

        <div className="lg:justify-self-end">
          <ActionButton onClick={() => scrollToId('book')} className="min-w-[190px] justify-between gap-3 px-5 py-3 text-sm">
            <span>Contact us</span>
            <span aria-hidden="true" className="text-lg leading-none">›</span>
          </ActionButton>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
        {faqCategoryList.map((item) => (
          <motion.button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full border px-5 py-2 text-[1.02rem] font-semibold ${
              category === item
                ? 'border-amber-500 bg-amber-500 text-slate-950'
                : 'border-slate-900 bg-slate-900 text-white'
            }`}
          >
            {item}
          </motion.button>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4">
        {questions.map((entry, index) => {
          const open = index === openIndex

          return (
            <motion.article
              key={entry.question}
              className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="text-[1.95rem] font-black text-slate-900 sm:text-[2.15rem]">{entry.question}</span>
                <span className="text-2xl font-light text-slate-500">{open ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24 }}
                    className="px-5 pb-5"
                  >
                    <p className="max-w-3xl text-[1.02rem] leading-8 text-slate-700">{entry.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-5xl items-center justify-between gap-5 rounded-[1.2rem] bg-[#171717] px-6 py-6 sm:px-8">
        <div>
          <p className="text-[1.85rem] font-black text-white">Still have questions?</p>
          <p className="text-[1.02rem] text-white/55">Still can't find the answer? Contact us here:</p>
        </div>
        <ActionButton onClick={() => scrollToId('book')} className="shrink-0">
          Contact us
        </ActionButton>
      </div>
    </Reveal>
  )
}

function BookingSection() {
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' })
  const quickLinks = [
    { label: 'Book With Us', target: 'packages' },
    { label: 'Content Creator Program', target: 'social-media' },
    { label: 'Out of State Campaigns', target: 'out-of-state' },
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitState({ status: 'submitting', message: '' })
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      await readApiResponse(response)
      form.reset()
      setSubmitState({ status: 'success', message: 'Your shoot has been booked. We will contact you shortly to confirm.' })
    } catch (error) {
      const message = error instanceof TypeError
        ? 'The booking service is unavailable. Please try again shortly.'
        : error.message
      setSubmitState({ status: 'error', message })
    }
  }

  return (
    <Reveal id="book" variant="dark">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Book a Shoot"
            title="Reserve your production date"
            subtitle="Send the property address, preferred shoot date, and package, and we will take it from there."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <motion.button
                key={item.label}
                type="button"
                onClick={() => scrollToId(item.target)}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left text-sm font-semibold text-pearl transition-colors hover:text-accent"
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.form
          className="rounded-[2rem] border border-white/10 bg-[#121212] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.3)]"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-pearl/80">
                Full name
                <input required type="text" name="name" autoComplete="name" placeholder="Your full name" className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-pearl outline-none transition-colors placeholder:text-pearl/35 focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm text-pearl/80">
                Phone number
                <input required type="tel" name="phone" autoComplete="tel" placeholder="Phone number" className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-pearl outline-none transition-colors placeholder:text-pearl/35 focus:border-accent" />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-pearl/80">
              Email address
              <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-pearl outline-none transition-colors placeholder:text-pearl/35 focus:border-accent" />
            </label>
            <label className="grid gap-2 text-sm text-pearl/80">
              Property address
              <input
                required
                type="text"
                name="propertyAddress"
                placeholder="Property address"
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-pearl outline-none transition-colors placeholder:text-pearl/35 focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm text-pearl/80">
              Shoot date
              <input
                required
                type="date"
                name="shootDate"
                min={new Date().toISOString().split('T')[0]}
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-pearl outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm text-pearl/80">
              Package
              <select
                name="package"
                defaultValue="Starter"
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-pearl outline-none transition-colors focus:border-accent"
              >
                <option>Starter</option>
                <option>Signature</option>
                <option>Full Stable</option>
                <option>Out-of-State Package 01</option>
                <option>Out-of-State Package 02</option>
                <option>Out-of-State Package 03</option>
              </select>
            </label>
            <ActionButton type="submit" disabled={submitState.status === 'submitting'} className="mt-2 w-full">
              {submitState.status === 'submitting' ? 'Booking...' : 'Book Your Shoot'}
            </ActionButton>
            {submitState.message && (
              <p role="status" className={`rounded-2xl border px-4 py-3 text-sm ${submitState.status === 'success' ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200' : 'border-red-400/30 bg-red-400/10 text-red-200'}`}>
                {submitState.message}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </Reveal>
  )
}

function DashboardPage() {
  const [bookings, setBookings] = useState([])
  const [adminKey, setAdminKey] = useState(() => sessionStorage.getItem('blackcrown-admin-key') || '')
  const [state, setState] = useState({ loading: true, error: '' })

  const loadBookings = async (key = adminKey) => {
    setState({ loading: true, error: '' })
    try {
      const response = await fetch('/api/bookings', {
        headers: key ? { Authorization: `Bearer ${key}` } : {},
      })
      const result = await readApiResponse(response)
      setBookings(result.bookings)
      setState({ loading: false, error: '' })
      if (key) sessionStorage.setItem('blackcrown-admin-key', key)
    } catch (error) {
      setState({ loading: false, error: error.message })
    }
  }

  useEffect(() => {
    loadBookings()
    // Dashboard loads once on entry; manual refresh is available in the toolbar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...(adminKey ? { Authorization: `Bearer ${adminKey}` } : {}),
        },
        body: JSON.stringify({ status }),
      })
      const result = await readApiResponse(response)
      setBookings((current) => current.map((booking) => (booking.id === id ? result.booking : booking)))
    } catch (error) {
      setState((current) => ({ ...current, error: error.message }))
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-8 text-pearl md:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Admin Dashboard</p>
            <h1 className="mt-3 font-display text-4xl uppercase sm:text-5xl">Shoot Bookings</h1>
            <p className="mt-3 text-sm text-pearl/55">{bookings.length} total booking{bookings.length === 1 ? '' : 's'}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionButton variant="secondary" onClick={() => navigateToPath('/')}>Website</ActionButton>
            <ActionButton onClick={() => loadBookings()}>Refresh</ActionButton>
          </div>
        </div>

        {state.error === 'Invalid admin key' && (
          <form className="mt-8 max-w-md rounded-[1.5rem] border border-white/10 bg-[#151515] p-5" onSubmit={(event) => { event.preventDefault(); loadBookings(adminKey) }}>
            <label className="grid gap-2 text-sm text-pearl/75">
              Admin key
              <input type="password" value={adminKey} onChange={(event) => setAdminKey(event.target.value)} className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-pearl outline-none focus:border-accent" required />
            </label>
            <ActionButton type="submit" className="mt-4 w-full">Open Dashboard</ActionButton>
          </form>
        )}

        {state.error && state.error !== 'Invalid admin key' && <p className="mt-8 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">{state.error}</p>}
        {state.loading && <p className="mt-10 text-pearl/60">Loading bookings...</p>}
        {!state.loading && !state.error && bookings.length === 0 && (
          <div className="mt-8 rounded-[1.5rem] border border-dashed border-white/15 p-10 text-center text-pearl/55">No bookings yet.</div>
        )}

        {!state.loading && !state.error && bookings.length > 0 && (
          <div className="mt-8 overflow-x-auto rounded-[1.5rem] border border-white/10 bg-[#151515]">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.14em] text-accent">
                <tr>
                  {['Customer', 'Contact', 'Property', 'Shoot date', 'Package', 'Status', 'Received'].map((heading) => <th key={heading} className="px-5 py-4 font-semibold">{heading}</th>)}
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-white/[0.07] last:border-0">
                    <td className="px-5 py-4 font-semibold text-white">{booking.name}</td>
                    <td className="px-5 py-4 text-pearl/65"><a className="block hover:text-accent" href={`mailto:${booking.email}`}>{booking.email}</a><a className="mt-1 block hover:text-accent" href={`tel:${booking.phone}`}>{booking.phone}</a></td>
                    <td className="max-w-[240px] px-5 py-4 text-pearl/65">{booking.propertyAddress}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-pearl/65">{new Date(`${booking.shootDate}T00:00:00`).toLocaleDateString()}</td>
                    <td className="px-5 py-4 text-pearl/65">{booking.package}</td>
                    <td className="px-5 py-4">
                      <select value={booking.status} onChange={(event) => updateStatus(booking.id, event.target.value)} className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-pearl outline-none focus:border-accent">
                        {['New', 'Confirmed', 'Completed', 'Cancelled'].map((status) => <option key={status}>{status}</option>)}
                      </select>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-pearl/50">{new Date(booking.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#090909] px-6 py-8 md:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 text-center">
        <p className="text-2xl font-black uppercase tracking-[0.08em] text-accent sm:text-3xl">BLACKCROWN</p>
        <p className="text-sm leading-6 text-pearl/80 sm:text-base">© 2026 BlackCrown Studio. Social Media Management for Real Estate Professionals.</p>
      </div>
    </footer>
  )
}

function HomePage({ activeSection }) {
  return (
    <main className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
      <div className="relative">
        <SiteHeader activeSection={activeSection} />
        <HeroSection />
        <ProcessSection />
        <PackagesSection />
        <OutOfStateSection />
        <PortfolioSection />
        <AboutSection />
        <ListingMediaSection />
        <SocialMediaSection />
        <ResultsSection />
        <TestimonialsSection />
        <FaqSection />
        <SiteFooter />
      </div>
    </main>
  )
}

function BookingPage() {
  const activeSection = useScrollSpy(['book'])

  return (
    <main className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
      <div className="relative">
        <SiteHeader activeSection={activeSection} isBookingPage />
        <BookingSection />
        <SiteFooter />
      </div>
    </main>
  )
}

function BlackCrownStudioPage() {
  const pathname = usePagePath()
  const isBookingPage = pathname === bookingPath
  const isDashboardPage = pathname === dashboardPath
  const sectionIds = isBookingPage ? ['book'] : ['home', 'services', 'portfolio', 'about', 'listing-media', 'social-media']
  const activeSection = useScrollSpy(sectionIds)

  if (isDashboardPage) return <DashboardPage />
  return isBookingPage ? <BookingPage /> : <HomePage activeSection={activeSection} />
}

export { SiteFooter, SiteHeader, BookingSection }
export default BlackCrownStudioPage
