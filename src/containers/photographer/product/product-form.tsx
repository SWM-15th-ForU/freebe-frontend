"use client";

import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Image, ProductFormdata } from "product-types";
import { SubmitButton } from "@/components/buttons/common-buttons";
import { postNewProduct } from "@/services/client/photographer/products";
import ItemFieldArray from "./form/item-field-array";
import OptionFieldArray from "./form/option-field-array";
import ImagesInput from "./form/image-input";
import DiscountFieldArray from "./form/discount-field-array";
import { formStyles } from "./product.css";

const ProductForm = () => {
  const router = useRouter();
  const defaultValues: ProductFormdata = {
    title: "",
    subtitle: "",
    items: [
      {
        title: "기본 가격",
        content: "",
        hasDescription: false,
        description: "",
      },
      {
        title: "촬영 시간",
        content: "1시간",
        hasDescription: false,
        description: "",
      },
      {
        title: "보정본 수",
        content: "10장",
        hasDescription: true,
        description: "보정본 추가는 상품 옵션에서 선택해 주세요.",
      },
    ],
    options: [
      {
        title: "보정본 추가",
        hasDescription: false,
        isFree: true,
        description: "",
        price: 0,
      },
    ],
    discounts: [
      {
        title: "첫 주문 할인",
        discountType: "AMOUNT",
        hasDescription: false,
        discountValue: null,
        description: "",
      },
    ],
  };
  const method = useForm({
    defaultValues,
  });
  const { handleSubmit, control, register } = method;
  const [images, setImages] = useState<Image[]>([]);

  const onSubmit: SubmitHandler<ProductFormdata> = async (data) => {
    await postNewProduct(data, images);
    router.push("/photographer/mypage/products");
  };

  return (
    <FormProvider {...method}>
      <form className={formStyles.container} onSubmit={handleSubmit(onSubmit)}>
        <span className={formStyles.title}>촬영 정보 등록하기</span>
        <div className={formStyles.wrapper}>
          <div className={formStyles.split}>
            <span className={formStyles.subtitle}>상품 정보</span>
            <input
              placeholder="상품 제목을 입력해 주세요."
              className={formStyles.input}
              style={{ fontSize: 20 }}
              {...register("title")}
            />
            <input
              placeholder="(선택) 상품 소개글을 입력해 주세요."
              className={formStyles.input}
              {...register("subtitle")}
            />
          </div>
          <div className={formStyles.split}>
            <ImagesInput images={images} setImage={setImages} />
          </div>
          <div className={formStyles.split}>
            <ItemFieldArray formControl={control} formRegister={register} />
          </div>
          <div className={formStyles.split}>
            <OptionFieldArray formControl={control} formRegister={register} />
          </div>

          <DiscountFieldArray formControl={control} formRegister={register} />
        </div>
        <SubmitButton title="다음" />
      </form>
    </FormProvider>
  );
};

export default ProductForm;
