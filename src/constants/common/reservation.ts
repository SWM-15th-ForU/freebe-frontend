import { Status } from "reservation-types";

export const statusTitles: Record<Status, string> = {
  NEW: "새 신청",
  IN_PROGRESS: "진행 중",
  WAITING_FOR_DEPOSIT: "입금 대기",
  WAITING_FOR_PHOTO: "촬영 대기",
};
