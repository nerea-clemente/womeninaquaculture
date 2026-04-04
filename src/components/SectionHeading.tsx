interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {label && (
        <p className={`text-sm font-semibold tracking-wider uppercase mb-3 ${dark ? 'text-teal-300' : 'text-teal-500'}`}>
          {label}
        </p>
      )}
      <h2 className={`font-['Playfair_Display'] text-3xl sm:text-4xl font-bold leading-tight mb-4 ${dark ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
