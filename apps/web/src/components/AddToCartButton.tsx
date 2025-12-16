"use client";

import { ShoppingBag } from "lucide-react";
import { MouseEvent } from "react";

export function AddToCartButton() {
  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent navigation if inside a Link
    console.log("Add to cart clicked");
    // Add to cart logic will go here
  };

  return (
    <button
      className="p-2 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-brand-100 dark:hover:bg-brand-900 hover:text-brand-600 transition-colors"
      onClick={handleAddToCart}
      aria-label="Add to cart"
    >
      <ShoppingBag className="w-4 h-4" />
    </button>
  );
}
