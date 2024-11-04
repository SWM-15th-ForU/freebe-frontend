"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FormImage, Notice, ProductFormdata } from "product-types";
import { Popover } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { sendGAEvent } from "@next/third-parties/google";
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
    sendGAEvent("event", "product_register", { product_title: data.title });
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
      <div>
        <div className={formStyles.head}>
          <span className={formStyles.title}>촬영 정보 등록하기</span>
          <Popover
            withArrow
            defaultOpened
            classNames={{ dropdown: formStyles.dropdown }}
          >
            <Popover.Target>
              <Image
                src="/icons/components/info.svg"
                width={16}
                height={16}
                alt="추가 정보"
                style={{ marginRight: "auto", marginLeft: 8 }}
              />
            </Popover.Target>
            <Popover.Dropdown>
              <span className={formStyles.info}>
                촬영 상품 등록이 처음이라면, 예시 상품을 참고해보세요. 상품은
                등록한 뒤에도 자유롭게 수정할 수 있어요.
              </span>
              <Link
                href="https://www.freebe.co.kr/freebe_official/products/8"
                target="_blank"
              >
                <CustomButton
                  size="sm"
                  styleType="primary"
                  title="등록 예시 미리 보기"
                />
              </Link>
            </Popover.Dropdown>
          </Popover>
        </div>
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
