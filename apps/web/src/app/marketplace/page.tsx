import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Filter, Search, Star } from "lucide-react";
import { getProducts, getCategories } from "../../lib/db";
import { AddToCartButton } from "../../components/AddToCartButton";

export default async function MarketplacePage() {
  const [products, categories] = await Promise.all([
    getProducts(50),
    getCategories(),
  ]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Handicrafts Marketplace
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 mt-1">
            Authentic Sri Lankan handicrafts from local artisans
          </p>
        </div>
        
        {/* Search */}
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 w-64"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        <button className="flex-shrink-0 px-4 py-2 rounded-full bg-brand-600 text-white text-sm font-medium">
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="flex-shrink-0 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors"
          >
            <span className="mr-2">{cat.iconUrl}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="aspect-square bg-slate-100 dark:bg-zinc-800 relative">
              <Image
                src={product.imageUrl || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.stock < 5 && product.stock > 0 && (
                <span className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                  Only {product.stock} left
                </span>
              )}
              {product.stock === 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                  Sold Out
                </span>
              )}
            </div>
            
            <div className="p-4">
              <p className="text-xs text-slate-500 dark:text-zinc-400 mb-1">
                {product.storeName}
              </p>
              <h3 className="font-semibold text-sm mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-amber-700 dark:text-amber-400">
                  Rs. {product.price.toLocaleString()}
                </p>
                <AddToCartButton />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-16">
          <ShoppingBag className="w-12 h-12 mx-auto text-slate-300 dark:text-zinc-600 mb-4" />
          <p className="text-slate-500 dark:text-zinc-400">No products found</p>
        </div>
      )}
    </div>
  );
}
