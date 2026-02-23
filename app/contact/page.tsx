'use client'

import { useState } from 'react'
import { BRAND } from '@/lib/constants'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal-animation'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: BRAND.phone, href: `tel:${BRAND.phone}` },
  { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: MapPin, label: 'Office', value: BRAND.fullAddress, href: '#' },
  { icon: Clock, label: 'Hours', value: BRAND.workingHours, href: '#' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#1f1a14]">
        <div className="absolute inset-0 bg-[#1f1a14]/90" />
        <div className="relative z-10 text-center px-5">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">Get in Touch</p>
          <h1 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#f5f0e8]">Contact Us</h1>
          <p className="text-[#e8dcc8]/50 mt-3 md:mt-4 text-sm md:text-lg font-light">Let&apos;s start planning your extraordinary event</p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-[#f5f0e8] py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          {/* Cards */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-20">
            {contactInfo.map((item) => (
              <StaggerItem key={item.label}>
                <a href={item.href} className="block bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#c5a028] mx-auto mb-3 md:mb-4" />
                  <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#8B6914] mb-1 md:mb-2">{item.label}</p>
                  <p className="text-[#3d3d3d] text-[10px] sm:text-xs md:text-sm">{item.value}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <Reveal><p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3">Enquiry Form</p></Reveal>
              <Reveal delay={0.1}><div className="w-16 h-0.5 bg-[#c5a028] mx-auto mb-4 md:mb-6" /></Reveal>
              <Reveal delay={0.2}><h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1a1a1a]">Tell Us About Your Event</h2></Reveal>
            </div>

            {submitted ? (
              <Reveal>
                <div className="text-center py-12 md:py-16">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#c5a028]/10 flex items-center justify-center mx-auto mb-5 md:mb-6">
                    <span className="text-[#c5a028] text-2xl md:text-3xl">✓</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-xl md:text-2xl text-[#1a1a1a] mb-3 md:mb-4">Thank You!</h3>
                  <p className="text-[#4a4a4a] text-sm md:text-base mb-6 md:mb-8">We&apos;ve received your enquiry. Our team will contact you within 24 hours.</p>
                  <a href={getWhatsAppUrl('Hi, I just submitted an enquiry on your website.')} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#c5a028] text-[#1f1a14] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#d4af37] transition-all duration-300">
                    Chat on WhatsApp →
                  </a>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {[
                    { label: 'Full Name *', type: 'text', required: true, placeholder: 'Your name' },
                    { label: 'Phone *', type: 'tel', required: true, placeholder: '+91 ' },
                    { label: 'Email', type: 'email', required: false, placeholder: 'your@email.com' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-[#6b6259] mb-2 md:mb-3">{f.label}</label>
                      <input type={f.type} required={f.required} placeholder={f.placeholder}
                        className="w-full py-3 bg-transparent border-b border-[#c5bfb3] text-[#1a1a1a] text-sm md:text-base focus:border-[#c5a028] focus:outline-none transition-colors placeholder:text-[#a89e93]" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-[#6b6259] mb-2 md:mb-3">Event Type</label>
                    <select className="w-full py-3 bg-transparent border-b border-[#c5bfb3] text-[#1a1a1a] text-sm md:text-base focus:border-[#c5a028] focus:outline-none appearance-none cursor-pointer">
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate</option>
                      <option value="catering">Catering Only</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-[#6b6259] mb-2 md:mb-3">Tell Us More</label>
                  <textarea rows={4} placeholder="Share your vision..."
                    className="w-full py-3 bg-transparent border-b border-[#c5bfb3] text-[#1a1a1a] text-sm md:text-base focus:border-[#c5a028] focus:outline-none resize-none placeholder:text-[#a89e93]" />
                </div>
                <div className="text-center pt-4">
                  <button type="submit" disabled={loading}
                    className="inline-flex items-center justify-center bg-[#1f1a14] text-[#f5f0e8] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-8 sm:px-10 py-3 sm:py-4 hover:bg-[#c5a028] hover:text-[#1f1a14] disabled:opacity-50 transition-all duration-300 min-w-[200px]">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#f5f0e8]/20 border-t-[#f5f0e8] rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : 'Send Enquiry →'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WhatsApp */}
      <section className="bg-[#1a2e25] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3 md:mb-4">Prefer a Quick Chat?</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif' }} className="text-xl sm:text-2xl md:text-3xl font-normal text-[#f5f0e8] mb-5 md:mb-6">Message Us on WhatsApp</h2>
            <a href={getWhatsAppUrl('Hi, I would like to know more about your event management services.')} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#c5a028] text-[#1f1a14] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#d4af37] transition-all duration-300">
              Chat Now →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
