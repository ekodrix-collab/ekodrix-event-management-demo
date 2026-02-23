import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: {
                    DEFAULT: '#1a1a1a',
                    deep: '#0d0d0d',
                    soft: '#2a2a2a',
                    surface: '#1f1f1f',
                    light: '#333333',
                },
                gold: {
                    light: '#d4af37',
                    DEFAULT: '#c5a028',
                    dark: '#a68523',
                    muted: '#b8973a',
                    pale: '#e8d5a0',
                },
                champagne: '#f7e7ce',
                cream: {
                    DEFAULT: '#faf8f5',
                    warm: '#f5f2ed',
                    linen: '#ede8e0',
                },
                taupe: {
                    DEFAULT: '#8a7e72',
                    warm: '#6b6259',
                    light: '#a89e93',
                },
                burgundy: '#5a1a2a',
                forest: '#2d4a3e',
                navy: '#1a2744',
            },
            fontFamily: {
                heading: ['var(--font-playfair)', 'Georgia', 'serif'],
                body: ['var(--font-outfit)', 'Helvetica Neue', 'sans-serif'],
                accent: ['var(--font-cormorant)', 'Georgia', 'serif'],
            },
            fontSize: {
                'display-2xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
                'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
                'display-lg': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
                'display-md': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.15' }],
                'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            boxShadow: {
                'luxury': '0 4px 30px rgba(0, 0, 0, 0.08)',
                'luxury-lg': '0 10px 50px rgba(0, 0, 0, 0.12)',
                'luxury-xl': '0 20px 60px rgba(0, 0, 0, 0.15)',
                'gold-glow': '0 4px 30px rgba(197, 160, 40, 0.15)',
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
                '1200': '1200ms',
            },
            transitionTimingFunction: {
                'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
                'luxury-in': 'cubic-bezier(0.55, 0, 1, 0.45)',
                'luxury-out': 'cubic-bezier(0, 0.55, 0.45, 1)',
            },
            animation: {
                'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'scale-in': 'scaleIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
                'pulse-gold': 'pulseGold 3s ease-in-out infinite',
                'marquee': 'marquee 30s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'scroll-hint': 'scrollHint 2s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                kenBurns: {
                    '0%': { transform: 'scale(1) translate(0, 0)' },
                    '100%': { transform: 'scale(1.1) translate(-2%, -1%)' },
                },
                pulseGold: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(197, 160, 40, 0.4)' },
                    '50%': { boxShadow: '0 0 0 15px rgba(197, 160, 40, 0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                scrollHint: {
                    '0%': { opacity: '1', transform: 'translateY(0)' },
                    '50%': { opacity: '0.5', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            backgroundImage: {
                'gradient-gold': 'linear-gradient(135deg, #c5a028, #d4af37, #e8d5a0)',
                'gradient-dark': 'linear-gradient(180deg, #0d0d0d, #1a1a1a)',
                'gradient-overlay': 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                'gradient-overlay-full': 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
            },
        },
    },
    plugins: [],
}

export default config
