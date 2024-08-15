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
