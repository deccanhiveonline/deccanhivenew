import { motion } from 'framer-motion';

const GoldenHorizonBg = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 1. Deep Dark Base */}
      <div className="absolute inset-0 bg-background" />

      {/* 2. THE GRID (Technical Layer) */}
      {/* We place this beneath the glows for better depth */}
      <div
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          // Masking the edges so the grid fades out at the bottom/top nicely
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' 
        }}
      />

      {/* 3. Golden Horizon Glow - Bottom Center - UPDATED COLOR */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[60%] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center bottom, hsl(43 96% 56%), transparent 60%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* 4. Secondary Ambient Glow - Top Right - UPDATED COLOR */}
      <div 
        className="absolute top-0 right-0 w-[80%] h-[50%] opacity-10"
        style={{
          background: 'radial-gradient(circle at top right, hsl(43 96% 46%), transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* 5. Subtle Grain Overlay (Texture Layer) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay noise-overlay" />
    </div>
  );
};

export default GoldenHorizonBg;
