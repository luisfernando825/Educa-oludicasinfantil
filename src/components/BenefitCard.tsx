import { memo } from 'react';
import { type LucideIcon } from 'lucide-react';

export const BenefitCard = memo(({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <div 
    className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-md"
  >
    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-[#FF5A1F]" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
));
BenefitCard.displayName = 'BenefitCard';
