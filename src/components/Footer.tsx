'use client';

import Link from 'next/link';

const footerLinks = {
  'About WiA': [
    { name: 'Our Mission', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ],
  Community: [
    { name: 'Join WiA', href: '/community' },
    { name: 'Stories', href: '/stories' },
    { name: 'Events & Webinars', href: '/events' },
    { name: 'Mentoring', href: '/programmes' },
  ],
  'Get Involved': [
    { name: 'Become a Partner', href: '/partners#become-partner' },
    { name: 'Donate', href: '/donate' },
    { name: 'Share Your Story', href: '/get-involved#share-story' },
    { name: 'Volunteer', href: '/get-involved' },
  ],
  Resources: [
    { name: 'Resource Library', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Media Enquiries', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white mt-auto">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-1">Stay connected with WiA</h3>
              <p className="text-slate-300 text-sm">
                Join our newsletter for stories, events and opportunities.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-teal-500 text-white text-sm font-semibold rounded-full hover:bg-teal-400 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-teal-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M6 12c1-3 3-5 6-5s5 2 6 5" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white">Women in Aquaculture</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Social Links */}
            {['LinkedIn', 'Instagram', 'X', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-slate-400 hover:text-teal-300 transition-colors text-sm"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Women in Aquaculture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
