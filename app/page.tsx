import HeroCinematic from '@/components/home/hero-cinematic'
import IntroSection from '@/components/home/intro-section'
import ServicesPreview from '@/components/home/services-preview'
import PortfolioShowcase from '@/components/home/portfolio-showcase'
import ExperienceSection from '@/components/home/experience-section'
import TestimonialFeatured from '@/components/home/testimonial-featured'
import CateringPreview from '@/components/home/catering-preview'
import InstagramFeed from '@/components/home/instagram-feed'
import CTASection from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <IntroSection />
      <ServicesPreview />
      <PortfolioShowcase />
      <ExperienceSection />
      <TestimonialFeatured />
      <CateringPreview />
      <InstagramFeed />
      <CTASection />
    </>
  )
}
