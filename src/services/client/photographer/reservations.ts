import {
  ActiveStatus,
  Details,
  Infos,
  ReservationList,
  ReservationListResponse,
  ReservationSearchParams,
  Status,
} from "reservation-types";
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

export async function getPreviousReservationList(
  params: ReservationSearchParams,
): Promise<{ reservationList: ReservationList[]; totalPages: number }> {
  const urlParams = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    const value = params[key as keyof typeof params];
    if (value !== undefined) {
      urlParams.append(key, value as string);
    }
  });

  const { data } = await apiClient
    .get(`photographer/reservation/list/past?${urlParams}`)
    .json<{
      data: {
        pastReservationFormComponent: ReservationListResponse[];
        totalPages: number;
      };
    }>();

  return {
    totalPages: data.totalPages,
    reservationList: data.pastReservationFormComponent.map((item) => {
      return {
        ...item,
        reservationStatus:
          item.reservationStatus === "PHOTO_COMPLETED"
            ? "PHOTO_COMPLETED"
            : "CANCELLED",
        shootingDate: item.shootingDate?.date || undefined,
      };
    }),
  };
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
  await apiClient.put(`photographer/reservation/details/${id}`, {
    json: body,
  });
}

export async function putReservationDetails(
  details: Pick<
    Details,
    "reservationNumber" | "currentStatus" | "shootingDate" | "shootingPlace"
  >,
) {
  const { reservationNumber, currentStatus, shootingDate, shootingPlace } =
    details;
  const body = {
    newShootingDate: shootingDate || null,
    newShootingPlace: shootingPlace || null,
    currentReservationStatus: currentStatus,
  };
  await apiClient.put(
    `photographer/reservation/shooting-info/${reservationNumber}`,
    {
      json: body,
    },
  );
}

export async function putMemo(id: number, memo: string) {
  const body = {
    photographerMemo: memo,
  };
  await apiClient.put(`photographer/reservation/memo/${id}`, { json: body });
}
