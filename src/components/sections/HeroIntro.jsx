function HeroIntro() {
  return (
    <section className="grid flex-1 items-center gap-10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
      <div>
        <p className="mb-4 inline-block rounded-full border border-accent/45 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Foundational App Shell
        </p>

        <h1 className="font-display text-4xl font-semibold leading-tight text-pearl sm:text-5xl lg:text-6xl">
          Cinematic Visuals For Luxury Property Storytelling
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#d1cec8] sm:text-lg">
          Your React + Tailwind architecture is now modular and ready for growth.
          New sections can be added as dedicated components in the
          <span className="text-pearl"> src/components </span>
          folder without cluttering the app shell.
        </p>
      </div>

      <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#1c1c1c] to-[#121212] p-6 shadow-[0_0_0_1px_rgba(212,175,55,0.1),0_20px_60px_rgba(0,0,0,0.45)]">
        <h2 className="font-display text-2xl text-pearl">Next Components</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#cdc8be]">
          <li>Hero video reel section</li>
          <li>Portfolio gallery grid</li>
          <li>Service packages</li>
          <li>Testimonial carousel</li>
          <li>Contact and booking panel</li>
        </ul>
      </aside>
    </section>
  )
}

export default HeroIntro
