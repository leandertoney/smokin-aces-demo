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
    <header className="absolute top-0 left-0 right-0 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>

          <Link href="/" className="font-display text-2xl uppercase tracking-tight text-white lg:text-3xl logo-animated group">
            <span className="inline-block">SMOKIN&apos;</span>{" "}
            <span className="inline-block text-[var(--color-accent)] transition-colors group-hover:text-white">ACES</span>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/collections/helmets"
                  className="text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-white"
                >
                  Helmets
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/leather-jackets"
                  className="text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-white"
                >
                  Jackets
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/leather-vests"
                  className="text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-white"
                >
                  Vests
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-white"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden sm:block">
              <Search className="h-5 w-5 text-white/80 transition-colors hover:text-white" />
            </button>
            <CartTrigger />
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="bg-black/90 backdrop-blur-sm lg:hidden">
          <Container>
            <nav className="py-4">
              <ul className="space-y-4">
                {CATEGORIES.slice(0, 8).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/collections/${cat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-white"
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
