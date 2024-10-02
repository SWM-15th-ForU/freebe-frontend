import { Dispatch, SetStateAction, useState } from "react";
import { DatePicker, DateValue } from "@mantine/dates";
import { reservation } from "product-types";
import { parseTime } from "@/utils/date";
import CustomedTimeInput from "../inputs/time-input";
import { ScheduleCalenderStyles } from "./schedule.css";

const ScheduleCalender = ({
  value,
  setValue,
}: {
  value: reservation.ScheduleListType;
  setValue: Dispatch<SetStateAction<reservation.ScheduleListType>>;
}) => {
  const [date, setDate] = useState(new Date());

  function handleSelectNewDate(newDate: DateValue) {
    setValue((prev) => {
      return { ...prev, date: newDate };
    });
  }

  function handleSelectNewTime(newTime: Date, target: "startTime" | "endTime") {
    setValue((prev) => {
      if (target === "endTime") {
        return { ...prev, endTime: newTime };
      }
      return { ...prev, startTime: newTime };
    });
  }

  function checkTime(time: Date | null) {
    if (time instanceof Date) {
      return parseTime(time);
    }
    return "";
  }

  return (
    <div className={ScheduleCalenderStyles.container}>
      <div>
        <DatePicker
          locale="ko"
          size="lg"
          highlightToday
          firstDayOfWeek={0}
          date={date}
          onDateChange={setDate}
          value={value.date}
          onChange={handleSelectNewDate}
        />
      </div>
      <div>
        <CustomedTimeInput
          title="시작"
          date={value.date ? value.date : undefined}
          value={checkTime(value.startTime)}
          onChangeTime={(time) => handleSelectNewTime(time, "startTime")}
        />
        <CustomedTimeInput
          title="종료"
          date={value.date ? value.date : undefined}
          value={checkTime(value.endTime)}
          onChangeTime={(time) => handleSelectNewTime(time, "endTime")}
        />
      </div>
    </div>
  );
};

export default ScheduleCalender;
