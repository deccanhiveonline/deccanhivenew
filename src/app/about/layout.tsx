import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Deccan Hive | Top Digital Marketing & PR Agency in Hyderabad",
  description: "Deccan Hive (Hive Digital) is a leading digital marketing and PR agency in Hyderabad. We specialize in AI automation, social media marketing, and local growth strategies.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}