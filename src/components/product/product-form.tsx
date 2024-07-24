"use client";

import { Product } from "product-types";
import { useForm } from "react-hook-form";
import * as style from "./product.css";
import ItemFieldArray from "./item-field-array";
import { SubmitButton } from "../buttons/common-buttons";

const ProductForm = () => {
  const values: Product = {
    title: undefined,
    subtitle: undefined,
    images: [],
    items: [
      { title: "기본 가격", content: "120,000원" },
      { title: "촬영 시간", content: "1시간" },
      {
        title: "보정본 수",
        content: "10장",
        description: "보정본 추가는 상품 옵션에서 선택해 주세요.",
      },
    ],
    options: [],
  };
  const { handleSubmit, control, register } = useForm({
    values,
  });
  const onSubmit = (data: Product) => {
    // console.log(data);
  };

  return (
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
      <SubmitButton title="다음" />
    </form>
  );
};

export default ProductForm;
