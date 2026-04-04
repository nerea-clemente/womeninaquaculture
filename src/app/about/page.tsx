import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'About Us — Women in Aquaculture',
  description: 'Learn about the mission, vision and team behind Women in Aquaculture.',
};

const values = [
  { title: 'Visibility', desc: 'We believe women in aquaculture deserve to be seen, heard and recognised for their contributions.' },
  { title: 'Community', desc: 'We are stronger together. Connection across borders, disciplines and career stages drives everything we do.' },
  { title: 'Equity', desc: 'We advocate for fair representation, equal opportunity and inclusive leadership in aquaculture.' },
  { title: 'Excellence', desc: 'We set a high bar for everything — from our content and events to how we support our members.' },
  { title: 'Integrity', desc: 'We are transparent, honest and accountable in how we operate and partner with others.' },
  { title: 'Impact', desc: 'We measure success not by noise but by real change — more women leading, learning and thriving.' },
];

const team = [
  { name: 'Dr. Ana Rivera', role: 'Founder & CEO', bio: 'Marine biologist turned aquaculture advocate with 20 years in the industry across Latin America and Europe.', imageColor: 'bg-teal-100' },
  { name: 'Ingrid Haugen', role: 'Head of Partnerships', bio: 'Former business development director at a Nordic aquaculture company. Passionate about corporate-NGO collaboration.', imageColor: 'bg-seafoam-100' },
  { name: 'Fatima Al-Rashid', role: 'Community Director', bio: 'Community builder and communications expert from the Middle East with a background in sustainable fisheries.', imageColor: 'bg-sand-100' },
  { name: 'Dr. Mei Lin Chen', role: 'Research Lead', bio: 'Aquaculture geneticist and published researcher based in Singapore. Focused on evidence-based impact.', imageColor: 'bg-coral-50' },
  { name: 'Amara Osei', role: 'Mentoring Lead', bio: 'Tilapia farmer from Ghana who built a cooperative of over 100 women farmers. Now helps others do the same.', imageColor: 'bg-teal-50' },
  { name: 'Sofia Bergström', role: 'Events & Content', bio: 'Journalist and event producer from Sweden. Believes in the power of storytelling to drive change.', imageColor: 'bg-seafoam-50' },
  { name: 'Dr. Nkechi Adeyemi', role: 'Education Lead', bio: 'University lecturer in aquaculture from Nigeria. Champions accessible learning and skills development.', imageColor: 'bg-sand-50' },
  { name: 'Lucia Torres', role: 'Operations & Finance', bio: 'Non-profit operations specialist from Chile. Keeps WiA running smoothly behind the scenes.', imageColor: 'bg-teal-100' },
];

const timeline = [
  { year: '2021', event: 'The idea for WiA is born during a conversation between women at an aquaculture conference.' },
  { year: '2022', event: 'First community group launched with 150 members. First webinar series with over 500 live attendees.' },
  { year: '2023', event: 'WiA officially registers as a non-profit. Mentoring programme pilot with 40 pairs across 12 countries.' },
  { year: '2024', event: 'Community grows to 2,000+ members. First industry partnerships. Stories platform launches.' },
  { year: '2025', event: 'International expansion. New programmes, deeper partnerships and a growing global voice for women in aquaculture.' },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        subtitle="About Us"
        title="Why WiA Exists"
        description="Women make up half the aquaculture workforce worldwide — yet remain underrepresented in leadership, research recognition and industry decision-making. We are here to change that."
        primaryCta={{ label: 'Join the Community', href: '/community' }}
        secondaryCta={{ label: 'Meet Our Partners', href: '/partners' }}
      />

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-3">Our Mission</p>
              <h2 className="font-['Thalassa'] text-3xl font-bold text-navy-800 mb-6">
                To support, connect and elevate women across aquaculture worldwide.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Women in Aquaculture (WiA) is a global non-profit organisation dedicated to creating visibility, community and opportunity for women working in aquaculture. From smallholder farmers and scientists to entrepreneurs and industry leaders — we exist so that no woman in aquaculture has to build her career alone.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-3">Our Vision</p>
              <h2 className="font-['Thalassa'] text-3xl font-bold text-navy-800 mb-6">
                A world where women lead, shape and thrive in aquaculture.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We envision an aquaculture industry where gender is no barrier to leadership, innovation or recognition. Where women are equally represented in boardrooms, research labs, policy meetings and on the farm. Where every woman has access to the networks, knowledge and support she needs to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes WiA Different */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What Sets Us Apart"
            title="Not Just Another Network"
            description="WiA is built specifically for aquaculture — by women who know the industry, the challenges and the opportunities."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Industry-Specific', desc: 'We focus exclusively on aquaculture. Our programmes, content and community are tailored to the realities of this industry — not a generic template.' },
              { title: 'Globally Inclusive', desc: 'From Norwegian salmon farms to Bangladeshi shrimp ponds, from university labs to executive suites — WiA represents the full diversity of women in aquaculture.' },
              { title: 'Action-Oriented', desc: 'We don\'t just talk about change. We build programmes, create platforms and forge partnerships that deliver real results for women in the sector.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h3 className="font-bold text-xl text-navy-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val) => (
              <div key={val.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">{val.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-teal-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="From Idea to Movement"
            description="WiA started with a simple question: why isn't there a dedicated global platform for women in aquaculture?"
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-teal-200" />
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.year} className="relative flex gap-6 pl-4">
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 z-10 ring-4 ring-teal-50/50">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="pb-8">
                      <span className="text-sm font-bold text-teal-600">{item.year}</span>
                      <p className="text-slate-600 mt-1 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Meet the People Behind WiA"
            description="We are a diverse, passionate team of women from across the aquaculture industry — united by a shared mission."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Join Our Mission?"
        description="Whether you are a member, a partner or a supporter — there is a place for you at WiA."
        primaryCta={{ label: 'Join the Community', href: '/community' }}
        secondaryCta={{ label: 'Become a Partner', href: '/partners' }}
      />
    </>
  );
}
