import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { portfolioEvents } from '@/data/portfolio'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal-animation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params
  const event = portfolioEvents.find(e => e.slug === slug)
  if (!event) return notFound()

  const related = portfolioEvents.filter(e => e.id !== event.id && e.category === event.category).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[75vh] flex items-end overflow-hidden">
        <Image src={event.heroImage} alt={event.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a14] via-[#1f1a14]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-16 w-full">
          <p className="text-[#d4af37] text-[10px] sm:text-xs uppercase tracking-widest mb-2 md:mb-3">{event.category} · {event.date}</p>
          <h1 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#f5f0e8] max-w-3xl leading-tight">{event.title}</h1>
          <div className="flex flex-wrap gap-4 md:gap-6 mt-3 md:mt-4 text-[#e8dcc8]/50 text-xs sm:text-sm">
            <span>📍 {event.location}</span>
            <span>👥 {event.guestCount} guests</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#f5f0e8] py-12 md:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal><p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3 md:mb-4">The Story</p></Reveal>
          <Reveal delay={0.1}><div className="w-16 h-0.5 bg-[#c5a028] mb-6 md:mb-8" /></Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#3d3d3d] leading-relaxed">
              {event.story.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#1f1a14] py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <Reveal><h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl text-[#f5f0e8] text-center mb-8 md:mb-12">Event Gallery</h2></Reveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {event.images.map((img, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl">
                  <Image src={img} alt={`${event.title} — Photo ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonial */}
      {event.testimonial && (
        <section className="bg-[#f5f0e8] py-12 md:py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <Reveal><span style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-5xl md:text-6xl text-[#c5a028]/20 leading-none block mb-3 md:mb-4">❝</span></Reveal>
            <Reveal delay={0.1}>
              <blockquote style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }} className="text-base sm:text-lg md:text-2xl italic text-[#2a2a2a] leading-relaxed max-w-2xl mx-auto mb-5 md:mb-6 px-2">{event.testimonial.quote}</blockquote>
            </Reveal>
            <Reveal delay={0.2}><p style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-[#1a1a1a] text-sm md:text-base">{event.testimonial.name}</p></Reveal>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#1a2e25] py-12 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <Reveal><h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl text-[#f5f0e8] text-center mb-8 md:mb-12">Related Events</h2></Reveal>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map((ev) => (
                <StaggerItem key={ev.id}>
                  <Link href={`/portfolio/${ev.slug}`} className="group block">
                    <div className="relative h-[220px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-xl md:rounded-2xl">
                      <Image src={ev.heroImage} alt={ev.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a14]/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <p className="text-[#d4af37] text-[10px] sm:text-xs uppercase tracking-widest mb-1">{ev.category}</p>
                        <h3 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-base sm:text-lg text-[#f5f0e8]">{ev.title}</h3>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  )
}
