'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/shared/reveal-animation'

const highlights = [
  { name: 'Kerala Sadya', icon: '🍃' },
  { name: 'Malabar Biriyani', icon: '🍚' },
  { name: 'Kuzhi Manthi & Al Faham', icon: '🍖' },
  { name: 'Live Shawarma Stations', icon: '🔥' },
  { name: 'North Indian Royale', icon: '🥘' },
  { name: 'Continental Fine Dining', icon: '🍽️' },
]

export default function CateringPreview() {
  return (
    <section className="bg-[#f5f0e8] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <Reveal direction="left">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3 md:mb-4">Culinary Excellence</p>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1a1a1a] mb-2">Premium Catering</h2>
            </Reveal>
            <Reveal direction="left" delay={0.15}>
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }} className="text-base md:text-lg italic text-[#6b6259] mb-4 md:mb-6">
                A feast for every celebration
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <div className="w-16 h-0.5 bg-[#c5a028] mb-4 md:mb-6" />
            </Reveal>
            <Reveal direction="left" delay={0.25}>
              <p className="text-sm sm:text-base md:text-lg text-[#3d3d3d] leading-relaxed mb-6 md:mb-8">
                From 26-dish Kerala Sadya to authentic Arabian Kuzhi Manthi, Malabar Biriyani,
                and live cooking stations — extraordinary dining for every celebration.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.3}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-8 md:mb-10">
                {highlights.map((item) => (
                  <li key={item.name} className="flex items-center gap-2 text-[#3d3d3d]">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-xs sm:text-sm">{item.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="left" delay={0.4}>
              <Link href="/catering" className="inline-flex items-center justify-center bg-[#1f1a14] text-[#f5f0e8] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#c5a028] hover:text-[#1f1a14] transition-all duration-300">
                Explore Our Menu →
              </Link>
            </Reveal>
          </div>

          {/* Image collage */}
          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl">
                <Image src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
                  alt="Delicious Malabar Biriyani" fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 45vw, 25vw" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl mt-6 md:mt-8">
                <Image src="/images/catering/kerala-sadhya.jpg"
                  alt="Premium Kerala Sadhya Catering" fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 45vw, 25vw" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
