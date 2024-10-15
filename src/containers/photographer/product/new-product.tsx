"use client";

import { useRouter } from "next/navigation";
import { FormImage, Notice, ProductFormdata } from "product-types";
import popToast from "@/components/common/toast";
import { postNewProduct } from "@/services/client/photographer/products";
import { responseHandler } from "@/services/common/error";
import ProductForm from "./form";
import { formStyles } from "./product.css";

const NewProduct = ({ baseNotice }: { baseNotice: Notice[] }) => {
  const router = useRouter();
  const defaultValues: ProductFormdata = {
    title: "",
    subtitle: "",
    basicPrice: 0,
    items: [
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
    discounts: [],
    notices: baseNotice,
  };

  async function addNewProduct(data: ProductFormdata, images: FormImage[]) {
    await responseHandler(
      postNewProduct(data, images),
      () => {
        popToast("등록이 완료되었습니다.");
        router.push("/photographer/mypage/products");
        router.refresh();
      },
      (message) => {
        popToast(
          "다시 시도해 주세요.",
          message || "등록에 실패했습니다.",
          true,
        );
      },
    );
  }

  return (
    <div className={formStyles.container}>
      <span className={formStyles.title}>촬영 정보 등록하기</span>
      <ProductForm
        formBase={defaultValues}
        handleSendForm={addNewProduct}
        imageBase={[]}
      />
    </div>
  );
};

export default NewProduct;
