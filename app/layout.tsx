import type { Metadata } from "next";
import { Playfair_Display, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/shared/preloader";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AL WAFA Event Management | Luxury Events & Premium Catering in Kerala",
  description:
    "AL WAFA creates extraordinary events for celebrities, business leaders, and discerning families across Kerala. Premium weddings, corporate events, and bespoke catering.",
  keywords: [
    "luxury event management kerala",
    "premium catering kochi",
    "celebrity wedding planner",
    "corporate events kerala",
    "destination wedding kerala",
    "al wafa events",
  ],
  authors: [{ name: "AL WAFA Event Management" }],
  openGraph: {
    title: "AL WAFA Event Management",
    description: "Crafting Unforgettable Experiences — Luxury Events & Premium Catering in Kerala",
    siteName: "AL WAFA Event Management",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${cormorant.variable}`}>
      <body className="font-body bg-cream text-charcoal antialiased overflow-x-hidden">
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
