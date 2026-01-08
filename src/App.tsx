import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LenisProvider, { useLenis } from "@/components/LenisProvider";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import BlogPost1 from "./pages/BlogPosts/BlogPost1";
import BlogPost2 from "./pages/BlogPosts/BlogPost2";

const queryClient = new QueryClient();

// Enhanced ScrollToTop for Lenis
function ScrollToTop() {
  const { pathname } = useLocation();
  const { lenis } = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 1.5, force: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, lenis]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LenisProvider>
        <Toaster />
        <Sonner />
        <Analytics />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* WRAP ROUTES IN LAYOUT TO SHOW HEADER/FOOTER */}
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/blog/local-seo-strategies-2024" element={<BlogPost1 />} />
              <Route path="/blog/optimize-google-ads-roi" element={<BlogPost2 />} />
            </Route>
            
            {/* 404 is separate */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LenisProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
