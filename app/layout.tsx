import type { Metadata } from "next";
import { playfair, dmSans } from "@/lib/fonts";
import "./globals.css";

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Imam Institute of Nursing & Allied Health Sciences | Jacobabad",
    template: "%s | Imam Institute",
  },
  description:
    "PNMC registered, SMBBMU affiliated nursing college in Jacobabad, Sindh. Admissions open for BS Nursing 2026. Approved by Government of Sindh.",
  keywords: [
    "nursing college Jacobabad",
    "BS nursing Sindh",
    "PNMC registered nursing institute",
    "SMBBMU affiliated college",
    "Imam Institute Jacobabad",
    "nursing admission 2026 Sindh",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Imam Institute of Nursing & Allied Health Sciences",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  icons: { icon: "/logos/imam-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <body className={`${playfair.variable} ${dmSans.variable} font-dm antialiased bg-white text-ink`}>
        <Nav />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}