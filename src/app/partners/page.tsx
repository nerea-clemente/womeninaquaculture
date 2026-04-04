'use client';

import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const metadata = {
  title: 'Partners — Women in Aquaculture',
  description: 'Partner with WiA — support women in aquaculture while gaining visibility, alignment and positioning for your brand.',
};

const partnerTiers = [
  {
    tier: 'Platinum',
    price: 'From €25,000/year',
    color: 'border-teal-500 bg-teal-50/30',
    badge: 'bg-teal-500 text-white',
    benefits: [
      'Premier logo placement on all WiA platforms',
      'Named partnership for one flagship programme or event',
      'Dedicated partner story and case study',
      'Speaking slot at one major WiA event',
      'Executive introductions and networking access',
      'Quarterly impact reports and co-branding rights',
      'Social media feature package',
    ],
  },
  {
    tier: 'Gold',
    price: 'From €10,000/year',
    color: 'border-sand-400 bg-sand-50/50',
    badge: 'bg-sand-500 text-white',
    benefits: [
      'Logo on WiA website, events and materials',
      'Partner spotlight article on WiA Stories',
      'Invitation to partner networking events',
      'Bi-annual impact reports',
      'Social media recognition and cross-promotion',
      'Internal DEI content for your team',
    ],
  },
  {
    tier: 'Silver',
    price: 'From €5,000/year',
    color: 'border-slate-300 bg-slate-50/50',
    badge: 'bg-slate-500 text-white',
    benefits: [
      'Logo on WiA website partner section',
      'Acknowledgement at WiA events',
      'Annual impact summary',
      'Social media mention',
      'Access to partner community updates',
    ],
  },
];

const currentPartners = [
  'AquaCorp International',
  'NordicFeed AS',
  'OceanTech Solutions',
  'BluHarvest Group',
  'SeaVentures Capital',
  'Marine Harvest Institute',
  'Pacific Aqua Co.',
  'Fjord Nutrition',
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        subtitle="Partners"
        title="Powering Change Together"
        description="Our partners are not just sponsors — they are strategic allies committed to advancing gender equity in aquaculture. Their support makes our mission possible."
        primaryCta={{ label: 'Become a Partner', href: '#become-partner' }}
        secondaryCta={{ label: 'Download Partnership Overview', href: '#' }}
      />

      {/* Why Partner */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Partner with WiA?"
            title="Meaningful Impact, Real Visibility"
            description="Partnering with WiA positions your organisation at the forefront of gender equity and inclusion in aquaculture — one of the world's fastest-growing food sectors."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Brand Alignment', desc: 'Associate your brand with a purpose-driven, respected global initiative. Show your commitment to diversity and inclusion in action, not just words.' },
              { title: 'Visibility & Reach', desc: 'Gain exposure to a growing network of professionals, researchers, farmers and leaders across aquaculture — in 45+ countries.' },
              { title: 'Talent Pipeline', desc: 'Connect with talented women in aquaculture. Support the development of the workforce you want to hire, retain and promote.' },
              { title: 'ESG & Impact', desc: 'Demonstrate measurable social impact aligned with gender equality goals (SDG 5) and responsible business practices.' },
              { title: 'Thought Leadership', desc: 'Position your team as thought leaders through speaking opportunities, co-created content and industry events.' },
              { title: 'Community Access', desc: 'Join a vibrant partner community of organisations aligned around a shared vision for a more inclusive aquaculture industry.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg text-navy-800 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="become-partner" className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Partnership Tiers"
            title="Choose Your Level of Support"
            description="Every partnership is tailored to your goals. Here is an overview of our standard tiers — but we are always happy to discuss bespoke arrangements."
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTiers.map((tier) => (
              <div key={tier.tier} className={`rounded-2xl p-8 border-2 ${tier.color}`}>
                <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${tier.badge}`}>
                  {tier.tier}
                </span>
                <p className="text-2xl font-bold text-navy-800 mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Partners"
            title="Proud to Work With"
            description="These organisations are leading the way in supporting women in aquaculture. We are grateful for their commitment."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {currentPartners.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-teal-50 hover:border-teal-100 transition-all duration-300"
              >
                <span className="text-sm font-semibold text-slate-400 hover:text-teal-500 transition-colors text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-seafoam-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-3">Get Started</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              Become a Partner
            </h2>
            <p className="text-lg text-slate-600">
              Interested in partnering with WiA? Tell us about your organisation and we will get back to you within 48 hours.
            </p>
          </div>
          <form className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-2">Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-2">Organisation</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-800 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-800 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" placeholder="Tell us about your interest in partnering with WiA..." />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-sm"
            >
              Submit Partnership Enquiry
            </button>
          </form>
        </div>
      </section>

      <CTABanner
        title="Not a Company? You Can Still Support WiA"
        description="Individual donations help fund our programmes, events and community initiatives."
        primaryCta={{ label: 'Donate Now', href: '/donate' }}
        variant="navy"
      />
    </>
  );
}
