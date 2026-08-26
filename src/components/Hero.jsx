function Hero() {
  return (
    <section className="reveal-up relative isolate mb-12 overflow-hidden rounded-2xl border border-white/10" style={{ '--delay': '80ms' }}>
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(212,175,55,0.26),transparent_42%)]"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[70vh] flex-col justify-center px-6 py-14 sm:px-10 lg:px-14">
        <div className="max-w-4xl">
          <p className="text-base font-semibold text-pearl sm:text-lg">
            Kathmandu based digital marketing studio
          </p>

          <h1 className="font-display text-4xl font-bold uppercase leading-[1.06] text-pearl sm:text-5xl lg:text-6xl">
            <span className="text-accent">Creative Marketing</span> That Gets Your Brand Seen, Heard And Chosen.
          </h1>

          <ul className="mt-8 max-w-3xl space-y-3 text-base leading-relaxed text-[#e5e1d8] sm:text-lg">
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="mt-1 h-5 w-5 shrink-0 text-accent"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m10 9 5 3-5 3V9Z" />
              </svg>
              <span>Cinematic 45-60s videos built to stop the scroll.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="mt-1 h-5 w-5 shrink-0 text-accent"
              >
                <path d="M4 20h4l10-10a2.8 2.8 0 1 0-4-4L4 16v4Z" />
                <path d="m13.5 6.5 4 4" />
              </svg>
              <span><strong>Strategy + Content Included:</strong> We plan what to post, when to post, and how to make it perform.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="mt-1 h-5 w-5 shrink-0 text-accent"
              >
                <circle cx="12" cy="8" r="3.3" />
                <path d="M5 20a7 7 0 0 1 14 0" />
              </svg>
              <span><strong>Made for business:</strong> branding videos, short-form reels, social posts, and strategy for businesses that want to stand out.</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_26px_rgba(212,175,55,0.55)]"
            >
              Explore
            </a>
            <a
              href="#appointment"
              className="rounded-full border border-pearl/30 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-pearl transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              BOOK A MEETING
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15 bg-black/65 px-6 py-4 sm:px-10 lg:px-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-pearl/80 sm:text-sm">
          Trusted by 100+ Businesses | 500K+ Monthly Views
        </p>
      </div>
    </section>
  )
}

export default Hero
