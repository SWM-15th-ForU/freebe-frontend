import { ActiveStatus, Status } from "reservation-types";

export function getTargetStatus(
  currentStatus: ActiveStatus,
  cancel?: boolean,
): Status {
  const nextStatus: { [key in ActiveStatus]: Status } = {
    NEW: "IN_PROGRESS",
    IN_PROGRESS: "WAITING_FOR_DEPOSIT",
    WAITING_FOR_DEPOSIT: "WAITING_FOR_PHOTO",
    WAITING_FOR_PHOTO: "PHOTO_COMPLETED",
  };
  if (cancel) {
    return "CANCELLED";
  }
  return nextStatus[currentStatus];
}
