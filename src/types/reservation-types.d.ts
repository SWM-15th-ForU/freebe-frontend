declare module "reservation-types" {
  export type Status =
    | "NEW"
    | "IN_PROGRESS"
    | "WAITING_FOR_DEPOSIT"
    | "WAITING_FOR_PHOTO";

  interface BaseInfos {
    customerName: string;
    productTitle: string;
    reservationId: number;
    reservationSubmissionDate: string;
  }

  interface DateFixed extends BaseInfos {
    reservationStatus: "WAITING_FOR_DEPOSIT" | "WAITING_FOR_PHOTO";
    shootingDate: {
      date: string;
      startTime: string;
      endTime: string;
    };
  }

  interface DateNotFixed extends BaseInfos {
    reservationStatus: "NEW" | "IN_PROGRESS";
    shootingDate: null;
  }

  export type Infos = DateFixed | DateNotFixed;
}
