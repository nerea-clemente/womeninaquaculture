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
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
          <div className={`aspect-[4/3] md:aspect-auto ${imageColor} flex items-center justify-center`}>
            <div className="text-6xl opacity-30">📸</div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-teal-500 mb-3">
              {category}
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
              {title}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">{excerpt}</p>
            <div className="mt-auto">
              <p className="font-semibold text-navy-900">{author}</p>
              <p className="text-sm text-slate-500">{role}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <div className={`aspect-[4/3] ${imageColor} flex items-center justify-center`}>
          <div className="text-4xl opacity-30">📸</div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-teal-500 mb-2">
            {category}
          </span>
          <h3 className="font-semibold text-lg text-navy-900 mb-2 group-hover:text-teal-600 transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{excerpt}</p>
          <div className="mt-auto pt-4 border-t border-slate-100">
            <p className="text-sm font-semibold text-navy-900">{author}</p>
            <p className="text-xs text-slate-500">{role}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
