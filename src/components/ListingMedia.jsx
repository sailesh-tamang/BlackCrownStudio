const mediaItems = [
  {
    label: 'MLS Photography',
    description: 'Sharp, bright, and listing-ready image sets.',
  },
  {
    label: 'Cinematic Video',
    description: 'Short-form story edits optimized for social and ads.',
  },
  {
    label: 'Drone Coverage',
    description: 'Aerial visuals that establish scale and location.',
  },
  {
    label: 'Listing Websites',
    description: 'Branded single-property landing pages built to convert.',
  },
]

function ListingMedia() {
  return (
    <section
      id="listing-media"
      className="reveal-up pb-8 pt-10 sm:pt-14"
      style={{ '--delay': '220ms' }}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1b1b1b] via-[#141414] to-[#0f0f0f] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Listing Media</p>
          <h2 className="mt-3 font-display text-3xl uppercase text-pearl sm:text-4xl">
            Everything a modern listing needs
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-pearl/75 sm:text-base">
            This section gives the page a dedicated destination for listing media. It can be used
            to outline deliverables, turnaround times, or upsells without breaking the one-page flow.
          </p>

          <a
            href="#appointment"
            className="mt-6 inline-flex rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_26px_rgba(212,175,55,0.45)]"
          >
            Book a Shoot
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

export default ListingMedia
