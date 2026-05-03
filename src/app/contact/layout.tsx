import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Deccan Hive | Digital Marketing Agency Near Me",
  description: "Get a free consultation with Hyderabad's top digital marketing agency. Call Deccan Hive today for social media, PR, and AI automation solutions.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}