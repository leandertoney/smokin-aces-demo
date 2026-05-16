import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getByVendor, getAllVendors } from "@/lib/products";

export default async function VendorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vendors = await getAllVendors();
  const vendor = vendors.find((v) => v.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!vendor) {
    notFound();
  }

  const products = await getByVendor(vendor);

  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="mb-8 md:mb-12">
          <h1 className="font-display mb-2 text-4xl uppercase tracking-tight text-[var(--color-ink)] md:text-5xl lg:text-6xl">
            {vendor}
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
  const vendors = await getAllVendors();
  return vendors.map((vendor) => ({
    slug: vendor.toLowerCase().replace(/\s+/g, "-"),
  }));
}
