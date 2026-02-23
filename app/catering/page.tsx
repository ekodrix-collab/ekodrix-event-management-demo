'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cuisineCategories } from '@/data/menu'
import { Reveal } from '@/components/shared/reveal-animation'

const sectionBgs = [
  { bg: 'bg-[#f5f0e8]', dark: false },
  { bg: 'bg-[#1f1a14]', dark: true },
  { bg: 'bg-[#f5f0e8]', dark: false },
  { bg: 'bg-[#1a2e25]', dark: true },
  { bg: 'bg-[#f5f0e8]', dark: false },
  { bg: 'bg-[#1f1a14]', dark: true },
  { bg: 'bg-[#f5f0e8]', dark: false },
  { bg: 'bg-[#1a2e25]', dark: true },
]

export default function CateringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80" alt="Premium catering" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#1f1a14]/65" />
        <div className="relative z-10 text-center px-5">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">Culinary Excellence</p>
          <h1 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f0e8]">Premium Catering</h1>
          <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }} className="text-[#e8dcc8]/70 mt-3 md:mt-4 text-base md:text-xl italic">Where Every Dish Tells a Story</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#f5f0e8] py-12 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1a1a1a] mb-4 md:mb-6">A Feast for Every Celebration</h2>
          </Reveal>
          <Reveal delay={0.1}><div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-6 md:mb-8" /></Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg text-[#3d3d3d] leading-relaxed">
              From traditional Kerala Sadya to authentic Arabian Kuzhi Manthi, our culinary team creates extraordinary dining for every type of celebration.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8 Cuisines */}
      {cuisineCategories.map((cuisine, i) => {
        const { bg, dark } = sectionBgs[i] || sectionBgs[0]
        const isEven = i % 2 === 0

        return (
          <section key={cuisine.id} className={`py-16 md:py-24 lg:py-32 ${bg}`}>
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                <Reveal direction={isEven ? 'left' : 'right'} className={!isEven ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl">
                    <Image src={cuisine.image} alt={cuisine.title} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                </Reveal>
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <Reveal direction={isEven ? 'right' : 'left'}>
                    <p className={`text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase mb-2 md:mb-3 ${dark ? 'text-[#d4af37]' : 'text-[#8B6914]'}`}>{cuisine.servingStyle}</p>
                  </Reveal>
                  <Reveal direction={isEven ? 'right' : 'left'} delay={0.1}>
                    <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 ${dark ? 'text-[#f5f0e8]' : 'text-[#1a1a1a]'}`}>{cuisine.title}</h2>
                  </Reveal>
                  <Reveal direction={isEven ? 'right' : 'left'} delay={0.15}>
                    <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }} className={`text-base md:text-lg italic mb-4 md:mb-6 ${dark ? 'text-[#d4af37]/70' : 'text-[#6b6259]'}`}>{cuisine.subtitle}</p>
                  </Reveal>
                  <Reveal direction={isEven ? 'right' : 'left'} delay={0.2}>
                    <div className="w-16 h-0.5 bg-[#c5a028] mb-4 md:mb-6" />
                  </Reveal>
                  <Reveal direction={isEven ? 'right' : 'left'} delay={0.25}>
                    <p className={`text-xs sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8 ${dark ? 'text-[#c5bfb3]' : 'text-[#3d3d3d]'}`}>{cuisine.description}</p>
                  </Reveal>
                  <Reveal direction={isEven ? 'right' : 'left'} delay={0.3}>
                    <h4 className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 md:mb-4 ${dark ? 'text-[#d4af37]' : 'text-[#8B6914]'}`}>Featured Dishes</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-1.5 sm:gap-y-2 mb-6 md:mb-8">
                      {cuisine.dishes.map((dish) => (
                        <li key={dish} className={`flex items-start gap-2 text-[11px] sm:text-xs md:text-sm ${dark ? 'text-[#a89e93]' : 'text-[#3d3d3d]'}`}>
                          <span className="text-[#c5a028] mt-0.5 text-[8px] shrink-0">●</span>{dish}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal direction={isEven ? 'right' : 'left'} delay={0.35}>
                    <div className={`text-[10px] sm:text-xs space-y-1 mb-6 ${dark ? 'text-[#e8dcc8]/35' : 'text-[#6b6259]'}`}>
                      <p><strong className={dark ? 'text-[#e8dcc8]/60' : 'text-[#1a1a1a]'}>Ideal for:</strong> {cuisine.idealFor}</p>
                      <p><strong className={dark ? 'text-[#e8dcc8]/60' : 'text-[#1a1a1a]'}>Capacity:</strong> {cuisine.guestCapacity}</p>
                    </div>
                  </Reveal>
                  <Reveal direction={isEven ? 'right' : 'left'} delay={0.4}>
                    <Link href="/contact" className={`inline-flex items-center justify-center text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 ${dark ? 'bg-[#c5a028] text-[#1f1a14] hover:bg-[#d4af37]' : 'bg-[#1f1a14] text-[#f5f0e8] hover:bg-[#c5a028] hover:text-[#1f1a14]'}`}>
                      Enquire About This Menu →
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#8B6914] to-[#c5a028]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-3 md:mb-4 max-w-2xl mx-auto leading-tight">Book a Private Tasting Session</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/80 text-sm md:text-lg font-light mb-8 md:mb-10 max-w-xl mx-auto">Experience our cuisine before your event.</p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#1f1a14] text-[#f5f0e8] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#f5f0e8] hover:text-[#1f1a14] transition-all duration-300">
              Schedule a Tasting →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
