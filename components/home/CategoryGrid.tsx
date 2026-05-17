import Link from "next/link";
import Image from "next/image";
import { getByCategory } from "@/lib/products";
import { CATEGORIES } from "@/lib/categories";

const featuredCategories = [
  "helmets",
  "leather-jackets",
  "leather-vests",
  "guardian-bells",
  "knives",
  "license-plates",
];

export async function CategoryGrid() {
  const categoriesWithData = await Promise.all(
    featuredCategories.map(async (slug) => {
      const products = await getByCategory(slug);
      const category = CATEGORIES.find((c) => c.slug === slug);
      const featuredProduct = products.find((p) => p.images.length > 0);

      return {
        slug,
        label: category?.label || slug,
        count: products.length,
        image: featuredProduct?.images[0]?.src || null,
      };
    })
  );

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6">
      {categoriesWithData.map((cat) => (
        <Link
          key={cat.slug}
          href={`/collections/${cat.slug}`}
          className="group relative aspect-square overflow-hidden rounded bg-[var(--color-surface)]"
        >
          {cat.image && (
            <Image
              src={cat.image}
              alt={cat.label}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-6">
            <h3 className="font-display mb-1 text-lg sm:text-xl md:text-2xl uppercase tracking-tight text-white">
              {cat.label}
            </h3>
            <p className="text-xs sm:text-sm text-white/80">{cat.count} items</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
