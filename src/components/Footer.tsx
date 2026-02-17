import { forwardRef } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // Quick links without Home
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer ref={ref} className="bg-background/40 border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" onClick={handleLogoClick} className="flex items-center space-x-3 mb-5 group w-fit">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-sm border border-border/10">
                <img 
                  src="/logo1.png" 
                  alt="Deccan Hive Logo"
                  width="40"
                  height="40"
                  className="w-full h-full object-contain p-1" 
                />
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-foreground leading-tight">Deccan Hive</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Private Limited</div>
              </div>
            </a>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-xs">
              Helping micro and local businesses grow online with 360° digital solutions that deliver real results.
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://instagram.com/deccanhive.digitalagency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/deccanhive"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com/company/deccanhive"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://youtube.com/@deccanhive"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-heading font-bold text-foreground mb-4 lg:mb-6">QUICK LINKS</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-heading font-bold text-foreground mb-4 lg:mb-6">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Plot Number 99, HNO: 1-5-1069,<br className="hidden sm:block" />
                  Colony Rd, Father Balaiah Nagar,<br className="hidden sm:block" />
                  Alwal, Secunderabad, Hyderabad,<br className="hidden sm:block" />
                  Telangana 500010
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+916303866637"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91 63038 66637 (Mobile)
                  </a>
                  <a
                    href="tel:+914045509587"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91 40 4550 9587 (Landline)
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:deccanhiveonline@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                >
                  deccanhiveonline@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-foreground/20 mt-10 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Deccan Hive Pvt Ltd. All rights reserved.
            </p>
            <div className="flex justify-center sm:justify-end items-center gap-4 sm:gap-6">
              <Link
                to="/privacy-policy"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground/30">|</span>
              <Link
                to="/terms-conditions"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
