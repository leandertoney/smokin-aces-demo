export type ProductVariant = {
  id: number;
  title: string;
  price: number;
  compareAtPrice: number | null;
  available: boolean;
  options: string[];
};

export type ProductImage = {
  src: string;
  width: number;
  height: number;
};

export type ProductOption = {
  name: string;
  position: number;
  values: string[];
};

export type Product = {
  id: number;
  handle: string;
  title: string;
  description: string;
  vendor: string;
  category: string;
  productType: string;
  minPrice: number;
  maxPrice: number;
  hasPriceRange: boolean;
  available: boolean;
  featured: boolean;
  images: ProductImage[];
  options: ProductOption[];
  variants: ProductVariant[];
};

export interface DataSource {
  getAllProducts(): Promise<Product[]>;
  getProduct(handle: string): Promise<Product | null>;
  getByCategory(slug: string): Promise<Product[]>;
  getByVendor(vendor: string): Promise<Product[]>;
  getFeatured(): Promise<Product[]>;
}
