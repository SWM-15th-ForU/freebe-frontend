import CustomerDetails from "./customer-details";
import PhotoDetails from "./photo-details";
import ScheduleDetails from "./schedule-details";
import ImageDetails from "./image-details";
import RequestDetails from "./request-details";

const ReservationDetails = () => {
  return (
    <div>
      <CustomerDetails />
      <PhotoDetails />
      <ScheduleDetails />
      <ImageDetails />
      <RequestDetails />
    </div>
  );
};

export default ReservationDetails;
