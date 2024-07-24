"use client";

import { Product } from "product-types";
import { FormProvider, useForm } from "react-hook-form";
import * as style from "./product.css";
import ItemFieldArray from "./item-field-array";
import { SubmitButton } from "../buttons/common-buttons";
import OptionFieldArray from "./option-field-array";

const ProductForm = () => {
  const defaultValues: Product = {
    title: "",
    subtitle: "",
    images: [],
    items: [
      { title: "기본 가격", content: "120,000원", hasDescription: false },
      { title: "촬영 시간", content: "1시간", hasDescription: false },
      {
        title: "보정본 수",
        content: "10장",
        hasDescription: true,
        description: "보정본 추가는 상품 옵션에서 선택해 주세요.",
      },
    ],
    options: [{ title: "보정본 추가", isFree: false }],
  };
  const method = useForm({
    defaultValues,
  });
  const { handleSubmit, control, register } = method;
  const onSubmit = (data: Product) => {
    // console.log(data);
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
        <ItemFieldArray formControl={control} formRegister={register} />
        <OptionFieldArray formControl={control} formRegister={register} />
        <SubmitButton title="다음" />
      </form>
    </FormProvider>
  );
};

export default ProductForm;
