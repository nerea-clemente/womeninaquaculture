import Link from 'next/link';

interface StoryCardProps {
  title: string;
  excerpt: string;
  author: string;
  role: string;
  category: string;
  imageColor?: string;
  href: string;
  featured?: boolean;
}

export default function StoryCard({
  title,
  excerpt,
  author,
  role,
  category,
  imageColor = 'bg-teal-100',
  href,
  featured = false,
}: StoryCardProps) {
  if (featured) {
    return (
      <Link href={href} className="group block">
        <div className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
          <div className={`aspect-[4/3] md:aspect-auto ${imageColor} flex items-center justify-center`}>
            <svg className="w-24 h-24 text-teal-300/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-teal-500 mb-3">
              {category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-coral-400 mb-3 group-hover:text-coral-500 transition-colors">
              {title}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">{excerpt}</p>
            <div className="mt-auto">
              <p className="font-semibold text-navy-800">{author}</p>
              <p className="text-sm text-slate-500">{role}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <div className={`aspect-[4/3] ${imageColor} flex items-center justify-center`}>
          <svg className="w-16 h-16 text-teal-300/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-teal-500 mb-2">
            {category}
          </span>
          <h3 className="font-semibold text-lg text-navy-800 mb-2 group-hover:text-teal-500 transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{excerpt}</p>
          <div className="mt-auto pt-4 border-t border-slate-100">
            <p className="text-sm font-semibold text-navy-800">{author}</p>
            <p className="text-xs text-slate-500">{role}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
