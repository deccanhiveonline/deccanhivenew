"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  // Split text into words to handle wrapping correctly
  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <div 
      // 1. Apply typography (className) here so 'em' values know the correct font size.
      // 2. gap-x-[0.3em] provides a proportional space between words based on that font size.
      className={cn("flex flex-wrap justify-center gap-x-[0.3em]", className)}
    >
      <AnimatePresence>
        {words.map((word, i) => (
          // Keep each word together (no breaking mid-word)
          <div key={i} className="flex whitespace-nowrap">
            {word.split("").map((char, j) => {
              const currentDelay = globalCharIndex * delayMultiple;
              globalCharIndex++;
              
              return (
                <motion.span
                  key={j}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay: currentDelay }}
                  className="drop-shadow-sm"
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export { GradualSpacing };
