import { ActiveStatus, Infos, Status } from "reservation-types";
import apiClient from "../core";

interface StatusListData {
  reservationStatus: ActiveStatus;
  formComponent: Infos[];
}

// TODO: url의 상수화 리팩토링
export async function getReservationList() {
  const { data } = await apiClient
    .get("photographer/reservation/list")
    .json<{ data: StatusListData[] }>();
  const reservationData: { [key in ActiveStatus]: Infos[] } = {
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

export async function putReservationStatus(
  id: number,
  targetStatus: Status | "CANCELLED_BY_PHOTOGRAPHER",
  cancel?: string,
) {
  const body = {
    updateStatus: targetStatus,
    cancellationReason: cancel,
  };
  const response = await apiClient.put(
    `photographer/reservation/details/${id}`,
    {
      body: JSON.stringify(body),
    },
  );
}
