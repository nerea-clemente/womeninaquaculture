interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
  imageColor?: string;
}

export default function TeamCard({ name, role, bio, imageColor = 'bg-seafoam-100' }: TeamCardProps) {
  return (
    <div className="group text-center">
      <div className={`w-32 h-32 mx-auto rounded-full ${imageColor} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 ring-4 ring-white shadow-md`}>
        <svg className="w-12 h-12 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <h3 className="font-semibold text-navy-900 text-lg">{name}</h3>
      <p className="text-sm text-teal-600 font-medium mb-2">{role}</p>
      {bio && <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{bio}</p>}
    </div>
  );
}
