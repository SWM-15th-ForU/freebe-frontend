import { useFormContext } from "react-hook-form";
import { BaseScheduleForm, DaysType, TimeUnitType } from "calender-types";
import Chip from "@/components/common/chip";
import TimeSelector from "@/components/inputs/time-selector";
import { dayNames } from "@/constants/schedule";
import { dayScheduleStyles } from "./base.css";

const DaySchedule = ({ day, unit }: { day: DaysType; unit: TimeUnitType }) => {
  const { watch, setValue } = useFormContext<BaseScheduleForm>();
  const { startTime, endTime, isOff } = watch(day);

  function setNewTime(newTime: string, type: "startTime" | "endTime") {
    setValue(`${day}.${type}`, newTime);
  }

  function toggleOff() {
    setValue(`${day}.isOff`, !isOff);
  }

  return (
    <div className={dayScheduleStyles.container}>
      <Chip
        name={dayNames[day]}
        onClick={toggleOff}
        selected={!isOff}
        container={{ height: 40 }}
      />
      {isOff ? (
        <span className={dayScheduleStyles.value}>휴무일</span>
      ) : (
        <div className={dayScheduleStyles.timeWrapper}>
          <span>시작 시간</span>
          <TimeSelector
            time={startTime}
            setTime={(newTime) => setNewTime(newTime, "startTime")}
            maxTime={endTime}
            unit={unit}
          />
          <span>~</span>
          <span>종료 시간</span>
          <TimeSelector
            time={endTime}
            setTime={(newTime) => setNewTime(newTime, "endTime")}
            minTime={startTime}
            unit={unit}
          />
        </div>
      )}
    </div>
  );
};

export default DaySchedule;
