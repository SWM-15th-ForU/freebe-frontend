"use client";

import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Image, ProductFormdata } from "product-types";
import { SubmitButton } from "@/components/buttons/common-buttons";
import { postProduct } from "@/utils/apis/products";
import ItemFieldArray from "./form/item-field-array";
import OptionFieldArray from "./form/option-field-array";
import ImagesInput from "./form/image-input";
import DiscountFieldArray from "./form/discount-field-array";
import * as style from "./product.css";

const ProductForm = () => {
  const defaultValues: ProductFormdata = {
    title: "",
    subtitle: "",
    items: [
      { title: "기본 가격", content: "", hasDescription: false },
      { title: "촬영 시간", content: "1시간", hasDescription: false },
      {
        title: "보정본 수",
        content: "10장",
        hasDescription: true,
        description: "보정본 추가는 상품 옵션에서 선택해 주세요.",
      },
    ],
    options: [{ title: "보정본 추가", isFree: false }],
    discounts: [
      {
        title: "첫 주문 할인",
        discountType: "amount",
        hasDescription: false,
      },
    ],
  };
  const method = useForm({
    defaultValues,
  });
  const { handleSubmit, control, register } = method;
  const [images, setImages] = useState<Image[]>([]);

  const onSubmit: SubmitHandler<ProductFormdata> = (data) => {
    console.log({ images, ...data });
    postProduct(data, images);
  };

  return (
    <FormProvider {...method}>
      <form className={style.formDiv} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="상품 제목을 입력해 주세요."
          className={style.textInput}
          style={{ fontSize: 20 }}
          {...register("title")}
        />
        <input
          placeholder="(선택) 상품 소개글을 입력해 주세요."
          className={style.textInput}
          {...register("subtitle")}
        />
        <ImagesInput images={images} setImage={setImages} />
        <ItemFieldArray formControl={control} formRegister={register} />
        <OptionFieldArray formControl={control} formRegister={register} />
        <DiscountFieldArray formControl={control} formRegister={register} />
        <SubmitButton title="다음" />
      </form>
    </FormProvider>
  );
};

export default ProductForm;
