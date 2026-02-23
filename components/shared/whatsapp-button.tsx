'use client'

import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
      <MessageCircle size={24} className="relative z-10 group-hover:rotate-12 transition-transform duration-500" />
    </a>
  )
}
