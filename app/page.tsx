import { Hero } from "@/components/home/Hero";
import { BrandMarquee } from "@/components/shared/BrandMarquee";
import { Testimonials } from "@/components/shared/Testimonials";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedRail } from "@/components/home/FeaturedRail";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getAllProducts } from "@/lib/products";

export default async function Home() {
  const allProducts = await getAllProducts();
  const bestsellers = allProducts.filter(p => p.featured).slice(0, 8);

  return (
    <>
      <Hero />
      <div className="road-background">
        <div className="content-panel">
          <BrandMarquee />
        </div>
        <div className="content-panel">
          <CategoryGrid />
        </div>
        <div className="content-panel">
          <FeaturedRail />
        </div>

        <section className="content-panel py-12 md:py-16 lg:py-24">
          <Container>
            <SectionHeader title="BESTSELLERS" />
            <ProductGrid products={bestsellers} />
          </Container>
        </section>

        <section className="content-panel">
          <Testimonials />
        </section>

        <section className="content-panel py-12 md:py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-xl text-center px-4">
              <h2 className="font-display mb-3 text-2xl uppercase tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl lg:text-5xl">
                JOIN THE CREW
              </h2>
              <p className="mb-6 text-xs text-[var(--color-ink-muted)] sm:text-sm md:text-base">
                Get 10% off your first order and early access to new arrivals.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row sm:gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
                <button
                  type="submit"
                  className="rounded bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </Container>
        </section>
    </div>
    </>
  );
}
