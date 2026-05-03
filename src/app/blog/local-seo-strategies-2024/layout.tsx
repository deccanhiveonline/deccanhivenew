import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local SEO Strategies That Actually Work in 2024 - Guide",
  description: "Learn proven local SEO techniques to help your business rank higher in local search results. Optimize your Google My Business profile and dominate local search.",
  alternates: { canonical: "/blog/local-seo-strategies-2024" },
  openGraph: { type: "article" }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}