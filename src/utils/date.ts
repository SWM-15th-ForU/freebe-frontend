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

export function dateToDayText(target: Date) {
  const dayTexts = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayTexts[target.getDay()];
}

export function formatTimeString(timeString: string): string {
  const [hours, minutes] = timeString.split(":");
  const hoursNumeric = parseInt(hours, 10);
  const period = hoursNumeric >= 12 ? "PM" : "AM";
  const parsedHour = hoursNumeric % 12 === 0 ? 12 : hoursNumeric % 12;
  return `${period} ${parsedHour}:${minutes}`;
}
