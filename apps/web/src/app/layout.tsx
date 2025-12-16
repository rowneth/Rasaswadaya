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
        
        {/* Tier 1: Utility Bar */}
        <div className="w-full bg-white dark:bg-black border-b border-slate-200 dark:border-zinc-800 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-ui">
            <span>Colombo, LK</span>
            <span>Dec 16, 2025</span>
          </div>
        </div>

        {/* Tier 2: Main Nav */}
        <nav className="w-full bg-brand-500 text-white shadow-lg shadow-brand-500/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <h1 className="font-heading text-2xl font-bold tracking-tight">RASASWADAYA</h1>
            {/* Nav Links Placeholder */}
            <div className="hidden md:flex gap-6 font-ui font-medium">
              <a href="/events" className="hover:text-brand-100 transition-colors">Events</a>
              <a href="/marketplace" className="hover:text-brand-100 transition-colors">Marketplace</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-zinc-950 text-zinc-500 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2025 Rasaswadaya. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}