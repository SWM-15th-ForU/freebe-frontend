"use client";

import { Details } from "reservation-types";
import { FormProvider, useForm } from "react-hook-form";
import ReservationDetails from "./section/details";
import ReservationStatus from "./status";
import { containerStyle } from "./reservation.css";

const ReservationDetailsPage = ({ detailsData }: { detailsData: Details }) => {
  const method = useForm<Details>({ defaultValues: detailsData });

  return (
    <FormProvider {...method}>
      <div className={containerStyle}>
        <div>
          <ReservationStatus
            statusHistory={{
              NEW: {
                updatedDate: "2024-09-02",
              },
              IN_PROGRESS: { updatedDate: null },
              WAITING_FOR_DEPOSIT: { updatedDate: null },
              WAITING_FOR_PHOTO: { updatedDate: null },
            }}
            currentStatus="IN_PROGRESS"
          />
          <ReservationDetails />
        </div>
      </div>
    </FormProvider>
  );
};

export default ReservationDetailsPage;
