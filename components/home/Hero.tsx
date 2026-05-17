import Link from "next/link";
import { Container } from "../shared/Container";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/hero.png')",
          backgroundPosition: "center 30%",
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
        <h1 className="font-display mb-4 text-4xl uppercase leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl hero-title">
          <span className="block hero-line-1">
            BUILT BY <span className="relative inline-block font-black text-[var(--color-accent)] hero-emphasis">
              RIDERS
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-accent)]"></span>
            </span>.
          </span>
          <span className="block hero-line-2">
            FOR <span className="relative inline-block font-black text-[var(--color-accent)] hero-emphasis">
              RIDERS
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-accent)]"></span>
            </span>.
          </span>
        </h1>
        <p className="mb-8 max-w-xl text-base text-white/90 sm:text-lg md:text-xl hero-subtitle">
          <span className="font-bold text-white">Premium leathers.</span> <span className="font-bold text-white">Trusted helmets.</span> <span className="font-semibold">Gear that protects you on every ride.</span>
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
