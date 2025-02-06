import {
  DailyScheduleList,
  DailyScheduleValue,
  ScheduleStatusType,
} from "calender-types";
import { statusNames } from "@/constants/schedule";
import Chip from "@/components/common/chip";
import { listStyles } from "./daily.css";

const ScheduleList = ({
  status,
  scheduleData,
  onSelectSchedule,
}: {
  status: ScheduleStatusType;
  scheduleData: DailyScheduleList;
  onSelectSchedule: (scheduleValue: DailyScheduleValue) => void;
}) => {
  return (
    <div>
      <span className={listStyles.status}>{statusNames[status]}</span>
      <div className={listStyles.wrapper}>
        {scheduleData.length > 0 ? (
          scheduleData.map((schedule) => (
            <Chip
              key={schedule.scheduleId}
              name={`${schedule.startTime.toFormat("HH:mm")} ~ ${schedule.endTime.toFormat("HH:mm")}`}
              onClick={() => onSelectSchedule(schedule)}
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
