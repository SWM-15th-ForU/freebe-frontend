import { formatDate, formatTimeString, getDateDifference } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { ActiveStatus, Infos } from "reservation-types";
import { reservationColors } from "@/styles/colors.css";
import CardContent from "./content";
import { cardStyles, coverStyles } from "./list.css";

const DdayCover = ({ day, status }: { day: string; status: ActiveStatus }) => {
  return (
    <div className={coverStyles.wrapper}>
      <span className={`${reservationColors[status]} ${coverStyles.main}`}>
        D+{day}
      </span>
    </div>
  );
};

const DateCover = ({
  date,
  startTime,
  status,
}: {
  date: string;
  startTime: string;
  status: ActiveStatus;
}) => {
  const shootDate = new Date(date);

  return (
    <div className={coverStyles.wrapper}>
      <span className={`${reservationColors[status]} ${coverStyles.sub}`}>
        {shootDate.toLocaleString("EN", { weekday: "short" })}
      </span>
      <span className={`${reservationColors[status]} ${coverStyles.main}`}>
        {shootDate.getDate()}
      </span>
      <span className={coverStyles.caption}>{formatTimeString(startTime)}</span>
    </div>
  );
};

const ReservationCard = ({
  reservationStatus,
  customerName,
  productTitle,
  shootingDate,
  reservationId,
  reservationSubmissionDate,
}: Infos) => {
  return (
    <Link
      href={`/photographer/reservation/${reservationId}`}
      style={{ textDecoration: "none" }}
    >
      <div className={cardStyles.container}>
        {reservationStatus === "WAITING_FOR_DEPOSIT" ||
        reservationStatus === "WAITING_FOR_PHOTO" ? (
          <DateCover
            date={shootingDate?.date || ""}
            startTime={shootingDate?.startTime || ""}
            status={reservationStatus}
          />
        ) : (
          <DdayCover
            day={`${getDateDifference(reservationSubmissionDate)}`}
            status={reservationStatus}
          />
        )}
        <div className={cardStyles.infoWrapper}>
          <div className={cardStyles.header}>
            <span className={cardStyles.title}>{productTitle}</span>
            <Image
              src="/icons/right.svg"
              width={8}
              height={13}
              alt="신청서 자세히 보기"
            />
          </div>
          <div className={cardStyles.contentWrapper}>
            <CardContent
              id="고객명"
              name={customerName}
              icon="/icons/reservation/person.svg"
            />
            <CardContent
              id="생성일"
              name={formatDate(reservationSubmissionDate)}
              icon="/icons/reservation/created.svg"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReservationCard;
