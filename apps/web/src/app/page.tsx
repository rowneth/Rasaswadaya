import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Calendar, ArrowRight, Bell } from "lucide-react";
import { HeroSlider } from "../components/HeroSlider";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left: Main content (8 cols) */}
      <section className="lg:col-span-8 space-y-8">
        
        {/* 1) Hero Slider */}
        <HeroSlider />

        {/* 2) Events Near You */}

        {/* 2) Events Near You */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Events in Colombo
            </h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-medium border border-brand-100">Today</span>
              <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 text-xs font-medium border border-slate-200 dark:border-zinc-700">This Weekend</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="group rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:shadow-brand-500/10 hover:-translate-y-0.5 transition-all">
                <div className="aspect-[16/9] bg-slate-200 dark:bg-zinc-800 relative">
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    Event Image
                  </div>
                  <span className="absolute top-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                    Drama
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-brand-600 transition-colors">Sinha Bahu</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Dec 18 • 6:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Lionel Wendt, Colombo 7</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <Link href={`/events/sinha-bahu-${i}`} className="text-sm font-medium text-slate-900 dark:text-white hover:underline">
                      View Event
                    </Link>
                    <a href="#" className="text-xs font-medium text-brand-600 hover:text-brand-700">
                      Get Tickets →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3) Recommended For You (AI) */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-lg font-bold text-indigo-900 dark:text-indigo-100">Recommended For You</h2>
          </div>
          <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-4">
            Based on your interest in <span className="font-semibold">Classical Music</span> and <span className="font-semibold">Kandy</span>.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[240px] bg-white dark:bg-zinc-900 rounded-xl p-3 border border-indigo-100 dark:border-indigo-900/50 shadow-sm">
                <div className="h-24 bg-slate-100 dark:bg-zinc-800 rounded-lg mb-3"></div>
                <h4 className="font-semibold text-sm mb-1">Rhythm of the Dance</h4>
                <p className="text-xs text-slate-500">Nelum Pokuna</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4) Featured Artists */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Featured Artists</h2>
            <Link href="/artists" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 p-4 text-center hover:border-brand-200 transition-colors">
                <div className="w-20 h-20 mx-auto bg-slate-200 dark:bg-zinc-800 rounded-full mb-3"></div>
                <h3 className="font-bold text-slate-900 dark:text-white">Kasun Kalhara</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mb-3">Musician • Colombo</p>
                <button className="text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors w-full">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Right: Sidebar (4 cols) */}
      <aside className="lg:col-span-4 space-y-8">
        
        {/* My Reminders */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-brand-600" />
            My Reminders
          </h3>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-12 h-12 bg-slate-100 dark:bg-zinc-800 rounded-lg flex-shrink-0 flex flex-col items-center justify-center text-xs font-bold text-slate-500">
                  <span>DEC</span>
                  <span className="text-lg text-slate-900 dark:text-white">20</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm line-clamp-1">Chitrasena Vajira Dance Festival</h4>
                  <p className="text-xs text-slate-500">Bishop's College</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            View all reminders
          </button>
        </div>

        {/* Trending */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6">
          <h3 className="font-bold text-lg mb-4">Trending in Sri Lanka</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 group cursor-pointer">
                <span className="text-2xl font-bold text-slate-200 dark:text-zinc-800 group-hover:text-brand-200 transition-colors">0{i}</span>
                <div>
                  <h4 className="font-medium text-sm group-hover:text-brand-600 transition-colors">Kandy Esala Perahera</h4>
                  <p className="text-xs text-slate-500">Cultural Event</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketplace Highlights */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Top Stores</h3>
            <Link href="/marketplace" className="text-xs text-brand-600 hover:underline">Browse</Link>
          </div>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-slate-200 dark:bg-zinc-700 rounded-full"></div>
                <div>
                  <h4 className="font-medium text-sm">Sarasavi Bookshop</h4>
                  <p className="text-xs text-slate-500">Books & Music</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </aside>
    </div>
  );
}
