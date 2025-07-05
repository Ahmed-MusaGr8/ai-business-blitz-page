
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
          <div className="relative inline-block px-6 py-2 mb-3 sm:mb-4">
            {/* Corner brackets - matching Builder Pack style */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-gray-400"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-gray-400"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-gray-400"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-gray-400"></div>
            
            <span className="text-gray-400 text-sm sm:text-base font-medium tracking-wider">TIME LEFT TO SUBMIT</span>
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
