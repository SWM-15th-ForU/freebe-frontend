import { TimeUnitType } from "calender-types";
import { Divider } from "@mantine/core";
import BasicSchedule from "./base";
import TimeBlock from "./time-block";
import { scheduleStyles } from "./schedule.css";

const PhotographerSchedule = ({
  unit,
  currentSchedule,
}: {
  unit: TimeUnitType;
  currentSchedule: any;
}) => {
  return (
    <div className={scheduleStyles.container}>
      <TimeBlock currentUnit={unit} />
      <Divider />
      <BasicSchedule unit={unit} currentSchedule={currentSchedule} />
      <Divider />
      <div>날짜별 스케줄</div>
    </div>
  );
};

export default PhotographerSchedule;
