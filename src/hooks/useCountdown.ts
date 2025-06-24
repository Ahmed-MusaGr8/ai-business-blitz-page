
import { useState, useEffect, useCallback } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    console.log('Countdown calculation:', {
      now: new Date(now).toISOString(),
      target: new Date(target).toISOString(),
      difference,
      targetDate
    });

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  useEffect(() => {
    // Calculate initial time
    const initialTime = calculateTimeLeft();
    setTimeLeft(initialTime);
    console.log('Initial countdown time:', initialTime);

    // Update every second
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
};
