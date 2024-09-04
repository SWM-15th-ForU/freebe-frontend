import {
  dateToDayText,
  formatDate,
  formatTimeString,
  getDateDifference,
} from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { Infos, Status } from "reservation-types";
import { reservationColors } from "@/styles/colors.css";
import CardContent from "./content";
import { cardStyles, coverStyles } from "./list.css";

const DdayCover = ({ day, status }: { day: string; status: Status }) => {
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
  status: Status;
}) => {
  const shootDate = new Date(date);

  return (
    <div className={coverStyles.wrapper}>
      <span className={`${reservationColors[status]} ${coverStyles.sub}`}>
        {dateToDayText(shootDate)}
      </span>
      <span className={`${reservationColors[status]} ${coverStyles.main}`}>
        {shootDate.getDate()}
      </span>
      <span className={coverStyles.caption}>{formatTimeString(startTime)}</span>
    </div>
  );
};

const ReservationCard = ({
  status,
  customerName,
  productName,
  date,
  reservationId,
  createdAt,
}: Infos) => {
  return (
    <Link
      href={`/photographer/reservation/${reservationId}`}
      style={{ textDecoration: "none" }}
    >
      <div className={cardStyles.container}>
        {status === "WAITING_FOR_DEPOSIT" || status === "WAITING_FOR_PHOTO" ? (
          <DateCover
            date={date.date}
            startTime={date.startTime}
            status={status}
          />
        ) : (
          <DdayCover day={`${getDateDifference(createdAt)}`} status={status} />
        )}
        <div className={cardStyles.infoWrapper}>
          <div className={cardStyles.header}>
            <span className={cardStyles.title}>{productName}</span>
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
              name={formatDate(createdAt)}
              icon="/icons/reservation/created.svg"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReservationCard;
