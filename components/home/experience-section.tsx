'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { STATS } from '@/lib/constants'
import { Reveal } from '@/components/shared/reveal-animation'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8]">
      {isInView ? target : 0}{suffix}
    </span>
  )
}

export default function ExperienceSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
        alt="Grand event hall" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[#1f1a14]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <Reveal>
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">Our Experience</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-4 md:mb-6" />
          </Reveal>
          <Reveal delay={0.2}>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#f5f0e8]">
              Numbers That Tell Our Story
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.15}>
              <div className="text-center">
                <Counter target={stat.number} suffix={stat.suffix} />
                <div className="w-8 h-px bg-[#d4af37] mx-auto mt-3 md:mt-4 mb-2 md:mb-3" />
                <p className="text-[#e8dcc8]/50 text-[10px] sm:text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
