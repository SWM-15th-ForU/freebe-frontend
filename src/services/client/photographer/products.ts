import { Image, ProductFormdata } from "product-types";
import apiClient from "../core";

export async function postNewProduct(
  formData: ProductFormdata,
  images: Image[],
) {
  const body = {
    productTitle: formData.title,
    productDescription: formData.subtitle,
    productImageUrls: images,
    productComponents: formData.items.map((item) => {
      return {
        title: item.title,
        content: item.content,
        description: item.description !== "" ? item.description : null,
      };
    }),
    productOptions: formData.options.map((option) => {
      return {
        title: option.title,
        price: option.isFree ? 0 : option.price,
        description: option.description !== "" ? option.description : null,
      };
    }),
    productDiscounts: formData.discounts.map((discount) => {
      return {
        title: discount.title,
        discountType: discount.discountType,
        discountValue: discount.discountValue,
        description: discount.description !== "" ? discount.description : null,
      };
    }),
  };
  const response = await apiClient
    .post("photographer/product", {
      json: body,
    })
    .json();
  return response;
}

export async function putProductStatus(
  productId: number,
  activeStatus: "INACTIVE" | "ACTIVE",
) {
  const response = await apiClient
    .put("photographer/product/status", { json: { productId, activeStatus } })
    .json();
  return response;
}
