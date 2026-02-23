'use client'

import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/data/services'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal-animation'

export default function ServicesPreview() {
  const preview = services.slice(0, 4)

  return (
    <section className="bg-[#f5f0e8] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <Reveal>
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3 md:mb-4">What We Do</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-4 md:mb-6" />
          </Reveal>
          <Reveal delay={0.2}>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1a1a1a]">
              Our Services
            </h2>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {preview.map((service) => (
            <StaggerItem key={service.id}>
              <Link href="/services" className="group block">
                <div className="relative h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-5">
                  <Image src={service.image} alt={service.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a14]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                    <span className="text-white text-xs sm:text-sm uppercase tracking-wider">Explore →</span>
                  </div>
                </div>
                {/* VISIBLE number - dark brown on cream, not gold on white */}
                <span style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl md:text-3xl text-[#8B7355] font-bold">{service.number}</span>
                <h3 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-lg md:text-xl text-[#1a1a1a] mt-1">{service.title}</h3>
                <p className="text-[#6b6259] text-xs sm:text-sm mt-1 line-clamp-2">{service.description.slice(0, 80)}...</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.5}>
          <div className="text-center mt-10 md:mt-16">
            <Link href="/services" className="inline-flex items-center justify-center bg-[#1f1a14] text-[#f5f0e8] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#c5a028] hover:text-[#1f1a14] transition-all duration-300">
              View All Services →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
