'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioEvents } from '@/data/portfolio'
import { Reveal } from '@/components/shared/reveal-animation'

const categories = ['all', 'wedding', 'corporate', 'celebrity', 'cultural', 'catering']

export default function PortfolioPage() {
  const [active, setActive] = useState('all')
  const [visibleCount, setVisibleCount] = useState(9)

  const filtered = active === 'all' ? portfolioEvents : portfolioEvents.filter(e => e.category === active)
  const visible = filtered.slice(0, visibleCount)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80" alt="Spectacular luxury outdoor event with string lights" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0a0805]/75" />
        <div className="relative z-10 text-center px-5">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">Our Work</p>
          <h1 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f0e8]">Portfolio</h1>
          <p className="text-[#e8dcc8]/60 mt-3 md:mt-4 text-sm md:text-lg font-light">500+ events curated with excellence</p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#f5f0e8] py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-16">
              {categories.map((cat) => (
                <button key={cat} onClick={() => { setActive(cat); setVisibleCount(9) }}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 rounded-full border ${
                    active === cat ? 'bg-[#1f1a14] text-[#f5f0e8] border-[#1f1a14]' : 'border-[#1a1a1a]/20 text-[#1a1a1a] hover:border-[#c5a028] hover:text-[#8B6914]'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((event) => (
                <motion.div key={event.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}>
                  <Link href={`/portfolio/${event.slug}`} className="group block">
                    <div className="relative h-[250px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-xl md:rounded-2xl">
                      <Image src={event.heroImage} alt={event.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a14]/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <p className="text-[#d4af37] text-[10px] sm:text-xs uppercase tracking-widest mb-1">{event.category} · {event.date}</p>
                        <h3 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-base sm:text-lg text-[#f5f0e8]">{event.title}</h3>
                        <p className="text-[#e8dcc8]/40 text-xs mt-0.5">{event.location}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleCount < filtered.length && (
            <div className="text-center mt-10 md:mt-12">
              <button onClick={() => setVisibleCount(prev => prev + 6)}
                className="inline-flex items-center justify-center bg-[#1f1a14] text-[#f5f0e8] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#c5a028] hover:text-[#1f1a14] transition-all duration-300">
                Load More →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
