const mediaItems = [
  {
    label: 'Reel Strategy',
    description: 'Content ideas and concepts built around your audience and goals.',
  },
  {
    label: 'Short-Form Reels',
    description: 'Scroll-stopping video edits optimized for social media.',
  },
  {
    label: 'Social Media Management',
    description: 'Consistent planning, posting, captions, and channel support.',
  },
  {
    label: 'Brand Content',
    description: 'On-brand graphics, carousels, and campaigns that support your reels.',
  },
]

function ReelMarketing() {
  return (
    <section
      id="reel-marketing"
      className="reveal-up pb-8 pt-10 sm:pt-14"
      style={{ '--delay': '220ms' }}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1b1b1b] via-[#141414] to-[#0f0f0f] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Reel Marketing</p>
          <h2 className="mt-3 font-display text-3xl uppercase text-pearl sm:text-4xl">
            Everything your social media needs
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-pearl/75 sm:text-base">
            Strategic reels and social media support that give your brand a clear, consistent, and engaging online presence.
          </p>

          <a
            href="#appointment"
            className="mt-6 inline-flex rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_26px_rgba(212,175,55,0.45)]"
          >
            BOOK A MEETING
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {mediaItems.map((item, index) => (
            <article
              key={item.label}
              className="reveal-up rounded-[22px] border border-white/10 bg-white/5 p-5"
              style={{ '--delay': `${280 + index * 90}ms` }}
            >
              <h3 className="font-display text-2xl text-pearl">{item.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-pearl/72">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReelMarketing
