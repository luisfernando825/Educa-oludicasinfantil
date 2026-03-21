import { memo } from 'react';
import { useCountdown } from '../hooks/useCountdown';

export const PricingCountdown = memo(() => {
  const timeLeft = useCountdown(15);

  return (
    <div className="flex justify-center items-center gap-2 md:gap-4">
      <div className="bg-orange-800 rounded-2xl p-3 md:p-4 w-20 md:w-24 flex flex-col items-center justify-center border border-orange-500/30 shadow-inner">
        <span className="text-4xl md:text-5xl font-black text-white tracking-tighter" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>00</span>
        <span className="text-[10px] md:text-xs font-bold text-orange-200 mt-1 uppercase tracking-wider">Horas</span>
      </div>
      <div className="text-3xl md:text-4xl font-black text-white/80 animate-pulse">:</div>
      <div className="bg-orange-800 rounded-2xl p-3 md:p-4 w-20 md:w-24 flex flex-col items-center justify-center border border-orange-500/30 shadow-inner">
        <span className="text-4xl md:text-5xl font-black text-white tracking-tighter" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>{Math.floor(timeLeft / 60).toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-xs font-bold text-orange-200 mt-1 uppercase tracking-wider">Min</span>
      </div>
      <div className="text-3xl md:text-4xl font-black text-white/80 animate-pulse">:</div>
      <div className="bg-orange-800 rounded-2xl p-3 md:p-4 w-20 md:w-24 flex flex-col items-center justify-center border border-orange-500/30 shadow-inner">
        <span className="text-4xl md:text-5xl font-black text-white tracking-tighter" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>{(timeLeft % 60).toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-xs font-bold text-orange-200 mt-1 uppercase tracking-wider">Seg</span>
      </div>
    </div>
  );
});

PricingCountdown.displayName = 'PricingCountdown';
