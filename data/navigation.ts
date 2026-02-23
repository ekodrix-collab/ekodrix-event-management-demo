import { NavLink } from '@/types'

export const mainNavLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Catering', href: '/catering' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
    company: [
        { label: 'Our Story', href: '/about' },
        { label: 'Our Team', href: '/about#team' },
        { label: 'Philosophy', href: '/about#philosophy' },
    ],
    services: [
        { label: 'Luxury Weddings', href: '/services#luxury-weddings' },
        { label: 'Celebrity Events', href: '/services#celebrity-events' },
        { label: 'Corporate Events', href: '/services#corporate-events' },
        { label: 'Premium Catering', href: '/catering' },
        { label: 'Destination Events', href: '/services#destination-events' },
    ],
    explore: [
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
    ],
}
