import { ProductListData } from "product-types";
import { api } from "../core";

interface ProductResponseData {
  productId: number;
  productTitle: string;
  productRepresentativeImageUrl: string;
}

export async function getProductList(
  photographerId: number,
): Promise<ProductListData[]> {
  const response = await api
    .get(`customer/product/list/${photographerId}`)
    .json<{ data: ProductResponseData[] }>();
  const { data } = response;
  return data.map((value) => {
    return {
      id: value.productId,
      title: value.productTitle,
      representImage: value.productRepresentativeImageUrl,
    };
  });
}
