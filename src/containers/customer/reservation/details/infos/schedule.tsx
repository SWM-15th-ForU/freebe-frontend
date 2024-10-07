import { CustomerDetails, ReservationDate } from "reservation-types";
import { formatDate, formatTimeString } from "@/utils/date";
import { infoStyles } from "./infos.css";

const ScheduleItem = ({
  date,
  endTime,
  startTime,
  title,
}: ReservationDate & { title: string }) => {
  const dateValue = new Date(date);
  return (
    <div className={infoStyles.item}>
      <span className={infoStyles.name}>{title}</span>
      <div className={infoStyles.schedule}>
        <span className={infoStyles.content}>
          {formatDate(date)} (
          {dateValue.toLocaleString("KR", { weekday: "short" })})
        </span>
        <span className={infoStyles.content}>
          {formatTimeString(startTime)} ~
        </span>
        <span className={infoStyles.content}>{formatTimeString(endTime)}</span>
      </div>
    </div>
  );
};

const ScheduleInfos = ({
  preferredDates,
  shootingDate,
}: Pick<CustomerDetails, "preferredDates" | "shootingDate">) => {
  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.title}>촬영 일정</span>
      <div className={infoStyles.wrapper}>
        {preferredDates.map((info, index) => (
          <ScheduleItem
            key={info.date}
            title={`${index + 1}차 희망`}
            {...info}
          />
        ))}
      </div>
      {shootingDate !== undefined && (
        <div className={infoStyles.divider}>
          <ScheduleItem title="최종 일정" {...shootingDate} />
        </div>
      )}
    </div>
  );
};

export default ScheduleInfos;
