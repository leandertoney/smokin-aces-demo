import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { ProductCard } from "../product/ProductCard";
import { getFeatured } from "@/lib/products";

export async function FeaturedRail() {
  const products = await getFeatured();
  const displayProducts = products.slice(0, 8);

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <Container>
        <SectionHeader title="RIDE-READY GEAR" />
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-3 sm:gap-4 md:gap-6" style={{ width: "max-content" }}>
            {displayProducts.map((product) => (
              <div key={product.id} className="w-44 flex-shrink-0 sm:w-48 md:w-64">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
