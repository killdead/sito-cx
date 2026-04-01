import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: "CilentoXtreme",
  description:
    "Festival outdoor nel cuore del Cilento tra highline, volo, arrampicata, camping e community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
