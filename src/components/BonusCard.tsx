import { memo } from 'react';

export const BonusCard = memo(({ number, title, originalPrice, image }: { number: number; title: string; originalPrice: string; image: string }) => (
  <div className="bg-white p-6 rounded-xl border-2 border-dashed border-orange-200 relative overflow-hidden shadow-[0_10px_25px_-10px_rgba(255,90,31,0.2)] flex flex-col items-center text-center group">
    <div className="absolute top-0 right-0 bg-green-700 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
      Grátis Hoje
    </div>
    
    <div className="w-full aspect-square mb-4 flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden relative">
      <img 
        src={image} 
        alt={`Mockup do Kit Educar Lúdico - ${title}`} 
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
        loading="lazy"
        width="300"
        height="300"
      />
      <div className="absolute top-2 left-2 text-orange-800/20 font-black text-xl opacity-20">#{number}</div>
    </div>
    
    <h3 className="text-lg font-bold text-slate-900 mb-4 h-14 flex items-center justify-center leading-tight">{title}</h3>
    
    <div className="mt-auto w-full pt-4 border-t border-slate-50">
      <p className="text-slate-600 text-sm line-through decoration-red-600/50">Valor original: {originalPrice}</p>
      <p className="text-green-600 font-black text-2xl">R$ 0,00</p>
    </div>
  </div>
));
BonusCard.displayName = 'BonusCard';
