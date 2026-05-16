"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-store";
import { CartLineItem } from "./CartLineItem";
import { FreeShipBar } from "./FreeShipBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";

export function CartSheet() {
  const { items, isOpen, close, updateQty, remove, subtotal } = useCart();
  const sub = subtotal();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && close()}>
      <SheetContent className="flex w-full flex-col bg-[var(--color-bg)] sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl uppercase tracking-tight text-[var(--color-ink)]">
            Cart ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingBag className="mb-4 h-16 w-16 text-[var(--color-muted)]" strokeWidth={1} />
            <p className="mb-2 text-lg font-semibold text-[var(--color-ink)]">
              Your cart is empty
            </p>
            <p className="mb-6 text-sm text-[var(--color-ink-muted)]">
              Add some gear to get started
            </p>
            <Link
              href="/shop"
              onClick={close}
              className="rounded bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <CartLineItem
                  key={item.variantId}
                  item={item}
                  onUpdateQty={updateQty}
                  onRemove={remove}
                />
              ))}
            </div>

            <div className="space-y-4 border-t border-[var(--color-border)] pt-4">
              <FreeShipBar subtotal={sub} />

              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold text-[var(--color-ink)]">Subtotal</span>
                <span className="font-semibold text-[var(--color-ink)]">
                  ${sub.toFixed(2)}
                </span>
              </div>

              <Link
                href="/checkout"
                onClick={close}
                className="block w-full rounded bg-[var(--color-accent)] py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90"
              >
                Checkout · ${sub.toFixed(2)}
              </Link>

              <Link
                href="/cart"
                onClick={close}
                className="block text-center text-sm text-[var(--color-ink-muted)] underline hover:text-[var(--color-ink)]"
              >
                View full cart
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
