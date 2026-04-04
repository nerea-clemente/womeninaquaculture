'use client';

import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const metadata = {
  title: 'Programmes & Mentoring — Women in Aquaculture',
  description: 'Discover WiA mentoring, leadership and development programmes designed for women in aquaculture.',
};

export default function ProgrammesPage() {
  return (
    <>
      <Hero
        subtitle="Programmes & Mentoring"
        title="Invest in Your Growth"
        description="From one-on-one mentoring to leadership development — WiA programmes are designed to help women in aquaculture reach their full potential."
        primaryCta={{ label: 'Apply for Mentoring', href: '#apply' }}
        secondaryCta={{ label: 'Learn More', href: '#how-it-works' }}
      />

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-3">Mentoring Programme</p>
              <h2 className="font-['Thalassa'] text-3xl sm:text-4xl font-bold text-navy-800 leading-tight mb-6">
                One-on-One Mentoring with Industry Leaders
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our flagship mentoring programme pairs early- and mid-career women with experienced professionals in aquaculture. Mentors provide guidance, support and perspective — helping mentees navigate challenges, seize opportunities and grow with confidence.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Each mentoring cycle runs for six months, with structured check-ins and flexible goals tailored to each pair. Whether you want to transition into leadership, explore a new discipline or build your professional network — the programme adapts to you.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-seafoam-50 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '120+', label: 'Mentoring pairs to date' },
                  { value: '30+', label: 'Countries represented' },
                  { value: '95%', label: 'Would recommend' },
                  { value: '6 mo', label: 'Programme duration' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-navy-800">{stat.value}</div>
                    <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Simple, Structured, Supportive"
            description="Our mentoring programme is designed to be flexible enough to fit your life, yet structured enough to drive real growth."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Fill out a short application telling us about your background, goals and what you are looking for in a mentor.' },
              { step: '02', title: 'Get Matched', desc: 'We carefully match you with a mentor based on your field, career stage, goals and interests.' },
              { step: '03', title: 'Meet & Plan', desc: 'You and your mentor have an introductory session to set goals, agree on a schedule and build rapport.' },
              { step: '04', title: 'Grow', desc: 'Over six months, meet regularly, tackle challenges together and build a relationship that lasts beyond the programme.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-navy-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Eligibility"
            title="Who Can Apply?"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="font-bold text-xl text-navy-800 mb-4">As a Mentee</h3>
              <ul className="space-y-3">
                {[
                  'Women working in or entering aquaculture',
                  'Students, early-career or mid-career professionals',
                  'Open to learning and committed to the programme',
                  'Based anywhere in the world',
                  'WiA community member (free to join)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-seafoam-50 rounded-2xl p-8 border border-seafoam-100">
              <h3 className="font-bold text-xl text-navy-800 mb-4">As a Mentor</h3>
              <ul className="space-y-3">
                {[
                  'Experienced professionals in aquaculture (10+ years)',
                  'Willing to commit 2-3 hours per month for 6 months',
                  'Passionate about supporting the next generation',
                  'Open to learning from your mentee too',
                  'Based anywhere in the world',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-seafoam-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Programmes */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="More Programmes"
            title="Beyond Mentoring"
            description="We are building a suite of programmes to support women at every stage of their aquaculture career."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Leadership Accelerator', desc: 'A 12-week intensive programme for women moving into senior roles. Workshops, coaching and peer learning.', status: 'Coming 2026' },
              { title: 'Skills Workshops', desc: 'Short, practical workshops on topics like public speaking, grant writing, business planning and data literacy.', status: 'Ongoing' },
              { title: 'Regional Peer Groups', desc: 'Facilitated peer support groups for women in the same region or discipline. Meet monthly, share openly.', status: 'Ongoing' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-teal-50 text-teal-600 rounded-full mb-4">
                  {item.status}
                </span>
                <h3 className="font-bold text-xl text-navy-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="py-20 bg-gradient-to-br from-teal-50 to-seafoam-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-3">Apply Now</p>
            <h2 className="font-['Thalassa'] text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              Express Your Interest
            </h2>
            <p className="text-lg text-slate-600">
              Applications for the next mentoring cohort are open. Fill in the form below and we will be in touch.
            </p>
          </div>
          <form className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-800 mb-2">I would like to apply as a</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="radio" name="role" className="accent-teal-500" /> Mentee
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="radio" name="role" className="accent-teal-500" /> Mentor
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-800 mb-2">Tell us about your goals</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" placeholder="What do you hope to gain from the programme?" />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-sm"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <CTABanner
        title="Not Ready to Apply Yet?"
        description="Join the WiA community first and explore everything we have to offer. You can apply for programmes anytime."
        primaryCta={{ label: 'Join WiA', href: '/community' }}
      />
    </>
  );
}
