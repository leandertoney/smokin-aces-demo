import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/shared/TrustStrip";
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
      <TrustStrip />
      <CategoryGrid />
      <FeaturedRail />

      <section className="bg-[var(--color-surface)] py-16 md:py-24">
        <Container>
          <SectionHeader title="BESTSELLERS" />
          <ProductGrid products={bestsellers} />
        </Container>
      </section>

      <section className="bg-[var(--color-bg)] py-12 md:py-16">
        <Container>
          <div className="text-center">
            <p className="mb-4 text-sm uppercase tracking-wide text-[var(--color-ink-muted)]">
              TRUSTED BRANDS WE CARRY
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--color-ink-muted)]">
              <span className="text-sm font-semibold">Daytona</span>
              <span className="text-[var(--color-border)]">·</span>
              <span className="text-sm font-semibold">Rodia</span>
              <span className="text-[var(--color-border)]">·</span>
              <span className="text-sm font-semibold">Diamond Plate</span>
              <span className="text-[var(--color-border)]">·</span>
              <span className="text-sm font-semibold">Choppers</span>
              <span className="text-[var(--color-border)]">·</span>
              <span className="text-sm font-semibold">Rocky Mountain</span>
              <span className="text-[var(--color-border)]">·</span>
              <span className="text-sm font-semibold">Navarr</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display mb-4 text-4xl uppercase tracking-tight text-[var(--color-ink)] md:text-5xl">
              JOIN THE CREW
            </h2>
            <p className="mb-8 text-sm text-[var(--color-ink-muted)] md:text-base">
              Get 10% off your first order and early access to new arrivals.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
              <button
                type="submit"
                className="rounded bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
