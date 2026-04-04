'use client';

import Link from 'next/link';
import StatCard from '@/components/StatCard';
import StoryCard from '@/components/StoryCard';
import EventCard from '@/components/EventCard';
import TeamCard from '@/components/TeamCard';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 py-28 lg:py-40">
        {/* Decorative orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-seafoam-400/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-coral-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-200 text-sm font-semibold tracking-wider uppercase mb-6 animate-fade-in-up">
            The Global Platform for Women in Aquaculture
          </p>
          <h1 className="font-['Thalasa'] text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
            Empowering Women.
            <br />
            Transforming Aquaculture.
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-teal-100/90 leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
            WiA connects, supports and celebrates women in farming, science, leadership
            and entrepreneurship across aquaculture worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link
              href="/community"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-teal-900 bg-white rounded-full hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Join WiA Community
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all"
            >
              Support Our Mission
            </Link>
          </div>
        </div>

        {/* Partner logo bar */}
        <div className="relative mt-16 border-t border-white/10 pt-8">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-medium text-teal-300/60 tracking-wider uppercase mb-6">
              Supported by industry leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
              {['AquaCorp', 'NordicFeed', 'OceanTech', 'BluHarvest', 'SeaVentures'].map(
                (partner) => (
                  <span key={partner} className="text-sm font-semibold text-white/60 tracking-wide">
                    {partner}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ IMPACT AT A GLANCE ============ */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Impact at a Glance"
            title="The Numbers Behind the Mission"
            description="Women are the backbone of aquaculture, yet their contributions remain largely invisible in leadership and decision-making."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value="50%"
              label="of the global aquaculture workforce are women"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              }
            />
            <StatCard
              value="~10%"
              label="of leadership positions in aquaculture are held by women"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              }
            />
            <StatCard
              value="2,500+"
              label="women in the WiA community and growing"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              }
            />
            <StatCard
              value="45+"
              label="countries represented in our growing network"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Building a Stronger Future for Women in Aquaculture"
            description="Through visibility, community, learning and opportunity, we are creating the platform that women in aquaculture deserve."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Connect',
                desc: 'Bringing women together across borders, disciplines and career stages through a vibrant global network.',
                icon: '🌊',
                color: 'bg-teal-50 border-teal-100',
              },
              {
                title: 'Celebrate',
                desc: 'Telling the stories of women who are shaping aquaculture — from the farm to the boardroom.',
                icon: '✨',
                color: 'bg-coral-50 border-coral-100',
              },
              {
                title: 'Support',
                desc: 'Providing mentoring, resources and peer support to help women thrive at every stage of their journey.',
                icon: '🤝',
                color: 'bg-seafoam-50 border-seafoam-100',
              },
              {
                title: 'Develop',
                desc: 'Creating opportunities for learning, leadership and career growth through webinars, programmes and events.',
                icon: '🚀',
                color: 'bg-sand-50 border-sand-100',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`${item.color} border rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MEET THE TEAM PREVIEW ============ */}
      <section className="py-20 bg-teal-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Meet the People Behind WiA"
            description="A passionate, global team committed to creating opportunities and visibility for women in aquaculture."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Dr. Ana Rivera', role: 'Founder & CEO', imageColor: 'bg-teal-100' },
              { name: 'Ingrid Haugen', role: 'Head of Partnerships', imageColor: 'bg-seafoam-100' },
              { name: 'Fatima Al-Rashid', role: 'Community Director', imageColor: 'bg-sand-100' },
              { name: 'Dr. Mei Lin Chen', role: 'Research Lead', imageColor: 'bg-coral-50' },
              { name: 'Amara Osei', role: 'Mentoring Lead', imageColor: 'bg-teal-50' },
              { name: 'Sofia Bergström', role: 'Events & Content', imageColor: 'bg-seafoam-50' },
            ].map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/about#team"
              className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              Meet the full team
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FEATURED STORY ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Featured Story"
            title="Voices from the Water"
            description="Real stories from women transforming aquaculture around the world."
          />
          <StoryCard
            featured
            title="From Marine Biologist to Shrimp Farm CEO: Dr. Priya Sharma's Journey"
            excerpt="After 15 years in marine biology research, Priya made the bold leap into commercial shrimp farming in coastal India. Today she manages one of the region's most sustainable operations — and mentors the next generation of women in aquaculture."
            author="Dr. Priya Sharma"
            role="CEO, Coastal Aqua Farms — India"
            category="Leadership"
            imageColor="bg-gradient-to-br from-teal-100 to-seafoam-100"
            href="/stories/priya-sharma"
          />
          <div className="text-center mt-10">
            <Link
              href="/stories"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full hover:bg-teal-100 transition-colors"
            >
              Explore All Stories
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ UPCOMING EVENT ============ */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Upcoming Event"
            title="Learn, Grow, Connect"
            description="Join our next webinar and be part of the conversation shaping the future of women in aquaculture."
          />
          <div className="max-w-2xl mx-auto">
            <EventCard
              title="Breaking Barriers: Women in Aquaculture Leadership"
              date="Apr 24"
              time="14:00 CET / 09:00 EST"
              description="An honest conversation with four women leading aquaculture companies across three continents. How did they get there? What needs to change? What advice would they give?"
              speaker="Panel: Dr. Ana Rivera, Ingrid Haugen, Mei Lin Chen, Amara Osei"
              href="/events/leadership-webinar"
            />
          </div>
          <div className="text-center mt-10">
            <Link
              href="/events"
              className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              View all events
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PROGRAMMES PREVIEW ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-3">
                Programmes & Mentoring
              </p>
              <h2 className="font-['Thalasa'] text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
                Grow Your Career with WiA Mentoring
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our mentoring programme pairs early-career women with experienced leaders across aquaculture. Whether you are a student, a farmer or a researcher — there is space for you to grow here.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'One-on-one mentoring with industry leaders',
                  'Peer support groups by discipline and region',
                  'Leadership development workshops',
                  'Career guidance and networking opportunities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/programmes"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-teal-500 rounded-full hover:bg-teal-600 transition-colors shadow-sm"
              >
                Explore Programmes
              </Link>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-seafoam-50 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-teal-300">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <p className="text-sm font-medium">Mentoring Programme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GET INVOLVED ============ */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Get Involved"
            title="Be Part of the Change"
            description="There are many ways to support, contribute and grow with Women in Aquaculture."
            dark
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Join the Community',
                desc: 'Connect with women across aquaculture worldwide. Access events, stories and mentoring.',
                href: '/community',
                icon: '👩‍🤝‍👩',
              },
              {
                title: 'Become a Partner',
                desc: 'Align your brand with the future of aquaculture. Support women and gain visibility.',
                href: '/partners',
                icon: '🤝',
              },
              {
                title: 'Donate',
                desc: 'Your contribution funds mentoring, events and community building for women globally.',
                href: '/donate',
                icon: '💙',
              },
              {
                title: 'Share Your Story',
                desc: 'Inspire others by sharing your journey in aquaculture. Every voice matters.',
                href: '/get-involved#share-story',
                icon: '✍️',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-seafoam-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Thalasa'] text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Get the latest stories, events and opportunities delivered to your inbox. No spam — just the good stuff.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-400 mt-4">
            By subscribing, you agree to our privacy policy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <CTABanner
        title="Ready to Make a Difference?"
        description="Join Women in Aquaculture and become part of a global movement supporting women across the industry."
        primaryCta={{ label: 'Join WiA Community', href: '/community' }}
        secondaryCta={{ label: 'Learn More', href: '/about' }}
      />
    </>
  );
}
