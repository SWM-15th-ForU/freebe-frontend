"use client";

import popToast from "@/components/common/toast";
import { MAX_LENGTHS } from "@/constants/common/schema";
import { ID_REGEX } from "@/constants/common/user";
import { postReservation } from "@/services/client/customer/reservation";
import { responseHandler } from "@/services/common/error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { reservation } from "product-types";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const ReservationFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const defaultValues: reservation.FormType = {
    profileName: "",
    productId: 0,
    name: "",
    contact: "",
    instagram: "",
    schedules: [],
    options: [],
    preferredPlace: "",
    referenceImages: [],
    memo: "",
    noticeAgreement: false,
    totalPrice: 0,
  };

  const scheduleListSchema = z.object({
    date: z.date().nullable(),
    startTime: z.date().nullable(),
    endTime: z.date().nullable(),
  });

  const selectedOptionSchema = z.object({
    index: z.number(),
    title: z.string(),
    quantity: z.number().nonnegative(),
    price: z.number().nonnegative(),
    description: z.string().optional(),
  });

  const reservationFormSchema = z.object({
    profileName: z.string(),
    productId: z.number(),
    name: z.string(),
    contact: z.string(),
    instagram: z
      .string()
      .min(3, { message: "아이디는 3자 이상이어야 합니다." })
      .max(30, { message: "아이디는 최대 30자까지 사용할 수 있습니다." })
      .regex(ID_REGEX, {
        message:
          "아이디에는 영어 소문자, 숫자, 다음의 기호만을 사용할 수 있습니다: ._",
      }),
    schedules: z.array(scheduleListSchema).optional(),
    options: z.array(selectedOptionSchema).optional(),
    memo: z.string().max(MAX_LENGTHS.LONG_TEXT, {
      message: "최대 500자까지 입력 가능합니다.",
    }),
    preferredPlace: z.string().max(MAX_LENGTHS.TEXT, {
      message: "최대 100자까지 입력 가능합니다.",
    }),
    referenceImages: z
      .array(
        z.object({
          url: z.string().url(),
          file: z.instanceof(File).optional(),
        }),
      )
      .optional(),
    totalPrice: z.number(),
    noticeAgreement: z.boolean(),
  });

  const method = useForm<reservation.FormType>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues,
  });

  const { handleSubmit } = method;

  async function onSubmit(data: reservation.FormType) {
    await responseHandler(
      postReservation(data),
      (formId) => {
        popToast("즐거운 촬영 되세요.", "신청이 완료되었습니다!");
        router.push(`/customer/reservation/${formId}`);
      },
      (message) =>
        popToast(
          "다시 시도해 주세요.",
          message || "신청에 실패했습니다.",
          true,
        ),
    );
  }

  return (
    <FormProvider {...method}>
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default ReservationFormProvider;
