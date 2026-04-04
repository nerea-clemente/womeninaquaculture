import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import EventCard from '@/components/EventCard';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Events & Webinars — Women in Aquaculture',
  description: 'Join WiA events and webinars — live conversations, panels and workshops for women in aquaculture.',
};

const upcomingEvents = [
  {
    title: 'Breaking Barriers: Women in Aquaculture Leadership',
    date: 'Apr 24',
    time: '14:00 CET / 09:00 EST',
    description: 'An honest conversation with four women leading aquaculture companies across three continents.',
    speaker: 'Panel: Dr. Ana Rivera, Ingrid Haugen, Mei Lin Chen, Amara Osei',
    href: '/events/leadership-webinar',
  },
  {
    title: 'From Lab to Farm: Bridging Research and Practice',
    date: 'May 15',
    time: '16:00 CET / 10:00 EST',
    description: 'How can research better serve farmers? A discussion on translating science into real-world impact for women in aquaculture.',
    speaker: 'Dr. Yuki Tanaka & Dr. Nkechi Adeyemi',
    href: '/events/lab-to-farm',
  },
  {
    title: 'WiA Networking Hour: Connect & Collaborate',
    date: 'Jun 5',
    time: '18:00 CET / 12:00 EST',
    description: 'An informal, facilitated networking session for WiA members. Meet women in your field, across the globe.',
    memberOnly: true,
    href: '/events/networking-hour',
  },
  {
    title: 'Funding & Scaling: A Workshop for Women Founders',
    date: 'Jun 20',
    time: '15:00 CET / 09:00 EST',
    description: 'Practical guidance on securing funding, scaling operations and building sustainable aquaculture businesses.',
    speaker: 'Laura Martínez & Marie Dupont',
    memberOnly: true,
    href: '/events/funding-workshop',
  },
];

const pastEvents = [
  {
    title: 'Women Who Farm: Stories from Five Continents',
    date: 'Mar 12',
    description: 'Five women farmers shared their experiences of building livelihoods in aquaculture — from Vietnam to Ghana to Chile.',
    speaker: 'Thuy Nguyen, Grace Addo, Lucia Torres, Amina Hassan, Chen Wei',
    past: true,
    href: '/events/women-who-farm',
  },
  {
    title: 'Climate Resilience in Aquaculture: A Gender Lens',
    date: 'Feb 18',
    description: 'Exploring how climate change disproportionately affects women in aquaculture and what we can do about it.',
    speaker: 'Dr. Karin Lindqvist & Prof. Sarah Ochieng',
    past: true,
    href: '/events/climate-resilience',
  },
  {
    title: 'Mentoring Kickoff 2025: Meet Your Mentors',
    date: 'Jan 25',
    description: 'The official launch of the 2025 mentoring programme cohort with introductions and goal-setting.',
    past: true,
    memberOnly: true,
    href: '/events/mentoring-kickoff',
  },
];

export default function EventsPage() {
  return (
    <>
      <Hero
        subtitle="Events & Webinars"
        title="Learn, Grow, Connect"
        description="From expert-led webinars and panels to networking sessions and workshops — WiA events bring the community together."
        primaryCta={{ label: 'Join the Community', href: '/community' }}
      />

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Coming Up"
            title="Upcoming Events"
            description="Register now and save your spot. Some events are open to everyone, others are exclusive to WiA members."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Catch Up"
            title="Past Events & Replays"
            description="Missed a session? Catch up on past webinars and events from the WiA archive."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Host / Suggest */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Collaborate"
            title="Want to Host or Suggest an Event?"
            description="We are always looking for speakers, topics and collaborators. If you have an idea for a webinar, workshop or event — we would love to hear from you."
          />
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white bg-teal-500 rounded-full hover:bg-teal-600 transition-colors shadow-sm"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <CTABanner
        title="Never Miss an Event"
        description="Join the WiA community and get notified about upcoming events, webinars and networking opportunities."
        primaryCta={{ label: 'Join WiA', href: '/community' }}
        variant="navy"
      />
    </>
  );
}
