
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

    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Countdown calculation:', {
        now: new Date(now).toISOString(),
        target: new Date(target).toISOString(),
        difference,
        targetDate,
        isValid: !isNaN(target)
      });
    }

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return { days, hours, minutes, seconds };
    }
    
    // If target date is in the past, return zeros
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  useEffect(() => {
    // Validate target date
    const target = new Date(targetDate);
    if (isNaN(target.getTime())) {
      console.error('Invalid target date provided to countdown:', targetDate);
      return;
    }

    // Calculate initial time immediately
    const initialTime = calculateTimeLeft();
    setTimeLeft(initialTime);

    // Set up interval to update every second
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(prevTime => {
        // Only update if values actually changed to prevent unnecessary re-renders
        if (
          prevTime.days !== newTime.days ||
          prevTime.hours !== newTime.hours ||
          prevTime.minutes !== newTime.minutes ||
          prevTime.seconds !== newTime.seconds
        ) {
          return newTime;
        }
        return prevTime;
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => {
      clearInterval(timer);
    };
  }, [calculateTimeLeft, targetDate]);

  return timeLeft;
};
