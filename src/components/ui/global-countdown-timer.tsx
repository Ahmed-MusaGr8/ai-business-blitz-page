
"use client";

import { useState, useEffect } from "react";

const GlobalCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a fixed future date (65 days from a specific date)
    // Using January 1, 2025 as the base date for consistency
    const targetDate = new Date('2025-03-07T00:00:00Z').getTime(); // 65 days from Jan 1, 2025
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateTimer();
    
    // Update every second
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="w-full bg-black py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <div className="inline-block border border-white/30 px-4 py-2 rounded-sm mb-4">
            <span className="text-white/70 text-sm tracking-wider uppercase">TIME LEFT TO SUBMIT</span>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4 text-white">
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold tracking-tight">
              {formatNumber(timeLeft.days)}D
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold tracking-tight">
              {formatNumber(timeLeft.hours)}H
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold tracking-tight">
              {formatNumber(timeLeft.minutes)}M
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold tracking-tight">
              {formatNumber(timeLeft.seconds)}S
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCountdownTimer;
