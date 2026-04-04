'use client';

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function FilterChip({ label, active = false, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
        active
          ? 'bg-teal-500 text-white shadow-sm'
          : 'bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-600'
      }`}
    >
      {label}
    </button>
  );
}
