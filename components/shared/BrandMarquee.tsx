export function BrandMarquee() {
  const brands = [
    {
      name: "DAYTONA",
      style: "px-4 py-2 border-2 border-[var(--color-accent)] rounded font-black text-[var(--color-accent)] bg-[var(--color-accent)]/10",
      textSize: "text-xl sm:text-2xl md:text-3xl"
    },
    {
      name: "RODIA",
      style: "font-serif italic font-bold text-white",
      textSize: "text-2xl sm:text-3xl md:text-4xl"
    },
    {
      name: "DIAMOND PLATE",
      style: "px-3 py-1 bg-gradient-to-r from-[var(--color-accent)] to-orange-600 text-white font-extrabold tracking-widest",
      textSize: "text-base sm:text-lg md:text-xl"
    },
    {
      name: "CHOPPERS",
      style: "font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--color-accent)]",
      textSize: "text-2xl sm:text-3xl md:text-4xl",
      shadow: "0 0 30px rgba(234, 88, 12, 0.5)"
    },
    {
      name: "ROCKY MOUNTAIN",
      style: "px-2 py-1 border-b-4 border-[var(--color-accent)] font-bold text-white",
      textSize: "text-sm sm:text-base md:text-lg"
    },
    {
      name: "NAVARR",
      style: "font-light tracking-[0.3em] text-[var(--color-accent-2)]",
      textSize: "text-xl sm:text-2xl md:text-3xl"
    },
    {
      name: "BIKER'S LEATHER",
      style: "px-4 py-2 rounded-md bg-black/60 border border-white/20 font-semibold text-white",
      textSize: "text-base sm:text-lg md:text-xl"
    },
    {
      name: "HOT LEATHERS",
      style: "font-black text-[var(--color-accent)] uppercase",
      textSize: "text-xl sm:text-2xl md:text-3xl",
      shadow: "0 0 25px rgba(234, 88, 12, 0.6)"
    },
  ];

  const BrandItem = ({ brand, keyPrefix }: { brand: typeof brands[0]; keyPrefix: string }) => (
    <>
      <span
        key={`${keyPrefix}-${brand.name}`}
        className={`${brand.style} ${brand.textSize} uppercase transition-all hover:scale-110`}
        style={{
          textShadow: brand.shadow,
        }}
      >
        {brand.name}
      </span>
      <span className="text-white/20 text-base sm:text-xl mx-2">•</span>
    </>
  );

  return (
    <div className="overflow-hidden py-12">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
          TRUSTED BRANDS
        </p>
      </div>
      <div className="relative flex">
        {/* First set */}
        <div className="flex animate-marquee items-center gap-6 whitespace-nowrap pr-6">
          {brands.map((brand) => (
            <BrandItem key={`first-${brand.name}`} brand={brand} keyPrefix="first" />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex animate-marquee items-center gap-6 whitespace-nowrap pr-6" aria-hidden="true">
          {brands.map((brand) => (
            <BrandItem key={`second-${brand.name}`} brand={brand} keyPrefix="second" />
          ))}
        </div>
      </div>
    </div>
  );
}
