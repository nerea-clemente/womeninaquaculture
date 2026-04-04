'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';

const faqs = [
  {
    q: 'What is Women in Aquaculture (WiA)?',
    a: 'WiA is a global non-profit organisation dedicated to supporting, connecting and elevating women across the aquaculture industry. We do this through community building, mentoring, storytelling, events and partnerships.',
  },
  {
    q: 'Who can join the WiA community?',
    a: 'Any woman working in or entering aquaculture can join — whether you are a farmer, scientist, student, entrepreneur, business leader or industry professional. Allies and supporters are also welcome.',
  },
  {
    q: 'Is membership free?',
    a: 'Yes, joining the WiA community is completely free. We believe in removing barriers to access and connection. Some premium programmes and events may have limited spots.',
  },
  {
    q: 'How does the mentoring programme work?',
    a: 'Our mentoring programme runs in six-month cycles. You apply as a mentee or mentor, we carefully match pairs based on goals, field and experience, and you meet regularly over the programme duration. Full details are on our Programmes page.',
  },
  {
    q: 'How can my company partner with WiA?',
    a: 'We offer multiple partnership tiers with varying levels of visibility, engagement and support. Visit our Partners page to see the options, or reach out to partners@womeninaquaculture.org to start a conversation.',
  },
  {
    q: 'How are donations used?',
    a: 'All donations go directly to supporting our mission — funding mentoring programmes, events, story production, community platform development and operational costs. We publish regular impact reports to ensure transparency.',
  },
  {
    q: 'Can I submit my own story?',
    a: 'Absolutely. We are always looking for authentic stories from women in aquaculture. Visit our Get Involved page and use the story submission form. Our editorial team will review your submission and follow up.',
  },
  {
    q: 'Where is WiA based?',
    a: 'WiA is a global organisation. Our team members are based across multiple continents and time zones. We operate primarily online, with in-person events at key industry conferences and regional meetups.',
  },
  {
    q: 'How do I attend a WiA event or webinar?',
    a: 'Visit our Events page to see upcoming sessions. Most webinars are free and open to all, though some are exclusive to WiA members. Register via the event page and you will receive joining details by email.',
  },
  {
    q: 'I am not a woman — can I still support WiA?',
    a: 'Yes. WiA welcomes allies — individuals and organisations who want to support gender equity in aquaculture. You can donate, partner, share our content, recommend speakers or amplify women\'s voices in your own networks.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-navy-800 pr-4 group-hover:text-teal-600 transition-colors">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="text-slate-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Hero
        subtitle="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about Women in Aquaculture. If you can't find what you're looking for, get in touch."
        compact
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y-0 px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Still Have Questions?"
        description="We are happy to help. Reach out to us and we will get back to you as soon as we can."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Join the Community', href: '/community' }}
        variant="teal"
      />
    </>
  );
}
