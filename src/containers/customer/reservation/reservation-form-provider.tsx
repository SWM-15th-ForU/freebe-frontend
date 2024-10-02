"use client";

import { ID_REGEX } from "@/constants/common/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservation } from "product-types";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const ReservationFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const defaultValues: reservation.FormType = {
    name: "",
    contact: "",
    instagram: "",
    schedules: [],
    options: [],
    referenceImages: [],
    memo: "",
    photographerAgreement: false,
    serviceAgreement: false,
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
    quantity: z.number(),
    price: z.number(),
  });

  const reservationFormSchema = z.object({
    instagram: z
      .string()
      .min(3, { message: "아이디는 3자 이상이어야 합니다." })
      .max(30, { message: "아이디는 최대 30자까지 사용할 수 있습니다." })
      .regex(ID_REGEX, {
        message: "아이디에는 특수문자를 포함할 수 없습니다.",
      }),
    memo: z.string().max(300, { message: "최대 300자까지 입력 가능합니다." }),
    referenceImages: z.array(z.string()).optional(),
    name: z.string(),
    contact: z.string(),
    schedules: z.array(scheduleListSchema).optional(),
    options: z.array(selectedOptionSchema).optional(),
    totalPrice: z.number(),
    serviceAgreement: z.boolean(),
    photographerAgreement: z.boolean(),
  });

  const method = useForm<reservation.FormType>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues,
  });

  return (
    <FormProvider {...method}>
      <form>{children}</form>
    </FormProvider>
  );
};

export default ReservationFormProvider;
