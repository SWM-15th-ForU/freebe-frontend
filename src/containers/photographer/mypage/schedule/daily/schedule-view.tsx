import { BaseScheduleType, DailyScheduleList } from "calender-types";
import { formatTimeString } from "@/utils/date";
import { Divider } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { viewStyles } from "./daily.css";
import ScheduleList from "./schedule-list";

const ScheduleView = ({
  baseSchedule,
  dailySchedules,
  date,
}: {
  dailySchedules: DailyScheduleList;
  baseSchedule: BaseScheduleType;
  date: Date;
}) => {
  return (
    <div className={viewStyles.container}>
      <div className={viewStyles.dateInfo}>
        <div>
          <span className={viewStyles.date}>
            {`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} (${date.toLocaleDateString("ko", { weekday: "short" })})`}
          </span>
          <span className={viewStyles.baseSchedule}>
            {baseSchedule.isOff
              ? "휴무일입니다."
              : `시작 시간 ${formatTimeString(baseSchedule.startTime)} ~ 종료 시간 ${formatTimeString(baseSchedule.endTime)}`}
          </span>
        </div>
        <div>
          <CustomButton size="sm" title="스케줄 추가하기" styleType="line" />
        </div>
      </div>
      <Divider />
      <div className={viewStyles.scheduleWrapper}>
        <ScheduleList
          status="OPEN"
          scheduleData={dailySchedules.filter(
            (v) => v.scheduleStatus === "OPEN",
          )}
        />
        <ScheduleList
          status="CLOSED"
          scheduleData={dailySchedules.filter(
            (v) => v.scheduleStatus === "CLOSED",
          )}
        />
        <ScheduleList
          status="CONFIRMED"
          scheduleData={dailySchedules.filter(
            (v) => v.scheduleStatus === "CONFIRMED",
          )}
        />
      </div>
    </div>
  );
};

export default ScheduleView;
