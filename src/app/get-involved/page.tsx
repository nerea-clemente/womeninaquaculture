'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const metadata = {
  title: 'Get Involved — Women in Aquaculture',
  description: 'Find your way to support Women in Aquaculture — join, mentor, partner, donate or share your story.',
};

const pathways = [
  {
    title: 'Join the Community',
    desc: 'Become a WiA member and connect with women across aquaculture worldwide. Access events, stories, resources and mentoring. Free to join.',
    href: '/community',
    cta: 'Join Now',
    icon: '👩‍🤝‍👩',
    color: 'bg-teal-50 border-teal-100',
  },
  {
    title: 'Become a Mentor',
    desc: 'Share your experience and help the next generation of women in aquaculture grow. Mentoring is one of the most powerful things you can do.',
    href: '/programmes#apply',
    cta: 'Apply as Mentor',
    icon: '🎯',
    color: 'bg-seafoam-50 border-seafoam-100',
  },
  {
    title: 'Partner with Us',
    desc: 'Align your organisation with the leading global platform for women in aquaculture. Gain visibility, impact and community access.',
    href: '/partners',
    cta: 'Become a Partner',
    icon: '🤝',
    color: 'bg-sand-50 border-sand-100',
  },
  {
    title: 'Donate',
    desc: 'Your financial support funds mentoring, events, stories and community programmes for women in aquaculture around the world.',
    href: '/donate',
    cta: 'Donate Now',
    icon: '💙',
    color: 'bg-coral-50 border-coral-100',
  },
  {
    title: 'Share Your Story',
    desc: 'Every woman in aquaculture has a story worth telling. Share yours and inspire others in the community. We will help you tell it.',
    href: '#share-story',
    cta: 'Submit Your Story',
    icon: '✍️',
    color: 'bg-teal-50 border-teal-100',
  },
  {
    title: 'Collaborate on an Event',
    desc: 'Want to host a webinar, lead a workshop or organise a regional meetup? We love working with collaborators.',
    href: '/contact',
    cta: 'Get in Touch',
    icon: '📅',
    color: 'bg-seafoam-50 border-seafoam-100',
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Hero
        subtitle="Get Involved"
        title="Find Your Way to Contribute"
        description="Whether you want to join, mentor, partner, donate or share your story — there is a meaningful way for you to be part of Women in Aquaculture."
      />

      {/* Pathways */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How You Can Help"
            title="Many Ways to Make a Difference"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((item) => (
              <div key={item.title} className={`rounded-2xl p-8 border ${item.color} flex flex-col h-full`}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl text-navy-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{item.desc}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  {item.cta}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story Form */}
      <section id="share-story" className="py-20 bg-sand-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-3">Share Your Story</p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Tell Us Your Journey
            </h2>
            <p className="text-lg text-slate-600">
              We are looking for authentic, honest stories from women across aquaculture. Whether you are a farmer, scientist, leader or student — your voice matters.
            </p>
          </div>
          <form className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">Country</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">Your Role in Aquaculture</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g. Shrimp farmer, Research scientist, CEO..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">Your Story (Brief Summary)</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" placeholder="Tell us about your journey, challenges, achievements or what drives you in aquaculture..." />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-sm"
            >
              Submit Your Story
            </button>
            <p className="text-xs text-slate-400 text-center">
              We will review your submission and reach out if we would like to feature your story.
            </p>
          </form>
        </div>
      </section>

      <CTABanner
        title="Every Action Counts"
        description="Whether you give your time, your expertise or your support — you are helping build a more inclusive aquaculture industry."
        primaryCta={{ label: 'Join WiA', href: '/community' }}
        secondaryCta={{ label: 'Donate', href: '/donate' }}
      />
    </>
  );
}
