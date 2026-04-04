import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundClass?: string;
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundClass = 'bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900',
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${backgroundClass} ${compact ? 'py-16 lg:py-24' : 'py-24 lg:py-36'}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-seafoam-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-teal-200 text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in-up">
            {subtitle}
          </p>
        )}
        <h1 className="font-['Thalasa'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-teal-100/90 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-teal-900 bg-white rounded-full hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
