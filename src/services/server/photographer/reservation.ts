import { Details, Option, ReservationDate, Status } from "reservation-types";
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
  photoOptions: { [key: string]: Option };
  photographerMemo: string | null;
}

export async function getReservationDetail(
  reservationId: number,
): Promise<Details> {
  // const response = await api.get(
  //   `photographer/reservation/details/${reservationId}`,
  // );
  // TODO: 더미 데이터 삭제
  // const { data } = await response.json<{ data: ReservationDetailResponse }>();
  const data: ReservationDetailResponse = {
    reservationNumber: 22,
    currentReservationStatus: "IN_PROGRESS",
    statusHistory: [
      {
        reservationStatus: "NEW",
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
    productInfo: Object.entries(data.photoInfo).map(([title, content]) => ({
      title,
      content,
    })),
    preferredDates: Object.entries(data.preferredDates).map(
      ([_, content]) => content,
    ),
    options: Object.entries(data.photoOptions).map(([_, content]) => content),
  };
}
