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

const RequestInfos = ({
  requestMemo,
  preferredDates,
  preferredPlace,
}: Pick<
  CustomerDetails,
  "requestMemo" | "preferredDates" | "preferredPlace"
>) => {
  return (
    <div className={infoStyles.container}>
      {preferredDates.length > 0 && (
        <div className={infoStyles.requestWrapper}>
          <span className={infoStyles.title}>희망 일정</span>
          <div className={infoStyles.wrapper}>
            {preferredDates.map((info, index) => (
              <ScheduleItem
                key={info.date}
                title={`${index + 1}차 희망`}
                {...info}
              />
            ))}
          </div>
        </div>
      )}
      {preferredPlace && (
        <div className={infoStyles.requestWrapper}>
          <span className={infoStyles.title}>희망 장소</span>
          <div className={infoStyles.wrapper}>
            <span className={infoStyles.article}>{preferredPlace}</span>
          </div>
        </div>
      )}
      <span className={infoStyles.title}>요청 메모</span>
      <div className={infoStyles.wrapper}>
        <span className={infoStyles.article}>{requestMemo}</span>
      </div>
    </div>
  );
};

export default RequestInfos;
