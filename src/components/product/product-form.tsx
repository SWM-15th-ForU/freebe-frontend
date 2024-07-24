"use client";

import { Product } from "product-types";
import { useFieldArray, useForm } from "react-hook-form";
import * as style from "./product-form.css";

const ProductForm = () => {
  const defaultValues: Product = {
    title: undefined,
    subtitle: undefined,
    images: [],
    items: [{ title: "기본 가격", content: "120,000원" }],
    options: [],
  };
  const { handleSubmit, control, register } = useForm({
    defaultValues,
  });
  const {
    fields: itemFields,
    append: appendItem,
    remove: removeItem,
  } = useFieldArray({ control, name: "items" });

  return (
    <form className={style.formDiv}>
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
    </form>
  );
};

export default ProductForm;
