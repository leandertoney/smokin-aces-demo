import type { DataSource, Product } from "../types";

/**
 * Shopify Storefront API data source
 *
 * To go live with Shopify:
 * 1. Create a Storefront API access token in your Shopify admin
 * 2. Add SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN to .env.local
 * 3. Set DATA_SOURCE=shopify
 * 4. Implement the queries below using the Storefront API
 *
 * See README for detailed go-live instructions.
 */

const STOREFRONT_API_VERSION = "2024-01";

export class ShopifyDataSource implements DataSource {
  private endpoint: string;
  private headers: HeadersInit;

  constructor() {
    const domain = process.env.SHOPIFY_STORE_DOMAIN;
    const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

    if (!domain || !token) {
      throw new Error(
        "Missing Shopify credentials. Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN in .env.local"
      );
    }

    this.endpoint = `https://${domain}/api/${STOREFRONT_API_VERSION}/graphql.json`;
    this.headers = {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    };
  }

  async getAllProducts(): Promise<Product[]> {
    // TODO: Implement Storefront API query
    // Query all products using GraphQL
    throw new Error("Shopify Storefront API not yet implemented");
  }

  async getProduct(handle: string): Promise<Product | null> {
    // TODO: Implement Storefront API query
    // Query single product by handle using GraphQL
    throw new Error("Shopify Storefront API not yet implemented");
  }

  async getByCategory(slug: string): Promise<Product[]> {
    // TODO: Implement Storefront API query
    // Query products by collection using GraphQL
    throw new Error("Shopify Storefront API not yet implemented");
  }

  async getByVendor(vendor: string): Promise<Product[]> {
    // TODO: Implement Storefront API query
    // Query products filtered by vendor tag using GraphQL
    throw new Error("Shopify Storefront API not yet implemented");
  }

  async getFeatured(): Promise<Product[]> {
    // TODO: Implement Storefront API query
    // Query featured collection or tagged products using GraphQL
    throw new Error("Shopify Storefront API not yet implemented");
  }

  private async query(query: string, variables?: Record<string, unknown>) {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    return response.json();
  }
}
