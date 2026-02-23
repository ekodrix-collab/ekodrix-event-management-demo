'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  once = true,
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px 0px' })

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -60 },
    right: { y: 0, x: 60 },
    none: { y: 0, x: 0 },
  }

  const offset = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration, delay, ease: LUXURY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0.2,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: LUXURY_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
