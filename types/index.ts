export interface Service {
    id: string
    number: string
    slug: string
    title: string
    description: string
    features: string[]
    image: string
}

export interface PortfolioEvent {
    id: string
    slug: string
    title: string
    category: string
    location: string
    guestCount: number
    date: string
    duration?: string
    description: string
    story: string
    images: string[]
    heroImage: string
    testimonial?: {
        name: string
        quote: string
    }
    featured: boolean
}

export interface Testimonial {
    id: string
    name: string
    role?: string
    event: string
    quote: string
    image: string
    rating: number
}

export interface TeamMember {
    id: string
    name: string
    role: string
    bio: string
    experience: string
    image: string
}

export interface CuisineCategory {
    id: string
    title: string
    subtitle: string
    description: string
    dishes: string[]
    image: string
    servingStyle: string
    idealFor: string
    guestCapacity: string
}

export interface TimelineItem {
    year: string
    title: string
    description: string
}

export interface NavLink {
    label: string
    href: string
}

export interface EnquiryFormData {
    name: string
    email: string
    phone: string
    eventType: string
    guests?: string
    date?: string
    budget?: string
    location?: string
    message?: string
}
