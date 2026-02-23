'use client'

import Link from 'next/link'
import { testimonials } from '@/data/testimonials'
import { Reveal } from '@/components/shared/reveal-animation'

export default function TestimonialFeatured() {
  const featured = testimonials[0]

  return (
    <section className="bg-[#f5f0e8] py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3 md:mb-4">Client Stories</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-8 md:mb-10" />
        </Reveal>
        <Reveal delay={0.2}>
          <span style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-5xl md:text-6xl text-[#c5a028]/20 leading-none block mb-3 md:mb-4">❝</span>
        </Reveal>
        <Reveal delay={0.3}>
          <blockquote style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-[#2a2a2a] leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8 px-2">
            {featured.quote}
          </blockquote>
        </Reveal>
        <Reveal delay={0.4}>
          <p style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-base md:text-lg text-[#1a1a1a]">{featured.name}</p>
          <p className="text-[#6b6259] text-xs sm:text-sm mt-1">{featured.event}</p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="mt-8 md:mt-10">
            <Link href="/testimonials" className="inline-flex items-center justify-center bg-[#1f1a14] text-[#f5f0e8] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#c5a028] hover:text-[#1f1a14] transition-all duration-300">
              Read More Stories →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
