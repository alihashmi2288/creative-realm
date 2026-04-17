import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProvider from "@/components/providers/ScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Realm | DIGITAL BRUTALIST MANIFESTO",
  description: "An independent creative studio dedicated to elevating high-end brands through unpolished strength and kinetic precision.",
  openGraph: {
    title: "Creative Realm | DIGITAL BRUTALIST MANIFESTO",
    description: "Architecting visual narratives for the industrial age.",
    url: "https://creativerealm.studio",
    siteName: "Creative Realm Studio",
    images: [
      {
        url: "/images/c042026d0c28b54f6f316b42c8037fc4.png",
        width: 1200,
        height: 630,
        alt: "Creative Realm Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Realm Studio",
    description: "Unpolished strength in digital design.",
    images: ["/images/c042026d0c28b54f6f316b42c8037fc4.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
       <body className="antialiased bg-black selection:bg-primary selection:text-black">
        <ScrollProvider>
          <div className="noise-overlay" />
          <CustomCursor />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
