import type { DataSource, Product } from "../types";
import productsData from "../products.json";

const products = productsData as Product[];

export class StaticDataSource implements DataSource {
  async getAllProducts(): Promise<Product[]> {
    return products;
  }

  async getProduct(handle: string): Promise<Product | null> {
    return products.find((p) => p.handle === handle) ?? null;
  }

  async getByCategory(slug: string): Promise<Product[]> {
    return products.filter((p) => p.category === slug);
  }

  async getByVendor(vendor: string): Promise<Product[]> {
    return products.filter(
      (p) => p.vendor.toLowerCase() === vendor.toLowerCase()
    );
  }

  async getFeatured(): Promise<Product[]> {
    return products.filter((p) => p.featured);
  }
}
