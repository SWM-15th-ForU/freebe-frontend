import { Product, ProductListData } from "product-types";
import { normalizeDescription } from "@/utils/product";
import { api } from "../core";

interface ProductResponseData {
  productId: number;
  productTitle: string;
  productRepresentativeImageUrl: string;
}

export async function getProductList(
  profileName: string,
): Promise<ProductListData[]> {
  const response = await api
    .get(`customer/product/list/${profileName}`)
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
  basicPrice: number;
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

export async function getProductDetails(productId: string): Promise<Product> {
  const response = await api
    .get(`customer/product/details/${productId}`)
    .json<{ data: ProductDetailResponseData }>();
  const { data } = response;
  return {
    title: data.productTitle,
    subtitle: data.productDescription,
    basicPrice: data.basicPrice,
    images: data.productImageUrls,
    items: normalizeDescription(data.productComponents),
    options: normalizeDescription(data.productOptions).map((option) => {
      return { ...option, isFree: option.price === 0 };
    }),
    discounts: normalizeDescription(data.productDiscounts),
  };
}
