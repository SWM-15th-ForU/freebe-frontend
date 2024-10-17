import { CustomerDetails, ReservationDate } from "reservation-types";
import { formatDate, formatTimeString } from "@/utils/date";
import { infoStyles } from "./infos.css";

const ScheduleItem = ({
  date,
  title,
  dateValue,
}: {
  title: string;
  date?: ReservationDate;
  dateValue?: Date;
}) => {
  return (
    <div className={infoStyles.item}>
      <span className={infoStyles.name}>{title}</span>
      {date ? (
        <div className={infoStyles.schedule}>
          <span className={infoStyles.content}>
            {formatDate(date.date)} (
            {dateValue && dateValue.toLocaleString("KR", { weekday: "short" })})
          </span>
          <span className={infoStyles.content}>
            {formatTimeString(date.startTime)} ~
          </span>
          <span className={infoStyles.content}>
            {formatTimeString(date.endTime)}
          </span>
        </div>
      ) : (
        <span className={infoStyles.content}>아직 확정되지 않았습니다.</span>
      )}
    </div>
  );
};

const ShootingInfos = ({
  shootingDate,
  shootingPlace,
}: Pick<CustomerDetails, "shootingDate" | "shootingPlace">) => {
  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.title}>확정 정보</span>
      <div className={infoStyles.wrapper}>
        <ScheduleItem
          key="shootingDate"
          title="확정 일정"
          date={undefined}
          dateValue={shootingDate ? new Date(shootingDate.date) : undefined}
        />
      </div>
      <div className={infoStyles.wrapper}>
        <div className={infoStyles.item}>
          <span className={infoStyles.name}>확정 장소</span>
          <span className={infoStyles.content}>
            {shootingPlace || "아직 확정되지 않았습니다."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShootingInfos;
