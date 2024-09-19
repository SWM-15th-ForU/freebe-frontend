import { CustomerDetails } from "reservation-types";
import Status from "./details/status";
import { detailStyles } from "./reservation.css";
import Info from "./details/info";

const ReservationDetails = ({ details }: { details: CustomerDetails }) => {
  return (
    <div className={detailStyles.container}>
      <Status {...details} />
      <Info {...details} />
    </div>
  );
};

export default ReservationDetails;
