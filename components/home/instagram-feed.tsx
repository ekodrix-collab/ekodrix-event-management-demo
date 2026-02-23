'use client'

import Image from 'next/image'
import { Instagram, Heart, MessageCircle, UserPlus, Grid, Play, Layers } from 'lucide-react'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal-animation'

const instagramPosts = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Luxury Wedding', likes: '2.4k', comments: '142', type: 'carousel' },
  { id: 2, src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80', alt: 'Catering Spread', likes: '1.8k', comments: '96', type: 'video' },
  { id: 3, src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80', alt: 'Exquisite Desserts', likes: '3.1k', comments: '210', type: 'image' },
  { id: 4, src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80', alt: 'Grand Event', likes: '4.2k', comments: '305', type: 'video' },
  { id: 5, src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80', alt: 'Couple Moments', likes: '2.9k', comments: '128', type: 'carousel' },
  { id: 6, src: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&q=80', alt: 'Stage Design', likes: '1.5k', comments: '74', type: 'image' },
]

export default function InstagramFeed() {
  return (
    <section className="bg-[#0a0805] py-20 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        
        {/* Instagram Profile Header Mock */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24">
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#f2d06b] via-[#d4af37] to-[#8B6914] rounded-full animate-spin-slow opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-28 h-28 md:w-36 md:h-36 bg-[#140f0a] rounded-full p-1.5 overflow-hidden">
                <div className="w-full h-full relative rounded-full overflow-hidden border border-white/10 bg-[#1a1a1a]">
                  <Image src="/logo.svg" alt="AL WAFA Profile" fill className="object-contain p-4" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex-1 text-center md:text-left">
            <Reveal delay={0.1}>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6">
                <h2 className="text-2xl md:text-3xl font-light text-[#f5f0e8] tracking-tight">alwafaevents</h2>
                <div className="flex gap-2">
                  <a href="https://instagram.com/alwafaevents" target="_blank" rel="noopener noreferrer" 
                    className="bg-[#d4af37] text-black px-6 py-1.5 rounded-md text-sm font-semibold hover:bg-[#f2d06b] transition-colors flex items-center gap-2">
                    <UserPlus size={16} /> Follow
                  </a>
                  <button className="bg-white/10 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-white/20 transition-colors">
                    Message
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex justify-center md:justify-start gap-8 md:gap-12 mb-6">
                <div className="text-center md:text-left">
                  <span className="block text-lg font-bold text-white">524</span>
                  <span className="text-xs uppercase tracking-widest text-[#e8dcc8]/40">Posts</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="block text-lg font-bold text-white">42.8k</span>
                  <span className="text-xs uppercase tracking-widest text-[#e8dcc8]/40">Followers</span>
                </div>
                <div className="text-center md:text-left">
                   <span className="block text-lg font-bold text-white">182</span>
                   <span className="text-xs uppercase tracking-widest text-[#e8dcc8]/40">Following</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="max-w-md">
                <p className="text-[#f5f0e8] font-semibold text-sm mb-1 uppercase tracking-wide">AL WAFA Event Management</p>
                <p className="text-[#e8dcc8]/60 text-sm leading-relaxed mb-1">Luxury Destination Weddings • Premium Catering • Corporate Galas</p>
                <p className="text-[#d4af37] text-xs font-medium">linktr.ee/alwafaevents</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Tab Controls Mock */}
        <Reveal delay={0.4}>
          <div className="flex justify-center gap-12 border-t border-white/10 mb-8 pt-4">
             <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold py-2 border-t-2 border-[#d4af37] -mt-[18px]">
               <Grid size={14} /> Posts
             </button>
             <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#e8dcc8]/40 font-medium py-2 hover:text-white transition-colors">
               <Play size={14} /> Reels
             </button>
          </div>
        </Reveal>

        {/* The Post Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-8">
          {instagramPosts.map((post) => (
            <StaggerItem key={post.id}>
              <a href="https://instagram.com/alwafaevents" target="_blank" rel="noopener noreferrer"
                className="group block relative aspect-square overflow-hidden bg-[#1a1a1a] border border-white/5">
                <Image src={post.src} alt={post.alt} fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-40"
                  sizes="(max-width: 768px) 50vw, 33vw" />
                
                {/* Icons in corner */}
                <div className="absolute top-3 right-3 text-white/70">
                   {post.type === 'video' && <Play size={16} fill="currentColor" />}
                   {post.type === 'carousel' && <Layers size={16} />}
                </div>

                {/* Interaction Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center bg-black/20">
                  <div className="flex items-center gap-6 md:gap-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2">
                      <Heart size={20} fill="currentColor" className="text-white" />
                      <span className="text-sm font-bold tracking-tight">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={20} fill="currentColor" className="text-white shadow-2xl" />
                      <span className="text-sm font-bold tracking-tight">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.6}>
          <div className="text-center mt-12 md:mt-20">
            <a href="https://instagram.com/alwafaevents" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center justify-center border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-[0.3em] uppercase py-4 px-10 hover:bg-[#d4af37] hover:text-black transition-all duration-500">
              Visit Official Instagram <Instagram size={16} className="ml-2" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

