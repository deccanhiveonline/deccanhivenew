import { forwardRef } from 'react';

const InfiniteMarquee = forwardRef<HTMLElement>((_, ref) => {
  const text = "DECCAN HIVE — DIGITAL MARKETING — GROW ONLINE — 360° SOLUTIONS — ";
  
  return (
    <section ref={ref} className="py-16 overflow-hidden relative" aria-label="Brand marquee">
      {/* Progressive blur on edges - Added pointer-events-none for better performance */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="relative flex">
        {/* Using standard div and the new CSS animation class */}
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground/90 mx-4"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
});

InfiniteMarquee.displayName = 'InfiniteMarquee';

export default InfiniteMarquee;
