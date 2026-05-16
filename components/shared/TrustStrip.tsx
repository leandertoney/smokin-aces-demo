import { Truck, RotateCcw, Users } from "lucide-react";
import { Container } from "./Container";

const features = [
  {
    icon: Truck,
    title: "Free Shipping Over $75",
    description: "Within the continental US",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description: "Unworn items in original condition",
  },
  {
    icon: Users,
    title: "Family-Owned",
    description: "Est. by riders, for riders",
  },
];

export function TrustStrip() {
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-12">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <Icon className="mb-3 h-8 w-8 text-[var(--color-accent)]" strokeWidth={1.5} />
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-[var(--color-ink)]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-muted)]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
