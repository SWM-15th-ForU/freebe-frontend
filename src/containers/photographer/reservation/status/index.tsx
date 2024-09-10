import { Details, Status } from "reservation-types";
import Progress from "./progress";
import { statusStyles } from "./status.css";
import StatusIcon from "./icon";

const ReservationStatus = ({
  statusHistory,
  currentStatus,
}: Pick<Details, "statusHistory" | "currentStatus">) => {
  function getCurrent(status: Status): "DONE" | "NOW" | "NOT_STARTED" {
    if (currentStatus === status) {
      return "NOW";
    }
    if (statusHistory[status].updatedDate !== null) {
      return "DONE";
    }
    return "NOT_STARTED";
  }

  return (
    <div className={statusStyles.container}>
      <StatusIcon
        status="NEW"
        current={getCurrent("NEW")}
        date={statusHistory.NEW.updatedDate || ""}
      />
      <Progress done={statusHistory.NEW.updatedDate !== null} />
      <StatusIcon
        status="IN_PROGRESS"
        current={getCurrent("IN_PROGRESS")}
        date={statusHistory.IN_PROGRESS.updatedDate || ""}
      />
      <Progress done={statusHistory.IN_PROGRESS.updatedDate !== null} />
      <StatusIcon
        status="WAITING_FOR_DEPOSIT"
        current={getCurrent("WAITING_FOR_DEPOSIT")}
        date={statusHistory.WAITING_FOR_DEPOSIT.updatedDate || ""}
      />
      <Progress done={statusHistory.WAITING_FOR_DEPOSIT.updatedDate !== null} />
      <StatusIcon
        status="WAITING_FOR_PHOTO"
        current={getCurrent("WAITING_FOR_PHOTO")}
        date={statusHistory.WAITING_FOR_PHOTO.updatedDate || ""}
      />
    </div>
  );
};

export default ReservationStatus;
