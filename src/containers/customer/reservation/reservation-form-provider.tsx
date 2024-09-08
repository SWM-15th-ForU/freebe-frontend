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
  const reservationFormSchema = z.object({
    instagram: z
      .string()
      .min(1, { message: "인스타그램 아이디를 입력해 주세요." }),
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
