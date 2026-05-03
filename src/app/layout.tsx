import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldenHorizonBg from "@/components/GoldenHorizonBg";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import { OrganizationSchema, WebsiteSchema } from "@/components/JsonLd";
import "./globals.css";

// RESTORED FONTS FROM YOUR VITE PROJECT
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Deccan Hive - Digital Marketing Agency Hyderabad",
  description: "Deccan Hive is a full-service digital marketing agency helping micro and local businesses grow with proven strategies. Get 360° digital solutions that deliver results.",
  metadataBase: new URL('https://deccanhive.com'),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://deccanhive.com",
    siteName: "Deccan Hive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deccan Hive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deccanhive",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-background text-foreground font-sans overflow-x-hidden antialiased">
        <Providers>
          <OrganizationSchema />
          <WebsiteSchema />
          <GoldenHorizonBg />
          
          <div className="relative z-10">
            <Header />
            <main className="w-full relative">
              {children}
            </main>
            <InfiniteMarquee />
            <Footer />
          </div>
          
          <WhatsAppFloat />
          <Toaster />
          <Sonner />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}