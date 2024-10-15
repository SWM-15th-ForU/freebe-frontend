import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import CustomerDetails from "./customer-details";
import PhotoDetails from "./photo-details";
import ScheduleDetails from "./schedule-details";
import ImageDetails from "./image-details";
import RequestDetails from "./request-details";

const ReservationDetails = () => {
  const { watch } = useFormContext<Details>();
  const [currentStatus, cancleStatus] = watch([
    "currentStatus",
    "cancelStatus",
  ]);

  return (
    <div>
      {cancleStatus !== "NEW" && (
        <CustomerDetails isDisableToAccess={currentStatus === "NEW"} />
      )}
      <PhotoDetails />
      <ScheduleDetails />
      <ImageDetails />
      <RequestDetails />
    </div>
  );
};

export default ReservationDetails;
