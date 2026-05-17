import Link from "next/link";
import { Container } from "./Container";
import { Mail, Phone, Globe } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "Helmets", href: "/collections/helmets" },
    { label: "Leather Jackets", href: "/collections/leather-jackets" },
    { label: "Leather Vests", href: "/collections/leather-vests" },
    { label: "Guardian Bells", href: "/collections/guardian-bells" },
    { label: "Knives", href: "/collections/knives" },
    { label: "All Products", href: "/shop" },
  ],
  support: [
    { label: "Shipping & Returns", href: "/about#shipping" },
    { label: "Size Guide", href: "/about#sizing" },
    { label: "FAQ", href: "/about#faq" },
    { label: "Contact Us", href: "/about#contact" },
  ],
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Locations", href: "/about#locations" },
    { label: "Terms of Service", href: "/about#terms" },
    { label: "Privacy Policy", href: "/about#privacy" },
  ],
};

const socialLinks = [
  { icon: Mail, href: "#", label: "Email" },
  { icon: Phone, href: "#", label: "Phone" },
  { icon: Globe, href: "#", label: "Website" },
];

export function Footer() {
  return (
    <footer className="pt-12 pb-6 mt-12 md:pt-16 md:pb-8 md:mt-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display mb-3 text-lg uppercase tracking-tight text-[var(--color-ink)] sm:mb-4 sm:text-xl">
              Shop
            </h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display mb-3 text-lg uppercase tracking-tight text-[var(--color-ink)] sm:mb-4 sm:text-xl">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display mb-3 text-lg uppercase tracking-tight text-[var(--color-ink)] sm:mb-4 sm:text-xl">
              About
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display mb-3 text-lg uppercase tracking-tight text-[var(--color-ink)] sm:mb-4 sm:text-xl">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-[var(--color-ink-muted)]">
              Questions? Call us at
              <br />
              <span className="text-[var(--color-ink)]">(555) 123-4567</span>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-[var(--color-ink-muted)]">
              © {new Date().getFullYear()} Smokin&apos; Aces Motorcycle Apparel. All rights reserved.
            </p>
            <div className="flex gap-2">
              <span className="text-xs text-[var(--color-ink-muted)]">We accept:</span>
              <span className="text-xs text-[var(--color-ink)]">Visa · Mastercard · Amex · Discover</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
