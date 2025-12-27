import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Create Context
interface LenisContextType {
  lenis: Lenis | null;
}
const LenisContext = createContext<LenisContextType>({ lenis: null });

// Hook to use Lenis instance
export const useLenis = () => useContext(LenisContext);

interface LenisProviderProps {
  children: ReactNode;
}

const LenisProvider = ({ children }: LenisProviderProps) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.03,
      duration: 2.2,
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 1.2,
      infinite: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
};

export default LenisProvider;