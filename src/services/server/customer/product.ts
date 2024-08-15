import { Product, ProductListData } from "product-types";
import { normalizeDescription } from "@/utils/product";
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

interface ProductDetailResponseData {
  productTitle: string;
  productDescription: string;
  productImageUrls: string[];
  productComponents: {
    title: string;
    content: string;
    description: null | string;
  }[];
  productOptions: {
    title: string;
    price: number;
    description: null | string;
  }[];
  productDiscounts: {
    title: string;
    discountType: "RATE" | "AMOUNT";
    discountValue: number;
    description: null | string;
  }[];
}

export async function getProductDetails(productId: number): Promise<Product> {
  const response = await api
    .get(`customer/product/details/${productId}`)
    .json<{ data: ProductDetailResponseData }>();
  const { data } = response;
  return {
    title: data.productTitle,
    subtitle: data.productDescription,
    images: data.productImageUrls,
    items: normalizeDescription(data.productComponents),
    options: normalizeDescription(data.productOptions),
    discounts: normalizeDescription(data.productDiscounts),
  };
}
