import raw from "../data/shopify-products.json";
import { writeFileSync, mkdirSync } from "fs";

const CATEGORY_MAP: Record<string, string> = {
  "Leather Jacket": "leather-jackets",
  "Textile Jacket": "textile-jackets",
  "Leather vest": "leather-vests",
  "Helmets": "helmets",
  "Sun Glasses": "sunglasses",
  "Goggles": "goggles",
  "Guardian Bells": "guardian-bells",
  "Knives": "knives",
  "Road Signs": "road-signs",
  "License Plate Covers": "license-plates",
  "saddle bags": "saddle-bags",
  "Tool Bag": "tool-bags",
  "Coins": "coins",
};

// One product has empty product_type — manually map it
const HANDLE_OVERRIDES: Record<string, string> = {
  "mens-leather-vest": "leather-vests",
};

// Mark featured products for home rails (hand-picked across categories)
const FEATURED_HANDLES = new Set([
  "diamond-plate-leather-jacket-live-to-ride",
  "rodia-boneyard-black",
  "guardian-bells",
  "skull-and-roses",
  "small-saddle-bags",
  "mens-leather-vest",
  "choppers-riding-glasses",
  "motorcycle-u-s-flag",
  "daytona-skull-cap-half-helmet-flames",
  "eagle-usa",
  "navarr-bullet-textile-jacket-with-conceal-carry",
  "ride-free-sign",
]);

type ShopifyVariant = {
  id: number; title: string; price: string; compare_at_price: string | null;
  available: boolean; option1: string | null; option2: string | null; option3: string | null;
};
type ShopifyProduct = {
  id: number; handle: string; title: string; body_html: string; vendor: string;
  product_type: string; tags: string[];
  variants: ShopifyVariant[];
  images: { src: string; width: number; height: number }[];
  options: { name: string; position: number; values: string[] }[];
};

const products = (raw as { products: ShopifyProduct[] }).products.map((p) => {
  const category = HANDLE_OVERRIDES[p.handle] ?? CATEGORY_MAP[p.product_type] ?? "other";
  const availableVariants = p.variants.filter((v) => v.available);
  const prices = availableVariants.map((v) => parseFloat(v.price));
  const minPrice = prices.length ? Math.min(...prices) : parseFloat(p.variants[0]?.price ?? "0");
  const maxPrice = prices.length ? Math.max(...prices) : minPrice;

  return {
    id: p.id,
    handle: p.handle,
    title: p.title,
    description: p.body_html.replace(/<[^>]+>/g, "\n").split("\n").map(s => s.trim()).filter(Boolean).join("\n"),
    vendor: p.vendor,
    category,
    productType: p.product_type,
    minPrice,
    maxPrice,
    hasPriceRange: minPrice !== maxPrice,
    available: availableVariants.length > 0,
    featured: FEATURED_HANDLES.has(p.handle),
    images: p.images.map((i) => ({ src: i.src, width: i.width, height: i.height })),
    options: p.options,
    variants: p.variants.map((v) => ({
      id: v.id,
      title: v.title,
      price: parseFloat(v.price),
      compareAtPrice: v.compare_at_price ? parseFloat(v.compare_at_price) : null,
      available: v.available,
      options: [v.option1, v.option2, v.option3].filter((o): o is string => Boolean(o)),
    })),
  };
});

mkdirSync("lib", { recursive: true });
writeFileSync("lib/products.json", JSON.stringify(products, null, 2));
const cats = new Set(products.map(p => p.category));
const vendors = new Set(products.map(p => p.vendor));
console.log(`✓ Built ${products.length} products | ${cats.size} categories | ${vendors.size} vendors`);
