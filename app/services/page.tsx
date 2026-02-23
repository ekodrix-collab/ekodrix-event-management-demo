'use client'

import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/data/services'
import { Reveal } from '@/components/shared/reveal-animation'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50dvh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" alt="5-star luxury fine dining setup" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0a0805]/75" />
        <div className="relative z-10 text-center px-5">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">What We Offer</p>
          <h1 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f0e8]">Our Services</h1>
          <p className="text-[#e8dcc8]/60 mt-3 md:mt-4 text-sm md:text-lg font-light">8 specialized services, one exceptional standard</p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => {
        const isDark = i % 2 !== 0
        const isImageLeft = i % 2 === 0

        return (
          <section key={service.id} className={`py-16 md:py-24 lg:py-32 ${isDark ? 'bg-[#1f1a14]' : 'bg-[#f5f0e8]'}`}>
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                <Reveal direction={isImageLeft ? 'left' : 'right'} className={!isImageLeft ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                </Reveal>

                <div className={!isImageLeft ? 'lg:order-1' : ''}>
                  <Reveal direction={isImageLeft ? 'right' : 'left'}>
                    {/* VISIBLE number - dark on cream, light on dark */}
                    <span style={{ fontFamily: 'var(--font-playfair), serif' }} className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#c5bfb3]' : 'text-[#8B7355]'}`}>{service.number}</span>
                  </Reveal>
                  <Reveal direction={isImageLeft ? 'right' : 'left'} delay={0.1}>
                    <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className={`text-2xl sm:text-3xl md:text-4xl mt-2 mb-3 md:mb-4 ${isDark ? 'text-[#f5f0e8]' : 'text-[#1a1a1a]'}`}>{service.title}</h2>
                  </Reveal>
                  <Reveal direction={isImageLeft ? 'right' : 'left'} delay={0.15}>
                    <div className="w-16 h-0.5 bg-[#c5a028] mb-4 md:mb-6" />
                  </Reveal>
                  <Reveal direction={isImageLeft ? 'right' : 'left'} delay={0.2}>
                    <p className={`text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 ${isDark ? 'text-[#c5bfb3]' : 'text-[#3d3d3d]'}`}>{service.description}</p>
                  </Reveal>
                  <Reveal direction={isImageLeft ? 'right' : 'left'} delay={0.25}>
                    <ul className="space-y-2 mb-6 md:mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className={`flex items-center gap-2 sm:gap-3 text-xs sm:text-sm ${isDark ? 'text-[#a89e93]' : 'text-[#3d3d3d]'}`}>
                          <span className="text-[#c5a028] text-xs">●</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal direction={isImageLeft ? 'right' : 'left'} delay={0.3}>
                    <Link href="/contact" className={`inline-flex items-center justify-center text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 ${isDark ? 'bg-[#c5a028] text-[#1f1a14] hover:bg-[#d4af37]' : 'bg-[#1f1a14] text-[#f5f0e8] hover:bg-[#c5a028] hover:text-[#1f1a14]'}`}>
                      Enquire Now →
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
