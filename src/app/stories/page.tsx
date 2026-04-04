'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import StoryCard from '@/components/StoryCard';
import FilterChip from '@/components/FilterChip';
import CTABanner from '@/components/CTABanner';

const categories = ['All', 'Leadership', 'Farming', 'Science', 'Career Journey', 'Next Generation', 'Entrepreneurship'];

const stories = [
  {
    title: 'From Marine Biologist to Shrimp Farm CEO',
    excerpt: 'After 15 years in research, Priya made the bold leap into commercial shrimp farming. Today she leads one of India\'s most sustainable operations.',
    author: 'Dr. Priya Sharma',
    role: 'CEO, Coastal Aqua Farms — India',
    category: 'Leadership',
    imageColor: 'bg-gradient-to-br from-teal-100 to-seafoam-100',
    href: '/stories/priya-sharma',
  },
  {
    title: 'Building a Seaweed Empire in Zanzibar',
    excerpt: 'Amina started with a small seaweed plot. Ten years later, her cooperative employs 200 women and exports to three continents.',
    author: 'Amina Hassan',
    role: 'Founder, Zanzibar Seaweed Co-op — Tanzania',
    category: 'Farming',
    imageColor: 'bg-gradient-to-br from-seafoam-100 to-teal-50',
    href: '/stories/amina-hassan',
  },
  {
    title: 'Cracking the Code on Salmon Genetics',
    excerpt: 'As a geneticist in Norway, Karin is developing disease-resistant salmon strains that could transform the industry.',
    author: 'Dr. Karin Lindqvist',
    role: 'Senior Researcher, Norwegian Institute of Marine Science',
    category: 'Science',
    imageColor: 'bg-gradient-to-br from-sand-100 to-coral-50',
    href: '/stories/karin-lindqvist',
  },
  {
    title: 'From University to Aquaculture Startup in 18 Months',
    excerpt: 'Fresh out of her MSc programme, Laura launched an aquaponics startup in Barcelona. Her journey has been full of surprises.',
    author: 'Laura Martínez',
    role: 'Co-Founder, AquaVerde — Spain',
    category: 'Next Generation',
    imageColor: 'bg-gradient-to-br from-coral-50 to-sand-100',
    href: '/stories/laura-martinez',
  },
  {
    title: 'Leading Change from the Inside: A Corporate Perspective',
    excerpt: 'As VP of Sustainability at a major feed company, Elise is proving that gender equity and commercial success go hand in hand.',
    author: 'Elise Pedersen',
    role: 'VP Sustainability, NordicFeed — Denmark',
    category: 'Leadership',
    imageColor: 'bg-gradient-to-br from-teal-50 to-seafoam-100',
    href: '/stories/elise-pedersen',
  },
  {
    title: 'A Tilapia Farmer\'s Story of Resilience',
    excerpt: 'After floods destroyed her farm in 2022, Grace rebuilt stronger than ever — with the help of her community and the WiA network.',
    author: 'Grace Addo',
    role: 'Tilapia Farmer & Co-op Leader — Ghana',
    category: 'Farming',
    imageColor: 'bg-gradient-to-br from-seafoam-50 to-teal-100',
    href: '/stories/grace-addo',
  },
  {
    title: 'Pioneering Sustainable Feed from Insects',
    excerpt: 'Dr. Tanaka\'s research on insect-based fish feed is opening new possibilities for sustainable aquaculture across Asia.',
    author: 'Dr. Yuki Tanaka',
    role: 'Associate Professor, University of Tokyo — Japan',
    category: 'Science',
    imageColor: 'bg-gradient-to-br from-sand-50 to-sand-200',
    href: '/stories/yuki-tanaka',
  },
  {
    title: 'My Journey from Intern to Regional Director',
    excerpt: 'Ten years ago, Chen Wei was an intern at a hatchery in Guangzhou. Today she oversees aquaculture operations across Southeast Asia.',
    author: 'Chen Wei',
    role: 'Regional Director, AquaCorp Asia',
    category: 'Career Journey',
    imageColor: 'bg-gradient-to-br from-teal-100 to-teal-50',
    href: '/stories/chen-wei',
  },
  {
    title: 'Launching a Direct-to-Consumer Oyster Brand',
    excerpt: 'Marie left her marketing career in Paris to start an oyster farm in Brittany. Her D2C brand now ships across France.',
    author: 'Marie Dupont',
    role: 'Founder, Huîtres de Marie — France',
    category: 'Entrepreneurship',
    imageColor: 'bg-gradient-to-br from-coral-50 to-seafoam-50',
    href: '/stories/marie-dupont',
  },
];

export default function StoriesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStories = activeFilter === 'All'
    ? stories
    : stories.filter((s) => s.category === activeFilter);

  const featured = stories[0];

  return (
    <>
      <Hero
        subtitle="Stories"
        title="Voices from the Water"
        description="Real stories from real women transforming aquaculture around the world. Every journey is different — and every one matters."
        primaryCta={{ label: 'Share Your Story', href: '/get-involved#share-story' }}
      />

      {/* Featured Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wider uppercase text-teal-500 mb-6">Featured Story</p>
          <StoryCard featured {...featured} />
        </div>
      </section>

      {/* All Stories */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <h2 className="font-['Thalassa'] text-3xl font-bold text-navy-800">All Stories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <FilterChip
                  key={cat}
                  label={cat}
                  active={activeFilter === cat}
                  onClick={() => setActiveFilter(cat)}
                />
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <StoryCard key={story.title} {...story} />
            ))}
          </div>
          {filteredStories.length === 0 && (
            <p className="text-center text-slate-500 py-12">No stories found for this category yet. Check back soon.</p>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a Story to Tell?"
        description="We would love to hear from you. Share your journey and inspire women in aquaculture around the world."
        primaryCta={{ label: 'Submit Your Story', href: '/get-involved#share-story' }}
        variant="navy"
      />
    </>
  );
}
