'use client';

import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import CTABanner from '@/components/CTABanner';

const metadata = {
  title: 'Community — Women in Aquaculture',
  description: 'Join the WiA community — a global network of women in aquaculture connecting, learning and growing together.',
};

const benefits = [
  { title: 'Global Network', desc: 'Connect with women in aquaculture across 45+ countries — from farms and labs to boardrooms and startups.', icon: '🌍' },
  { title: 'Events & Webinars', desc: 'Access exclusive webinars, workshops and networking events — both online and in person.', icon: '📅' },
  { title: 'Mentoring', desc: 'Apply for our mentoring programme and get paired with an experienced leader in your field.', icon: '🎯' },
  { title: 'Stories & Visibility', desc: 'Share your story, celebrate your achievements and inspire others in the community.', icon: '✨' },
  { title: 'Resources', desc: 'Access guides, reports, webinar replays and career resources curated for women in aquaculture.', icon: '📚' },
  { title: 'Peer Support', desc: 'Join discipline-specific groups and connect with peers who understand your challenges and ambitions.', icon: '🤝' },
];

const testimonials = [
  {
    quote: 'WiA gave me a community I didn\'t know I needed. For the first time in my career, I felt seen and supported by women who truly understand aquaculture.',
    name: 'Dr. Lucia Fernandez',
    role: 'Aquaculture Researcher, Chile',
    imageColor: 'bg-teal-100',
  },
  {
    quote: 'Through WiA\'s mentoring programme, I connected with a mentor who helped me navigate my transition from academia to industry. It changed my career trajectory.',
    name: 'Aisha Bello',
    role: 'Feed Technologist, Nigeria',
    imageColor: 'bg-seafoam-100',
  },
  {
    quote: 'As a young farmer, I often felt isolated. The WiA community showed me that there are thousands of women like me around the world — and we have a powerful collective voice.',
    name: 'Thuy Nguyen',
    role: 'Shrimp Farmer, Vietnam',
    imageColor: 'bg-sand-100',
  },
];

export default function CommunityPage() {
  return (
    <>
      <Hero
        subtitle="Community"
        title="Where Women in Aquaculture Belong"
        description="Join a growing global community of women working across aquaculture — from farming and science to leadership and entrepreneurship. You are not alone."
        primaryCta={{ label: 'Join the Community', href: '#join' }}
        secondaryCta={{ label: 'Learn More', href: '#benefits' }}
      />

      {/* Who It's For */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Who It's For"
            title="A Space for Every Woman in Aquaculture"
            description="Whether you are a student, a farmer, a scientist, a founder or an industry leader — this community is for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: 'Farmers & Producers', desc: 'Women running fish, shrimp, seaweed and shellfish farms around the world.' },
              { role: 'Scientists & Researchers', desc: 'Geneticists, ecologists, nutritionists and biologists advancing aquaculture knowledge.' },
              { role: 'Students & Early-Career', desc: 'The next generation of women entering and building their careers in aquaculture.' },
              { role: 'Leaders & Entrepreneurs', desc: 'Women leading companies, departments and initiatives across the sector.' },
            ].map((item) => (
              <div key={item.role} className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="font-semibold text-navy-800 mb-2">{item.role}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Membership Benefits"
            title="What You Get as a WiA Member"
            description="Being part of the WiA community gives you access to a world of connection, learning and opportunity."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-navy-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="From Our Members"
            title="What Women Are Saying"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section id="join" className="py-20 bg-gradient-to-br from-teal-50 to-seafoam-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-3">Join Us</p>
            <h2 className="font-['Thalassa'] text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              Become a WiA Member
            </h2>
            <p className="text-lg text-slate-600">
              Joining WiA is free. Fill in the form below and you will be part of the community within 24 hours.
            </p>
          </div>
          <form className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your first name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your last name" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-800 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-800 mb-2">Country</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Where are you based?" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-800 mb-2">Role / Area</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-600">
                <option>Select your primary area</option>
                <option>Farming / Production</option>
                <option>Science / Research</option>
                <option>Feed / Nutrition</option>
                <option>Technology / Innovation</option>
                <option>Business / Leadership</option>
                <option>Policy / Sustainability</option>
                <option>Student / Early Career</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-800 mb-2">How did you hear about WiA?</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Conference, social media, friend..." />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-sm text-base"
            >
              Join WiA Community
            </button>
            <p className="text-xs text-slate-400 text-center">
              By joining, you agree to our terms of service and privacy policy.
            </p>
          </form>
        </div>
      </section>

      <CTABanner
        title="Know Someone Who Should Join?"
        description="Share WiA with a colleague, student or friend in aquaculture. The more women we connect, the stronger we become."
        primaryCta={{ label: 'Share WiA', href: '#' }}
        variant="navy"
      />
    </>
  );
}
