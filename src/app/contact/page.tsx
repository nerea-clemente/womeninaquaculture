'use client';

import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';

const metadata = {
  title: 'Contact — Women in Aquaculture',
  description: 'Get in touch with Women in Aquaculture — general enquiries, partnerships, media or storytelling.',
};

const contactChannels = [
  { title: 'General Enquiries', email: 'hello@womeninaquaculture.org', desc: 'Questions about WiA, membership or the community.' },
  { title: 'Partnerships', email: 'partners@womeninaquaculture.org', desc: 'Interested in partnering or sponsoring WiA initiatives.' },
  { title: 'Stories & Media', email: 'stories@womeninaquaculture.org', desc: 'Press enquiries, media collaborations or story submissions.' },
  { title: 'Programmes', email: 'programmes@womeninaquaculture.org', desc: 'Mentoring, workshops and educational programme enquiries.' },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        subtitle="Contact"
        title="We Would Love to Hear from You"
        description="Whether you have a question, a partnership idea, a story to share or just want to say hello — reach out."
        compact
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-600">
                    <option>General Enquiry</option>
                    <option>Partnership / Sponsorship</option>
                    <option>Story Submission / Media</option>
                    <option>Mentoring / Programmes</option>
                    <option>Events / Webinars</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Message</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" placeholder="Your message..." />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-navy-900 mb-6">Contact Channels</h2>
              <div className="space-y-6">
                {contactChannels.map((ch) => (
                  <div key={ch.title} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <h3 className="font-semibold text-navy-900 mb-1">{ch.title}</h3>
                    <p className="text-sm text-slate-500 mb-2">{ch.desc}</p>
                    <a href={`mailto:${ch.email}`} className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
                      {ch.email}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 bg-teal-50 rounded-xl p-5 border border-teal-100">
                <h3 className="font-semibold text-navy-900 mb-3">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {['LinkedIn', 'Instagram', 'X (Twitter)', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-teal-600 bg-white rounded-full border border-teal-200 hover:bg-teal-100 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8 bg-navy-900 rounded-xl p-5 text-white">
                <h3 className="font-semibold mb-2">Newsletter</h3>
                <p className="text-sm text-slate-300 mb-4">Get the latest from WiA in your inbox.</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <button type="submit" className="px-4 py-2 bg-teal-500 text-white text-sm font-semibold rounded-full hover:bg-teal-400 transition-colors">
                    Go
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
