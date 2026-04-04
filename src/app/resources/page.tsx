'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import FilterChip from '@/components/FilterChip';
import CTABanner from '@/components/CTABanner';

const categories = ['All', 'Guides', 'Webinar Replays', 'Reports', 'Articles', 'Templates'];

const resources = [
  { title: 'Getting Started in Aquaculture: A Guide for Women', type: 'Guides', desc: 'A comprehensive introduction to aquaculture careers, pathways and opportunities for women entering the industry.', format: 'PDF', color: 'bg-teal-50 border-teal-100' },
  { title: 'Breaking Barriers: Women in Aquaculture Leadership (Replay)', type: 'Webinar Replays', desc: 'Watch the full recording of our panel discussion on women in leadership positions across the aquaculture sector.', format: 'Video', color: 'bg-coral-50 border-coral-100' },
  { title: 'Global Gender Gap in Aquaculture 2024 Report', type: 'Reports', desc: 'An in-depth analysis of gender representation across the aquaculture value chain, based on data from 30+ countries.', format: 'PDF', color: 'bg-sand-50 border-sand-100' },
  { title: 'How to Build a Successful Aquaculture Career', type: 'Articles', desc: 'Practical advice from five women who have built diverse careers in aquaculture — from farming to research to business.', format: 'Article', color: 'bg-seafoam-50 border-seafoam-100' },
  { title: 'Grant Application Template for Aquaculture Projects', type: 'Templates', desc: 'A ready-to-use template to help women farmers and entrepreneurs apply for funding and grants in aquaculture.', format: 'DOCX', color: 'bg-teal-50 border-teal-100' },
  { title: 'Climate Resilience in Aquaculture (Replay)', type: 'Webinar Replays', desc: 'A deep dive into how climate change affects women in aquaculture and strategies for building resilience.', format: 'Video', color: 'bg-coral-50 border-coral-100' },
  { title: 'Mentoring Best Practices Handbook', type: 'Guides', desc: 'A practical guide for mentors and mentees participating in the WiA mentoring programme.', format: 'PDF', color: 'bg-teal-50 border-teal-100' },
  { title: 'Business Plan Template for Aquaculture Startups', type: 'Templates', desc: 'A structured business plan template tailored for women launching aquaculture ventures.', format: 'DOCX', color: 'bg-seafoam-50 border-seafoam-100' },
  { title: 'The State of Women in Aquaculture Science', type: 'Reports', desc: 'A report exploring the representation and recognition of women researchers in aquaculture across academia and industry.', format: 'PDF', color: 'bg-sand-50 border-sand-100' },
];

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? resources
    : resources.filter((r) => r.type === activeFilter);

  return (
    <>
      <Hero
        subtitle="Resources"
        title="Knowledge for Growth"
        description="Explore guides, reports, webinar replays and templates curated for women in aquaculture. Free to access for WiA members."
        compact
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <FilterChip
                key={cat}
                label={cat}
                active={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
              />
            ))}
          </div>

          {/* Resource Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource) => (
              <div
                key={resource.title}
                className={`rounded-2xl p-6 border ${resource.color} hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-wider uppercase text-teal-500">{resource.type}</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white/80 text-slate-500 rounded-md border border-slate-200">
                    {resource.format}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2 leading-snug">{resource.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{resource.desc}</p>
                <button className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                  {resource.format === 'Video' ? 'Watch Now' : 'Download'}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={resource.format === 'Video' ? 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' : 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'} />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-12">No resources found for this category yet.</p>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a Resource to Share?"
        description="If you have created a guide, report or resource that could benefit women in aquaculture, we would love to hear about it."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        variant="teal"
      />
    </>
  );
}
