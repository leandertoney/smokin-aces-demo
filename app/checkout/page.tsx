"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { useCart } from "@/lib/cart-store";

export default function CheckoutPage() {
  const router = useRouter();
  const { subtotal } = useCart();
  const sub = subtotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/checkout/success");
  };

  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display mb-8 text-3xl uppercase tracking-tight text-[var(--color-ink)] md:text-4xl">
            Checkout
          </h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h2 className="mb-4 text-lg font-semibold text-[var(--color-ink)]">
                  Contact Information
                </h2>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>

              <div className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h2 className="mb-4 text-lg font-semibold text-[var(--color-ink)]">
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First name" required className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)]" />
                    <input type="text" placeholder="Last name" required className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)]" />
                  </div>
                  <input type="text" placeholder="Address" required className="w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)]" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" required className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)]" />
                    <input type="text" placeholder="State" required className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)]" />
                  </div>
                  <input type="text" placeholder="ZIP code" required className="w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)]" />
                </div>
              </div>

              <div className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h2 className="mb-4 text-lg font-semibold text-[var(--color-ink)]">
                  Payment (Demo Only)
                </h2>
                <p className="mb-4 text-sm text-[var(--color-ink-muted)]">
                  This is a demo checkout. No payment will be processed.
                </p>
                <div className="space-y-4">
                  <input type="text" placeholder="Card number" disabled className="w-full rounded border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-3 text-sm text-[var(--color-muted)]" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" disabled className="rounded border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-3 text-sm text-[var(--color-muted)]" />
                    <input type="text" placeholder="CVV" disabled className="rounded border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-3 text-sm text-[var(--color-muted)]" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h2 className="mb-4 text-lg font-semibold text-[var(--color-ink)]">
                  Order Summary
                </h2>
                <div className="mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-ink-muted)]">Subtotal</span>
                    <span className="text-[var(--color-ink)]">${sub.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-ink-muted)]">Shipping</span>
                    <span className="text-[var(--color-ink)]">{sub >= 75 ? "FREE" : "$9.99"}</span>
                  </div>
                  <div className="border-t border-[var(--color-border)] pt-2 flex justify-between text-lg font-semibold">
                    <span className="text-[var(--color-ink)]">Total</span>
                    <span className="text-[var(--color-ink)]">
                      ${(sub + (sub >= 75 ? 0 : 9.99)).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded bg-[var(--color-accent)] py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90"
                >
                  Place Order (Demo)
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
