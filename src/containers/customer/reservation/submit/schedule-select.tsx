import { useSearchParams, useRouter } from "next/navigation";
import { DatePicker } from "@mantine/dates";
import { useFormContext, useFieldArray } from "react-hook-form";
import "dayjs/locale/ko";
import { reservation } from "product-types";
import CloseButton from "@/components/buttons/close-button";
import submitStyles from "./submit.css";

const ScheduleSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const index = searchParams.get("index");
  const { control } = useFormContext<reservation.FormType>();
  const { fields, append, remove } = useFieldArray<reservation.FormType>({
    control,
    name: "schedules",
  });

  function handleClose() {
    router.back();
  }

  return (
    <div className={submitStyles.selectWrapper}>
      <CloseButton
        onClick={handleClose}
        size={18}
        container={{ position: "absolute", top: 0, right: 0, height: 29 }}
      />
      <span className={submitStyles.title}>후보 일정 추가하기</span>
      <div className={submitStyles.calenderWrapper}>
        <DatePicker locale="ko" size="lg" firstDayOfWeek={0} allowDeselect />
      </div>
    </div>
  );
};

export default ScheduleSelect;
