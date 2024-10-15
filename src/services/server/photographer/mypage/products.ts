import {
  FormImage,
  ProductDetailResponseData,
  ProductFormdata,
} from "product-types";
import { api } from "../../core";

export interface ProductResponseData {
  productId: number;
  productTitle: string;
  representativeImage: string;
  reservationCount: number;
  activeStatus: "ACTIVE" | "INACTIVE";
}

// TODO: error boundary & suspense 연결
export async function getProductList(): Promise<ProductResponseData[]> {
  try {
    const response = await api
      .get(`photographer/product/list`)
      .json<{ data: ProductResponseData[] }>();
    const { data } = response;
    if (!data) return [];
    return data;
  } catch (error) {
    console.error("Failed to fetch product list", error);
    return [];
  }
}

export async function getCurrentProductDetails(
  productId: string,
): Promise<{ currentDetails: ProductFormdata; currentImage: FormImage[] }> {
  const { data } = await api
    .get(`photographer/product/${productId}`)
    .json<{ data: ProductDetailResponseData }>();

  const {
    productTitle,
    productDescription,
    basicPrice,
    productOptions,
    productComponents,
    productDiscounts,
    productImageUrls,
    notices,
  } = data;

  const currentDetails: ProductFormdata = {
    title: productTitle,
    subtitle: productDescription || "",
    basicPrice,
    notices,
    items: productComponents.map((component) => {
      return {
        ...component,
        description: component.description || "",
      };
    }),
    options: productOptions.map((option) => {
      return {
        ...option,
        isFree: option.price === 0,
        description: option.description || "",
      };
    }),
    discounts: productDiscounts.map((discount) => {
      return {
        ...discount,
        description: discount.description || "",
      };
    }),
  };
  const currentImage: FormImage[] = productImageUrls.map((url) => {
    return { url, fileName: null };
  });

  return {
    currentDetails,
    currentImage,
  };
}
