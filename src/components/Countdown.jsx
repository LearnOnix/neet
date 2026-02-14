import { useEffect, useState, useCallback } from "react";

export default function CompactCountdown({ targetDate }) {
  const calculateTimeLeft = useCallback(() => {
    const diff = +new Date(targetDate) - +new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60) ) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDate]);

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // Small component for each time unit
  const Box = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center min-w-[65px] sm:min-w-[80px]">
      <div 
        className="relative w-full py-2 sm:py-3 rounded-lg border border-[var(--text)]/20 bg-[var(--text)]/5 backdrop-blur-md"
        style={{ boxShadow: 'inset 0 0 10px rgba(var(--text-rgb), 0.1)' }}
      >
        <span className="block text-2xl sm:text-3xl font-bold text-center leading-none">
          {value.toString().padStart(2, '0')}
        </span>
        {/* Futuristic Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--text)]/5 to-transparent h-[1px] top-1/2 w-full opacity-30"></div>
      </div>
      <span className="text-[10px] uppercase tracking-tighter mt-1 opacity-70 font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto p-4 animate-[fadeIn_0.6s_ease-out]">
      <div className="flex flex-col items-center border-l-2 border-r-2 border-[var(--text)]/10 px-4 py-6 rounded-[2rem]">
        
        {/* Header Area */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-1 w-8 bg-[var(--text)]/40 rounded-full"></div>
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">
            System.Target: NEET
          </h3>
          <div className="h-1 w-8 bg-[var(--text)]/40 rounded-full"></div>
        </div>

        {/* The Grid - Highly Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Box value={time.days} label="Days" />
          <Box value={time.hours} label="Hours" />
          <Box value={time.minutes} label="Mins" />
          <Box value={time.seconds} label="Secs" />
        </div>

        {/* Animated Status Bar */}
        <div className="mt-6 flex items-center gap-3 w-full max-w-[200px]">
          <div className="flex-1 h-[2px] bg-[var(--text)]/10 overflow-hidden">
            <div className="h-full bg-[var(--text)] animate-[ping_2s_infinite] opacity-30"></div>
          </div>
          <span className="text-[9px] font-mono opacity-50">SYNC_ACTIVE</span>
        </div>
      </div>
    </div>
  );
}