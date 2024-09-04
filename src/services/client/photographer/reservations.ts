import { Infos, Status } from "reservation-types";
import apiClient from "../core";

interface StatusListData {
  reservationStatus: Status;
  formComponent: Infos[];
}

export async function getReservationList() {
  // const { data } = await apiClient
  //   .post("photographer/reservation")
  //   .json<{ data: StatusListData[] }>();
  const reservationData: { [key in Status]: Infos[] } = {
    NEW: [],
    IN_PROGRESS: [],
    WAITING_FOR_DEPOSIT: [],
    WAITING_FOR_PHOTO: [],
  };
  const data: StatusListData[] = [
    {
      reservationStatus: "WAITING_FOR_PHOTO",
      formComponent: [
        {
          reservationId: 17,
          reservationSubmissionDate: "2024-09-04",
          reservationStatus: "WAITING_FOR_PHOTO",
          customerName: "이유리",
          productTitle: "웨딩스냅1",
          shootingDate: {
            date: "2024-08-30",
            startTime: "15:00:00",
            endTime: "17:00:00",
          },
        },
        {
          reservationId: 18,
          reservationSubmissionDate: "2024-09-04",
          reservationStatus: "WAITING_FOR_PHOTO",
          customerName: "이유리",
          productTitle: "웨딩스냅1",
          shootingDate: {
            date: "2024-09-01",
            startTime: "14:00:00",
            endTime: "17:00:00",
          },
        },
        {
          reservationId: 14,
          reservationSubmissionDate: "2024-09-04",
          reservationStatus: "WAITING_FOR_PHOTO",
          customerName: "이유리",
          productTitle: "웨딩스냅1",
          shootingDate: {
            date: "2024-09-01",
            startTime: "15:00:00",
            endTime: "17:00:00",
          },
        },
        {
          reservationId: 15,
          reservationSubmissionDate: "2024-09-04",
          reservationStatus: "WAITING_FOR_PHOTO",
          customerName: "이유리",
          productTitle: "웨딩스냅1",
          shootingDate: {
            date: "2024-09-02",
            startTime: "15:00:00",
            endTime: "17:00:00",
          },
        },
        {
          reservationId: 16,
          reservationSubmissionDate: "2024-09-04",
          reservationStatus: "WAITING_FOR_PHOTO",
          customerName: "이유리",
          productTitle: "웨딩스냅1",
          shootingDate: {
            date: "2024-09-03",
            startTime: "15:00:00",
            endTime: "17:00:00",
          },
        },
      ],
    },
    {
      reservationStatus: "IN_PROGRESS",
      formComponent: [
        {
          reservationId: 22,
          reservationSubmissionDate: "2024-09-04",
          reservationStatus: "IN_PROGRESS",
          customerName: "이유리",
          productTitle: "웨딩스냅1",
          shootingDate: null,
        },
      ],
    },
    {
      reservationStatus: "NEW",
      formComponent: [
        {
          reservationId: 21,
          reservationSubmissionDate: "2024-09-04",
          reservationStatus: "NEW",
          customerName: "이유리",
          productTitle: "웨딩스냅1",
          shootingDate: null,
        },
        {
          reservationId: 20,
          reservationSubmissionDate: "2024-09-04",
          reservationStatus: "NEW",
          customerName: "이유리",
          productTitle: "웨딩스냅1",
          shootingDate: null,
        },
        {
          reservationId: 19,
          reservationSubmissionDate: "2024-09-04",
          reservationStatus: "NEW",
          customerName: "이유리",
          productTitle: "웨딩스냅1",
          shootingDate: null,
        },
      ],
    },
  ];
  data.forEach((statusList) => {
    reservationData[statusList.reservationStatus].push(
      ...statusList.formComponent,
    );
  });
  return reservationData;
}
