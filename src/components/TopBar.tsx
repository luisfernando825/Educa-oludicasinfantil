import { memo } from 'react';
import { useCountdown } from '../hooks/useCountdown';

export const TopBar = memo(() => {
  const timeLeft = useCountdown(15);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-orange-700 text-white py-2 px-4 text-center text-sm font-bold tracking-wide">
      OFERTA POR TEMPO LIMITADO: {formatTime(timeLeft)} RESTANTES
    </div>
  );
});

TopBar.displayName = 'TopBar';
