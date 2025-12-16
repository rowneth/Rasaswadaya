import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Calendar, ArrowRight, Bell, ShoppingBag, Heart, Zap, Music, Theater, Palette } from "lucide-react";
import { HeroSlider } from "../components/HeroSlider";
import { getEvents, getArtists, getStores, getProducts, getTrendingEvents } from "../lib/db";

export default async function Home() {
  // Fetch real data from the database
  const [events, artists, stores, products, trendingEvents] = await Promise.all([
    getEvents(5),
    getArtists(3),
    getStores(2),
    getProducts(6),
    getTrendingEvents(3),
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left: Main content (8 cols) */}
      <section className="lg:col-span-8 space-y-8">
        
        {/* 1) Hero Slider */}
        <HeroSlider />

        {/* AI Recommendations - Based on Your Taste */}
        <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/40 dark:via-purple-950/30 dark:to-fuchsia-950/20 border border-violet-200/60 dark:border-violet-800/50 p-6 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-fuchsia-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-violet-900 dark:text-violet-100">Recommended For You</h2>
                  <p className="text-xs text-violet-600 dark:text-violet-400">AI-powered suggestions based on your interests</p>
                </div>
              </div>
              <Link href="/discover" className="text-sm font-medium text-violet-700 hover:text-violet-800 dark:text-violet-300 flex items-center gap-1 bg-white/60 dark:bg-zinc-800/60 px-3 py-1.5 rounded-full">
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* User interests tags */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-violet-600 dark:text-violet-400">Based on:</span>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-medium flex items-center gap-1">
                  <Music className="w-3 h-3" /> Traditional Music
                </span>
                <span className="px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-medium flex items-center gap-1">
                  <Theater className="w-3 h-3" /> Dance
                </span>
                <span className="px-2.5 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-medium flex items-center gap-1">
                  <Palette className="w-3 h-3" /> Handicrafts
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Recommended Event */}
              <Link
                href="/events/kandyan-dance-festival"
                className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur rounded-xl p-4 border border-violet-100 dark:border-violet-900/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all group cursor-pointer block"
              >
                <div className="h-24 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 rounded-lg mb-3 relative overflow-hidden">
                  <Image 
                    src="https://lakpura.com/cdn/shop/files/fdf.jpg?v=1653636344&width=3840"
                    alt="Kandyan Dance Performance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="font-semibold text-sm mb-1 group-hover:text-violet-600 transition-colors">Kandyan Dance Festival</h4>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Jan 15, 2026
                </p>
              </Link>

              {/* Recommended Product */}
              <Link
                href="/products/raksha-demon-mask"
                className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur rounded-xl p-4 border border-violet-100 dark:border-violet-900/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all group cursor-pointer block"
              >
                <div className="h-24 bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-900/50 dark:to-fuchsia-900/50 rounded-lg mb-3 relative overflow-hidden">
                  <Image 
                    src="https://i.pinimg.com/736x/00/01/f4/0001f44fc6d54977abc513ab41ec01df.jpg"
                    alt="Traditional Mask"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="font-semibold text-sm mb-1 group-hover:text-purple-600 transition-colors">Raksha Demon Mask</h4>
                <p className="text-xs text-slate-500">Rs. 12,000</p>
              </Link>

              {/* Recommended Artist */}
              <Link
                href="/artists/ravibandhu-vidyapathi"
                className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur rounded-xl p-4 border border-violet-100 dark:border-violet-900/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all group cursor-pointer block"
              >
                <div className="h-24 bg-gradient-to-br from-fuchsia-100 to-pink-100 dark:from-fuchsia-900/50 dark:to-pink-900/50 rounded-lg mb-3 relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                    alt="Ravibandhu Vidyapathi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="font-semibold text-sm mb-1 group-hover:text-fuchsia-600 transition-colors">Ravibandhu Vidyapathi</h4>
                <p className="text-xs text-slate-500">Traditional Drums</p>
              </Link>
            </div>
          </div>
        </div>



        {/* 2) Upcoming Events */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Upcoming Events
            </h2>
            <Link href="/events" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {events.slice(0, 3).map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:shadow-brand-500/10 hover:-translate-y-0.5 transition-all block"
              >
                <div className="aspect-[16/9] bg-slate-200 dark:bg-zinc-800 relative">
                  <Image 
                    src={event.imageUrl || "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider z-10">
                    EVENT
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-brand-600 transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.eventDate ? new Date(event.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'TBD'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <span className="text-sm font-medium text-slate-900 dark:text-white group-hover:underline">
                      View Event
                    </span>
                    <span className="text-xs font-medium text-brand-600">
                      {event.capacity ? `${event.capacity.toLocaleString()} seats` : 'Free Entry'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 3) Featured Products */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-100 dark:border-amber-900/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h2 className="text-lg font-bold text-amber-900 dark:text-amber-100">Handicrafts</h2>
            </div>
            <Link href="/marketplace" className="text-sm font-medium text-amber-700 hover:text-amber-800 flex items-center gap-1">
              Browse All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white dark:bg-zinc-900 rounded-xl p-3 border border-amber-100 dark:border-amber-900/50 shadow-sm hover:shadow-md transition-shadow block cursor-pointer"
              >
                <div className="aspect-square bg-slate-100 dark:bg-zinc-800 rounded-lg mb-3 relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-sm mb-1 line-clamp-1">{product.name}</h4>
                <p className="text-xs text-slate-500 mb-2">{product.storeName}</p>
                <p className="text-sm font-bold text-amber-700 dark:text-amber-400">Rs. {product.price.toLocaleString()}</p>
              </Link>
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
            {artists.map((artist) => (
              <div key={artist.id} className="bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 p-4 text-center hover:border-brand-200 transition-colors">
                <div className="w-20 h-20 mx-auto bg-slate-200 dark:bg-zinc-800 rounded-full mb-3 relative overflow-hidden">
                  <Image 
                    src={artist.photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{artist.name}</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mb-3">{artist.genre}</p>
                <Link 
                  href={`/artists/${artist.id}`}
                  className="text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors inline-block w-full"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Right: Sidebar (4 cols) */}
      <aside className="lg:col-span-4 space-y-8">
        
        {/* Upcoming Events Quick View */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-brand-600" />
            Coming Soon
          </h3>
          <div className="space-y-4">
            {events.slice(0, 3).map((event) => {
              const eventDate = event.eventDate ? new Date(event.eventDate) : new Date();
              return (
                <div key={event.id} className="flex gap-3 items-start">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-zinc-800 rounded-lg flex-shrink-0 flex flex-col items-center justify-center text-xs font-bold text-slate-500">
                    <span>{eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</span>
                    <span className="text-lg text-slate-900 dark:text-white">{eventDate.getDate()}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm line-clamp-1">{event.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1">{event.location}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link href="/events" className="block w-full mt-4 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-center">
            View all events →
          </Link>
        </div>

        {/* Trending */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6">
          <h3 className="font-bold text-lg mb-4">Trending</h3>
          <div className="space-y-4">
            {trendingEvents.map((event, i) => (
              <div key={event.id} className="flex items-center gap-3 group cursor-pointer">
                <span className="text-2xl font-bold text-slate-200 dark:text-zinc-800 group-hover:text-brand-200 transition-colors">0{i + 1}</span>
                <div>
                  <h4 className="font-medium text-sm group-hover:text-brand-600 transition-colors line-clamp-1">{event.title}</h4>
                  <p className="text-xs text-slate-500">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Stores */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Top Stores</h3>
            <Link href="/marketplace" className="text-xs text-brand-600 hover:underline">Browse</Link>
          </div>
          <div className="space-y-3">
            {stores.map((store) => (
              <div key={store.id} className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-slate-200 dark:bg-zinc-700 rounded-full relative overflow-hidden">
                </div>
                <div>
                  <h4 className="font-medium text-sm">{store.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </aside>
    </div>
  );
}
