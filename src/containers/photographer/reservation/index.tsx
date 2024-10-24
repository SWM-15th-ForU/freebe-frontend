"use client";

import { useEffect } from "react";
import { Details } from "reservation-types";
import { FormProvider, useForm } from "react-hook-form";
import ReservationDetails from "./section/details";
import ReservationStatus from "../../common/status";
import { containerStyle, detailStyle } from "./reservation.css";
import Control from "./section/control";
import ReservationTitle from "./title";

const ReservationDetailsPage = ({ detailsData }: { detailsData: Details }) => {
  const method = useForm<Details>({ defaultValues: detailsData });
  const { setValue } = method;

  useEffect(() => {
    Object.keys(detailsData).forEach((key) => {
      setValue(key as keyof Details, detailsData[key as keyof Details]);
    });
  }, [detailsData, setValue]);

  return (
    <FormProvider {...method}>
      <div className={containerStyle}>
        <div className={detailStyle}>
          <ReservationStatus {...detailsData} />
          <ReservationTitle {...detailsData} />
          <ReservationDetails />
        </div>
        <Control />
      </div>
    </FormProvider>
  );
};

export default ReservationDetailsPage;
