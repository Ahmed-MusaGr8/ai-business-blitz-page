
"use client";

import { useCountdown } from "@/hooks/useCountdown";

const GlobalCountdownTimer = () => {
  // Set target date to March 7, 2025
  const timeLeft = useCountdown('2025-03-07T00:00:00Z');

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
