'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroCinematic() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#1f1a14]">
      {/* Background */}
      <motion.div className="absolute inset-0"
        animate={{ scale: [1, 1.06] }}
        transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}>
        <Image src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&q=80"
          alt="Grand luxury event hall" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-[#0a0805]/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#140f0a] via-transparent to-[#140f0a]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(10,8,5,0.6)_100%)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 md:px-8 pt-16 md:pt-20">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 1 }}
          className="flex items-center gap-4 mb-6 md:mb-8 opacity-80">
          <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }} className="text-[#d4af37] text-sm md:text-base italic tracking-wider">Est. 2008</span>
          <div className="w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase text-[#c5a028] mb-4 md:mb-6">
          Luxury Event Management & Premium Catering
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
          className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-white max-w-5xl leading-[1.1] drop-shadow-2xl">
          Crafting Unforgettable
          <span className="block italic text-[#e8dcc8] font-light mt-1 md:mt-2">Experiences</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#c5bfb3] italic mt-6 md:mt-8 mb-10 md:mb-14 max-w-3xl px-2 font-light">
          Where every detail is a masterpiece and every event is a legacy.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-[#0a0805] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-[#f2d06b] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500 rounded-none">
            Plan Your Event
          </Link>
          <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 border border-[#e8dcc8]/20 bg-black/20 backdrop-blur-sm text-[#e8dcc8] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-[#e8dcc8] hover:text-[#0a0805] hover:border-[#e8dcc8] transition-all duration-500 rounded-none">
            View Our Work
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 md:bottom-10 flex justify-center">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border border-[#e8dcc8]/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#d4af37]/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
