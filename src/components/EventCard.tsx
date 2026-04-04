import Link from 'next/link';

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  description: string;
  speaker?: string;
  memberOnly?: boolean;
  past?: boolean;
  href: string;
}

export default function EventCard({
  title,
  date,
  time,
  description,
  speaker,
  memberOnly = false,
  past = false,
  href,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-xl bg-teal-50 flex flex-col items-center justify-center border border-teal-100">
            <span className="text-xs font-semibold text-teal-600 uppercase leading-none">
              {date.split(' ')[0]}
            </span>
            <span className="text-lg font-bold text-navy-800 leading-none mt-0.5">
              {date.split(' ')[1]}
            </span>
          </div>
          <div>
            <p className="text-sm text-slate-500">{date}</p>
            {time && <p className="text-xs text-slate-400">{time}</p>}
          </div>
        </div>
        {memberOnly && (
          <span className="px-2.5 py-1 text-xs font-semibold bg-gold-100 text-gold-500 rounded-full">
            Members
          </span>
        )}
        {past && (
          <span className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-500 rounded-full">
            Replay
          </span>
        )}
      </div>

      <h3 className="font-semibold text-lg text-navy-800 mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{description}</p>

      {speaker && (
        <p className="text-sm text-slate-500 mb-4">
          <span className="font-medium text-navy-800">Speaker:</span> {speaker}
        </p>
      )}

      <Link
        href={href}
        className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full transition-colors mt-auto ${
          past
            ? 'text-teal-600 bg-teal-50 hover:bg-teal-100 border border-teal-200'
            : 'text-white bg-teal-500 hover:bg-teal-600'
        }`}
      >
        {past ? 'Watch Replay' : 'Register Now'}
      </Link>
    </div>
  );
}
