'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasVisited = sessionStorage.getItem('al-wafa-visited')
      if (hasVisited) {
        setIsVisible(false)
        setIsAnimating(false)
        return
      }
    }
    const timer = setTimeout(() => {
      setIsAnimating(false)
      sessionStorage.setItem('al-wafa-visited', 'true')
    }, 2800)

    const removeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 3500)

    return () => {
      clearTimeout(timer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#050403] flex items-center justify-center"
        >
          <div className="text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6"
            >
              <Image src="/logo.svg" alt="AL WAFA" fill className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" sizes="128px" priority />
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-[120px]"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
              className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[#e8dcc8]/60 mt-6"
            >
              Crafting Unforgettable Experiences
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
