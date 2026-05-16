import { dataSource } from "./data-source";
import type { Product } from "./types";

/**
 * Product query helpers
 *
 * These functions use the data adapter layer, so they work with both
 * static JSON (demo) and Shopify Storefront API (live).
 */

export const getAllProducts = () => dataSource.getAllProducts();

export const getProduct = (handle: string) => dataSource.getProduct(handle);

export const getByCategory = (slug: string) => dataSource.getByCategory(slug);

export const getByVendor = (vendor: string) => dataSource.getByVendor(vendor);

export const getFeatured = () => dataSource.getFeatured();

export const getAllVendors = async () => {
  const products = await getAllProducts();
  return Array.from(new Set(products.map((p) => p.vendor))).sort();
};

export const getCategoryCount = async (slug: string) => {
  const products = await getByCategory(slug);
  return products.length;
};

export const formatPrice = (price: number) => `$${price.toFixed(2)}`;

export const formatPriceRange = (p: Product) =>
  p.hasPriceRange
    ? `From $${p.minPrice.toFixed(2)}`
    : `$${p.minPrice.toFixed(2)}`;
