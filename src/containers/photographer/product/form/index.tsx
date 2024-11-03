"use client";

import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { FormImage, ProductFormdata } from "product-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { MAX_LENGTHS } from "@/constants/common/schema";
import popToast from "@/components/common/toast";
import { CustomButton } from "@/components/buttons/common-buttons";
import ItemFieldArray from "./field/item-field-array";
import ImagesInput from "./field/image-input";
import OptionFieldArray from "./field/option-field-array";
import NoticeFieldArray from "./field/notice-field-array";
import { formStyles } from "./form.css";

const ProductForm = ({
  formBase,
  imageBase,
  handleSendForm,
  isEditing = true,
}: {
  formBase: ProductFormdata;
  imageBase: FormImage[];
  handleSendForm: (data: ProductFormdata, images: FormImage[]) => Promise<void>;
  isEditing?: boolean;
}) => {
  const productFormSchema = z.object({
    title: z
      .string()
      .min(1, { message: "제목을 입력해 주세요." })
      .max(MAX_LENGTHS.TITLE, { message: "최대 30자까지 입력 가능합니다." }),
    subtitle: z
      .string()
      .max(MAX_LENGTHS.TEXT, { message: "최대 100자까지 입력 가능합니다." }),
    basicPrice: z.coerce
      .number()
      .nonnegative({ message: "기본 가격을 입력해 주세요." }),
    basicPlace: z
      .string()
      .min(1, { message: "촬영 장소를 입력해 주세요." })
      .max(MAX_LENGTHS.TEXT, { message: "최대 100자까지 입력 가능합니다." }),
    allowPreferredPlace: z.boolean(),
    items: z.array(
      z.object({
        title: z
          .string()
          .min(1, { message: "구성의 이름을 입력해 주세요." })
          .max(MAX_LENGTHS.TITLE, {
            message: "최대 30자까지 입력 가능합니다.",
          }),
        description: z.string().max(MAX_LENGTHS.TEXT, {
          message: "최대 100자까지 입력 가능합니다.",
        }),
        content: z
          .string()
          .min(1, { message: "내용을 입력해 주세요." })
          .max(MAX_LENGTHS.TEXT, {
            message: "최대 100자까지 입력 가능합니다.",
          }),
      }),
    ),
    options: z.array(
      z
        .object({
          title: z
            .string()
            .min(1, { message: "옵션의 이름을 입력해 주세요." })
            .max(MAX_LENGTHS.TITLE, {
              message: "최대 30자까지 입력 가능합니다.",
            }),
          description: z.string().max(MAX_LENGTHS.TEXT, {
            message: "최대 100자까지 입력 가능합니다.",
          }),
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
            .max(MAX_LENGTHS.TITLE, {
              message: "최대 30자까지 입력 가능합니다.",
            }),
          description: z.string().max(MAX_LENGTHS.TEXT, {
            message: "최대 100자까지 입력 가능합니다.",
          }),
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
    notices: z.array(
      z.object({
        title: z
          .string()
          .min(1, { message: "제목을 비워둘 수 없습니다." })
          .max(MAX_LENGTHS.TITLE, { message: "30자 이내로 작성해주세요." }),
        content: z
          .string()
          .min(1, { message: "내용을 비워둘 수 없습니다." })
          .max(MAX_LENGTHS.LONG_TEXT, {
            message: "500자 이내로 작성해주세요.",
          }),
      }),
    ),
  });

  const method = useForm<ProductFormdata>({
    resolver: zodResolver(productFormSchema),
    defaultValues: formBase,
  });
  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = method;
  const [images, setImages] = useState<FormImage[]>(imageBase);
  const subtitle = watch("subtitle");

  const onSubmit: SubmitHandler<ProductFormdata> = async (data) => {
    if (images.length === 0) {
      popToast(
        "최소 한 장의 이미지가 필요합니다.",
        "이미지를 등록해 주세요.",
        true,
      );
    } else {
      await handleSendForm(data, images);
    }
  };

  return (
    <FormProvider {...method}>
      <form
        className={formStyles.container}
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className={formStyles.wrapper}>
          <div className={formStyles.split}>
            <span className={formStyles.subtitle}>상품 정보</span>
            <input
              placeholder="상품 제목을 입력해 주세요."
              className={formStyles.input}
              style={{ fontSize: 20 }}
              {...register("title")}
              disabled={!isEditing}
            />
            <span className={formStyles.error}>
              {errors.title && errors.title.message}
            </span>
            {isEditing ? (
              <textarea
                placeholder="(선택) 상품 소개글을 입력해 주세요."
                className={formStyles.input}
                disabled={!isEditing}
                {...register("subtitle")}
              />
            ) : (
              <span className={formStyles.text}>{subtitle}</span>
            )}
            <span className={formStyles.error}>
              {errors.subtitle && errors.subtitle.message}
            </span>
          </div>
          <div className={formStyles.split}>
            <ImagesInput
              images={images}
              setImage={setImages}
              disabled={!isEditing}
            />
          </div>
          <div className={formStyles.split}>
            <ItemFieldArray disabled={!isEditing} />
          </div>
          <div className={formStyles.split}>
            <OptionFieldArray disabled={!isEditing} />
          </div>
          <div style={{ width: "100%", minWidth: "fit-content" }}>
            <NoticeFieldArray disabled={!isEditing} />
          </div>
        </div>
        {isEditing && (
          <CustomButton
            type="submit"
            styleType="primary"
            size="md"
            title="등록하기"
            style={{ marginTop: 40 }}
          />
        )}
      </form>
    </FormProvider>
  );
};

export default ProductForm;
