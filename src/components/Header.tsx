import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HoverButton } from '@/components/ui/hover-button';
import { motion } from 'framer-motion';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location, setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* 1. LEFT ZONE */}
            <div className="flex-1 flex justify-start">
              <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 w-fit">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-sm border border-white/20">
                  <img 
                    src="/logo2.png" 
                    alt="Deccan Hive Logo" 
                    className="w-full h-full object-contain p-1" 
                  />
                </div>
                <div className="hidden xs:block">
                  <div className="font-heading font-bold text-foreground text-sm sm:text-lg tracking-tight leading-tight">Deccan Hive</div>
                  <div className="text-[8px] sm:text-[10px] text-muted-foreground uppercase tracking-widest">Digital Marketing Agency</div>
                </div>
              </a>
            </div>

            {/* 2. CENTER ZONE: Navigation */}
            <nav className="hidden lg:flex items-center justify-center">
              <div className="flex items-center gap-1 bg-background/5 backdrop-blur-lg py-1.5 px-1.5 rounded-full border border-border/30">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-colors ${
                        isActive 
                          ? 'text-foreground' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="tubelight"
                          className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        >
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full">
                            <div className="absolute w-10 h-4 bg-primary/30 rounded-full blur-md -top-1 -left-1" />
                            <div className="absolute w-6 h-3 bg-primary/20 rounded-full blur-sm top-0 left-1" />
                          </div>
                        </motion.div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* 3. RIGHT ZONE */}
            <div className="flex-1 flex justify-end">
              <div className="flex items-center gap-2 sm:gap-4">
                <Link to="/contact" className="hidden lg:block">
                  <HoverButton className="flex items-center gap-1.5">
                    Get a Quote
                    <ArrowUpRight className="h-4 w-4" />
                  </HoverButton>
                </Link>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                >
                  {isOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Keeps Z-Index 90 fix */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/90 backdrop-blur-md z-[90] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu - Keeps Z-Index 100 fix (Above WhatsApp) */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-background border-l border-primary/20 transform transition-transform duration-300 ease-out z-[100] lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        
        <div className="flex flex-col h-full relative">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-primary/10">
            <a href="/" onClick={handleLogoClick} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-black/5 border border-border/10 overflow-hidden">
                <img src="/logo2.png" alt="DH" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <span className="font-heading font-bold text-foreground block leading-tight">Deccan Hive</span>
                <span className="text-[9px] text-muted-foreground uppercase tracking-widest">Digital Marketing Agency</span>
              </div>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 p-4 sm:p-6 space-y-1.5 overflow-y-auto">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-heading">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="p-4 sm:p-6 border-t border-primary/10 bg-gradient-to-t from-primary/5 to-transparent">
            <Button 
              className="w-full bg-primary text-primary-foreground rounded-xl h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" 
              asChild
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get a Quote
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-4 font-heading">
              © {new Date().getFullYear()} Deccan Hive Pvt Ltd
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default Header;
