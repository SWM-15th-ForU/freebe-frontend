import { useState } from "react";
import {
  BaseScheduleType,
  DailyScheduleList,
  DailyScheduleValue,
  ScheduleStatusType,
  TimeUnitType,
} from "calender-types";
import { useDisclosure } from "@mantine/hooks";
import { formatTimeString } from "@/utils/date";
import { Divider } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { viewStyles } from "./daily.css";
import ScheduleList from "./schedule-list";
import EditModal from "./edit-modal";

const ScheduleView = ({
  baseSchedule,
  dailySchedules,
  date,
  unit,
}: {
  dailySchedules: DailyScheduleList;
  baseSchedule: BaseScheduleType;
  date: Date;
  unit: TimeUnitType;
}) => {
  const [selectedSchedule, setSelectedSchedule] = useState<
    DailyScheduleValue | undefined
  >();
  const [opened, { open, close }] = useDisclosure(false, {
    onClose: () => setSelectedSchedule(undefined),
  });

  function handleSelectSchedule(scheduleValue: DailyScheduleValue) {
    setSelectedSchedule(scheduleValue);
    open();
  }

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
          <CustomButton
            size="sm"
            title="스케줄 추가하기"
            styleType="line"
            onClick={open}
          />
          <EditModal
            close={close}
            opened={opened}
            baseSchedule={baseSchedule}
            initValue={selectedSchedule}
            date={date}
            unit={unit}
          />
        </div>
      </div>
      <Divider />
      <div className={viewStyles.scheduleWrapper}>
        {["OPEN", "CLOSED", "CONFIRMED"].map((status) => (
          <ScheduleList
            key={status}
            status={status as ScheduleStatusType}
            onSelectSchedule={handleSelectSchedule}
            scheduleData={dailySchedules.filter(
              (v) => v.scheduleStatus === status,
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduleView;
