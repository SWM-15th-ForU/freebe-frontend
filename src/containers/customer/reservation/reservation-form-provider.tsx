"use client";

import { reservation } from "product-types";
import { FormProvider, useForm } from "react-hook-form";

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
  const form = useForm<reservation.FormType>({
    defaultValues,
  });

  return (
    <FormProvider {...form}>
      <form>{children}</form>
    </FormProvider>
  );
};

export default ReservationFormProvider;
