import Link from "next/link";
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left: Gallery (7 cols) */}
      <div className="lg:col-span-7 space-y-4">
        <div className="aspect-[4/3] bg-slate-100 dark:bg-zinc-800 rounded-3xl flex items-center justify-center text-slate-400">
          Main Product Image
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-slate-100 dark:bg-zinc-800 rounded-xl cursor-pointer hover:ring-2 ring-brand-500 transition-all"></div>
          ))}
        </div>
      </div>

      {/* Right: Details (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Traditional Geta Bera (Drum)</h1>
          <div className="flex items-center gap-2 text-sm mb-4">
            <div className="flex text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 text-slate-300" />
            </div>
            <span className="text-slate-500">(24 reviews)</span>
          </div>
          <p className="text-3xl font-bold text-brand-600">LKR 15,500</p>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-200 dark:bg-zinc-800 rounded-full"></div>
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-white">Sold by <span className="font-bold">Rhythm Mart</span></p>
            <Link href="/marketplace" className="text-xs text-brand-600 hover:underline">View Store</Link>
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-zinc-800">
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-slate-200 dark:border-zinc-800 rounded-lg">
              <button className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">-</button>
              <span className="px-3 py-2 font-medium">1</span>
              <button className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">+</button>
            </div>
            <span className="text-sm text-green-600 font-medium">In Stock</span>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-[#D00000] text-white py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20 flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <button className="p-3.5 border border-slate-200 dark:border-zinc-800 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert text-sm">
          <h3 className="font-bold">Description</h3>
          <p>
            Authentic Sri Lankan Geta Bera, handcrafted using traditional methods. Made from high-quality Jack wood and cattle skin. Perfect for traditional dance performances and rituals.
          </p>
        </div>
      </div>
    </div>
  );
}
