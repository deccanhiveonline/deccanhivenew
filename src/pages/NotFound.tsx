import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import GoldenHorizonBg from "@/components/GoldenHorizonBg";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen relative text-foreground overflow-x-hidden">
      <SEOHead 
        title="Page Not Found - 404 Error"
        description="The page you're looking for doesn't exist."
        robots="noindex, nofollow" // FIXED: Explicitly tells Google to ignore this page
      />
      <GoldenHorizonBg />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl md:text-9xl font-bold text-gradient-gold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            <Button className="bg-primary text-primary-foreground" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
