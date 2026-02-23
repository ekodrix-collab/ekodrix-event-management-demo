'use client'

import Image from 'next/image'
import Link from 'next/link'
import { portfolioEvents } from '@/data/portfolio'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal-animation'

export default function PortfolioShowcase() {
  const featured = portfolioEvents.filter(e => e.featured).slice(0, 5)

  return (
    <section className="bg-[#1a2e25] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <Reveal>
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">Our Portfolio</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-4 md:mb-6" />
          </Reveal>
          <Reveal delay={0.2}>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#f5f0e8]">
              Celebrations We&apos;ve Crafted
            </h2>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featured.map((event, i) => (
            <StaggerItem key={event.id} className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
              <Link href={`/portfolio/${event.slug}`} className="group block h-full">
                <div className={`relative overflow-hidden rounded-xl md:rounded-2xl ${i === 0 ? 'h-[300px] sm:h-[400px] md:h-full md:min-h-[400px]' : 'h-[250px] sm:h-[280px] md:h-[300px]'}`}>
                  <Image src={event.heroImage} alt={event.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={i === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a14]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <p className="text-[#d4af37] text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2">{event.category} · {event.location}</p>
                    <h3 style={{ fontFamily: 'var(--font-playfair), serif' }} className={`text-[#f5f0e8] ${i === 0 ? 'text-xl sm:text-2xl md:text-3xl' : 'text-base sm:text-lg md:text-xl'}`}>{event.title}</h3>
                    <p className="text-[#e8dcc8]/50 text-xs mt-1">{event.guestCount} guests</p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.4}>
          <div className="text-center mt-10 md:mt-16">
            <Link href="/portfolio" className="inline-flex items-center justify-center border border-[#d4af37] text-[#d4af37] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#d4af37] hover:text-[#1a2e25] transition-all duration-300">
              View Full Portfolio →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
