"use client";

import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-store";

export default function CheckoutSuccessPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-500" strokeWidth={1.5} />
          <h1 className="font-display mb-4 text-3xl uppercase tracking-tight text-[var(--color-ink)]">
            Order Placed
          </h1>
          <p className="mb-2 text-lg text-[var(--color-ink)]">
            This is a demo checkout
          </p>
          <p className="mb-8 text-sm text-[var(--color-ink-muted)]">
            No payment was processed. Thank you for exploring Smokin&apos; Aces!
          </p>
          <Link
            href="/"
            className="inline-block rounded bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
