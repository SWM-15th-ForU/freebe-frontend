import { DaysType, ScheduleStatusType } from "calender-types";

export const daysArray: DaysType[] = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

export const dayNames: { [key in DaysType]: string } = {
  MONDAY: "월",
  TUESDAY: "화",
  WEDNESDAY: "수",
  THURSDAY: "목",
  FRIDAY: "금",
  SATURDAY: "토",
  SUNDAY: "일",
};

export const statusNames: { [key in ScheduleStatusType]: string } = {
  CLOSED: "예약 중지",
  OPEN: "추가 오픈",
  CONFIRMED: "촬영 확정",
};
