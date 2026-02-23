import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AL WAFA Event Management',
  description: 'Privacy policy for AL WAFA Event Management. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal-deep text-center">
        <h1 className="font-heading text-display-md text-white">Privacy Policy</h1>
        <p className="text-white/50 text-sm mt-3">Last updated: February 2026</p>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none space-y-8">
            {[
              {
                title: 'Information We Collect',
                content: 'We collect information you provide directly, including your name, email address, phone number, event details, and budget preferences when you submit enquiry forms, request quotes, or communicate with our team. We also collect usage data through cookies and tracking technologies to improve our website experience.',
              },
              {
                title: 'How We Use Your Information',
                content: 'Your information is used to: respond to enquiries and provide quotes, plan and coordinate events, communicate updates and offers, improve our services and website, and comply with legal obligations. We never sell your personal data to third parties.',
              },
              {
                title: 'Data Protection',
                content: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All client event details are handled with strict confidentiality — this is particularly important given our work with high-profile clients.',
              },
              {
                title: 'Cookies',
                content: 'Our website uses cookies to enhance your browsing experience, remember preferences, and analyze website traffic. You can control cookie settings through your browser preferences.',
              },
              {
                title: 'Third-Party Services',
                content: 'We may use third-party services such as Google Analytics, social media platforms, and payment processors. These services have their own privacy policies governing the use of your information.',
              },
              {
                title: 'Your Rights',
                content: 'You have the right to access, correct, or delete your personal data. You may also object to or restrict processing of your data. To exercise these rights, please contact us at privacy@alwafaevents.com.',
              },
              {
                title: 'Contact',
                content: 'For questions about this Privacy Policy, please email us at hello@alwafaevents.com or call +91 98765 43210.',
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-xl text-charcoal mb-3">{section.title}</h2>
                <p className="text-taupe font-light leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
