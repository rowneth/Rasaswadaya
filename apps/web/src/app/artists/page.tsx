import Link from "next/link";
import Image from "next/image";
import { Search, Filter } from "lucide-react";

export default function ArtistsPage() {
  return (
    <div className="space-y-8">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Artists</h1>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search artists..." 
              className="pl-9 pr-4 py-2 w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['All', 'Musicians', 'Dancers', 'Painters', 'Actors', 'Writers', 'Sculptors'].map((cat, i) => (
          <button 
            key={cat} 
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              i === 0 
                ? 'bg-brand-600 text-white' 
                : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Lakshan Sanjula", role: "Artist", image: "/lakshan_sanjula.jpeg", location: "Colombo" },
          { name: "Kasun Kalhara", role: "Musician", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2940&auto=format&fit=crop", location: "Colombo" },
          { name: "Upeka Chitrasena", role: "Dancer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop", location: "Colombo" },
          { name: "Artist Name 4", role: "Painter", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop", location: "Kandy" },
          { name: "Artist Name 5", role: "Sculptor", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop", location: "Galle" },
          { name: "Artist Name 6", role: "Writer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop", location: "Jaffna" },
          { name: "Artist Name 7", role: "Actor", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop", location: "Colombo" },
          { name: "Artist Name 8", role: "Director", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop", location: "Kandy" }
        ].map((artist, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6 flex flex-col items-center text-center hover:border-brand-200 dark:hover:border-brand-900 transition-all hover:-translate-y-1">
            <div className="w-24 h-24 bg-slate-200 dark:bg-zinc-800 rounded-full mb-4 overflow-hidden relative">
              <Image 
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{artist.name}</h3>
            <p className="text-brand-600 text-sm font-medium mb-1">{artist.role}</p>
            <p className="text-slate-500 text-xs mb-4">{artist.location}, Sri Lanka</p>
            
            <div className="flex gap-2 w-full mt-auto">
              <Link href={`/artists/artist-${i}`} className="flex-1 py-2 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-zinc-200 transition-colors">
                View Profile
              </Link>
              <button className="p-2 border border-slate-200 dark:border-zinc-800 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors text-slate-400 hover:text-brand-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" x2="20" y1="8" y2="14"/><line x1="23" x2="17" y1="11" y2="11"/></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
