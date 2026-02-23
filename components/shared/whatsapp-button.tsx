'use client'

import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-luxury-lg hover:scale-110 transition-transform duration-300 animate-pulse-gold group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
    </a>
  )
}
