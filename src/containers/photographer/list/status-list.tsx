import { useEffect, useState } from "react";
import Image from "next/image";
import { ActiveStatus, Infos } from "reservation-types";
import { statusTitles } from "@/constants/common/reservation";
import { reservationColors } from "@/styles/colors.css";
import { texts } from "@/styles/text.css";
import { breakpoints } from "@/styles/breakpoints.css";
import ReservationCard from "./card";
import { listStyles } from "./list.css";

interface StatusListProps {
  status: ActiveStatus;
  reservations: Infos[];
}

const StatusList = ({ status, reservations }: StatusListProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakpoints.mobile);
    setIsCollapsed(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsCollapsed(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  function handleSwitchIsCollapsed() {
    setIsCollapsed((prev) => !prev);
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
            {(isCollapsed ? reservations.slice(0, 2) : reservations).map(
              renderReservationCard,
            )}
          </div>
        )}
        {reservations.length > 2 && (
          <button
            type="button"
            onClick={handleSwitchIsCollapsed}
            className={listStyles.collapse}
          >
            <span>{isCollapsed ? "펼치기" : "접기"}</span>
            <Image
              src="/icons/down-grey.svg"
              width={12}
              height={7}
              alt={isCollapsed ? "펼치기" : "접기"}
              style={{
                transform: isCollapsed ? "" : "rotate(180deg)",
                transition: "transform 0.5s ease",
              }}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default StatusList;
