import { Dispatch, SetStateAction } from "react";
import { DatePicker, DateValue } from "@mantine/dates";
import { reservation } from "product-types";
import CustomedTimeInput from "../inputs/time-input";
import { ScheduleCalenderStyles } from "./schedule.css";

const ScheduleCalender = ({
  value,
  setValue,
}: {
  value: reservation.ScheduleListType;
  setValue: Dispatch<SetStateAction<reservation.ScheduleListType>>;
}) => {
  function handleSelectNewDate(newDate: DateValue) {
    setValue((prev) => {
      return { ...prev, date: newDate };
    });
  }

  function handleSelectNewTime(newTime: Date, target: "startTime" | "endTime") {
    setValue((prev) => {
      return { ...prev, target: newTime };
    });
  }

  return (
    <div className={ScheduleCalenderStyles.container}>
      <div>
        <DatePicker
          locale="ko"
          size="lg"
          firstDayOfWeek={0}
          onChange={handleSelectNewDate}
        />
      </div>
      <div>
        <CustomedTimeInput
          title="시작"
          date={value.date ? value.date : undefined}
          onChangeTime={(time) => handleSelectNewTime(time, "startTime")}
        />
        <CustomedTimeInput
          title="종료"
          date={value.date ? value.date : undefined}
          onChangeTime={(time) => handleSelectNewTime(time, "endTime")}
        />
      </div>
    </div>
  );
};

export default ScheduleCalender;
