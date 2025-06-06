import { Product } from "../models/products";
import { AppError } from "../utils/errorHandler";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products.map(
      (p: any) =>
        new Product(
          p.id,
          p.title,
          p.description,
          p.price,
          p.discountPercentage,
          p.category
        )
    );
  } catch (error) {
    throw new AppError("Failed to retrieve Product");
  }
}
