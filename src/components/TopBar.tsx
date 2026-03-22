import { memo } from 'react';

export const TopBar = memo(() => {
  return (
    <div className="bg-orange-700 text-white py-2 px-4 text-center text-sm font-bold tracking-wide">
      🔥 PROMOÇÃO RELÂMPAGO: De R$ 12,90 por R$ 9,90 - APENAS HOJE!
    </div>
  );
});

TopBar.displayName = 'TopBar';
