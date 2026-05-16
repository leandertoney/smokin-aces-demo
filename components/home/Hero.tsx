import Link from "next/link";
import { Container } from "../shared/Container";

export function Hero() {
  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden bg-[var(--color-surface)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://cdn.shopify.com/s/files/1/0809/4967/4212/files/20260413_155026.jpg?v=1778536863')",
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Container className="relative flex h-full flex-col justify-center">
        <h1 className="font-display mb-4 text-5xl uppercase leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
          GEAR UP.
          <br />
          RIDE LOUD.
        </h1>
        <p className="mb-8 max-w-xl text-lg text-white/90 md:text-xl">
          Helmets, leathers, and the small things that make a ride yours.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/collections/helmets"
            className="rounded bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90"
          >
            Shop Helmets
          </Link>
          <Link
            href="/collections/leather-vests"
            className="rounded border-2 border-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
          >
            Shop Vests
          </Link>
        </div>
      </Container>
    </div>
  );
}
