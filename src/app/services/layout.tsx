import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, PPC, PR & Automation",
  description: "Looking for digital marketing near me? We offer 360° solutions: Social Media Marketing, AI Automation, PR, and SEO services tailored for local businesses.",
  alternates: { canonical: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}