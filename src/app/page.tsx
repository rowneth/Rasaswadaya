'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Centered & Immersive */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
          {/* Background Aurora - More Subtle */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-30 pointer-events-none mix-blend-screen dark:mix-blend-screen mix-blend-multiply"></div>
          <div className="absolute bottom-[-20%] right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen dark:mix-blend-screen mix-blend-multiply"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md text-xs font-medium text-gray-600 dark:text-gray-300 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live Events Happening Now
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-foreground">
              Feel the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">Rhythm.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
              The ultimate hub for Sri Lankan university events, cultural shows, and musical concerts. Experience it all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link 
                href="/signup"
                className="px-8 py-3.5 bg-foreground text-background hover:bg-foreground/90 rounded-full font-medium text-base transition-all hover:scale-105 active:scale-95"
              >
                Get Started
              </Link>
              <Link 
                href="/login"
                className="px-8 py-3.5 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-foreground border border-gray-200 dark:border-white/10 rounded-full font-medium text-base transition-all backdrop-blur-md"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
