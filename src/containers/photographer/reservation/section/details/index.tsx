import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import CustomerDetails from "./customer-details";
import PhotoDetails from "./photo-details";
import ScheduleDetails from "./schedule-details";
import ImageDetails from "./image-details";
import RequestDetails from "./request-details";
import PlaceDetails from "./place-details";

const ReservationDetails = () => {
  const { watch } = useFormContext<Details>();
  const [currentStatus, cancleStatus, preferredPlace] = watch([
    "currentStatus",
    "cancelStatus",
    "preferredPlace",
  ]);

  return (
    <div>
      {cancleStatus !== "NEW" && (
        <CustomerDetails isDisableToAccess={currentStatus === "NEW"} />
      )}
      <PhotoDetails />
      <ScheduleDetails />
      {preferredPlace && <PlaceDetails />}
      <ImageDetails />
      <RequestDetails />
    </div>
  );
};

export default ReservationDetails;
