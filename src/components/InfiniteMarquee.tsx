import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const InfiniteMarquee = forwardRef<HTMLElement>((_, ref) => {
  const text = "DECCAN HIVE — DIGITAL MARKETING — GROW ONLINE — 360° SOLUTIONS — ";
  
  return (
    <section ref={ref} className="py-16 overflow-hidden relative" aria-label="Brand marquee">
      {/* Progressive blur on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground/90 mx-4"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

InfiniteMarquee.displayName = 'InfiniteMarquee';

export default InfiniteMarquee;
