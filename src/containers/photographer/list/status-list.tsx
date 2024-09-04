import { Infos, Status } from "reservation-types";
import { statusTitles } from "@/constants/common/reservation";
import { reservationColors } from "@/styles/colors.css";
import { texts } from "@/styles/text.css";
import ReservationCard from "./card";
import { listStyles } from "./list.css";

interface StatusListProps {
  status: Status;
  reservations: Infos[];
}

const StatusList = ({ status, reservations }: StatusListProps) => {
  return (
    <div>
      <div className={listStyles.header}>
        <span className={listStyles.title}>{statusTitles[status]}</span>
        <span
          className={`${reservationColors[status]} ${texts["headline-03"]}`}
        >
          {reservations.length}
        </span>
      </div>
      <div className={listStyles.container}>
        <div className={listStyles.wrapper}>
          {(status === "NEW" || status === "IN_PROGRESS") && (
            <div className={listStyles.subtitle}>신청 시작일로부터</div>
          )}
          {reservations.map((reservation) => (
            <ReservationCard key={reservation.reservationId} {...reservation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusList;
