import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getByCategory } from "@/lib/products";
import { getCategory } from "@/lib/categories";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const products = await getByCategory(slug);

  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="mb-8 md:mb-12">
          <h1 className="font-display mb-2 text-4xl uppercase tracking-tight text-[var(--color-ink)] md:text-5xl lg:text-6xl">
            {category.label}
          </h1>
          <p className="text-sm text-[var(--color-ink-muted)] md:text-base">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
        </div>

        <ProductGrid products={products} />
      </Container>
    </div>
  );
}

export async function generateStaticParams() {
  const { CATEGORIES } = await import("@/lib/categories");
  return CATEGORIES.map((cat) => ({ slug: cat.slug }));
}
