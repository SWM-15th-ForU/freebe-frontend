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
  return {
    ...data,
    currentStatus: data.currentReservationStatus,
    statusHistory: data.statusHistory.map((history) => {
      return {
        status: history.reservationStatus,
        updatedDate: history.statusUpdateDate,
      };
    }),
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
