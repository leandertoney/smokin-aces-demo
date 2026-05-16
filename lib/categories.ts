export const CATEGORIES = [
  {
    slug: "leather-jackets",
    label: "Leather Jackets",
    productType: "Leather Jacket",
    priority: 1,
  },
  {
    slug: "textile-jackets",
    label: "Textile Jackets",
    productType: "Textile Jacket",
    priority: 2,
  },
  {
    slug: "leather-vests",
    label: "Leather Vests",
    productType: "Leather vest",
    priority: 3,
  },
  { slug: "helmets", label: "Helmets", productType: "Helmets", priority: 1 },
  {
    slug: "sunglasses",
    label: "Sunglasses",
    productType: "Sun Glasses",
    priority: 4,
  },
  { slug: "goggles", label: "Goggles", productType: "Goggles", priority: 4 },
  {
    slug: "guardian-bells",
    label: "Guardian Bells",
    productType: "Guardian Bells",
    priority: 2,
  },
  { slug: "knives", label: "Knives", productType: "Knives", priority: 3 },
  {
    slug: "road-signs",
    label: "Road Signs",
    productType: "Road Signs",
    priority: 4,
  },
  {
    slug: "license-plates",
    label: "License Plate Covers",
    productType: "License Plate Covers",
    priority: 4,
  },
  {
    slug: "saddle-bags",
    label: "Saddle Bags",
    productType: "saddle bags",
    priority: 3,
  },
  {
    slug: "tool-bags",
    label: "Tool Bags",
    productType: "Tool Bag",
    priority: 4,
  },
  { slug: "coins", label: "Coins", productType: "Coins", priority: 5 },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);

export const PRICE_TIERS = [
  { label: "Under $15", min: 0, max: 15 },
  { label: "$15 – $50", min: 15, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
];
