import { useState } from 'react'

const packages = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$750.00',
    serviceCount: '5 Services',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    badge: null,
    included: [
      'Professional MLS Photography',
      'Drone Photography (Aerial Stills)',
      'Signature Listing Video',
      'Custom Listing Website',
    ],
    summary: 'This package is built for agents who want their listing presented the right way.',
    more: ['Fast turnaround and optimized listing-ready media delivery.'],
  },
  {
    id: 'signature',
    name: 'Signature',
    price: '$1,100.00',
    serviceCount: '8 Services',
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
    badge: null,
    included: [
      'Professional MLS Photography',
      'Drone Photography (Aerial Stills)',
      'Twilight Photo and Video',
      'Platinum Reel',
      'Custom Listing Website',
    ],
    summary: 'This is the package most agents choose because it covers every angle.',
    more: ['Priority scheduling and premium cinematic edit treatment.'],
  },
  {
    id: 'full-stable',
    name: 'Full Stable',
    price: '$1,425.00',
    serviceCount: '10 Services',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Most Popular',
    included: [
      'Professional MLS Photography',
      '2D Floor Plans',
      'Drone Photography (Aerial Stills)',
      'Twilight Photo And Video',
      'Platinum Reel',
      'Teaser Video',
      'Custom Listing Website',
    ],
    summary: "This is the package we built for agents who don't want to piece things together.",
    more: ['Built for high-end listings that need a complete media stack.'],
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 'CUSTOM',
    serviceCount: 'X Services',
    image:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80',
    badge: null,
    included: [
      'Professional MLS Photography',
      '2D Floor Plans And Measurements',
      'Drone Photography (Aerial Stills)',
      'Twilight Photo And Video',
      'Platinum Reel',
      'Teaser Video',
      'Custom Listing Website',
    ],
    summary: 'Build the perfect package for your listing needs.',
    more: ['Pick exactly the services you need for each property and timeline.'],
  },
]

function PricingPackages() {
  const [openCard, setOpenCard] = useState(null)

  const toggleCard = (id) => {
    setOpenCard((current) => (current === id ? null : id))
  }

  return (
    <section id="services" className="reveal-up pb-8 pt-8 sm:pt-12" style={{ '--delay': '120ms' }}>
      <div className="mb-10 flex flex-col gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What We Offer</p>
        <h2 className="font-display text-3xl uppercase text-pearl sm:text-4xl">Real Estate Media Packages</h2>
        <p className="mx-auto max-w-2xl text-sm text-pearl/75 sm:text-base">
          Agents trust us to make listings look exceptional on camera, on social, and across every
          marketing channel.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((pkg) => {
          const isOpen = openCard === pkg.id

          return (
            <article
              key={pkg.id}
              className={`overflow-hidden rounded-[26px] border bg-[#171a20] shadow-[0_18px_44px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 ${
                pkg.badge
                  ? 'border-accent shadow-[0_0_0_1px_rgba(212,175,55,0.55),0_20px_48px_rgba(0,0,0,0.42)]'
                  : 'border-white/10'
              }`}
            >
              <div className="relative h-24 overflow-hidden">
                <img src={pkg.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-[#171a20]" />

                {pkg.badge && (
                  <span className="absolute left-4 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-black">
                    {pkg.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-display text-[2rem] leading-none text-pearl">{pkg.name}</h3>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-pearl/85">
                    {pkg.serviceCount}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-pearl/70">{pkg.summary}</p>

                <button
                  type="button"
                  onClick={() => toggleCard(pkg.id)}
                  className="mt-1 text-sm font-semibold text-pearl/95 transition-colors hover:text-accent"
                >
                  {isOpen ? 'Read Less' : 'Read More'}
                </button>

                <p className="mt-3 font-display text-[3rem] leading-none text-pearl">{pkg.price}</p>

                {isOpen && (
                  <div className="mt-3 rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-pearl/75">
                    {pkg.more.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                )}

                <ul className="mt-4">
                  {pkg.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between gap-3 border-b border-white/10 py-2.5 text-sm text-pearl/90"
                    >
                      <span>{item}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4 shrink-0 text-pearl/60"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </li>
                  ))}
                </ul>

                <a
                  href="#appointment"
                  className="mt-4 block w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-center text-base font-semibold text-pearl transition-colors hover:border-accent/60 hover:bg-accent/10"
                >
                  Explore Package
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PricingPackages
