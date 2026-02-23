'use client'

import { Reveal, StaggerContainer, StaggerItem } from '@/components/shared/reveal-animation'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
  centered?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <Reveal>
        <p className={light ? 'text-eyebrow-light mb-4' : 'text-eyebrow mb-4'}>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className={`gold-line${centered ? '-center' : ''} mb-6`} />
      </Reveal>
      <Reveal delay={0.2}>
        <h2 className={`font-heading text-display-md ${light ? 'text-white' : 'text-charcoal'}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.3}>
          <p className={`mt-4 max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-body-lg-light' : 'text-body-lg'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
