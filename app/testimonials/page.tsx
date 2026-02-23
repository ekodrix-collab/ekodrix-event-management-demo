import Image from 'next/image'
import { testimonials } from '@/data/testimonials'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal-animation'

export default function TestimonialsPage() {
  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80" alt="Elegant event" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#1f1a14]/65" />
        <div className="relative z-10 text-center px-5">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">Testimonials</p>
          <h1 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f0e8]">Client Stories</h1>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-[#1f1a14] py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <span style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-5xl md:text-7xl text-[#c5a028]/20 leading-none block mb-4 md:mb-6">❝</span>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-[#e8dcc8] leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8 px-2">
              {featured.quote}
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0">
                <Image src={featured.image} alt={featured.name} fill className="object-cover" sizes="56px" />
              </div>
              <div className="text-left">
                <p style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-base md:text-lg text-[#f5f0e8]">{featured.name}</p>
                <p className="text-[#c5bfb3] text-xs sm:text-sm">{featured.event}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* All */}
      <section className="bg-[#f5f0e8] py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-10 md:mb-16">
            <Reveal><p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3">What They Say</p></Reveal>
            <Reveal delay={0.1}><div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-4 md:mb-6" /></Reveal>
            <Reveal delay={0.2}><h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1a1a1a]">More Stories</h2></Reveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((t) => (
              <StaggerItem key={t.id}>
                <div className="bg-white p-6 sm:p-7 md:p-8 rounded-xl md:rounded-2xl h-full flex flex-col shadow-sm">
                  <span style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-3xl md:text-4xl text-[#c5a028]/20 leading-none mb-3 md:mb-4">❝</span>
                  <p className="text-[#3d3d3d] text-xs sm:text-sm leading-relaxed flex-1 mb-4 md:mb-6">{t.quote}</p>
                  <div className="flex items-center gap-1 mb-3 md:mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-[#c5a028] text-xs sm:text-sm">★</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden shrink-0">
                      <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-xs sm:text-sm text-[#1a1a1a]">{t.name}</p>
                      <p className="text-[#6b6259] text-[10px] sm:text-xs">{t.event}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
