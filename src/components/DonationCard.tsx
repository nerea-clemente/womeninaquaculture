'use client';

interface DonationCardProps {
  amount: number;
  label: string;
  description: string;
  popular?: boolean;
}

export default function DonationCard({ amount, label, description, popular = false }: DonationCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 border-2 transition-all cursor-pointer hover:shadow-lg hover:-translate-y-1 ${
        popular
          ? 'border-teal-500 bg-teal-50/50 shadow-md'
          : 'border-slate-200 bg-white hover:border-teal-300'
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-teal-500 text-white rounded-full">
          Most Popular
        </span>
      )}
      <div className="text-center">
        <p className="text-3xl font-bold text-navy-900 mb-1">
          €{amount}
          <span className="text-base font-normal text-slate-400">/mo</span>
        </p>
        <p className="font-semibold text-teal-600 mb-2">{label}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
