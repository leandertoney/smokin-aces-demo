"use client";

import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CartLineItem } from "@/components/cart/CartLineItem";
import { FreeShipBar } from "@/components/cart/FreeShipBar";
import { useCart } from "@/lib/cart-store";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, updateQty, remove, subtotal } = useCart();
  const sub = subtotal();

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Container>
          <div className="mx-auto max-w-md text-center">
            <ShoppingBag className="mx-auto mb-6 h-24 w-24 text-[var(--color-muted)]" strokeWidth={1} />
            <h1 className="font-display mb-4 text-3xl uppercase tracking-tight text-[var(--color-ink)]">
              Your cart is empty
            </h1>
            <p className="mb-8 text-sm text-[var(--color-ink-muted)]">
              Add some gear to get started
            </p>
            <Link
              href="/shop"
              className="inline-block rounded bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90"
            >
              Shop Now
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16">
      <Container>
        <h1 className="font-display mb-8 text-3xl uppercase tracking-tight text-[var(--color-ink)] md:text-4xl">
          Cart ({items.length})
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <CartLineItem
                key={item.variantId}
                item={item}
                onUpdateQty={updateQty}
                onRemove={remove}
              />
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-[var(--color-ink)]">
                Order Summary
              </h2>

              <div className="mb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-ink-muted)]">Subtotal</span>
                  <span className="text-[var(--color-ink)]">${sub.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-ink-muted)]">Shipping</span>
                  <span className="text-[var(--color-ink)]">
                    {sub >= 75 ? "FREE" : "Calculated at checkout"}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <FreeShipBar subtotal={sub} />
              </div>

              <div className="mb-6 pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-[var(--color-ink)]">Total</span>
                  <span className="text-[var(--color-ink)]">${sub.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mb-4 block w-full rounded bg-[var(--color-accent)] py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90"
              >
                Checkout
              </Link>

              <Link
                href="/shop"
                className="block text-center text-sm text-[var(--color-ink-muted)] underline hover:text-[var(--color-ink)]"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
