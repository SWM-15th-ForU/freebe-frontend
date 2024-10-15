import { FormImage, ProductFormdata } from "product-types";
import { FilterItemType } from "common-types";
import apiClient from "../core";

export async function getProductTitles(): Promise<FilterItemType[]> {
  const { data } = await apiClient.get("photographer/product/title").json<{
    data: {
      title: string;
    }[];
  }>();

  return data.map(({ title }, index) => {
    return { name: title, id: index };
  });
}

export async function postNewProduct(
  form: ProductFormdata,
  images: FormImage[],
) {
  const formData = new FormData();
  const inputData = {
    productTitle: form.title,
    basicPrice: form.basicPrice,
    // TODO: 백엔드 상품 상세 수정 api 명세 검토
    notices: form.notices,
    productDescription: form.subtitle,
    productComponents: form.items.map((item) => {
      return {
        title: item.title,
        content: item.content,
        description: item.description !== "" ? item.description : null,
      };
    }),
    productOptions: form.options.map((option) => {
      return {
        title: option.title,
        price: option.isFree ? 0 : option.price,
        description: option.description !== "" ? option.description : null,
      };
    }),
    productDiscounts: form.discounts.map((discount) => {
      return {
        title: discount.title,
        discountType: discount.discountType,
        discountValue: discount.discountValue,
        description: discount.description !== "" ? discount.description : null,
      };
    }),
  };
  formData.append(
    "request",
    new Blob([JSON.stringify(inputData)], { type: "application/json" }),
  );

  images.forEach((image) => {
    if (image.file) {
      formData.append("images", image.file);
    }
  });

  await apiClient
    .post("photographer/product", {
      body: formData,
    })
    .json();
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

export async function deleteProduct(productId: number) {
  await apiClient.delete(`photographer/product/${productId}`).json();
}

export async function putProductDetails(
  newDetails: ProductFormdata,
  newImages: FormImage[],
  productId: string,
) {
  const formData = new FormData();
  const { title, subtitle, items, options, discounts, basicPrice, notices } =
    newDetails;
  const inputData = {
    basicPrice,
    // TODO: 백엔드 상품 상세 수정 api 명세 검토
    notices,
    productId: parseInt(productId, 10),
    existingUrls: newImages.map((image) => {
      return image.file !== undefined ? null : image.url;
    }),
    productTitle: title,
    productDescription: subtitle,
    productComponents: items.map((item) => {
      return {
        title: item.title,
        content: item.content,
        description: item.description !== "" ? item.description : null,
      };
    }),
    productOptions: options.map((option) => {
      return {
        title: option.title,
        price: option.isFree ? 0 : option.price,
        description: option.description !== "" ? option.description : null,
      };
    }),
    productDiscounts: discounts.map((discount) => {
      return {
        title: discount.title,
        discountType: discount.discountType,
        discountValue: discount.discountValue,
        description: discount.description !== "" ? discount.description : null,
      };
    }),
  };
  formData.append(
    "request",
    new Blob([JSON.stringify(inputData)], { type: "application/json" }),
  );

  newImages.forEach((image) => {
    if (image.file) {
      formData.append("images", image.file);
    }
  });

  const response = await apiClient.put("photographer/product", {
    body: formData,
  });
  return response;
}
