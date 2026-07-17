const portfolioItems = [
  {
    title: 'Luxury Exterior Reel',
    category: 'Video',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Golden Hour Listing',
    category: 'Photography',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Modern Interior Story',
    category: 'Brand Film',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Agent Social Campaign',
    category: 'Short Form',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="reveal-up pb-8 pt-10 sm:pt-14" style={{ '--delay': '180ms' }}>
      <div className="mb-8 flex flex-col gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Portfolio</p>
        <h2 className="font-display text-3xl uppercase text-pearl sm:text-4xl">Recent Work</h2>
        <p className="mx-auto max-w-2xl text-sm text-pearl/75 sm:text-base">
          A clean one-page portfolio section with the cinematic feel your brand needs.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {portfolioItems.map((item, index) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#141414] shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
            style={{ '--delay': `${240 + index * 90}ms` }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.category}
                </p>
                <h3 className="mt-1 font-display text-2xl text-pearl">{item.title}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
