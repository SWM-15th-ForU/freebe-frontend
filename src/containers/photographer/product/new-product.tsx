"use client";

import { FormImage, ProductFormdata } from "product-types";
import { postNewProduct } from "@/services/client/photographer/products";
import ProductForm from "./form";
import { formStyles } from "./product.css";

const NewProduct = () => {
  const defaultValues: ProductFormdata = {
    title: "",
    subtitle: "",
    items: [
      {
        title: "기본 가격",
        content: "",
        description: "",
      },
      {
        title: "촬영 시간",
        content: "1시간",
        description: "",
      },
      {
        title: "보정본 수",
        content: "10장",
        description: "보정본 추가는 상품 옵션에서 선택해 주세요.",
      },
    ],
    options: [
      {
        title: "보정본 추가",
        isFree: false,
        description: "",
        price: 0,
      },
    ],
    discounts: [
      {
        title: "첫 주문 할인",
        discountType: "AMOUNT",
        discountValue: null,
        description: "",
      },
    ],
  };

  async function addNewProduct(data: ProductFormdata, images: FormImage[]) {
    const response = await postNewProduct(data, images);
  }

  return (
    <div className={formStyles.container}>
      <span className={formStyles.title}>촬영 정보 등록하기</span>
      <ProductForm
        formBase={defaultValues}
        handleSendForm={addNewProduct}
        imageBase={[]}
        isEditable
      />
    </div>
  );
};

export default NewProduct;
