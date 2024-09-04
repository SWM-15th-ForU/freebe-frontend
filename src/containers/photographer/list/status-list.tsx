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
  function renderReservationCard(reservation: Infos, index: number) {
    if (
      reservation.shootingDate &&
      (index === 0 || reservations[index - 1].shootingDate)
    ) {
      const currentDate = new Date(reservation.shootingDate.date);
      const previousReservation =
        index > 0 ? reservations[index - 1] : undefined;
      const previousMonth = previousReservation?.shootingDate
        ? new Date(previousReservation.shootingDate.date).getMonth()
        : null;
      if (currentDate.getMonth() !== previousMonth) {
        return (
          <>
            <div className={listStyles.subtitle}>
              {currentDate.toLocaleString("default", { month: "long" })}
            </div>
            <ReservationCard {...reservation} />
          </>
        );
      }
    }
    return <ReservationCard {...reservation} />;
  }

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
        {reservations.length === 0 ? (
          <div className={listStyles.wrapper}>
            <div className={listStyles.subtitle}>현재 예약이 없습니다.</div>
          </div>
        ) : (
          <div className={listStyles.wrapper}>
            {(status === "NEW" || status === "IN_PROGRESS") && (
              <div className={listStyles.subtitle}>신청 시작일로부터</div>
            )}
            {reservations.map(renderReservationCard)}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusList;
