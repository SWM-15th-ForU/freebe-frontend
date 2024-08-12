import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import TextInput from "@/components/inputs/text-input";
import ScheduleInput from "@/components/inputs/schedule-input";
import { AddButton } from "@/components/buttons/common-buttons";
import { Item, reservation } from "product-types";
import PartLayout from "./part-layout";
import submitStyles from "./submit.css";
import ScheduleModal from "./schedule-modal";

const ProductInfoForm = ({ items }: { items: Item[] }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { control } = useFormContext<reservation.FormType>();
  const { fields, append, remove } = useFieldArray<reservation.FormType>({
    control,
    name: "schedules",
  });

  function handleAddSchedule() {
    append({ date: new Date(), startTime: new Date(), endTime: new Date() });
  }

  function handleDeleteSchedule(index: number) {
    remove(index);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
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
      {isModalVisible && <ScheduleModal onClickBackground={handleCloseModal} />}
    </PartLayout>
  );
};

export default ProductInfoForm;
