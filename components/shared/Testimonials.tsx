import { Star, Quote } from "lucide-react";
import { Container } from "./Container";

const testimonials = [
  {
    name: "Mike R.",
    location: "Phoenix, AZ",
    text: "Best leather vest I've ever owned. Quality is incredible and fits perfect.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Austin, TX",
    text: "Finally found a helmet that looks good and actually protects. The team knows their stuff.",
    rating: 5,
  },
  {
    name: "Dave M.",
    location: "Denver, CO",
    text: "Real riders, real gear. No BS. Been buying from them for years.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="font-display mb-2 text-2xl uppercase tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl">
            TRUSTED BY RIDERS
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
            ))}
            <span className="ml-2 text-xs sm:text-sm text-[var(--color-ink-muted)]">5.0 average rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-white/5 bg-black/40 p-6 backdrop-blur-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-[var(--color-accent)]/20" />
              <div className="relative">
                <div className="mb-3 flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-ink)]">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-sm font-semibold text-[var(--color-ink)]">{testimonial.name}</p>
                  <p className="text-xs text-[var(--color-ink-muted)]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
