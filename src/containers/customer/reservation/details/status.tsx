import { CustomerDetails, StatusHistory } from "reservation-types";
import ReservationStatus from "@/containers/common/status";
import { compareStatus } from "@/utils/reservation";
import { statusStyles } from "./detail.css";

const Status = ({
  productTitle,
  currentStatus,
}: Pick<CustomerDetails, "productTitle" | "currentStatus">) => {
  const statusHistory: StatusHistory = {
    NEW: {
      current: compareStatus(currentStatus, "NEW"),
    },
    IN_PROGRESS: {
      current: compareStatus(currentStatus, "IN_PROGRESS"),
    },
    WAITING_FOR_DEPOSIT: {
      current: compareStatus(currentStatus, "WAITING_FOR_DEPOSIT"),
    },
    WAITING_FOR_PHOTO: {
      current: compareStatus(currentStatus, "WAITING_FOR_PHOTO"),
    },
  };

  return (
    <div className={statusStyles.container}>
      <span>{productTitle}</span>
      <span>신청서 제출이 완료되었습니다.</span>
      <ReservationStatus statusHistory={statusHistory} noInformation />
    </div>
  );
};

export default Status;
