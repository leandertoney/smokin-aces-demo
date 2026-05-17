import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 md:mb-8 lg:mb-12", className)}>
      <h2 className="font-display text-2xl uppercase tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-xs text-[var(--color-ink-muted)] sm:text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
