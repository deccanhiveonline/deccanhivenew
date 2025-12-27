import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoldenHorizonBg from '@/components/GoldenHorizonBg';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import InfiniteMarquee from '@/components/InfiniteMarquee';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  // Don't show global elements on 404 page if it's rendered within layout (optional safeguard)
  const isNotFound = location.pathname === '/404'; 

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <GoldenHorizonBg />
      <div className="relative z-10">
        <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {/* Outlet renders the child route (Index, About, etc.) */}
        <Outlet /> 
        {!isNotFound && <InfiniteMarquee />}
        <Footer />
      </div>
      {/* WhatsAppFloat handles its own visibility logic internally, but we force hide when sidebar is open */}
      <WhatsAppFloat hide={isSidebarOpen} />
    </div>
  );
};

export default Layout;
