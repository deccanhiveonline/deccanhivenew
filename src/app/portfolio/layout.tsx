import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Success Stories in Digital Marketing & PR",
  description: "See how Deccan Hive helps businesses grow. From 'Deccan Marketing' strategies to advanced AI automation, explore our case studies in social media and PR.",
  alternates: { canonical: "/portfolio" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}