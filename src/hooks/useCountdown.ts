import { useState, useEffect } from 'react';

// Use a module-level variable to keep timers in sync across the page
let targetTime: number | null = null;

export function useCountdown(minutes: number = 15) {
  // Initialize target time only once
  if (!targetTime) {
    targetTime = Date.now() + minutes * 60 * 1000;
  }

  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, Math.floor((targetTime! - Date.now()) / 1000)));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = Math.max(0, Math.floor((targetTime! - Date.now()) / 1000));
      setTimeLeft(newTimeLeft);
      if (newTimeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}
