import { featuredProducts, getProductById, products, type LegacyProduct } from "./products";

export function getProducts() {
  return products;
}

export function getFeaturedProducts() {
  return featuredProducts;
}

export function findProductById(productId: string) {
  return getProductById(productId);
}

export function saveProduct(product: LegacyProduct) {
  return product;
}

export function deleteProduct(_productId: string) {
  return true;
}

export const productStore = {
  getProducts,
  getFeaturedProducts,
  findProductById,
  saveProduct,
  deleteProduct,
};