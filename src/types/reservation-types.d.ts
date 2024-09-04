declare module "reservation-types" {
  export type Status =
    | "NEW"
    | "IN_PROGRESS"
    | "WAITING_FOR_DEPOSIT"
    | "WAITING_FOR_PHOTO";

  interface BaseInfos {
    customerName: string;
    productName: string;
    reservationId: number;
    createdAt: string;
  }

  interface DateFixed extends BaseInfos {
    status: "WAITING_FOR_DEPOSIT" | "WAITING_FOR_PHOTO";
    date: {
      date: string;
      startTime: string;
    };
  }

  interface DateNotFixed extends BaseInfos {
    status: "NEW" | "IN_PROGRESS";
    date?: undefined;
  }

  export type Infos = DateFixed | DateNotFixed;
}
