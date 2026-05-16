"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Container } from "../shared/Container";
import { CATEGORIES } from "@/lib/categories";
import { CartTrigger } from "../cart/CartTrigger";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[var(--color-ink)]" />
            ) : (
              <Menu className="h-6 w-6 text-[var(--color-ink)]" />
            )}
          </button>

          <Link href="/" className="font-display text-2xl uppercase tracking-tight text-[var(--color-ink)] lg:text-3xl">
            SMOKIN&apos; ACES
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/collections/helmets"
                  className="text-sm uppercase tracking-wide text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                >
                  Helmets
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/leather-jackets"
                  className="text-sm uppercase tracking-wide text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                >
                  Jackets
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/leather-vests"
                  className="text-sm uppercase tracking-wide text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                >
                  Vests
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm uppercase tracking-wide text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden sm:block">
              <Search className="h-5 w-5 text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]" />
            </button>
            <CartTrigger />
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] lg:hidden">
          <Container>
            <nav className="py-4">
              <ul className="space-y-4">
                {CATEGORIES.slice(0, 8).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/collections/${cat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm uppercase tracking-wide text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/shop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]"
                  >
                    All Products
                  </Link>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
