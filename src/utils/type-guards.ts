import { ActiveStatus, Period, Status, UserPeriod } from "reservation-types";
import { User } from "user-types";

export const isUser = (target: any): target is User => {
  return target === "photographer" || target === "customer";
};

export const isActiveStatus = (status: Status): status is ActiveStatus => {
  const activeStatus: ActiveStatus[] = [
    "NEW",
    "IN_PROGRESS",
    "WAITING_FOR_DEPOSIT",
    "WAITING_FOR_PHOTO",
  ];
  return activeStatus.includes(status as ActiveStatus);
};

export function isUserPeriod(period: Period): period is UserPeriod {
  return (
    typeof period === "object" &&
    period !== null &&
    ("from" in period || "to" in period)
  );
}
