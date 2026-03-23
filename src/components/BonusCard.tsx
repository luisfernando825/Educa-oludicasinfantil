import { memo } from 'react';

export const BonusCard = memo(({ number, title, originalPrice, image }: { number: number; title: string; originalPrice: string; image: string }) => (
  <div className="bg-white p-4 rounded-xl border-2 border-dashed border-orange-200 relative overflow-hidden shadow-sm flex flex-col items-center text-center">
    <div className="absolute top-0 right-0 bg-green-700 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
      Grátis Hoje
    </div>
    
    <div className="w-full aspect-square mb-3 flex items-center justify-center bg-white rounded-lg overflow-hidden relative p-6">
      <img 
        src={image} 
        alt={`Mockup do Kit Educar Lúdico - ${title}`} 
        className="w-full h-full object-contain drop-shadow-md"
        referrerPolicy="no-referrer"
        loading="lazy"
        width="192"
        height="192"
      />
    </div>
    
    <h3 className="text-base font-bold text-slate-900 mb-3 h-12 flex items-center justify-center leading-tight">{title}</h3>
    
    <div className="mt-auto w-full pt-3 border-t border-slate-100">
      <p className="text-slate-600 text-xs line-through decoration-red-600/50">Valor original: {originalPrice}</p>
      <p className="text-green-600 font-black text-xl">R$ 0,00</p>
    </div>
  </div>
));
BonusCard.displayName = 'BonusCard';
