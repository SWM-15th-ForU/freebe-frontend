"use client";

import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Image, ProductFormdata } from "product-types";
import { zodResolver } from "@hookform/resolvers/zod";
import popToast from "@/components/common/toast";
import { CustomButton } from "@/components/buttons/common-buttons";
import { postNewProduct } from "@/services/client/photographer/products";
import ItemFieldArray from "./field/item-field-array";
import OptionFieldArray from "./field/option-field-array";
import ImagesInput from "./field/image-input";
import DiscountFieldArray from "./field/discount-field-array";
import { formStyles } from "./form.css";

const ProductForm = ({ formBase }: { formBase: ProductFormdata }) => {
  const router = useRouter();

  const productFormSchema = z.object({
    title: z
      .string()
      .min(1, { message: "제목을 입력해 주세요." })
      .max(30, { message: "최대 30자까지 입력 가능합니다." }),
    subtitle: z
      .string()
      .max(100, { message: "최대 100자까지 입력 가능합니다." }),
    items: z.array(
      z.object({
        title: z
          .string()
          .min(1, { message: "구성의 이름을 입력해 주세요." })
          .max(30, { message: "최대 30자까지 입력 가능합니다." }),
        description: z
          .string()
          .max(100, { message: "최대 100자까지 입력 가능합니다." }),
        content: z
          .string()
          .min(1, { message: "내용을 입력해 주세요." })
          .max(100, { message: "최대 100자까지 입력 가능합니다." }),
      }),
    ),
    options: z.array(
      z
        .object({
          title: z
            .string()
            .min(1, { message: "옵션의 이름을 입력해 주세요." })
            .max(30, { message: "최대 30자까지 입력 가능합니다." }),
          description: z
            .string()
            .max(100, { message: "최대 100자까지 입력 가능합니다." }),
          price: z.coerce.number(),
          isFree: z.boolean(),
        })
        .refine(
          ({ price, isFree }) => {
            if (!isFree) {
              return price > 0;
            }
            return true;
          },
          {
            message: "추가 비용이 없는 옵션이라면 무료로 선택해 주세요.",
            path: ["price"],
          },
        ),
    ),
    discounts: z.array(
      z
        .object({
          title: z
            .string()
            .min(1, { message: "이름을 입력해 주세요." })
            .max(30, { message: "최대 30자까지 입력 가능합니다." }),
          description: z
            .string()
            .max(100, { message: "최대 100자까지 입력 가능합니다." }),
          discountValue: z.coerce.number(),
          discountType: z.string(),
        })
        .refine(
          ({ discountType, discountValue }) => {
            if (discountType === "RATE")
              return discountValue > 0 && discountValue <= 100;
            return true;
          },
          {
            message: "할인율은 1에서 100 사이로 입력해 주세요.",
            path: ["discountValue"],
          },
        )
        .refine(
          ({ discountType, discountValue }) => {
            if (discountType === "AMOUNT") return discountValue > 0;
            return true;
          },
          {
            message: "할인 금액을 입력해 주세요.",
            path: ["discountValue"],
          },
        ),
    ),
  });

  const method = useForm<ProductFormdata>({
    resolver: zodResolver(productFormSchema),
    defaultValues: formBase,
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = method;
  const [images, setImages] = useState<File[]>([]);

  const onSubmit: SubmitHandler<ProductFormdata> = async (data) => {
    if (images.length === 0) {
      popToast("최소 한 장의 이미지가 필요합니다.", "이미지를 등록해 주세요.");
    } else {
      await postNewProduct(data, images);
      router.push("/photographer/mypage/products");
    }
  };

  return (
    <FormProvider {...method}>
      <form
        className={formStyles.container}
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
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
            <span className={formStyles.error}>
              {errors.title && errors.title.message}
            </span>
            <input
              placeholder="(선택) 상품 소개글을 입력해 주세요."
              className={formStyles.input}
              {...register("subtitle")}
            />
            <span className={formStyles.error}>
              {errors.subtitle && errors.subtitle.message}
            </span>
          </div>
          <div className={formStyles.split}>
            <ImagesInput images={images} setImage={setImages} />
          </div>
          <div className={formStyles.split}>
            <ItemFieldArray />
          </div>
          <div className={formStyles.split}>
            <OptionFieldArray />
          </div>

          <DiscountFieldArray />
        </div>
        <CustomButton
          type="submit"
          styleType="primary"
          size="md"
          title="다음"
          style={{ marginTop: 40 }}
        />
      </form>
    </FormProvider>
  );
};

export default ProductForm;
