import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatPriceRange } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const hasMultipleOptions =
    product.options.length > 0 &&
    product.options[0].name !== "Title" &&
    product.options[0].values.length > 4;

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block"
    >
      <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded bg-[var(--color-surface)]">
        {product.images[0] ? (
          <Image
            src={product.images[0].src}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-103"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[var(--color-surface-2)]">
            <span className="text-sm text-[var(--color-muted)]">No image</span>
          </div>
        )}

        {!product.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="font-display -rotate-12 text-2xl uppercase tracking-tight text-white">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <p className="text-xs uppercase tracking-wide text-[var(--color-ink-muted)]">
          {product.vendor}
        </p>
        <h3 className="truncate text-sm font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            {formatPriceRange(product)}
          </p>
          {hasMultipleOptions && (
            <span className="rounded bg-[var(--color-surface)] px-2 py-0.5 text-xs text-[var(--color-ink-muted)]">
              +{product.options[0].values.length} options
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
