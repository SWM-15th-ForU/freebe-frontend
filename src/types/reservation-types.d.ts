interface BaseInfos {
  customerName: string;
  productTitle: string;
  reservationId: number;
  reservationSubmissionDate: string;
}

interface Notice {
  title: string;
  content: string;
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
    cancelStatus?: Status;
    productTitle: string;
    productInfo: { title: string; content: string }[];
    preferredDates: ReservationDate[];
    shootingDate?: ReservationDate;
    preferredPlace?: string;
    shootingPlace?: string;
    basicPrice: number;
    basicPlace: string;
    options: Option[];
    notices: Notice[];
    requestMemo: string;
  }

  interface BaseReservationResponse {
    productTitle: string;
    statusBeforeCancellation?: Status;
    photoInfo: { [key: string]: string };
    photoOptions: { [key: string]: Option };
    preferredPlace: null | string;
    photoNotice: { [key: string]: Notice };
    shootingDate: null | ReservationDate;
    shootingPlace: null | string;
    basicPrice: number;
    basicPlace: string;
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

  interface DateFixed extends BaseInfos {
    reservationStatus: "WAITING_FOR_DEPOSIT" | "WAITING_FOR_PHOTO";
    shootingDate: ReservationDate;
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
    [key in Status]: {
      updatedDate?: string | null;
      current: "DONE" | "NOW" | "NOT_STARTED";
    };
  };

  interface CustomerReservationResponse extends BaseReservationResponse {
    profileName: string;
    preferredDate: { [key: string]: ReservationDate };
    reservationStatus:
      | Status
      | "CANCELLED_BY_PHOTOGRAPHER"
      | "CANCELLED_BY_CUSTOMER";
    customerMemo: string;
  }
  interface ReservationDetailResponse extends BaseReservationResponse {
    reservationNumber: number;
    currentReservationStatus:
      | Status
      | "CANCELLED_BY_PHOTOGRAPHER"
      | "CANCELLED_BY_CUSTOMER";
    statusHistory: {
      reservationStatus:
        | Status
        | "CANCELLED_BY_PHOTOGRAPHER"
        | "CANCELLED_BY_CUSTOMER";
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
    profileName: string;
    totalPrice: number;
  }

  type DetailsField = Pick<
    Details,
    "productInfo" | "preferredDates" | "options" | "photographerMemo"
  >;

  interface UserPeriod {
    from: Date;
    to: Date;
  }

  type Period = undefined | "THREE_MONTHS" | "SIX_MONTHS" | UserPeriod;

  interface ReservationSearchOptions {
    status?: "cancelled" | "completed";
    period: Period;
  }

  interface ReservationSearchParams {
    from?: string;
    to?: string;
    status?: "cancelled" | "completed";
    keyword?: string;
    page?: number;
  }

  interface ReservationListResponse {
    reservationStatus:
      | "CANCELLED_BY_PHOTOGRAPHER"
      | "CANCELLED_BY_CUSTOMER"
      | "PHOTO_COMPLETED";
    reservationId: number;
    reservationSubmissionDate: string;
    shootingDate: string | null;
    customerName: string;
    productTitle: string;
    price: number;
    image: string;
  }

  interface ReservationList {
    reservationStatus: InactiveStatus;
    reservationId: number;
    reservationSubmissionDate: string;
    shootingDate?: string;
    customerName: string;
    productTitle: string;
    price: number;
    image: string;
  }
}
