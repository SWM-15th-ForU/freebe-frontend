import { useSearchParams } from "next/navigation";
import { reservation } from "product-types";
import { useFormContext, useFieldArray } from "react-hook-form";

const ScheduleSelect = () => {
  const searchParams = useSearchParams();
  const index = searchParams.get("index");
  const { control } = useFormContext<reservation.FormType>();
  const { fields, append, remove } = useFieldArray<reservation.FormType>({
    control,
    name: "schedules",
  });

  return <div>{index}</div>;
};

export default ScheduleSelect;
