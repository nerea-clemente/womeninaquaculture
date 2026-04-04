'use client';

import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import EventCard from '@/components/EventCard';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <>
      {/* ============ HERO — Ocean photo background ============ */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
        {/* Ocean background — gradient simulating ocean photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-600 via-teal-500 to-seafoam-300">
          {/* Water texture overlay */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }} />
          <div className="absolute inset-0 bg-teal-900/20" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="font-['Thalassa'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.15] mb-6 animate-fade-in-up">
            Empowering women.
            <br />
            <span className="underline-wave">Transforming aquaculture.</span>
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed mb-10 animate-fade-in-up animation-delay-100">
            A global platform for women in aquaculture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <Link
              href="/community"
              className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-teal-500 rounded-full hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-white/20"
            >
              Join the WiA
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-navy-800/60 rounded-full hover:bg-navy-800/80 transition-all border border-white/20"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* ============ IMPACT AT A GLANCE — Editorial two-column ============ */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Two-column header */}
          <div className="grid lg:grid-cols-2 gap-8 mb-14 items-end">
            <div>
              <h2 className="font-['Thalassa'] text-3xl sm:text-4xl lg:text-5xl text-teal-500 leading-tight">
                Impact at a<br />Glance
              </h2>
            </div>
            <div>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Women make up a vital part of the aquaculture workforce, but their stories, challenges, and leadership often go unseen.{' '}
                <strong className="text-navy-800">We&apos;re here to change that.</strong>
              </p>
            </div>
          </div>

          {/* Stat Cards — simple bordered style */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: 'Workforce Representation', value: '50%', desc: 'Half of the workforce is made up of women.' },
              { label: 'Women in Leadership', value: '10%', desc: 'Only around 10% of leadership positions are held by women.' },
              { label: 'Community Members', value: '500', desc: 'Women connected through the WiA community.' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-teal-200/60 p-8 text-center hover:border-teal-400 hover:shadow-md transition-all duration-300">
                <p className="text-xs font-semibold tracking-wider uppercase text-navy-800 mb-4">{stat.label}</p>
                <p className="font-['Thalassa'] text-5xl sm:text-6xl text-teal-500 mb-3">{stat.value}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED STORY — "Meet Maria" style ============ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wider uppercase text-navy-800 mb-10 text-center">
            Meet the women shaping aquaculture
          </p>
          <div className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm max-w-5xl mx-auto">
            {/* Image */}
            <div className="bg-gradient-to-br from-seafoam-100 via-teal-50 to-seafoam-200 flex items-center justify-center aspect-square md:aspect-auto p-8">
              <div className="w-full h-full rounded-2xl bg-gradient-to-b from-teal-300/30 to-seafoam-200/50 flex items-end justify-center overflow-hidden">
                <svg className="w-48 h-48 text-teal-300/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="font-['Thalassa'] text-3xl sm:text-4xl text-coral-400 mb-4">
                Meet Maria
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                After 15 years in marine biology research, Maria made the bold leap into commercial shrimp farming in coastal India. Today she manages one of the region&apos;s most sustainable operations — and mentors the next generation of women in aquaculture. Her journey proves that with the right support, women can lead transformative change in this industry.
              </p>
              <Link
                href="/stories/priya-sharma"
                className="inline-flex items-center self-start px-6 py-2.5 text-sm font-semibold text-coral-400 border-2 border-coral-400 rounded-full hover:bg-coral-400 hover:text-white transition-all"
              >
                Read her story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Building a Stronger Future for Women in Aquaculture"
            description="Through visibility, community, learning and opportunity, we are creating the platform that women in aquaculture deserve."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Connect',
                desc: 'Bringing women together across borders, disciplines and career stages through a vibrant global network.',
                color: 'bg-white border-teal-200/60 hover:border-teal-400',
              },
              {
                title: 'Celebrate',
                desc: 'Telling the stories of women who are shaping aquaculture — from the farm to the boardroom.',
                color: 'bg-white border-coral-200/60 hover:border-coral-400',
              },
              {
                title: 'Support',
                desc: 'Providing mentoring, resources and peer support to help women thrive at every stage of their journey.',
                color: 'bg-white border-seafoam-200 hover:border-seafoam-400',
              },
              {
                title: 'Develop',
                desc: 'Creating opportunities for learning, leadership and career growth through webinars, programmes and events.',
                color: 'bg-white border-gold-300/60 hover:border-gold-400',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`${item.color} border rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              >
                <h3 className="font-['Thalassa'] text-2xl text-teal-500 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MEET THE TEAM PREVIEW ============ */}
      <section className="py-20 bg-white">
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
              className="inline-flex items-center text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors"
            >
              Meet the full team
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MENTORING SECTION — dark teal bg ============ */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Thalassa'] text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                Mentorship that works
              </h2>
              <p className="text-seafoam-200 text-lg leading-relaxed mb-6">
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
                    <svg className="w-5 h-5 text-gold-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/programmes"
                className="inline-flex items-center px-7 py-3 text-sm font-semibold text-navy-800 bg-gold-300 rounded-full hover:bg-gold-200 transition-colors shadow-sm"
              >
                Explore Programmes
              </Link>
            </div>
            <div className="bg-white/5 rounded-3xl aspect-[4/3] flex items-center justify-center border border-white/10">
              <div className="text-center text-white/30">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <p className="text-sm font-medium text-white/40">Mentoring Programme</p>
              </div>
            </div>
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
              className="inline-flex items-center text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors"
            >
              View all events
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ GET INVOLVED ============ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Get Involved"
            title="Be Part of the Change"
            description="There are many ways to support, contribute and grow with Women in Aquaculture."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Join the Community',
                desc: 'Connect with women across aquaculture worldwide. Access events, stories and mentoring.',
                href: '/community',
                color: 'border-teal-200/60',
              },
              {
                title: 'Become a Partner',
                desc: 'Align your brand with the future of aquaculture. Support women and gain visibility.',
                href: '/partners',
                color: 'border-seafoam-200',
              },
              {
                title: 'Donate',
                desc: 'Your contribution funds mentoring, events and community building for women globally.',
                href: '/donate',
                color: 'border-gold-200',
              },
              {
                title: 'Share Your Story',
                desc: 'Inspire others by sharing your journey in aquaculture. Every voice matters.',
                href: '/get-involved#share-story',
                color: 'border-coral-200',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group block p-6 rounded-2xl bg-white border ${item.color} hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              >
                <h3 className="font-semibold text-lg text-navy-800 mb-2 group-hover:text-teal-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNERS BAR ============ */}
      <section className="py-14 bg-sand-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 tracking-wider uppercase mb-8">
            Supported by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {['AquaCorp', 'NordicFeed', 'OceanTech', 'BluHarvest', 'SeaVentures'].map(
              (partner) => (
                <span key={partner} className="text-sm font-semibold text-slate-300 tracking-wide hover:text-teal-500 transition-colors cursor-pointer">
                  {partner}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Thalassa'] text-3xl sm:text-4xl text-navy-800 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-slate-600 mb-8">
            Get the latest stories, events and opportunities delivered to your inbox. No spam — just the good stuff.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 bg-grey-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
