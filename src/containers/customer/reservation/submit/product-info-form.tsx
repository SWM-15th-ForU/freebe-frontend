import { usePathname, useRouter } from "next/navigation";
import { useFieldArray, useFormContext } from "react-hook-form";
import TextInput from "@/components/inputs/text-input";
import ScheduleInput from "@/components/inputs/schedule-input";
import { AddButton } from "@/components/buttons/common-buttons";
import { Item, reservation } from "product-types";
import PartLayout from "./part-layout";
import submitStyles from "./submit.css";

const ProductInfoForm = ({ items }: { items: Item[] }) => {
  const currentPath = usePathname();
  const router = useRouter();
  const { control } = useFormContext<reservation.FormType>();
  const { fields, remove } = useFieldArray<reservation.FormType>({
    control,
    name: "schedules",
  });

  function handleAddSchedule() {
    router.push(`${currentPath}/schedule?index=${fields.length}`);
  }

  function handleDeleteSchedule(index: number) {
    remove(index);
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
      {fields.map((field, index) => {
        return (
          <ScheduleInput<reservation.FormType>
            formField="schedules"
            key={index}
            onClickDelete={() => handleDeleteSchedule(index)}
          />
        );
      })}

      <AddButton title="후보 일정 추가하기" onClick={handleAddSchedule} />
    </PartLayout>
  );
};

export default ProductInfoForm;
