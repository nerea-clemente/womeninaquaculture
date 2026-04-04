interface PartnerLogoProps {
  name: string;
  tier?: 'platinum' | 'gold' | 'silver';
}

export default function PartnerLogo({ name, tier }: PartnerLogoProps) {
  const sizeClass = tier === 'platinum' ? 'h-14' : tier === 'gold' ? 'h-12' : 'h-10';

  return (
    <div className="flex items-center justify-center px-6 py-4 group">
      <div
        className={`${sizeClass} px-6 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-teal-500 group-hover:bg-teal-50 transition-all duration-300 border border-slate-100`}
      >
        <span className="text-sm font-semibold tracking-wide">{name}</span>
      </div>
    </div>
  );
}
