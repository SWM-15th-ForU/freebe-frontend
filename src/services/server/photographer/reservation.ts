import { Details, ReservationDate, Status } from "reservation-types";
import { api } from "../core";

interface ReservationDetailResponse {
  reservationNumber: number;
  currentReservationStatus: Status;
  statusHistory: {
    reservationStatus: Status;
    statusUpdateDate: string;
  }[];
  productTitle: string;
  customerDetails: {
    name: string;
    phoneNumber: string;
    instagramId: string;
  };
  photoInfo: { [key: string]: string };
  preferredDates: { [key: string]: ReservationDate };
  originalImage: string[];
  thumbnailImage: string[];
  requestMemo: string;
  options: unknown[];
  photographerMemo: string;
}

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
    productInfo: Object.entries(data.photoInfo).map(([title, content]) => ({
      title,
      content,
    })),
    preferredDates: Object.entries(data.preferredDates).map(
      ([_, content]) => content,
    ),
  };
}
