import { DailyScheduleList, ScheduleStatusType } from "calender-types";
import { statusNames } from "@/constants/schedule";
import Chip from "@/components/common/chip";
import { listStyles } from "./daily.css";

const ScheduleList = ({
  status,
  scheduleData,
}: {
  status: ScheduleStatusType;
  scheduleData: DailyScheduleList;
}) => {
  return (
    <div>
      <span className={listStyles.status}>{statusNames[status]}</span>
      <div className={listStyles.wrapper}>
        {scheduleData.length > 0 ? (
          scheduleData.map((schedule) => (
            <Chip
              key={schedule.scheduleId}
              name={`${schedule.startTime.toFormat("HH:MM")} ~ ${schedule.endTime.toFormat("HH:MM")}`}
            />
          ))
        ) : (
          <span className={listStyles.info}>
            아직 등록된 스케줄이 없습니다.
          </span>
        )}
      </div>
    </div>
  );
};

export default ScheduleList;
