import { Image, ProductFormdata } from "product-types";

export async function postProduct(data: ProductFormdata, images: Image[]) {
  // TODO: use core/api
  const body = {
    memberId: 2,
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
    productOptions: [
      {
        title: "인원 추가 (1인)",
        price: 30000,
        description: null,
      },
      {
        title: "의상 대여",
        price: 15000,
        description: "의상대여는 1개만 가능합니다.",
      },
    ],
    productDiscounts: [
      {
        title: "친구 소개",
        discountType: "RATE",
        discountValue: 20,
        description: null,
      },
      {
        title: "3번째 예약",
        discountType: "AMOUNT",
        discountValue: 30000,
        description: "계좌이체 시 할인 가능합니다^^",
      },
    ],
  };
  try {
    const response = await fetch("https://api.freebe.co.kr/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log("success: ", result);
  } catch (error) {
    console.log("failed: ", error);
  }
}
