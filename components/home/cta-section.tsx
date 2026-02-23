'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/shared/reveal-animation'
import { BRAND } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
        alt="Elegant event venue" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[#1f1a14]/75" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 text-center">
        <Reveal>
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 md:mb-6">
            <Image src="/logo.png" alt="AL WAFA" fill className="object-contain" sizes="56px" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">Let&apos;s Create Magic</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#f5f0e8] max-w-3xl mx-auto mb-4 md:mb-6 leading-tight">
            Ready to Plan Your Extraordinary Event?
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-[#e8dcc8]/60 text-sm md:text-lg font-light max-w-xl mx-auto mb-8 md:mb-10">
            From your first call to the last dance, we handle every detail so you can simply enjoy.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#c5a028] text-[#1f1a14] text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#d4af37] hover:shadow-lg transition-all duration-300">
              Start Planning →
            </Link>
            <a href={`tel:${BRAND.phone}`} className="inline-flex items-center justify-center border border-[#e8dcc8]/30 text-[#e8dcc8] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#e8dcc8] hover:text-[#1f1a14] transition-all duration-300">
              Call Us Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
