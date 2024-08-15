import { api } from "../core";

interface ProductResponseData {
  productId: number;
  productTitle: string;
  productRepresentativeImageUrl: string;
}

export async function getProductList(photographerId: number) {
  const response = await api
    .get(`customer/product/list/${photographerId}`)
    .json<{ data: ProductResponseData[] }>();
  const { data } = response;
  return data;
}
