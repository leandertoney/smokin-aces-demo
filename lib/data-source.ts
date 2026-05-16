import type { DataSource } from "./types";
import { StaticDataSource } from "./data-sources/static";
import { ShopifyDataSource } from "./data-sources/shopify";

/**
 * Data source factory
 *
 * Returns the appropriate data source based on DATA_SOURCE env var.
 * - "static" (default): Uses products.json for demo
 * - "shopify": Uses Shopify Storefront API for live store
 */
function createDataSource(): DataSource {
  const source = process.env.DATA_SOURCE || "static";

  switch (source) {
    case "shopify":
      return new ShopifyDataSource();
    case "static":
    default:
      return new StaticDataSource();
  }
}

// Singleton instance
export const dataSource = createDataSource();
