'use client'

import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal-animation'

const instagramPosts = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Wedding ceremony' },
  { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80', alt: 'Catering spread' },
  { src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80', alt: 'Luxury desserts' },
  { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80', alt: 'Grand celebration' },
  { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80', alt: 'Wedding couple' },
  { src: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&q=80', alt: 'Stage design' },
]

export default function InstagramFeed() {
  return (
    <section className="bg-[#1f1a14] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-8 md:mb-12">
          <Reveal>
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">Follow Us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-4 md:mb-6" />
          </Reveal>
          <Reveal delay={0.2}>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-xl sm:text-2xl md:text-3xl font-normal text-[#f5f0e8]">@alwafaevents</h2>
          </Reveal>
        </div>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {instagramPosts.map((post) => (
            <StaggerItem key={post.alt}>
              <a href="https://instagram.com/alwafaevents" target="_blank" rel="noopener noreferrer"
                className="group block relative aspect-square overflow-hidden rounded-lg">
                <Image src={post.src} alt={post.alt} fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
                <div className="absolute inset-0 bg-[#0a0805]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Instagram size={20} className="text-white" />
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
