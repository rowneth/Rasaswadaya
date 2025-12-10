import Link from 'next/link';
import { Search, Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  variant?: 'public' | 'private';
}

export default function Header({ variant = 'public' }: HeaderProps) {
  return (
    <header className="w-full bg-background/50 backdrop-blur-md border-b border-white/5 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🎭</span>
          </div>
          <span className="text-white font-bold text-xl hidden sm:block">Rasaswadaya</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search Event" 
              className="w-full bg-input-bg border border-white/5 rounded-full py-2.5 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <Link 
            href="/create-event"
            className="hidden sm:block px-4 py-2 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-full text-sm font-medium transition-all"
          >
            Create Event
          </Link>
          
          {variant === 'private' ? (
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-1.5 rounded-full transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden border border-white/10">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Don" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-sm font-medium hidden sm:block">Don Roneth</span>
                <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <Link 
                href="/login"
                className="text-white hover:text-primary font-medium text-sm transition-colors"
              >
                Log In
              </Link>
              <Link 
                href="/signup"
                className="px-5 py-2 bg-primary hover:bg-primary-hover text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/25"
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
