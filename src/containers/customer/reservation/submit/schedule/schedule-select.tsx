import { useState } from "react";
import { DateValue } from "@mantine/dates";
import { useFormContext, useFieldArray } from "react-hook-form";
import "dayjs/locale/ko";
import { reservation } from "product-types";
import ScheduleCalender from "@/components/calender/schedule-calender";
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

  return (
    <ScheduleLayout>
      <span className={submitStyles.title}>후보 일정 추가하기</span>
      <div>
        <div className={submitStyles.calenderWrapper}>
          <ScheduleCalender value={valueOnModal} setValue={setValueOnModal} />
        </div>
      </div>
    </ScheduleLayout>
  );
};

export default ScheduleSelect;
