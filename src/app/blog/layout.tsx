import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Digital Marketing Tips & Insights",
  description: "Stay ahead with our latest insights, tips, and strategies in digital marketing. Learn SEO, Google Ads, social media marketing, and more.",
  alternates: { canonical: "/blog" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}