import { BaseScheduleForm, TimeUnitType } from "calender-types";
import { Divider } from "@mantine/core";
import QueryProviders from "@/containers/common/query-providers";
import BaseSchedule from "./base";
import TimeBlock from "./time-block";
import { scheduleStyles } from "./schedule.css";
import DailySchedule from "./daily";

const PhotographerSchedule = ({
  unit,
  currentSchedule,
}: {
  unit: TimeUnitType;
  currentSchedule: BaseScheduleForm;
}) => {
  return (
    <div className={scheduleStyles.container}>
      <TimeBlock currentUnit={unit} />
      <Divider />
      <BaseSchedule unit={unit} currentSchedule={currentSchedule} />
      <Divider />
      <QueryProviders>
        <DailySchedule baseSchedule={currentSchedule} />
      </QueryProviders>
    </div>
  );
};

export default PhotographerSchedule;
