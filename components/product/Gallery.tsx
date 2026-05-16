"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/types";

export function Gallery({ images }: { images: ProductImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-[4/5] rounded bg-[var(--color-surface-2)] flex items-center justify-center">
        <span className="text-[var(--color-muted)]">No image</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded bg-[var(--color-surface)]">
        <Image
          src={images[0].src}
          alt="Product image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded bg-[var(--color-surface)]">
        <Image
          src={images[selectedIndex].src}
          alt={`Product image ${selectedIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={selectedIndex === 0}
        />
      </div>

      <div className="grid grid-cols-6 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative aspect-[4/5] overflow-hidden rounded bg-[var(--color-surface)] ${
              idx === selectedIndex ? "ring-2 ring-[var(--color-accent)]" : ""
            }`}
          >
            <Image
              src={img.src}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              sizes="100px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
