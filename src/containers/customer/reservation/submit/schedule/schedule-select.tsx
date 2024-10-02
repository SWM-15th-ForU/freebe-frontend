import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import "dayjs/locale/ko";
import { reservation } from "product-types";
import ScheduleCalender from "@/components/calender/schedule-calender";
import { FinishButton } from "@/components/buttons/common-buttons";
import submitStyles from "../submit.css";

const ScheduleSelect = ({ close }: { close: () => void }) => {
  const { control } = useFormContext<reservation.FormType>();
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

  function handleAddSchedule() {
    append(valueOnModal);
    close();
  }

  return (
    <>
      <span className={submitStyles.title}>후보 일정 추가하기</span>
      <div>
        <div className={submitStyles.calenderWrapper}>
          <ScheduleCalender value={valueOnModal} setValue={setValueOnModal} />
        </div>
        <FinishButton title="후보 일정 추가하기" onClick={handleAddSchedule} />
      </div>
    </>
  );
};

export default ScheduleSelect;
