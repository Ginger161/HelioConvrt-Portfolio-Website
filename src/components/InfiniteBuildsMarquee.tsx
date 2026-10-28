import type { ReactNode } from 'react';

interface InfiniteBuildsMarqueeProps {
  items: ReactNode[];
  speed?: number;
  direction?: 'left' | 'right';
}

export default function InfiniteBuildsMarquee({
  items,
  speed = 40,
  direction = 'left'
}: InfiniteBuildsMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden flex py-4">
      {/* Edge Fade Vignettes */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      {/* Marquee Track */}
      <div
        className="flex w-max items-start gap-6 sm:gap-8 hover:[animation-play-state:paused] animate-infinite-scroll"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        <style>{`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 12px)); } /* accounting for gap */
          }
          @media (min-width: 640px) {
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 16px)); } /* sm:gap-8 */
            }
          }
          .animate-infinite-scroll {
            animation-name: infinite-scroll;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}</style>
        
        {/* Double the array for seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="w-[320px] sm:w-[420px] shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
