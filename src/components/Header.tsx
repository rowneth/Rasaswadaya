import Link from 'next/link';
import { Search, Bell, ChevronDown, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  variant?: 'public' | 'private';
}

export default function Header({ variant = 'public' }: HeaderProps) {
  return (
    <header className="w-full bg-background/80 backdrop-blur-2xl border-b border-gray-200 dark:border-white/5 py-3 sticky top-0 z-50 transition-all duration-300 supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-foreground font-semibold text-lg tracking-tight">Rasaswadaya</span>
        </Link>

        {/* Search Bar - Centered & Refined */}
        <div className="flex-1 max-w-md hidden md:block absolute left-1/2 -translate-x-1/2">
          <div className="relative group w-full">
            <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search events, artists..." 
              className="w-full bg-gray-100 dark:bg-[#1c1c1e] border border-gray-200 dark:border-white/5 rounded-full py-2 pl-10 pr-4 text-foreground placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:bg-white dark:focus:bg-[#2c2c2e] transition-all duration-300 text-sm"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {variant === 'private' ? (
            <div className="flex items-center gap-3 pl-3">
              <button className="p-2 text-gray-400 hover:text-foreground transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
              </button>
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 py-1 px-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/5">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden border border-gray-200 dark:border-white/10">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Don" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 pl-2">
              <Link 
                href="/login"
                className="text-gray-500 dark:text-gray-300 hover:text-foreground font-medium text-xs px-3 py-2 transition-colors"
              >
                Log In
              </Link>
              <Link 
                href="/signup"
                className="px-4 py-2 bg-foreground text-background hover:bg-foreground/90 rounded-full text-xs font-semibold transition-all transform hover:scale-105 active:scale-95"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
