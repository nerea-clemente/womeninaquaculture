interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageColor?: string;
}

export default function TestimonialCard({ quote, name, role, imageColor = 'bg-teal-100' }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
      <svg className="w-8 h-8 text-teal-200 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
      </svg>
      <p className="text-slate-600 leading-relaxed mb-6 flex-1 italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className={`w-10 h-10 rounded-full ${imageColor} flex items-center justify-center flex-shrink-0`}>
          <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-navy-900 text-sm">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
