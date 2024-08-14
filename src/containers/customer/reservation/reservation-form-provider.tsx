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
    contanct: "",
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

  const { handleSubmit } = form;

  function onSubmit(formValues: reservation.FormType) {
    // TODO: connect to submit reservation api
    alert(JSON.stringify(formValues));
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default ReservationFormProvider;
