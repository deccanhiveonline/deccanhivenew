import { forwardRef, useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface WhatsAppFloatProps {
  visible?: boolean;
  hide?: boolean;
}

const WhatsAppFloat = forwardRef<HTMLButtonElement, WhatsAppFloatProps>(({ visible, hide }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.offsetHeight;
      // Increased to 800 to safely cover taller mobile footers
      const footerHeight = 800;

      const shouldShow = location.pathname === '/' ? scrollTop > 200 : scrollTop > 50;
      setIsVisible(shouldShow);

      const nearFooter = scrollTop + windowHeight > docHeight - footerHeight;
      setIsAtFooter(nearFooter);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "916303866637";
    const message = "Hi! I'm interested in your digital marketing services. Can we discuss my requirements?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (location.pathname === '/contact') return null;

  const shouldDisplay = !hide && (visible !== undefined ? visible : isVisible) && !isAtFooter;

  return (
    <button
      ref={ref}
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-2xl transition-all duration-300 hover:scale-110 ${
        shouldDisplay
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
      }`}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 animate-[wave_1s_ease-in-out_infinite]" />
    </button>
  );
});

WhatsAppFloat.displayName = 'WhatsAppFloat';

export default WhatsAppFloat;
