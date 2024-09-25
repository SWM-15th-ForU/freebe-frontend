"use client";

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
      .min(1, { message: "인스타그램 아이디를 입력해 주세요." }),
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
