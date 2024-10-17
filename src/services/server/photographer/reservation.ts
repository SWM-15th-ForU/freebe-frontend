import { Details, ReservationDetailResponse } from "reservation-types";
import { objectToArray } from "@/utils/parse";
import { api } from "../core";

export async function getReservationDetail(formId: string): Promise<Details> {
  const response = await api.get(`photographer/reservation/details/${formId}`);
  const { data } = await response.json<{ data: ReservationDetailResponse }>();

  const { statusHistory }: Pick<Details, "statusHistory"> = {
    statusHistory: {
      NEW: { updatedDate: null, current: "NOT_STARTED" },
      IN_PROGRESS: { updatedDate: null, current: "NOT_STARTED" },
      WAITING_FOR_DEPOSIT: { updatedDate: null, current: "NOT_STARTED" },
      WAITING_FOR_PHOTO: { updatedDate: null, current: "NOT_STARTED" },
      PHOTO_COMPLETED: { updatedDate: null, current: "NOT_STARTED" },
      CANCELLED: { updatedDate: null, current: "NOT_STARTED" },
    },
  };

  data.statusHistory.forEach((history) => {
    if (
      history.reservationStatus === "CANCELLED_BY_CUSTOMER" ||
      history.reservationStatus === "CANCELLED_BY_PHOTOGRAPHER"
    ) {
      statusHistory.CANCELLED.updatedDate = history.statusUpdateDate;
      statusHistory.CANCELLED.current = "NOW";
    } else {
      statusHistory[history.reservationStatus].updatedDate =
        history.statusUpdateDate;
      statusHistory[history.reservationStatus].current =
        data.currentReservationStatus !== "PHOTO_COMPLETED" &&
        data.currentReservationStatus === history.reservationStatus
          ? "NOW"
          : "DONE";
    }
  });

  const currentStatus =
    data.currentReservationStatus === "CANCELLED_BY_CUSTOMER" ||
    data.currentReservationStatus === "CANCELLED_BY_PHOTOGRAPHER"
      ? "CANCELLED"
      : data.currentReservationStatus;

  return {
    ...data,
    statusHistory,
    currentStatus,
    preferredPlace: data.preferredPlace || undefined,
    shootingPlace: data.shootingPlace || undefined,
    cancelStatus: data.statusBeforeCancellation,
    customer: data.customerDetails,
    photographerMemo: data.photographerMemo || "",
    productInfo: objectToArray(data.photoInfo, (arr) =>
      arr.map(([title, content]) => ({
        title,
        content,
      })),
    ),
    shootingDate: data.shootingDate || undefined,
    preferredDates: objectToArray(data.preferredDates, (arr) =>
      arr.sort().map(([_, content]) => content),
    ),
    options: objectToArray(data.photoOptions, (arr) =>
      arr.map(([_, content]) => content),
    ),
    notices: objectToArray(data.photoNotice, (arr) =>
      arr.sort().map(([_, content]) => content),
    ),
  };
}
