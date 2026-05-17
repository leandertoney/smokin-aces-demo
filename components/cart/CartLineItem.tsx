"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import type { CartItem } from "@/lib/cart-store";

export function CartLineItem({
  item,
  onUpdateQty,
  onRemove,
}: {
  item: CartItem;
  onUpdateQty: (variantId: number, qty: number) => void;
  onRemove: (variantId: number) => void;
}) {
  return (
    <div className="flex gap-4 py-4">
      <Link
        href={`/products/${item.productHandle}`}
        className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded bg-[var(--color-surface)]"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="96px"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Link
            href={`/products/${item.productHandle}`}
            className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)]"
          >
            {item.title}
          </Link>
          {item.variantTitle !== "Default Title" && (
            <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
              {item.variantTitle}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQty(item.variantId, item.qty - 1)}
              className="flex h-6 w-6 items-center justify-center rounded border border-[var(--color-border)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center text-sm text-[var(--color-ink)]">
              {item.qty}
            </span>
            <button
              onClick={() => onUpdateQty(item.variantId, item.qty + 1)}
              className="flex h-6 w-6 items-center justify-center rounded border border-[var(--color-border)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold text-[var(--color-ink)]">
              ${(item.price * item.qty).toFixed(2)}
            </p>
            <button
              onClick={() => onRemove(item.variantId)}
              className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
              aria-label="Remove item"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
