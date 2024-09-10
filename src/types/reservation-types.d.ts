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
declare module "reservation-types" {
  type ActiveStatus =
    | "NEW"
    | "IN_PROGRESS"
    | "WAITING_FOR_DEPOSIT"
    | "WAITING_FOR_PHOTO";

  type InactiveStatus = "PHOTO_COMPLETED" | "CANCELLED";

  type Status = ActiveStatus | InactiveStatus;

  interface ReservationDate {
    date: string;
    startTime: string;
    endTime: string;
  }

  type Infos = DateFixed | DateNotFixed;

  interface Customer {
    name: string;
    phoneNumber: string;
    instagramId: string;
  }

  interface Option {
    title: string;
    quantity: number;
    price: number;
  }

  interface Details {
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
    options: Option[];
    photographerMemo: string;
  }

  type DetailsField = Pick<
    Details,
    "productInfo" | "preferredDates" | "options" | "photographerMemo"
  >;
}
