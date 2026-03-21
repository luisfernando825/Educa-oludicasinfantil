import { memo } from 'react';
import { motion } from 'motion/react';
import { type LucideIcon } from 'lucide-react';

export const BenefitCard = memo(({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-[0_10px_30px_-10px_rgba(255,90,31,0.3)]"
  >
    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-[#FF5A1F]" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
));
BenefitCard.displayName = 'BenefitCard';
