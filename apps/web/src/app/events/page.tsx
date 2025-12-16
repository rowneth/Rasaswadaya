import Link from "next/link";
import { MapPin, Calendar, Filter, Search } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar filters (3 cols) */}
      <aside className="lg:col-span-3 space-y-6">
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-5 sticky top-24">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-brand-600" />
            <h2 className="font-bold text-lg">Filters</h2>
          </div>
          
          <div className="space-y-6">
            {/* City */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">City</label>
              <select className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent">
                <option>Colombo</option>
                <option>Kandy</option>
                <option>Galle</option>
                <option>Jaffna</option>
              </select>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Date</label>
              <div className="flex flex-wrap gap-2">
                {['Today', 'Tomorrow', 'This Weekend', 'Next Week'].map((label) => (
                  <button key={label} className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors">
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Categories</label>
              <div className="space-y-2">
                {['Music', 'Dance', 'Drama', 'Cinema', 'Folk', 'Exhibition'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 cursor-pointer hover:text-slate-900 dark:hover:text-zinc-200">
                    <input type="checkbox" className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                    {cat}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Event list (9 cols) */}
      <section className="lg:col-span-9 space-y-6">
        {/* Sort bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-slate-200 dark:border-zinc-800">
          <p className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900 dark:text-white">12</span> events in Colombo</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Sort by:</span>
            <select className="bg-transparent text-sm font-medium text-slate-900 dark:text-white border-none focus:ring-0 cursor-pointer">
              <option>Soonest</option>
              <option>Popular</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Event Cards List */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="group flex flex-col sm:flex-row gap-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-brand-900 transition-all">
              {/* Thumbnail */}
              <div className="w-full sm:w-48 aspect-[4/3] bg-slate-200 dark:bg-zinc-800 rounded-xl flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs">Image</div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="inline-block px-2 py-1 rounded-md bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
                      Music
                    </span>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5 4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors">
                    Classical Sitar Recital by Pradeep Ratnayake
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-500 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>Dec 20, 2025 • 7:00 PM</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>Lionel Wendt Theatre</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-3">
                  <Link href={`/events/event-${i}`} className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-zinc-200 transition-colors">
                    View Details
                  </Link>
                  <button className="px-5 py-2 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
                    Get Tickets
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
