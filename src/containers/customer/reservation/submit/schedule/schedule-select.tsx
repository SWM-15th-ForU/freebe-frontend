import { useState } from "react";
import { DatePicker, DateValue } from "@mantine/dates";
import { useFormContext, useFieldArray } from "react-hook-form";
import "dayjs/locale/ko";
import { reservation } from "product-types";
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
    </ScheduleLayout>
  );
};

export default ScheduleSelect;
