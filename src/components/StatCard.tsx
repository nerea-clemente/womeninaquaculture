interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-500 mb-4">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-navy-800 mb-2">{value}</div>
      <p className="text-sm text-slate-500 text-center leading-snug">{label}</p>
    </div>
  );
}
