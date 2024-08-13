import { useState } from "react";
import { DatePicker, DateValue } from "@mantine/dates";
import { useFormContext, useFieldArray } from "react-hook-form";
import "dayjs/locale/ko";
import { reservation } from "product-types";
import CustomedTimeInput from "@/components/inputs/time-input";
import ScheduleLayout from "../schedule-layout";
import submitStyles from "../submit.css";

const ScheduleSelect = () => {
  const { control, setValue } = useFormContext<reservation.FormType>();
  const [valueOnModal, setValueOnModal] =
    useState<reservation.ScheduleListType>({
      date: new Date(),
      endTime: null,
      startTime: null,
    });
  const { append } = useFieldArray<reservation.FormType>({
    control,
    name: "schedules",
  });

  function handleSelectNewDate(newDate: DateValue) {
    setValueOnModal((prev) => {
      return { ...prev, date: newDate };
    });
  }

  function handleSelectNewTime(newTime: Date, target: "startTime" | "endTime") {
    setValueOnModal((prev) => {
      return { ...prev, target: newTime };
    });
  }

  return (
    <ScheduleLayout>
      <span className={submitStyles.title}>후보 일정 추가하기</span>
      <div className={submitStyles.calenderWrapper}>
        <DatePicker
          locale="ko"
          size="lg"
          firstDayOfWeek={0}
          allowDeselect
          onChange={handleSelectNewDate}
        />
      </div>
      <CustomedTimeInput
        title="시작"
        date={valueOnModal.date ? valueOnModal.date : undefined}
        onChangeTime={(time) => handleSelectNewTime(time, "startTime")}
      />
      <CustomedTimeInput
        title="종료"
        date={valueOnModal.date ? valueOnModal.date : undefined}
        onChangeTime={(time) => handleSelectNewTime(time, "endTime")}
      />
    </ScheduleLayout>
  );
};

export default ScheduleSelect;
