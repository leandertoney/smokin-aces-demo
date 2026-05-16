import { Container } from "@/components/shared/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getAllProducts } from "@/lib/products";

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="mb-8 md:mb-12">
          <h1 className="font-display mb-2 text-4xl uppercase tracking-tight text-[var(--color-ink)] md:text-5xl lg:text-6xl">
            All Products
          </h1>
          <p className="text-sm text-[var(--color-ink-muted)] md:text-base">
            {products.length} products
          </p>
        </div>

        <ProductGrid products={products} />
      </Container>
    </div>
  );
}
