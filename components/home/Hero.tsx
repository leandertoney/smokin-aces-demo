import Link from "next/link";
import { Container } from "../shared/Container";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover hero-bg"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/hero.png')",
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

      <div className="relative flex h-full flex-col justify-center px-6 md:px-12 lg:px-20">
        <h1 className="font-display mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] tracking-tight text-white hero-title">
          <span className="block hero-line-1">
            BUILT BY <span className="relative inline-block text-[var(--color-accent)] hero-emphasis">
              RIDERS.
              <span className="hero-underline"></span>
            </span>
          </span>
          <span className="block hero-line-2">
            FOR <span className="relative inline-block text-[var(--color-accent)] hero-emphasis">
              RIDERS.
              <span className="hero-underline"></span>
            </span>
          </span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed hero-subtitle">
          Premium leathers. Trusted helmets. Gear that protects.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 hero-cta">
          <Link
            href="/collections/helmets"
            className="rounded bg-[var(--color-accent)] px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[var(--color-accent)]/90 hover:scale-105"
          >
            Shop Helmets
          </Link>
          <Link
            href="/collections/leather-vests"
            className="rounded border-2 border-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-black hover:scale-105"
          >
            Shop Vests
          </Link>
        </div>
      </div>
    </div>
  );
}
