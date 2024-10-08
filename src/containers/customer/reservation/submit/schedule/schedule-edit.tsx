import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import "dayjs/locale/ko";
import { reservation } from "product-types";
import ScheduleCalender from "@/components/calender/schedule-calender";
import submitStyles from "../submit.css";

const ScheduleEdit = ({ index }: { index: number }) => {
  const { getValues, setValue } = useFormContext<reservation.FormType>();
  const [valueOnModal, setValueOnModal] =
    useState<reservation.ScheduleListType>({
      date: new Date(),
      endTime: null,
      startTime: null,
    });

  useEffect(() => {
    setValueOnModal(getValues("schedules")[index]);
  }, [index]);

  useEffect(() => {
    setValue(`schedules.${index}`, valueOnModal);
  }, [valueOnModal]);

  return (
    <>
      <span className={submitStyles.title}>일정 수정하기</span>
      <div>
        <ScheduleCalender value={valueOnModal} setValue={setValueOnModal} />
      </div>
    </>
  );
};

export default ScheduleEdit;
