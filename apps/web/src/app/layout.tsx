import type { Metadata } from "next";
import { Inter, Outfit, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// 1. Configure Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const ibmPlex = IBM_Plex_Sans({ 
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"], 
  variable: "--font-ibm-plex" 
});

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Rasaswadaya | Arts & Culture Hub",
  description: "Discover Sri Lankan events and artists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${outfit.variable} ${ibmPlex.variable} font-sans bg-slate-50 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400`}>
        
        <Header />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}