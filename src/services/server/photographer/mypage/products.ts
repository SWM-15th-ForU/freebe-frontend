import { error } from "console";
import { api } from "../../core";

export interface ProductResponseData {
  productId: number;
  productTitle: string;
  reservationCount: number;
  activeStatus: "ACTIVE" | "INACTIVE";
}

export async function getProductList(): Promise<ProductResponseData[]> {
  try {
    const response = await api
      .get(`photographer/product/list`)
      .json<{ data: ProductResponseData[] }>();
    const { data } = response;
    if (!data) return [];
    return data;
  } catch {
    console.error("Failed to fetch product list", error);
    return [];
  }
}
