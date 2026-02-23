import Image from 'next/image'
import Link from 'next/link'
import { teamMembers } from '@/data/team'
import { BRAND } from '@/lib/constants'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal-animation'

const timeline = [
  { year: '2008', title: 'The Beginning', description: 'Muhamed Siyad started catering for family events and intimate gatherings across Kochi.' },
  { year: '2012', title: 'First Celebrity Wedding', description: 'Our breakthrough — curating a high-profile destination wedding that put us on the map.' },
  { year: '2015', title: 'Full Event Management', description: 'Launched comprehensive event management services, from concept to execution.' },
  { year: '2018', title: '200+ Events Milestone', description: 'Crossed 200 luxury events with a growing reputation as Kerala\'s finest.' },
  { year: '2020', title: 'Destination Weddings', description: 'Expanded to destination weddings across India — Goa, Rajasthan, Kerala backwaters.' },
  { year: '2024', title: '500+ Events', description: 'Over 500 events curated, trusted by celebrities, politicians, and Kerala\'s elite families.' },
]

const philosophy = [
  { title: 'Perfection', description: 'Every detail matters. From the fold of a napkin to the angle of a spotlight.' },
  { title: 'Exclusivity', description: 'We limit events each season to ensure every client gets our complete attention.' },
  { title: 'Elegance', description: 'True elegance is effortless. We create environments where sophistication feels natural.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80" alt="Elegant luxury chandelier venue" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0a0805]/75" />
        <div className="relative z-10 text-center px-5">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">About Us</p>
          <h1 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f0e8]">Our Story</h1>
          <p className="text-[#e8dcc8]/60 mt-3 md:mt-4 text-sm md:text-lg font-light">A legacy of extraordinary celebrations</p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#f5f0e8] py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <Reveal direction="left">
              <div className="relative h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden rounded-xl md:rounded-2xl">
                <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" alt="Muhamed Siyad, Founder" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </Reveal>
            <div>
              <Reveal direction="right">
                <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3 md:mb-4">Founder&apos;s Message</p>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1a1a1a] mb-4 md:mb-6">A Journey of Passion</h2>
              </Reveal>
              <Reveal direction="right" delay={0.15}>
                <div className="w-16 h-0.5 bg-[#c5a028] mb-4 md:mb-6" />
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <blockquote style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }} className="text-base sm:text-lg md:text-xl italic text-[#3d3d3d] leading-relaxed mb-4 md:mb-6">
                  &ldquo;I started this journey with a simple belief — every celebration deserves to be extraordinary. What began as a passion for bringing people together has grown into Kerala&apos;s most trusted name in luxury events.&rdquo;
                </blockquote>
              </Reveal>
              <Reveal direction="right" delay={0.3}>
                <p style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-base md:text-lg text-[#1a1a1a]">{BRAND.founder}</p>
                <p className="text-xs sm:text-sm text-[#6b6259]">{BRAND.founderTitle}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#1f1a14] py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <Reveal>
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3">Our Journey</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-4 md:mb-6" />
            </Reveal>
            <Reveal delay={0.2}>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#f5f0e8]">Milestones</h2>
            </Reveal>
          </div>
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div className="flex gap-4 sm:gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 w-16 sm:w-20 text-right">
                    <span style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-xl sm:text-2xl md:text-3xl text-[#d4af37]">{item.year}</span>
                  </div>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#c5a028] mt-2" />
                    {i < timeline.length - 1 && <div className="w-px h-12 sm:h-16 bg-[#c5a028]/30 mt-1" />}
                  </div>
                  <div className="pb-4">
                    <h3 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-base sm:text-lg md:text-xl text-[#f5f0e8]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#c5bfb3] mt-1 font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#f5f0e8] py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-10 md:mb-16">
            <Reveal><p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3">Our Philosophy</p></Reveal>
            <Reveal delay={0.1}><div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-4 md:mb-6" /></Reveal>
            <Reveal delay={0.2}><h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1a1a1a]">What We Stand For</h2></Reveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {philosophy.map((p) => (
              <StaggerItem key={p.title}>
                <div className="bg-[#1a2e25] p-6 sm:p-8 md:p-10 border-t-4 border-[#c5a028] rounded-sm hover:-translate-y-1 transition-all duration-500">
                  <h3 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-xl md:text-2xl text-[#f5f0e8] mb-3 md:mb-4">{p.title}</h3>
                  <p className="text-[#c5bfb3] text-sm md:text-base leading-relaxed">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#1f1a14] py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-10 md:mb-16">
            <Reveal><p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3">Our Team</p></Reveal>
            <Reveal delay={0.1}><div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-4 md:mb-6" /></Reveal>
            <Reveal delay={0.2}><h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#f5f0e8]">The People Behind the Magic</h2></Reveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((m) => (
              <StaggerItem key={m.id}>
                <div className="group">
                  <div className="relative h-[280px] sm:h-[320px] md:h-[380px] overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-5">
                    <Image src={m.image} alt={m.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-[#1f1a14]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                      <p className="text-[#e8dcc8]/80 text-xs sm:text-sm font-light leading-relaxed">{m.bio}</p>
                      <p className="text-[#d4af37] text-xs mt-3 md:mt-4">{m.experience} experience</p>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-lg md:text-xl text-[#f5f0e8]">{m.name}</h3>
                  <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#d4af37] mt-1">{m.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
