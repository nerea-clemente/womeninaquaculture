'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const donationAmounts = [10, 25, 50, 100, 250];

const impactItems = [
  { amount: '€10', impact: 'Provides a woman in aquaculture with access to a webinar and its resources.' },
  { amount: '€25', impact: 'Funds one month of mentoring programme coordination for a mentee-mentor pair.' },
  { amount: '€50', impact: 'Supports the production and publication of one woman\'s story on the WiA platform.' },
  { amount: '€100', impact: 'Helps cover the cost of a regional networking event for women farmers.' },
  { amount: '€250', impact: 'Sponsors a student\'s full participation in the WiA mentoring programme.' },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [recurring, setRecurring] = useState(true);

  return (
    <>
      <Hero
        subtitle="Donate"
        title="Support Women in Aquaculture"
        description="Your donation directly funds mentoring, events, stories and community programmes for women in aquaculture around the world. Every contribution makes a difference."
        backgroundClass="bg-gradient-to-br from-teal-700 via-teal-600 to-seafoam-500"
      />

      {/* Donation Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-navy-900 mb-2 text-center">
                Make a Donation
              </h2>
              <p className="text-slate-600 text-center mb-8">
                Choose an amount and frequency. All donations are securely processed.
              </p>

              {/* Recurring / One-time Toggle */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-full bg-slate-100 p-1">
                  <button
                    onClick={() => setRecurring(true)}
                    className={`px-6 py-2 text-sm font-semibold rounded-full transition-all ${
                      recurring ? 'bg-teal-500 text-white shadow-sm' : 'text-slate-600 hover:text-teal-600'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setRecurring(false)}
                    className={`px-6 py-2 text-sm font-semibold rounded-full transition-all ${
                      !recurring ? 'bg-teal-500 text-white shadow-sm' : 'text-slate-600 hover:text-teal-600'
                    }`}
                  >
                    One-time
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                    className={`py-4 rounded-xl text-lg font-bold transition-all ${
                      selectedAmount === amount
                        ? 'bg-teal-500 text-white shadow-md ring-2 ring-teal-300'
                        : 'bg-slate-50 text-navy-900 border border-slate-200 hover:border-teal-300 hover:bg-teal-50'
                    }`}
                  >
                    €{amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-navy-900 mb-2">Or enter a custom amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">€</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                    placeholder="Custom amount"
                    min="1"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <button
                className="w-full px-8 py-4 bg-teal-500 text-white text-lg font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Donate €{customAmount || selectedAmount || '...'}{recurring ? '/month' : ''}
              </button>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-slate-100">
                {[
                  { icon: '🔒', label: 'Secure Payment' },
                  { icon: '✅', label: 'Registered Non-Profit' },
                  { icon: '📊', label: 'Transparent Reporting' },
                  { icon: '🌍', label: 'Global Impact' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-slate-500">
                    <span>{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Donation Enables */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Your Impact"
            title="What Your Support Makes Possible"
            description="Every euro goes directly to supporting women in aquaculture through programmes, events and community building."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {impactItems.map((item) => (
              <div key={item.amount} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="px-3 py-1.5 bg-teal-500 text-white text-sm font-bold rounded-lg flex-shrink-0">
                  {item.amount}
                </div>
                <p className="text-slate-600 leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-3">Why It Matters</p>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
                Investing in Women is Investing in the Future
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Women represent half of the aquaculture workforce globally, yet they remain significantly underrepresented in leadership, decision-making and recognition. WiA exists to change that.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Your donation funds the infrastructure that makes this possible: a platform for stories, a community for connection, mentoring for growth, and events for learning. Without the generosity of our supporters, none of this would exist.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-seafoam-50 rounded-3xl p-12 text-center">
              <div className="text-5xl font-bold text-navy-900 mb-2">100%</div>
              <p className="text-lg text-slate-600 mb-4">Purpose-Driven</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                WiA is a registered non-profit. All donations go directly to supporting our mission — community programmes, mentoring, events and platform development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Prefer to Support as an Organisation?"
        description="Explore our partnership tiers and discover how your company can make a lasting impact."
        primaryCta={{ label: 'Become a Partner', href: '/partners' }}
        variant="navy"
      />
    </>
  );
}
