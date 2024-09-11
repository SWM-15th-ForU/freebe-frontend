import { Details, ReservationDetailResponse } from "reservation-types";
import { objectToArray } from "@/utils/parse";
import { api } from "../core";

export async function getReservationDetail(
  reservationId: number,
): Promise<Details> {
  const response = await api.get(
    `photographer/reservation/details/${reservationId}`,
  );
  const { data } = await response.json<{ data: ReservationDetailResponse }>();

  const { statusHistory }: Pick<Details, "statusHistory"> = {
    statusHistory: {
      NEW: { updatedDate: null },
      IN_PROGRESS: { updatedDate: null },
      WAITING_FOR_DEPOSIT: { updatedDate: null },
      WAITING_FOR_PHOTO: { updatedDate: null },
      CANCELLED: { updatedDate: null },
      PHOTO_COMPLETED: { updatedDate: null },
    },
  };
  data.statusHistory.forEach((history) => {
    statusHistory[history.reservationStatus].updatedDate =
      history.statusUpdateDate;
  });
  return {
    ...data,
    statusHistory,
    currentStatus: data.currentReservationStatus,
    customer: data.customerDetails,
    photographerMemo: data.photographerMemo || "",
    productInfo: objectToArray(data.photoInfo, (arr) =>
      arr.map(([title, content]) => ({
        title,
        content,
      })),
    ),
    preferredDates: objectToArray(data.preferredDates, (arr) =>
      arr.sort().map(([_, content]) => content),
    ),
    options: objectToArray(data.photoOptions, (arr) =>
      arr.map(([_, content]) => content),
    ),
  };
}
