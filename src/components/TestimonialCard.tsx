import { memo } from 'react';
import { Star } from 'lucide-react';

export const TestimonialCard = memo(({ name, role, text, image }: { name: string; role: string; text: string; image: string }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-md">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
      ))}
    </div>
    <p className="text-slate-700 italic mb-6">"{text}"</p>
    <div className="flex items-center gap-4">
      <img 
        src={image} 
        alt={`Foto de ${name}`} 
        className="w-12 h-12 rounded-full object-cover" 
        referrerPolicy="no-referrer" 
        loading="lazy" 
        width="48" 
        height="48"
      />
      <div>
        <h5 className="font-bold text-slate-900">{name}</h5>
        <p className="text-sm text-slate-600">{role}</p>
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';
