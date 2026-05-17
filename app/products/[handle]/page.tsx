"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Gallery } from "@/components/product/Gallery";
import { VariantSelector } from "@/components/product/VariantSelector";
import { useCart } from "@/lib/cart-store";
import { getProduct, formatPrice } from "@/lib/products";
import type { ProductVariant } from "@/lib/types";

export default function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = use(params);
  const [product, setProduct] = useState<Awaited<ReturnType<typeof getProduct>>>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { add } = useCart();

  // Fetch product data
  use(
    getProduct(handle).then((p) => {
      if (!p) return;
      setProduct(p);
      setSelectedVariant(p.variants.find((v) => v.available) || p.variants[0]);
    })
  );

  if (!product) {
    notFound();
  }

  const variant = selectedVariant || product.variants[0];
  const price = variant?.price || product.minPrice;

  const handleAddToCart = () => {
    if (!variant) return;

    add({
      productHandle: product.handle,
      variantId: variant.id,
      title: product.title,
      variantTitle: variant.title,
      price: variant.price,
      image: product.images[0]?.src || "",
      qty: quantity,
    });
  };

  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Gallery images={product.images} />
          </div>

          <div className="space-y-6">
            <div>
              <Link
                href={`/vendors/${product.vendor.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs uppercase tracking-wide text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
              >
                {product.vendor}
              </Link>
              <h1 className="font-display mt-2 text-3xl uppercase tracking-tight text-[var(--color-ink)] md:text-4xl">
                {product.title}
              </h1>
              <p className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                {formatPrice(price)}
              </p>
              <div className="mt-2">
                {variant?.available ? (
                  <span className="inline-block rounded-full bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-500">
                    In Stock
                  </span>
                ) : (
                  <span className="inline-block rounded-full bg-red-600/10 px-3 py-1 text-xs font-semibold text-red-500">
                    Sold Out
                  </span>
                )}
              </div>
            </div>

            <VariantSelector product={product} onSelect={setSelectedVariant} />

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-[var(--color-ink)]">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded border border-[var(--color-border)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
                >
                  −
                </button>
                <span className="w-12 text-center text-[var(--color-ink)]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded border border-[var(--color-border)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!variant?.available}
              className="w-full rounded bg-[var(--color-accent)] py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add to Cart · {formatPrice(price * quantity)}
            </button>

            <div className="space-y-2 pt-6 text-xs text-[var(--color-ink-muted)]">
              <p>✓ Free shipping over $75</p>
              <p>✓ 30-day returns on unworn items</p>
              <p>✓ Secure checkout</p>
            </div>

            {product.description && (
              <div className="pt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]">
                  Description
                </h3>
                <p className="whitespace-pre-line text-sm text-[var(--color-ink-muted)]">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
