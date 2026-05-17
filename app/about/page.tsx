import { Container } from "@/components/shared/Container";

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display mb-8 text-4xl uppercase tracking-tight text-[var(--color-ink)] md:text-5xl">
            RIDERS, FOR RIDERS.
          </h1>

          <div className="space-y-6 text-[var(--color-ink-muted)]">
            <p className="text-lg leading-relaxed">
              Smokin&apos; Aces was built by riders, for riders. We carry the gear we trust on
              our own bikes — leathers that hold up, helmets that protect, and the small things
              that make a ride yours.
            </p>

            <p className="text-lg leading-relaxed">
              Family-owned and operated since day one, we&apos;ve put together a lineup of trusted
              brands like Daytona, Rodia, and Diamond Plate. No fluff, no markup games. Just real
              gear at fair prices.
            </p>

            <p className="text-lg leading-relaxed">
              Whether you&apos;re kitting out your first ride or replacing a vest you&apos;ve worn through,
              we&apos;re here to help. Stop in, call us, or shop online — we ship anywhere in the
              country.
            </p>
          </div>

          <div className="mt-12 space-y-8 pt-12">
            <div>
              <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-[var(--color-ink)]">
                Shipping & Returns
              </h2>
              <p className="text-sm text-[var(--color-ink-muted)]">
                Free shipping on orders over $75 within the continental US. Most orders ship within
                1–2 business days. 30-day returns on unworn items in original condition. Questions?
                Reach out and we&apos;ll take care of you.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-[var(--color-ink)]">
                Contact
              </h2>
              <div className="space-y-2 text-sm text-[var(--color-ink-muted)]">
                <p>Email: hello@smokinacesmoto.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Hours: Mon-Sat 10am-6pm EST</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
