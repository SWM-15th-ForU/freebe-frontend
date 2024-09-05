declare module "reservation-types" {
  export type Status =
    | "NEW"
    | "IN_PROGRESS"
    | "WAITING_FOR_DEPOSIT"
    | "WAITING_FOR_PHOTO";

  export interface ReservationDate {
    date: string;
    startTime: string;
    endTime: string;
  }
  interface BaseInfos {
    customerName: string;
    productTitle: string;
    reservationId: number;
    reservationSubmissionDate: string;
  }

  interface DateFixed extends BaseInfos {
    reservationStatus: "WAITING_FOR_DEPOSIT" | "WAITING_FOR_PHOTO";
    shootingDate: ReservationDate;
  }

  interface DateNotFixed extends BaseInfos {
    reservationStatus: "NEW" | "IN_PROGRESS";
    shootingDate: null;
  }

  export type Infos = DateFixed | DateNotFixed;

  interface Customer {
    name: string;
    phoneNumber: string;
    instagramId: string;
  }

  export interface Details {
    reservationNumber: number;
    currentStatus: Status;
    statusHistory: { [key in Status]: { updatedDate: string | null } };
    productTitle: string;
    customer: Customer;
    productInfo: { title: string; content: string }[];
    preferredDates: ReservationDate[];
    originalImage: string[];
    thumbnailImage: string[];
    requestMemo: string;
    // TODO: 신청서 상세 조회 api response에 맞춰 수정
    options: Option[];
    photographerMemo: string;
  }

  export type DetailsField = Pick<
    Details,
    "productInfo" | "preferredDates" | "options" | "photographerMemo"
  >;
}
