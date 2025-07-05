
"use client";

import { useCountdown } from "@/hooks/useCountdown";

const GlobalCountdownTimer = () => {
  // Set target date to December 31, 2025 - a future date that will actually count down
  const timeLeft = useCountdown('2025-12-31T23:59:59Z');

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="w-full bg-black py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 sm:mb-8">
          <div className="relative inline-block px-3 sm:px-4 py-2 mb-3 sm:mb-4">
            {/* Corner brackets */}
            <div className="absolute -top-2 -left-2 w-4 sm:w-6 h-4 sm:h-6 border-l-2 border-t-2 border-white/30"></div>
            <div className="absolute -top-2 -right-2 w-4 sm:w-6 h-4 sm:h-6 border-r-2 border-t-2 border-white/30"></div>
            <div className="absolute -bottom-2 -left-2 w-4 sm:w-6 h-4 sm:h-6 border-l-2 border-b-2 border-white/30"></div>
            <div className="absolute -bottom-2 -right-2 w-4 sm:w-6 h-4 sm:h-6 border-r-2 border-b-2 border-white/30"></div>
            
            <span className="text-white/70 text-xs sm:text-sm tracking-wider uppercase">TIME LEFT TO SUBMIT</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 text-white">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight">
              {formatNumber(timeLeft.days)}D
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight">
              {formatNumber(timeLeft.hours)}H
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight">
              {formatNumber(timeLeft.minutes)}M
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight">
              {formatNumber(timeLeft.seconds)}S
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCountdownTimer;
