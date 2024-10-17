import { ActiveStatus, Status } from "reservation-types";

export function getTargetStatus(
  currentStatus: ActiveStatus,
  cancel?: boolean,
): Status {
  if (cancel) {
    return "CANCELLED";
  }
  const nextStatus: { [key in ActiveStatus]: Status } = {
    NEW: "IN_PROGRESS",
    IN_PROGRESS: "WAITING_FOR_DEPOSIT",
    WAITING_FOR_DEPOSIT: "WAITING_FOR_PHOTO",
    WAITING_FOR_PHOTO: "PHOTO_COMPLETED",
  };
  return nextStatus[currentStatus];
}

export function compareStatus(currentStatus: Status, targetStatus: Status) {
  const statusOrder: Status[] = [
    "NEW",
    "IN_PROGRESS",
    "WAITING_FOR_DEPOSIT",
    "WAITING_FOR_PHOTO",
    "PHOTO_COMPLETED",
    "CANCELLED",
  ];
  const current = statusOrder.indexOf(currentStatus);
  const target = statusOrder.indexOf(targetStatus);
  if (target < current) {
    return "DONE";
  }
  if (target > current) {
    return "NOT_STARTED";
  }
  return "NOW";
}

export function isCustomerAbleToCancel(currentStatus: Status) {
  return currentStatus === "NEW";
}
