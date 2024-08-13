import { Image, ProductFormdata } from "product-types";

export async function postProduct(data: ProductFormdata, images: Image[]) {
  // TODO: use core/api
  const body = {
    productTitle: data.title,
    productDescription: data.subtitle,
    productImageUrls: images,
    productComponents: data.items.map((item) => {
      return {
        title: item.title,
        content: item.content,
        description: item.hasDescription ? item.description : null,
      };
    }),
    productOptions: data.options.map((option) => {
      return {
        title: option.title,
        price: option.isFree ? 0 : option.price,
        description: option.hasDescription ? option.description : null,
      };
    }),
    productDiscounts: data.discounts.map((discount) => {
      return {
        title: discount.title,
        discountType: discount.discountType,
        discountValue: discount.discountValue,
        description: discount.hasDescription ? discount.description : null,
      };
    }),
  };
  try {
    const response = await fetch(
      "https://api.freebe.co.kr/photographer/product/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );
    const result = await response.json();
    console.log("success: ", result);
  } catch (error) {
    console.log("failed: ", error);
  }
}
