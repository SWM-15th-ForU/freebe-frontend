declare module "reservation-types" {
  export type Status =
    | "NEW"
    | "IN_PROGRESS"
    | "WAITING_FOR_DEPOSIT"
    | "WAITING_FOR_PHOTO";
}
