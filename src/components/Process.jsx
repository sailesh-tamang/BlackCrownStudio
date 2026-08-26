const processSteps = [
  {
    title: 'BOOK A MEETING',
    description: 'Schedule online or by phone',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M7 3v3M17 3v3M4 9h16" />
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Select Package',
    description: 'Choose services and add-ons',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M12 3 4 7l8 4 8-4-8-4Z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </svg>
    ),
  },
  {
    title: 'Shoot Day',
    description: 'Our team captures your listing perfectly',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="m16 7-2-3h-4L8 7" />
        <circle cx="12" cy="13.5" r="3.2" />
      </svg>
    ),
  },
  {
    title: 'Media Delivery',
    description: 'Receive edited media in 1-2 business days',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M12 3v10" />
        <path d="m8 9 4 4 4-4" />
        <rect x="4" y="15" width="16" height="6" rx="2" />
      </svg>
    ),
  },
]

function Process() {
  return (
    <section id="about" className="reveal-up pb-8 pt-8 sm:pt-10" style={{ '--delay': '160ms' }}>
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Process</p>
        <h2 className="mt-3 font-display text-3xl text-pearl sm:text-4xl">
          It's as easy as one, two, three.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="reveal-up rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-[#121212] p-5 shadow-[0_14px_35px_rgba(0,0,0,0.28)]"
            style={{ '--delay': `${220 + index * 90}ms` }}
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-accent/45 bg-accent/10 text-accent">
              {step.icon}
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pearl/60">
              Step {index + 1}
            </p>
            <h3 className="mt-1 font-display text-2xl text-pearl">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-pearl/75">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process
