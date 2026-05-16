import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <h1 className="font-display mb-4 text-6xl uppercase tracking-tight text-[var(--color-ink)]">
            404
          </h1>
          <p className="mb-2 text-xl font-semibold text-[var(--color-ink)]">
            Page not found
          </p>
          <p className="mb-8 text-sm text-[var(--color-ink-muted)]">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block rounded bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-accent)]/90"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
