import { StatusHistory } from "reservation-types";
import Progress from "./progress";
import { statusStyles } from "./status.css";
import StatusIcon from "./icon";

const ReservationStatus = ({
  statusHistory,
  noInformation = false,
}: {
  statusHistory: StatusHistory;
  noInformation?: boolean;
}) => {
  return (
    <div className={statusStyles.container}>
      <StatusIcon
        status="NEW"
        current={statusHistory.NEW.current}
        date={statusHistory.NEW.updatedDate || ""}
        hasInformation={!noInformation}
      />
      <Progress current={statusHistory.NEW.current} />
      <StatusIcon
        status="IN_PROGRESS"
        current={statusHistory.IN_PROGRESS.current}
        date={statusHistory.IN_PROGRESS.updatedDate || ""}
        hasInformation={!noInformation}
      />
      <Progress current={statusHistory.IN_PROGRESS.current} />
      <StatusIcon
        status="WAITING_FOR_DEPOSIT"
        current={statusHistory.WAITING_FOR_DEPOSIT.current}
        date={statusHistory.WAITING_FOR_DEPOSIT.updatedDate || ""}
        hasInformation={!noInformation}
      />
      <Progress current={statusHistory.WAITING_FOR_DEPOSIT.current} />
      <StatusIcon
        status="WAITING_FOR_PHOTO"
        current={statusHistory.WAITING_FOR_PHOTO.current}
        date={statusHistory.WAITING_FOR_PHOTO.updatedDate || ""}
        hasInformation={!noInformation}
      />
    </div>
  );
};

export default ReservationStatus;
