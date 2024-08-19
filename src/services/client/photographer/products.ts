import { Image, ProductFormdata } from "product-types";
import clientApi from "../core";

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
        description: item.hasDescription ? item.description : null,
      };
    }),
    productOptions: formData.options.map((option) => {
      return {
        title: option.title,
        price: option.isFree ? 0 : option.price,
        description: option.hasDescription ? option.description : null,
      };
    }),
    productDiscounts: formData.discounts.map((discount) => {
      return {
        title: discount.title,
        discountType: discount.discountType,
        discountValue: discount.discountValue,
        description: discount.hasDescription ? discount.description : null,
      };
    }),
  };
  console.log(body);
  const request = await clientApi
    .post("photographer/product", { json: { body } })
    .json();
  return request;
}

export async function putProductStatus(
  productId: number,
  activeStatus: "INACTIVE" | "ACTIVE",
) {
  const request = await clientApi
    .put("photographer/product", { json: { productId, activeStatus } })
    .json();
  return request;
}
