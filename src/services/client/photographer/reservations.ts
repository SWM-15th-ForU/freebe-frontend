import { Infos, Status } from "reservation-types";
import apiClient from "../core";

interface StatusListData {
  reservationStatus: Status;
  formComponent: Infos[];
}

// TODO: url의 상수화 리팩토링
export async function getReservationList() {
  const { data } = await apiClient
    .post("photographer/reservation")
    .json<{ data: StatusListData[] }>();
  const reservationData: { [key in Status]: Infos[] } = {
    NEW: [],
    IN_PROGRESS: [],
    WAITING_FOR_DEPOSIT: [],
    WAITING_FOR_PHOTO: [],
  };
  data.forEach((statusList) => {
    reservationData[statusList.reservationStatus].push(
      ...statusList.formComponent,
    );
  });
  return reservationData;
}
