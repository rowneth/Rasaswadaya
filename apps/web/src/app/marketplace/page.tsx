import Link from "next/link";
import Image from "next/image";
import { Filter, Search, ShoppingCart } from "lucide-react";

export default function MarketplacePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar Filters */}
      <aside className="lg:col-span-3 space-y-6">
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-5 sticky top-24">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-brand-600" />
            <h2 className="font-bold text-lg">Filters</h2>
          </div>
          
          <div className="space-y-6">
            {/* Categories */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Category</label>
              <div className="space-y-2">
                {['Instruments', 'Merchandise', 'Costumes', 'Artworks', 'Accessories'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 cursor-pointer hover:text-slate-900 dark:hover:text-zinc-200">
                    <input type="checkbox" className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Price Range</label>
              <input type="range" className="w-full accent-brand-600" />
              <div className="flex justify-between text-xs text-slate-500">
                <span>LKR 0</span>
                <span>LKR 50,000+</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <section className="lg:col-span-9 space-y-6">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-9 pr-4 py-2 w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <select className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-500">
            <option>Newest Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Popular</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:shadow-brand-500/10 transition-all">
              <div className="aspect-[4/3] bg-slate-100 dark:bg-zinc-800 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2940&auto=format&fit=crop"
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">Traditional Drum</h3>
                    <p className="text-xs text-slate-500">By Rhythm Mart</p>
                  </div>
                  <span className="font-bold text-brand-600">LKR 15,000</span>
                </div>
                <Link href={`/products/product-${i}`} className="block w-full text-center py-2 mt-2 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-zinc-200 transition-colors">
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
