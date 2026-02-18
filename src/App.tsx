import { useEffect, Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LenisProvider, { useLenis } from "@/components/LenisProvider";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// FIXED: Lazy load pages to reduce initial bundle size
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const BlogPost1 = lazy(() => import("./pages/BlogPosts/BlogPost1"));
const BlogPost2 = lazy(() => import("./pages/BlogPosts/BlogPost2"));

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

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LenisProvider>
        <Toaster />
        <Sonner />
        <Analytics />
        <SpeedInsights />
        <BrowserRouter>
          <ScrollToTop />
          {/* FIXED: Added Suspense for lazy loaded routes */}
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </BrowserRouter>
      </LenisProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
