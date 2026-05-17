"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function CartTrigger() {
  const { toggle, itemCount } = useCart();
  const count = itemCount();

  return (
    <button
      onClick={toggle}
      className="relative"
      aria-label="Open cart"
    >
      <ShoppingCart className="h-5 w-5 text-white/80 transition-colors hover:text-white" />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-semibold text-white">
          {count}
        </span>
      )}
    </button>
  );
}
