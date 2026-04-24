export type LegacyBrand = {
  name: string;
  logo?: string;
  description?: string;
};

export type LegacyProduct = {
  id: string;
  name: string;
  slug?: string;
  price?: number | null;
  image?: string;
  images?: string[];
  brand?: string;
  category?: string;
  description?: string;
  featured?: boolean;
};

export const brands: LegacyBrand[] = [];
export const featuredBrands: LegacyBrand[] = [];
export const products: LegacyProduct[] = [];
export const featuredProducts: LegacyProduct[] = [];
export const categories: string[] = [];

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export default products;