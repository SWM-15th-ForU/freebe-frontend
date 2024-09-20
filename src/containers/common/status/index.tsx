import { Status, StatusHistory } from "reservation-types";
import Progress from "./progress";
import { statusStyles } from "./status.css";
import StatusIcon from "./icon";

const ReservationStatus = ({
  statusHistory,
  noInformation = false,
  cancelStatus,
}: {
  statusHistory: StatusHistory;
  noInformation?: boolean;
  cancelStatus?: Status;
}) => {
  return (
    <div className={statusStyles.container}>
      <StatusIcon
        status="NEW"
        canceled={cancelStatus === "NEW"}
        current={statusHistory.NEW.current}
        date={statusHistory.NEW.updatedDate || ""}
        hasInformation={!noInformation}
      />
      <Progress
        current={
          cancelStatus === "NEW" ? "NOT_STARTED" : statusHistory.NEW.current
        }
      />
      <StatusIcon
        canceled={cancelStatus === "IN_PROGRESS"}
        status="IN_PROGRESS"
        current={statusHistory.IN_PROGRESS.current}
        date={statusHistory.IN_PROGRESS.updatedDate || ""}
        hasInformation={!noInformation}
      />
      <Progress
        current={
          cancelStatus === "IN_PROGRESS"
            ? "NOT_STARTED"
            : statusHistory.IN_PROGRESS.current
        }
      />
      <StatusIcon
        canceled={cancelStatus === "WAITING_FOR_DEPOSIT"}
        status="WAITING_FOR_DEPOSIT"
        current={statusHistory.WAITING_FOR_DEPOSIT.current}
        date={statusHistory.WAITING_FOR_DEPOSIT.updatedDate || ""}
        hasInformation={!noInformation}
      />
      <Progress
        current={
          cancelStatus === "WAITING_FOR_DEPOSIT"
            ? "NOT_STARTED"
            : statusHistory.WAITING_FOR_DEPOSIT.current
        }
      />
      <StatusIcon
        canceled={cancelStatus === "WAITING_FOR_PHOTO"}
        status="WAITING_FOR_PHOTO"
        current={statusHistory.WAITING_FOR_PHOTO.current}
        date={statusHistory.WAITING_FOR_PHOTO.updatedDate || ""}
        hasInformation={!noInformation}
      />
      <Progress
        current={
          cancelStatus === "WAITING_FOR_PHOTO"
            ? "NOT_STARTED"
            : statusHistory.WAITING_FOR_PHOTO.current
        }
      />
      <StatusIcon
        canceled={cancelStatus === "PHOTO_COMPLETED"}
        status="PHOTO_COMPLETED"
        current={statusHistory.PHOTO_COMPLETED.current}
        date={statusHistory.PHOTO_COMPLETED.updatedDate || ""}
        hasInformation={!noInformation}
      />
    </div>
  );
};

export default ReservationStatus;
