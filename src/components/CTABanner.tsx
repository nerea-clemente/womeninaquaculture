import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'teal' | 'navy' | 'sand';
}

export default function CTABanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'teal',
}: CTABannerProps) {
  const bgClasses = {
    teal: 'bg-gradient-to-br from-teal-600 to-teal-800',
    navy: 'bg-gradient-to-br from-navy-800 to-navy-900',
    sand: 'bg-gradient-to-br from-sand-50 to-sand-100',
  };

  const textColor = variant === 'sand' ? 'text-navy-900' : 'text-white';
  const descColor = variant === 'sand' ? 'text-slate-600' : 'text-white/80';

  return (
    <section className={`${bgClasses[variant]} relative overflow-hidden`}>
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        <h2 className={`font-['Playfair_Display'] text-3xl sm:text-4xl font-bold ${textColor} mb-4`}>
          {title}
        </h2>
        <p className={`max-w-xl mx-auto text-lg ${descColor} mb-8`}>{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
              variant === 'sand'
                ? 'bg-teal-500 text-white hover:bg-teal-600'
                : 'bg-white text-teal-900 hover:bg-teal-50'
            }`}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-full border-2 transition-all ${
                variant === 'sand'
                  ? 'border-navy-900/20 text-navy-900 hover:bg-navy-900/5'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
