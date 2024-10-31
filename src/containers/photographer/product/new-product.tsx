"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
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
    basicPlace: "",
    allowPreferredPlace: false,
    items: [
      {
        title: "촬영 시간",
        content: "1시간",
        description: "",
      },
      {
        title: "보정본 수",
        content: "10장",
        description: "",
      },
    ],
    options: [
      {
        title: "보정본 추가",
        isFree: false,
        description: "",
        price: 0,
      },
      {
        title: "포트폴리오 업로드 미동의",
        isFree: true,
        description:
          "해당 옵션을 선택하지 않을 경우, 촬영된 사진이 인스타그램에 업로드되어 포트폴리오로 사용될 수 있습니다.",
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
      <div className={formStyles.head}>
        <span className={formStyles.title}>촬영 정보 등록하기</span>
        <Link
          href="https://www.freebe.co.kr/freebe_official/products/8"
          target="_blank"
          className={formStyles.link}
        >
          등록 예시 보기
        </Link>
      </div>
      <ProductForm
        formBase={defaultValues}
        handleSendForm={addNewProduct}
        imageBase={[]}
      />
    </div>
  );
};

export default NewProduct;
