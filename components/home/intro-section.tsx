'use client'

import { Reveal } from '@/components/shared/reveal-animation'

export default function IntroSection() {
  return (
    <section className="bg-[#f5f0e8] py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3 md:mb-4">
            Welcome to AL WAFA
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-6 md:mb-8" />
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            style={{ fontFamily: 'var(--font-playfair), serif' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mb-5 md:mb-6 leading-tight"
          >
            Where Vision Meets Perfection
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-sm sm:text-base md:text-lg text-[#3d3d3d] leading-relaxed mb-4 md:mb-6">
            For over 15 years, AL WAFA has been the trusted name behind Kerala&apos;s most extraordinary celebrations.
            From intimate gatherings to grand weddings for thousands, we bring unmatched artistry, precision,
            and culinary mastery to every occasion.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed">
            Led by <strong className="text-[#1a1a1a]">Muhamed Siyad</strong>, our team of 50+ specialists crafts experiences
            that become lifelong memories — events that your guests will talk about for years.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
