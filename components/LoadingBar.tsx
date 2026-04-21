'use client';

import { useEffect, useState, useRef } from 'react';

interface LoadingBarProps {
  duration?: number;
  target?: number;
  onComplete?: () => void;
}

export default function LoadingBar({
  duration = 2200,
  target = 100,
  onComplete,
}: LoadingBarProps) {
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const raw = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - raw, 3);
      const current = Math.floor(eased * target);
      setProgress(current);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(target);
        onComplete?.();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [duration, target, onComplete]);

  const percentage = target > 0 ? (progress / target) * 100 : 0;

  return (
    <div className="flex flex-col items-center gap-3 select-none">
      {/* Label */}
      <span
        className="text-[15px] font-medium tracking-wide text-[#e84e1b] uppercase"
      >
        Loading ...
      </span>

      {/* Bar container */}
      <div className="relative w-72 h-[15px]">
        {/* Track */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #3a3a3a, #555)',
            boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.7), inset 0 -1px 2px rgba(255,255,255,0.05)',
          }}
        >
          {/* Filled portion */}
          <div
            className="h-full rounded-full transition-none relative overflow-hidden"
            style={{
              width: `${percentage}%`,
              background:
                'linear-gradient(to bottom, #e84e1b 0%, #e84e1b 45%, #e84e1b 55%, #e84e1b 100%)',
              boxShadow: '0 0 8px 1px rgba(245,166,35,0.55)',
            }}
          >
            {/* Shine streak */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 50%, transparent 51%)',
                borderRadius: 'inherit',
              }}
            />
            {/* Moving shimmer */}
            <div
              className="absolute top-0 bottom-0 w-12"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)',
                animation: 'shimmer 1.4s linear infinite',
                left: '-3rem',
              }}
            />
          </div>
        </div>

        {/* Outer border/bezel */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow:
              '0 0 0 1.5px rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.6)',
          }}
        />
      </div>

      {/* Percentage */}
      <span
        className="text-[14px] font-semibold tabular-nums text-[#e84e1b]"
      >
        {progress} %
      </span>

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(0); }
          100% { transform: translateX(21rem); }
        }
      `}</style>
    </div>
  );
}