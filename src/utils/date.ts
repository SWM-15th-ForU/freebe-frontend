import { PARAMETER_DEFAULT_RADIX } from "@/constants/common/common";
import { Period, ReservationSearchParams } from "reservation-types";

export function parseDate(target: Date) {
  return `${target.getFullYear()}.${target.getMonth() + 1}.${target.getDate()}`;
}

export function parseTime(target: Date) {
  const hours = target.getHours();
  const minutes = target.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

export function parseTimeRequest(target: Date | null, ifNull: string) {
  if (target !== null) {
    return parseTime(target);
  }
  return ifNull;
}

export function formatTimeString(timeString: string): string {
  const [hours, minutes] = timeString.split(":");
  const hoursNumeric = parseInt(hours, PARAMETER_DEFAULT_RADIX);
  const period = hoursNumeric >= 12 ? "PM" : "AM";
  const parsedHour = hoursNumeric % 12 === 0 ? 12 : hoursNumeric % 12;
  return `${period} ${parsedHour}:${minutes}`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export function formatDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getDateDifference(dateString: string): number {
  const targetDate = new Date(dateString);
  const currentDate = new Date();

  const differenceInMs = currentDate.getTime() - targetDate.getTime();
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

export function parsePeriodToSearchParams(
  period: Period,
): Pick<ReservationSearchParams, "from" | "to"> {
  if (period === undefined) {
    return {};
  }
  if (period === "THREE_MONTHS" || period === "SIX_MONTHS") {
    const today = new Date();
    today.setMonth(today.getMonth() - (period === "SIX_MONTHS" ? 6 : 3));
    return { from: formatDateString(today) };
  }
  return {
    from: formatDateString(period.from),
    to: formatDateString(period.to),
  };
}

function formatTimeWithSec(timeStr: string): string {
  if (/^\d{2}:\d{2}:\d{2}$/.test(timeStr)) {
    return timeStr;
  }
  return `${timeStr}:00`;
}

export function createDateObjects(
  dateStr: string,
  startTimeStr: string,
  endTimeStr: string,
) {
  const date = new Date(dateStr);
  const startTime = new Date(`${dateStr}T${formatTimeWithSec(startTimeStr)}`);
  const endTime = new Date(`${dateStr}T${formatTimeWithSec(endTimeStr)}`);

  return {
    date,
    startTime,
    endTime,
  };
}

export function getDateStringFromToday(offset: number) {
  const today = new Date();
  const resultDate = new Date(today);
  resultDate.setDate(today.getDate() + offset);
  return formatDateString(resultDate);
}
