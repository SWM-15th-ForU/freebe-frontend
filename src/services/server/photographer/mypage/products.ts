import { api } from "../../core";

export interface ProductResponseData {
  productId: number;
  productTitle: string;
  reservationCount: number;
  activeStatus: "ACTIVE" | "INACTIVE";
}

export async function getProductList(): Promise<ProductResponseData[]> {
  const response = await api
    .get(`photographer/product/list`)
    .json<{ data: ProductResponseData[] }>();
  const { data } = response;
  return data;
}
