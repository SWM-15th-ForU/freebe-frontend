import { ProductFormdata } from "product-types";
import ProductForm from "./form";

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

  return <ProductForm formBase={defaultValues} />;
};

export default NewProduct;
