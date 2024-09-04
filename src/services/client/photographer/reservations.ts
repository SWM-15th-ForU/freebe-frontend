import { Infos, Status } from "reservation-types";
import apiClient from "../core";

interface StatusListData {
  reservationStatus: Status;
  formComponent: Infos[];
}

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
