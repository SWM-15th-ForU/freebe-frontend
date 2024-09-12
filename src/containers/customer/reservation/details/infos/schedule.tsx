import { CustomerDetails, ReservationDate } from "reservation-types";
import { formatDate, formatTimeString } from "@/utils/date";
import { infoStyles } from "./infos.css";

const ScheduleItem = ({
  date,
  endTime,
  startTime,
  index,
}: ReservationDate & { index: number }) => {
  return (
    <div className={infoStyles.item}>
      <span className={infoStyles.name}>{index + 1}차 희망</span>
      <div className={infoStyles.schedule}>
        <span className={infoStyles.content}>{formatDate(date)}</span>
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
}: Pick<CustomerDetails, "preferredDates">) => {
  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.title}>촬영 일정</span>
      <div className={infoStyles.wrapper}>
        {preferredDates.map((info, index) => (
          <ScheduleItem key={info.date} index={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default ScheduleInfos;
