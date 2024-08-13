import { usePathname, useRouter } from "next/navigation";
import { useFieldArray, useFormContext } from "react-hook-form";
import TextInput from "@/components/inputs/text-input";
import ScheduleInput from "@/components/inputs/schedule-input";
import { AddButton } from "@/components/buttons/common-buttons";
import { Item, reservation } from "product-types";
import PartLayout from "../part-layout";
import submitStyles from "../submit.css";

const ProductInfoForm = ({ items }: { items: Item[] }) => {
  const currentPath = usePathname();
  const router = useRouter();
  const { control, watch } = useFormContext<reservation.FormType>();
  const schedules = watch("schedules");
  const { remove } = useFieldArray<reservation.FormType>({
    control,
    name: "schedules",
  });

  function handleAddSchedule() {
    router.push(`${currentPath}/schedule`);
  }

  function handleDeleteSchedule(index: number) {
    remove(index);
  }

  function handleEditSchedule(index: number) {
    router.push(`${currentPath}/schedule?index=${index}`);
  }

  return (
    <PartLayout title="촬영 정보">
      {items.map((item, index) => {
        return (
          <TextInput
            key={index}
            title={item.title}
            disabled
            value={item.content}
          />
        );
      })}
      <span className={submitStyles.itemTitle}>촬영 일정</span>
      {schedules.map((field, index) => {
        return (
          <ScheduleInput<reservation.FormType>
            key={index}
            onClickValue={() => handleEditSchedule(index)}
            onClickDelete={() => handleDeleteSchedule(index)}
            value={field}
          />
        );
      })}

      <AddButton title="후보 일정 추가하기" onClick={handleAddSchedule} />
    </PartLayout>
  );
};

export default ProductInfoForm;
