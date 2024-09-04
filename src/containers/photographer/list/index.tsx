import { viewContainer } from "./list.css";
import StatusList from "./status-list";

const ReservationList = async () => {
  return (
    <div className={viewContainer}>
      <StatusList status="NEW" reservations={[]} />
      <StatusList status="IN_PROGRESS" reservations={[]} />
      <StatusList status="WAITING_FOR_DEPOSIT" reservations={[]} />
      <StatusList status="WAITING_FOR_PHOTO" reservations={[]} />
    </div>
  );
};

export default ReservationList;
