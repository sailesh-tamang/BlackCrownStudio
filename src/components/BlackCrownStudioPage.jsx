import { AnimatePresence, motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import logoMark from '../assets/logo.png'
import everestLogo from '../assets/everest.png'
import growbnbLogo from '../assets/growbnb.png'
import kathmanduEnfieldersLogo from '../assets/kathmandu_enfielders.png'
import mapleLogo from '../assets/maple.png'
import nrishalaLogo from '../assets/nrishala.png'
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
  { label: 'Reel Marketing', target: 'reel-marketing' },
]

const processSteps = [
  {
    number: '1',
    title: 'BOOK A MEETING',
    description: 'Tell us about your business, audience, and marketing goals.',
  },
  {
    number: '2',
    title: 'Select Package',
    description: 'Choose the services and add-ons you need.',
  },
  {
    number: '3',
    title: 'Content Creation',
    description: 'We create on-brand reels, visuals, and social content for your channels.',
  },
  {
    number: '4',
    title: 'Publish & Grow',
    description: 'Receive polished content and ongoing support to keep your channels active.',
  },
]

const packages = [
  {
    name: 'Starter',
    price: 'NPR 50K',
    accent: 'Best for getting started',
    services: [
      '12 reels (scripts, shoots and edit)',
      'Social media management (2 platforms)',
      '6 designs',
      'Monthly content planning',
      '1 review round',
    ],
  },
  {
    name: 'Signature',
    price: 'NPR 120K',
    accent: 'Most popular',
    services: [
      '20 reels (scripts, shoots and edit)',
      '12 designs',
      'Social media management (all platforms)',
      'Monthly content calendar + strategy',
      'Performance review',
    ],
  },
  {
    name: 'Full Stable',
    price: 'NPR 200K',
    accent: 'Complete growth system',
    services: [
      '30+ reels (scripts, shoots and edit)',
      '20+ designs / carousels',
      'Social media management',
      'Campaign concepts',
      'Priority turnaround + deeper optimization',
    ],
  },
]

const outOfValleyPackages = [
  {
    title: 'Starter',
    price: 'NPR 60K',
    bullets: [
      '12 reels (scripts, shoots and edit)',
      'Social media management (2 platforms)',
      '6 designs',
      'Monthly content planning',
      '1 review round',
    ],
  },
  {
    title: 'Signature',
    price: 'NPR 130K',
    bullets: [
      '20 reels (scripts, shoots and edit)',
      '12 designs',
      'Social media management (all platforms)',
      'Monthly content calendar + strategy',
      'Performance review',
    ],
  },
  {
    title: 'Full Stable',
    price: 'NPR 200K',
    bullets: [
      '30+ reels (scripts, shoots and edit)',
      '20+ designs / carousels',
      'Social media management',
      'Campaign concepts',
      'Priority turnaround + deeper optimization',
    ],
  },
]

const portfolioTabs = ['Brand Reels', 'Social Campaigns', 'Product Stories', 'Behind the Scenes']

const portfolioItems = [
  {
    title: 'Brand Launch Reel',
    category: 'Brand Reels',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Social Growth Campaign',
    category: 'Social Campaigns',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Product Story Reel',
    category: 'Product Stories',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Creative Process',
    category: 'Behind the Scenes',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Content Day',
    category: 'Behind the Scenes',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Founder Story',
    category: 'Brand Reels',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
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
  { name: 'Sailesh Tamang', title: 'Co-Founder', image: saileshTamang, imageClass: 'origin-top scale-[1.14]' },
  { name: 'Fourehouse Media', title: 'Partner & Creative Director' },
]

const reelMarketingServices = [
  {
    title: 'Reel Marketing',
    description:
      'Scroll-stopping reels with strategy, scripts, filming, and editing designed to make your brand memorable.',
  },
]

const stats = [
  { label: 'Happy clients', display: '100+', value: 100 },
  { label: 'Monthly views', display: '500000+', value: 500000 },
  { label: 'Months active', display: '24', value: 24 },
]

const testimonials = [
  {
    name: 'Everest',
    logo: everestLogo,
    quote:
      'BlackCrown Studio brought structure and creativity to our content. The reels feel polished, on-brand, and genuinely help us stay visible to the right audience.',
  },
  {
    name: 'Growbnb',
    logo: growbnbLogo,
    quote:
      'Working with the team has made social media much easier to manage. They understand our brand, bring strong ideas, and consistently deliver content we are proud to post.',
  },
  {
    name: 'Kathmandu Enfielders',
    logo: kathmanduEnfieldersLogo,
    quote:
      'They captured the energy of our community perfectly. Every reel feels authentic, well produced, and gives our audience a reason to engage with us.',
  },
  {
    name: 'Maple',
    logo: mapleLogo,
    quote:
      'BlackCrown Studio combines thoughtful strategy with excellent execution. Their content has given our brand a more refined and consistent presence online.',
  },
  {
    name: 'Nrishala',
    logo: nrishalaLogo,
    quote:
      'The team is professional, responsive, and easy to collaborate with. They turn our ideas into content that feels fresh, clear, and aligned with our goals.',
  },
]

const faqSections = {
  'General Questions': [
    {
      question: 'What does BlackCrown Studio specialize in?',
      answer:
        'We help businesses grow through strategic reel marketing, social media content, and done-for-you social media marketing.',
    },
    {
      question: 'Who do you work with?',
      answer:
        'We work with businesses and personal brands that want a stronger, more consistent presence on social media.',
    },
    {
      question: 'Can you work with my business remotely?',
      answer:
        'Yes. We can support businesses locally or remotely with content strategy, reel marketing, and social media marketing services.',
    },
  ],
  'Reel Marketing': [
    {
      question: 'What is reel marketing, and how can it help my business?',
      answer:
        'Reel marketing uses short-form video to capture attention, build trust, and reach more of the right people. We create strategic reels designed around your brand, audience, and business goals.',
    },
  ],
  'Service Packages': [
    {
      question: 'Can packages be customized?',
      answer:
        'Yes. We tailor the number of reels, posting support, content planning, and other deliverables around your marketing goals.',
    },
  ],
  'Reels & Content Creation': [
    {
      question: 'Do you provide hooks and scripts?',
      answer:
        'Yes. We create scroll-stopping hooks, video concepts, and scripts so each reel has a clear message and purpose.',
    },
  ],
  'Content Delivery': [
    {
      question: 'When will my reels be ready?',
      answer:
        'Your content is edited and delivered on an agreed timeline, ready for review and publishing on your social media channels.',
    },
  ],
  'Revisions & Edits': [
    {
      question: 'Are revisions included?',
      answer:
        'Yes. We include a clear review and revision process so the final content feels right for your brand and audience.',
    },
  ],
  'Social Media Marketing': [
    {
      question: 'Do you manage social media as well as create content?',
      answer:
        'Yes. We can support your social media with content planning, reel creation, captions, posting strategy, and consistent branding across your channels.',
    },
  ],
  'Content Strategy': [
    {
      question: 'How do you decide what content to create for my brand?',
      answer:
        'We start with your target audience, services, and goals, then build content ideas that mix educational, engaging, and promotional reels to keep your social media active and effective.',
    },
  ],
  'Getting Started': [
    {
      question: 'How do we start working together?',
      answer:
        'We begin by learning about your business and goals, then create a content plan and service package that fits your needs.',
    },
  ],
  'Results & Growth': [
    {
      question: 'What kind of results do clients see?',
      answer:
        'Clients build a more consistent brand, improve engagement, and create more opportunities to reach and connect with their ideal audience.',
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
            {isBookingPage ? 'Home' : 'BOOK A MEETING'}
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
                  {isBookingPage ? 'Home' : 'BOOK A MEETING'}
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
              Kathmandu based digital marketing studio
            </motion.p>

            <motion.h1
              className="mt-5 max-w-5xl font-display text-[clamp(2.2rem,4.9vw,4.2rem)] uppercase leading-[0.95] tracking-[-0.01em] text-pearl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              <span className="text-accent">Creative Marketing</span> That Gets Your Brand Seen, Heard And Chosen.
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
                  <strong className="font-semibold text-pearl">Strategy + Content Included:</strong> We plan what to post, when to post, and how to make it perform.
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
                  <strong className="font-semibold text-pearl">Made for business:</strong> branding videos, short-form reels, social posts, and content strategy for businesses that want to stand out.
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
      {['Business name', 'Meeting date', 'Service package'].map((label) => (
        <div key={label} className="rounded bg-white/[0.07] px-3 py-1.5 text-[0.6rem] text-white/35">{label}</div>
      ))}
    </div>,
    <div className="grid gap-1.5" key="package-preview">
      {['Starter — NPR 50K', 'Signature — NPR 120K', 'Full Stable — NPR 200K'].map((label, index) => (
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
    <div className="flex h-full flex-col items-center justify-center gap-2 text-accent" key="content-preview">
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" className="h-9 w-9" aria-hidden="true">
        <path d="M15 16h5l3-4h7l3 4h4a4 4 0 0 1 4 4v15H11V20a4 4 0 0 1 4-4Z" />
        <circle cx="26" cy="26" r="6" />
      </svg>
      <p className="text-[0.65rem] text-white/45">Content creation in progress</p>
    </div>,
    <div className="grid gap-1.5" key="delivery-preview">
      <p className="text-[0.62rem] text-white/55">Your videos</p>
      <div className="grid grid-cols-2 gap-1">
        {['Brand Reel', 'Product Reel', 'Social Posts', 'Thumbnails'].map((label) => (
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
          subtitle="A simple content workflow keeps your brand consistent and your social media moving forward."
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
          eyebrow="Inside Valley Packages"
          title="Reel marketing packages for inside the valley"
          subtitle="Choose from three tiers of reels and social media marketing support for businesses inside the valley."
        />

        <div className="lg:justify-self-end">
          <ActionButton onClick={() => scrollToId('book')} className="min-w-[190px] justify-between gap-3 px-5 py-3 text-sm">
            <span>BOOK A MEETING</span>
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
            <div className="mt-4 flex flex-nowrap items-end justify-between gap-3">
              <div>
                <h3 className="whitespace-nowrap font-display text-[2.35rem] uppercase leading-none text-pearl sm:text-3xl">{item.name}</h3>
              </div>
              <p className="whitespace-nowrap font-display text-[3.35rem] leading-none text-accent sm:text-4xl">{item.price}</p>
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
    <Reveal id="out-of-valley" variant="light" className="border-y border-slate-200">
      <SectionHeading
        eyebrow="Out Of Valley"
        title="Outside The Valley? We've Got You."
        subtitle="Built for businesses outside the valley that want consistent strategy, content, and digital marketing support from a reliable Kathmandu-based studio."
        light
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {outOfValleyPackages.map((item, index) => (
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
              BOOK A MEETING
            </ActionButton>
          </motion.article>
        ))}
      </div>
    </Reveal>
  )
}

function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('Brand Reels')

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
          subtitle="Strategic reels and social media content that help your business stand out, build trust, and reach the right audience."
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

        <div className="rounded-[2.2rem] bg-[#f5f3ef] px-5 py-10 text-slate-950 sm:px-8 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-700">Meet Our Team</p>
            <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-slate-950 sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h3>
            <p className="mx-auto mt-5 max-w-5xl text-sm leading-8 text-slate-700 sm:text-base lg:text-[1.08rem]">
              BlackCrown Studio helps businesses turn their ideas into high-impact reel marketing and social media content.
              We combine creative direction, content strategy, filming, editing, and social media support to build a brand presence that feels premium and performs consistently.
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
                          className={`absolute inset-0 h-full w-full object-cover object-top ${member.imageClass || ''}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/10" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(212,175,55,0.18),transparent_35%)]" />
                    )}
                    <div className={`absolute z-10 ${member.image ? 'inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent px-5 pb-5 pt-12 text-white' : 'left-5 top-5 text-slate-950'}`}>
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

function ReelMarketingSection() {
  return (
    <Reveal id="reel-marketing" variant="dark">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <SectionHeading
          eyebrow="Reel Marketing"
          title="Reel Marketing"
          subtitle="We turn your brand into reels people stop for, remember, and share, helping you build a stronger presence and turn your content into real growth."
        />

        <div className="lg:justify-self-end">
          <ActionButton onClick={() => scrollToId('book')} className="min-w-[190px] justify-between gap-3 px-5 py-3 text-sm">
            <span>BOOK A MEETING</span>
            <span aria-hidden="true" className="text-lg leading-none">›</span>
          </ActionButton>
        </div>

      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(17,17,17,0.96))] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
          <div className="grid gap-4">
            {reelMarketingServices.map((level) => (
              <motion.article
                key={level.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5"
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="font-display text-2xl uppercase text-pearl">{level.title}</h3>
                <p className="mt-3 text-sm leading-7 text-pearl/75">{level.description}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ActionButton onClick={() => scrollToId('book')}>BOOK A MEETING</ActionButton>
                  <ActionButton variant="secondary" onClick={() => scrollToId('packages')}>
                    View Packages
                  </ActionButton>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Strategic reels built to stop the scroll and start conversations.',
            'Scripts, content creation, and edits handled by one creative team.',
            'Content built for Instagram, Facebook, and the platforms that matter.',
            'Monthly planning, performance reviews, and deeper optimization.',
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

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
          title="What customers say after working with us"
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

      <div className="mt-12 -mx-6 overflow-hidden md:-mx-10 lg:-mx-12">
        <motion.div
          className="flex w-max gap-5"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 62, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
        >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.article
            key={`${testimonial.name}-${index}`}
            aria-hidden={index >= testimonials.length}
            className="min-h-[290px] w-[calc(100vw-1.25rem)] shrink-0 rounded-[1.1rem] border border-slate-200 bg-[#f5f5f5] p-6 shadow-[0_10px_18px_rgba(15,23,42,0.06)] md:min-h-[310px] md:w-[calc((100vw-1.25rem)/2)] xl:w-[calc((100vw-2.5rem)/3)]"
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5">
                <img src={testimonial.logo} alt={`${testimonial.name} logo`} className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-[1.35rem] font-black text-slate-800">{testimonial.name}</h3>
                <p className="text-sm tracking-widest text-amber-600">★★★★★</p>
              </div>
            </div>
            <p className="mt-5 text-[1.02rem] leading-8 text-slate-600">{testimonial.quote}</p>
          </motion.article>
        ))}
        </motion.div>
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
    { label: 'Out Of Valley', target: 'out-of-valley' },
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitState({ status: 'submitting', message: '' })
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    // Keep submissions compatible with the previously deployed booking API.
    payload.propertyAddress = payload.businessName
    payload.shootDate = payload.startDate

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      await readApiResponse(response)
      form.reset()
      setSubmitState({ status: 'success', message: 'Your consultation has been requested. We will contact you shortly to confirm.' })
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
            eyebrow="BOOK A MEETING"
            title="Start your content strategy"
            subtitle="Share your business name, meeting date, and service package, and we will take it from there."
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
              Business name
              <input
                required
                type="text"
                name="businessName"
                placeholder="Your business name"
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-pearl outline-none transition-colors placeholder:text-pearl/35 focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm text-pearl/80">
              Meeting date
              <input
                required
                type="date"
                name="startDate"
                min={new Date().toISOString().split('T')[0]}
                onClick={(event) => event.currentTarget.showPicker?.()}
                className="meeting-date-input rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-pearl outline-none transition-colors focus:border-accent"
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
                <option>Outside Valley - Starter</option>
                <option>Outside Valley - Signature</option>
                <option>Outside Valley - Full Stable</option>
              </select>
            </label>
            <ActionButton type="submit" disabled={submitState.status === 'submitting'} className="mt-2 w-full">
              {submitState.status === 'submitting' ? 'Sending...' : 'BOOK A MEETING'}
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
            <h1 className="mt-3 font-display text-4xl uppercase sm:text-5xl">Consultation Requests</h1>
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
                  {['Customer', 'Contact', 'Business', 'Meeting date', 'Package', 'Status', 'Received'].map((heading) => <th key={heading} className="px-5 py-4 font-semibold">{heading}</th>)}
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-white/[0.07] last:border-0">
                    <td className="px-5 py-4 font-semibold text-white">{booking.name}</td>
                    <td className="px-5 py-4 text-pearl/65"><a className="block hover:text-accent" href={`mailto:${booking.email}`}>{booking.email}</a><a className="mt-1 block hover:text-accent" href={`tel:${booking.phone}`}>{booking.phone}</a></td>
                    <td className="max-w-[240px] px-5 py-4 text-pearl/65">{booking.businessName || booking.propertyAddress}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-pearl/65">{new Date(`${booking.startDate || booking.shootDate}T00:00:00`).toLocaleDateString()}</td>
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
        <p className="text-sm leading-6 text-pearl/80 sm:text-base">© 2026 BlackCrown Studio. Reel Marketing for Ambitious Businesses.</p>
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
        <ReelMarketingSection />
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
  const sectionIds = isBookingPage ? ['book'] : ['home', 'services', 'portfolio', 'about', 'reel-marketing']
  const activeSection = useScrollSpy(sectionIds)

  if (isDashboardPage) return <DashboardPage />
  return isBookingPage ? <BookingPage /> : <HomePage activeSection={activeSection} />
}

export { SiteFooter, SiteHeader, BookingSection }
export default BlackCrownStudioPage
