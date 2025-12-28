import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Orkestrate",
  description:
    "Get in touch with the Orkestrate team. Whether you have questions about features, pricing, or need a demo, we're here to help you orchestrate your marketing",
  openGraph: {
    title: "Contact Us | Orkestrate",
    description:
      "Get in touch with the Orkestrate team. Whether you have questions about features, pricing, or need a demo, we're here to help you orchestrate your marketing",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
