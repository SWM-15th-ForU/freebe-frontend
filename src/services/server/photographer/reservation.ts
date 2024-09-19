import { Details, ReservationDetailResponse } from "reservation-types";
import { objectToArray } from "@/utils/parse";
import { api } from "../core";

const dummyData: ReservationDetailResponse = {
  reservationNumber: 22,
  currentReservationStatus: "CANCELLED_BY_CUSTOMER",
  statusBeforeCancellation: "WAITING_FOR_DEPOSIT",
  statusHistory: [
    {
      reservationStatus: "NEW",
      statusUpdateDate: "2024-09-04",
    },
    {
      reservationStatus: "IN_PROGRESS",
      statusUpdateDate: "2024-09-04",
    },
    {
      reservationStatus: "WAITING_FOR_DEPOSIT",
      statusUpdateDate: "2024-09-04",
    },
    // {
    //   reservationStatus: "WAITING_FOR_PHOTO",
    //   statusUpdateDate: "2024-09-04",
    // },
    {
      reservationStatus: "CANCELLED_BY_CUSTOMER",
      statusUpdateDate: "2024-09-04",
    },
  ],
  productTitle: "웨딩스냅1",
  customerDetails: {
    name: "이유리",
    phoneNumber: "010-7554-3789",
    instagramId: "example_insta_id",
  },
  photoInfo: {
    "기본 가격": "160,000",
    "촬영 장소": "테이프콜 스튜디오",
    "상품 구성": "보정본 4장 + 네컷 or ID카드 3종 + 원본 전체",
  },
  photoOptions: {
    "1": {
      title: "인원 추가",
      quantity: 1,
      price: 30000,
    },
    "2": {
      title: "착장 추가",
      quantity: 2,
      price: 40000,
    },
  },
  preferredDates: {
    "1": {
      date: "2024-09-01",
      startTime: "15:00:00",
      endTime: "17:00:00",
    },
    "2": {
      date: "2024-09-01",
      startTime: "15:00:00",
      endTime: "17:00:00",
    },
    "3": {
      date: "2024-09-01",
      startTime: "15:00:00",
      endTime: "17:00:00",
    },
  },
  originalImage: ["", ""],
  thumbnailImage: ["", ""],
  requestMemo: "예쁘게 찍어주세요",
  photographerMemo: null,
};

export async function getReservationDetail(
  reservationId: number,
): Promise<Details> {
  // const response = await api.get(
  //   `photographer/reservation/details/${reservationId}`,
  // );
  // const { data } = await response.json<{ data: ReservationDetailResponse }>();

  const data = dummyData as ReservationDetailResponse;

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
    cancelStatus: data.statusBeforeCancellation,
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
