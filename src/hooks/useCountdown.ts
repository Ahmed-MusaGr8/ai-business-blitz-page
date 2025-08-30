
import { useState, useEffect, useCallback, useRef } from 'react';

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
  
  const targetTimeRef = useRef<number>();
  const animationFrameRef = useRef<number>();

  const calculateTimeLeft = useCallback(() => {
    const now = Date.now();
    const target = targetTimeRef.current;
    if (!target) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    const difference = target - now;

    if (difference > 0) {
      const days = Math.floor(difference / 86400000); // 1000 * 60 * 60 * 24
      const hours = Math.floor((difference % 86400000) / 3600000); // 1000 * 60 * 60
      const minutes = Math.floor((difference % 3600000) / 60000); // 1000 * 60
      const seconds = Math.floor((difference % 60000) / 1000);
      
      return { days, hours, minutes, seconds };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, []);

  const updateCountdown = useCallback(() => {
    const newTime = calculateTimeLeft();
    setTimeLeft(prevTime => {
      // Only update if values actually changed
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
    
    // Use requestAnimationFrame for smoother updates
    animationFrameRef.current = requestAnimationFrame(() => {
      setTimeout(updateCountdown, 1000);
    });
  }, [calculateTimeLeft]);

  useEffect(() => {
    const target = new Date(targetDate);
    if (isNaN(target.getTime())) {
      console.error('Invalid target date provided to countdown:', targetDate);
      return;
    }

    targetTimeRef.current = target.getTime();
    
    // Calculate initial time immediately
    const initialTime = calculateTimeLeft();
    setTimeLeft(initialTime);

    // Start the update cycle
    updateCountdown();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [calculateTimeLeft, updateCountdown, targetDate]);

  return timeLeft;
};
