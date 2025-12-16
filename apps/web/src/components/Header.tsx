import Link from "next/link";
import Image from "next/image";
import { Search, Bell, User, Menu, MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Tier 1: Utility Bar */}
      <div className="w-full bg-brand-600 border-b border-brand-500/20 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-ui">
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Rasaswadaya" 
                width={32} 
                height={32} 
                className="w-8 h-8 brightness-0 invert"
              />
              <span className="font-bold text-2xl tracking-tight text-white font-sinhala">රසාස්වාදය</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center px-12">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-500" />
              <input 
                type="text" 
                placeholder="Search events, artists..." 
                className="pl-10 pr-4 py-2 text-sm bg-white text-brand-950 placeholder:text-brand-400 border-none rounded-full focus:ring-2 focus:ring-brand-300 w-full shadow-sm transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 shrink-0">
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
