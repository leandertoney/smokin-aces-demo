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
    <div className={cn("mb-8 md:mb-12", className)}>
      <h2 className="font-display text-3xl uppercase tracking-tight text-[var(--color-ink)] md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-[var(--color-ink-muted)] md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
