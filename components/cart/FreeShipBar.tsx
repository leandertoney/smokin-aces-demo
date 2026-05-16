export function FreeShipBar({ subtotal }: { subtotal: number }) {
  const threshold = 75;
  const remaining = Math.max(0, threshold - subtotal);
  const progress = Math.min(100, (subtotal / threshold) * 100);

  if (subtotal >= threshold) {
    return (
      <div className="rounded border border-green-600/20 bg-green-600/10 p-3 text-center">
        <p className="text-sm font-semibold text-green-500">
          🎉 You&apos;ve unlocked free shipping!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-surface-2)]">
        <div
          className="h-full bg-[var(--color-accent)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-center text-xs text-[var(--color-ink-muted)]">
        Add <span className="font-semibold text-[var(--color-ink)]">${remaining.toFixed(2)}</span> more for free shipping
      </p>
    </div>
  );
}
