// ============================================
// AL WAFA — Luxury Animation Library
// Slow = Luxury. Fast = Cheap.
// ============================================

export const LUXURY_EASING = [0.22, 1, 0.36, 1] as const
export const LUXURY_DURATION = 0.8

// --- Reusable Framer Motion Variants ---

export const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: LUXURY_DURATION,
            ease: LUXURY_EASING,
        },
    },
}

export const fadeIn = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: LUXURY_DURATION,
            ease: LUXURY_EASING,
        },
    },
}

export const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: LUXURY_EASING,
        },
    },
}

export const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: LUXURY_DURATION,
            ease: LUXURY_EASING,
        },
    },
}

export const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: LUXURY_DURATION,
            ease: LUXURY_EASING,
        },
    },
}

export const textReveal = {
    initial: {
        clipPath: 'inset(0 0 100% 0)',
        opacity: 0,
    },
    animate: {
        clipPath: 'inset(0 0 0% 0)',
        opacity: 1,
        transition: {
            duration: 1,
            ease: LUXURY_EASING,
        },
    },
}

export const imageReveal = {
    initial: { clipPath: 'inset(0 0 0 100%)' },
    animate: {
        clipPath: 'inset(0 0 0 0%)',
        transition: {
            duration: 1.2,
            ease: LUXURY_EASING,
        },
    },
}

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

export const staggerContainerSlow = {
    animate: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
}

export const counterAnimation = {
    duration: 2.5,
    ease: 'easeOut' as const,
}

export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: LUXURY_EASING,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
        },
    },
}

export const viewportSettings = {
    once: true,
    margin: '-80px 0px' as const,
}

export const viewportSettingsEarly = {
    once: true,
    margin: '-40px 0px' as const,
}
