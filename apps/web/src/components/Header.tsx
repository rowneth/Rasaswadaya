import Link from "next/link";
import { Search, Bell, User, Menu, MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Tier 1: Utility Bar */}
      <div className="w-full bg-brand-600 dark:bg-brand-950 backdrop-blur-md border-b border-brand-500/20 dark:border-brand-900 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-ui">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-lg tracking-tight text-white">
              Rasaswadaya.lk
            </Link>
            <div className="hidden md:flex items-center gap-2 text-white/90 bg-brand-500/30 px-3 py-1 rounded-full">
              <MapPin className="w-3 h-3" />
              <span className="text-xs">Colombo, LK</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-brand-200" />
              <input 
                type="text" 
                placeholder="Search events, artists..." 
                className="pl-9 pr-4 py-1.5 text-sm bg-brand-500/30 text-white placeholder:text-brand-200 border-none rounded-full focus:ring-2 focus:ring-white/20 w-64"
              />
            </div>
            <button className="p-2 hover:bg-brand-500 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <Link href="/profile" className="p-2 hover:bg-brand-500 rounded-full transition-colors">
              <User className="w-5 h-5 text-white" />
            </Link>
            <button className="md:hidden p-2 hover:bg-brand-500 rounded-full transition-colors">
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: Primary Nav */}
      <nav className="w-full bg-brand-700 text-white shadow-lg shadow-brand-900/20 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center gap-8 font-ui font-medium text-sm">
          <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
          <Link href="/events" className="hover:text-white/80 transition-colors">Events</Link>
          <Link href="/artists" className="hover:text-white/80 transition-colors">Artists</Link>
          <Link href="/marketplace" className="hover:text-white/80 transition-colors">Marketplace</Link>
          <Link href="/about" className="hover:text-white/80 transition-colors">About</Link>
        </div>
      </nav>
    </header>
  );
}
