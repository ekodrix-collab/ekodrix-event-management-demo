import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-charcoal-deep">
      <div className="text-center px-6">
        <p className="font-heading text-8xl md:text-9xl text-gold/20">404</p>
        <h1 className="font-heading text-3xl md:text-4xl text-white mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-white/50 font-light mb-8 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-luxury btn-luxury-primary">
            Return Home
          </Link>
          <Link href="/contact" className="btn-luxury btn-luxury-outline text-gold border-gold hover:bg-gold hover:text-charcoal-deep">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
