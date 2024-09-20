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
  interface Option {
    title: string;
    quantity: number;
    price: number;
  }

  interface BaseDetails {
    currentStatus: Status;
    productTitle: string;
    productInfo: { title: string; content: string }[];
    preferredDates: ReservationDate[];
    options: Option[];
    requestMemo: string;
  }

  interface BaseReservationResponse {
    productTitle: string;
    photoInfo: { [key: string]: string };
    photoOptions: { [key: string]: Option };
  }

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

  type StatusHistory = {
    [key in ActiveStatus]: {
      updatedDate?: string | null;
      current: "DONE" | "NOW" | "NOT_STARTED";
    };
  };

  interface CustomerReservationResponse extends BaseReservationResponse {
    preferredDate: { [key: string]: ReservationDate };
    reservationStatus: Status;
    customerMemo: string;
  }
  interface ReservationDetailResponse extends BaseReservationResponse {
    reservationNumber: number;
    currentReservationStatus: Status;
    statusHistory: {
      reservationStatus: ActiveStatus;
      statusUpdateDate: string;
    }[];
    customerDetails: {
      name: string;
      phoneNumber: string;
      instagramId: string;
    };
    preferredDates: { [key: string]: ReservationDate };
    originalImage: string[];
    thumbnailImage: string[];
    requestMemo: string;
    photographerMemo: string | null;
  }
  interface Details extends BaseDetails {
    reservationNumber: number;
    statusHistory: StatusHistory;
    customer: Customer;
    productInfo: { title: string; content: string }[];
    originalImage: string[];
    thumbnailImage: string[];
    photographerMemo: string;
  }

  interface CustomerDetails extends BaseDetails {
    totalPrice: number;
  }

  type DetailsField = Pick<
    Details,
    "productInfo" | "preferredDates" | "options" | "photographerMemo"
  >;

  interface UserPeriod {
    from?: Date;
    to?: Date;
  }

  type Period = undefined | "THREE_MONTHS" | "SIX_MONTHS" | UserPeriod;

  interface ReservationSearchParams {
    status?: InactiveStatus;
    period: Period;
  }

  interface ReservationListResponse {
    reservationStatus:
      | "CANCELLED_BY_PHOTOGRAPHER"
      | "CANCELLED_BY_CUSTOMER"
      | "COMPLETED";
    reservationId: number;
    reservationSubmissionDate: string;
    shootingDate: {
      date: string;
      startTime: string;
      endTime: string;
    };
    customerName: string;
    productTitle: string;
    price: string;
    image: string;
  }

  interface ReservationList {
    reservationStatus: InactiveStatus;
    reservationId: number;
    reservationSubmissionDate: string;
    shootingDate: string;
    customerName: string;
    productTitle: string;
    price: string;
    image: string;
  }
}
