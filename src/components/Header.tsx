'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Community', href: '/community' },
  { name: 'Stories', href: '/stories' },
  { name: 'Events', href: '/events' },
  { name: 'Programmes', href: '/programmes' },
  { name: 'Partners', href: '/partners' },
  { name: 'Get Involved', href: '/get-involved' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center group-hover:bg-teal-600 transition-colors">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M6 12c1-3 3-5 6-5s5 2 6 5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-navy-900 leading-tight tracking-tight">
                Women in Aquaculture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/donate"
              className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded-full hover:bg-teal-600 transition-colors shadow-sm"
            >
              Join WiA
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-slate-600 hover:text-teal-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-2 border-slate-100" />
              <Link
                href="/donate"
                className="px-3 py-2.5 text-base font-medium text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate
              </Link>
              <Link
                href="/community"
                className="mt-2 inline-flex items-center justify-center px-4 py-2.5 text-base font-semibold text-white bg-teal-500 rounded-full hover:bg-teal-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join WiA Community
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
