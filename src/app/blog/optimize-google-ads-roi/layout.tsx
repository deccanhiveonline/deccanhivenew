import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Optimize Google Ads for Maximum ROI - Tips",
  description: "Learn proven strategies to improve your Google Ads performance and achieve better return on investment. Expert tips for PPC optimization and campaign success.",
  alternates: { canonical: "/blog/optimize-google-ads-roi" },
  openGraph: { type: "article" }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}