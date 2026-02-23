'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { mainNavLinks } from '@/data/navigation'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsMobileMenuOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1f1a14]/95 backdrop-blur-md py-2 md:py-3 shadow-lg'
          : isHome ? 'bg-transparent py-3 md:py-5' : 'bg-[#1f1a14] py-3 md:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 group flex items-center gap-2 sm:gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image src="/logo.svg" alt="AL WAFA" fill className="object-contain" sizes="48px" />
            </div>
            <div className="flex flex-col">
              <span style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-lg sm:text-xl md:text-2xl text-white tracking-wide leading-none">
                AL WAFA
              </span>
              <span className="text-[7px] sm:text-[8px] tracking-[0.25em] uppercase text-[#d4af37] leading-none mt-0.5">
                Event Management
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mr-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] xl:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] py-2 transition-all duration-500 relative font-medium ${
                  pathname === link.href ? 'text-[#d4af37]' : 'text-[#f5f0e8] hover:text-[#d4af37]'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#d4af37]"
                    transition={{ duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:inline-flex items-center justify-center bg-[#d4af37] text-[#0a0805] text-[10px] font-bold tracking-[0.2em] uppercase py-3 px-6 hover:bg-[#f2d06b] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500">
              Enquire Now
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#f5f0e8] p-2 relative z-50 hover:text-[#d4af37] transition-colors" aria-label="Menu">
              {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#1f1a14] flex items-center justify-center">
            <nav className="flex flex-col items-center gap-5">
              {mainNavLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Link href={link.href} style={{ fontFamily: 'var(--font-playfair), serif' }}
                    className={`text-2xl sm:text-3xl transition-colors ${pathname === link.href ? 'text-[#d4af37]' : 'text-white hover:text-[#d4af37]'}`}
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center bg-[#c5a028] text-[#1f1a14] text-xs font-medium tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#d4af37] transition-all duration-300">
                  Enquire Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
