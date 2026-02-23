import Link from 'next/link'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Catering', href: '/catering' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Luxury Weddings', href: '/services' },
  { label: 'Celebrity Events', href: '/services' },
  { label: 'Premium Catering', href: '/catering' },
  { label: 'Décor & Design', href: '/services' },
]

export function Footer() {
  return (
    <footer className="bg-[#140f0a] border-t border-[#c5a028]/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                <Image src="/logo.svg" alt="AL WAFA" fill className="object-contain" sizes="48px" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-lg md:text-xl text-[#f5f0e8] leading-none">{BRAND.name}</h3>
                <p className="text-[#d4af37] text-[8px] sm:text-[9px] tracking-[0.25em] uppercase mt-0.5">{BRAND.tagline}</p>
              </div>
            </div>
            <p className="text-[#e8dcc8]/30 text-xs sm:text-sm leading-relaxed">
              Kerala&apos;s premier luxury event management company, crafting unforgettable celebrations for over 15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f5f0e8] text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#e8dcc8]/35 text-xs sm:text-sm hover:text-[#d4af37] transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#f5f0e8] text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4 md:mb-6">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#e8dcc8]/35 text-xs sm:text-sm hover:text-[#d4af37] transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#f5f0e8] text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4 md:mb-6">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-[#e8dcc8]/35 text-xs sm:text-sm">
              <li>{BRAND.fullAddress}</li>
              <li><a href={`tel:${BRAND.phone}`} className="hover:text-[#d4af37] transition-colors">{BRAND.phone}</a></li>
              <li><a href={`mailto:${BRAND.email}`} className="hover:text-[#d4af37] transition-colors">{BRAND.email}</a></li>
            </ul>
            <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
              <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[#e8dcc8]/25 hover:text-[#d4af37] transition-colors text-xs sm:text-sm">Instagram</a>
              <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[#e8dcc8]/25 hover:text-[#d4af37] transition-colors text-xs sm:text-sm">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#e8dcc8]/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#e8dcc8]/15 text-[10px] md:text-xs">© {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.</p>
          <span className="text-[#e8dcc8]/12 text-[10px] md:text-xs">Website by <a href="https://ekodrix.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">Ekodrix</a></span>
        </div>
      </div>
    </footer>
  )
}
