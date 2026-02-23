import { Metadata } from 'next'

const BASE_URL = 'https://alwafaevents.com'

export function generatePageMetadata({
    title,
    description,
    image,
    path = '',
}: {
    title: string
    description: string
    image?: string
    path?: string
}): Metadata {
    const fullTitle = `${title} | AL WAFA Event Management`
    const url = `${BASE_URL}${path}`
    const ogImage = image || `${BASE_URL}/og-image.jpg`

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(BASE_URL),
        alternates: { canonical: url },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: 'AL WAFA Event Management',
            images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
            locale: 'en_IN',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [ogImage],
        },
        robots: { index: true, follow: true },
    }
}

export const PAGE_METADATA = {
    home: {
        title: 'Luxury Event Management & Premium Catering in Kerala',
        description:
            'AL WAFA creates extraordinary events for celebrities, business leaders, and discerning families across Kerala. Premium weddings, corporate events, and bespoke catering.',
    },
    about: {
        title: 'Our Story',
        description:
            "Discover the journey behind Kerala's most trusted luxury event management company. 15+ years of creating unforgettable experiences for distinguished clientele.",
    },
    services: {
        title: 'Our Services',
        description:
            'Comprehensive luxury event services — weddings, corporate events, celebrity parties, premium catering, destination events, and complete event management.',
    },
    portfolio: {
        title: 'Our Portfolio',
        description:
            'Explore our collection of extraordinary events — luxury weddings, celebrity celebrations, corporate galas, and premium catering showcases across Kerala.',
    },
    catering: {
        title: 'Premium Catering',
        description:
            'Bespoke culinary experiences featuring traditional Kerala cuisine, international flavors, and live cooking stations for luxury events.',
    },
    testimonials: {
        title: 'Client Stories',
        description:
            "Read what Kerala's elite say about their experience with AL WAFA Event Management. Real testimonials from celebrities, business leaders, and families.",
    },
    contact: {
        title: 'Contact Us',
        description:
            'Plan your extraordinary event with AL WAFA. Contact our team for luxury weddings, corporate events, and premium catering services in Kerala.',
    },
}
