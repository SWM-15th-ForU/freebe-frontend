import { useEffect, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Product, reservation } from "product-types";
import { useDisclosure } from "@mantine/hooks";
import TextInput from "@/components/inputs/text-input";
import ScheduleInput from "@/components/inputs/schedule-input";
import { CustomButton } from "@/components/buttons/common-buttons";
import InfoCaption from "@/components/common/info-caption";
import PartLayout from "../part-layout";
import submitStyles from "../submit.css";
import ScheduleModal from "../schedule-modal";

const MAX_SCHEDULE_SELECT = 3;

const ProductInfoForm = ({
  items,
  basicPrice,
  basicPlace,
  allowPreferredPlace,
}: Pick<
  Product,
  "items" | "basicPrice" | "basicPlace" | "allowPreferredPlace"
>) => {
  const [editIndex, setEditIndex] = useState<number>();

  function handleFinishEditSchedule() {
    setEditIndex(undefined);
  }

  const [opened, { open, close }] = useDisclosure(false, {
    onClose: handleFinishEditSchedule,
  });

  useEffect(() => {
    if (editIndex !== undefined) {
      open();
    }
  }, [editIndex]);

  const { control, watch } = useFormContext<reservation.FormType>();
  const schedules = watch("schedules");
  const { remove } = useFieldArray<reservation.FormType>({
    control,
    name: "schedules",
  });

  function handleAddSchedule() {
    open();
  }

  function handleDeleteSchedule(index: number) {
    remove(index);
  }

  function handleEditSchedule(index: number) {
    setEditIndex(index);
  }

  return (
    <PartLayout title="촬영 정보">
      <ScheduleModal close={close} opened={opened} targetIndex={editIndex} />
      <TextInput title="기본 가격" disabled value={basicPrice} />
      <TextInput title="촬영 장소" disabled value={basicPlace} />
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
      {allowPreferredPlace && (
        <div style={{ marginBottom: 20 }}>
          <TextInput<reservation.FormType>
            title="희망 장소"
            placeholder="장소를 입력해주세요."
            formField="preferredPlace"
            container={{ marginBottom: 8 }}
          />
          <InfoCaption information="등록되어 있는 촬영 장소 외에 더 구체적으로 원하는 장소가 있다면 작성해주세요. 작가님과의 협의 후에 확정됩니다." />
        </div>
      )}
      <span className={submitStyles.itemTitle}>촬영 일정</span>
      {schedules.map((field, index) => {
        return (
          <ScheduleInput
            key={index}
            onClickValue={() => handleEditSchedule(index)}
            onClickDelete={() => handleDeleteSchedule(index)}
            value={field}
          />
        );
      })}
      <CustomButton
        size="lg"
        styleType="line"
        title={
          schedules.length >= MAX_SCHEDULE_SELECT
            ? "3개까지 등록 가능합니다."
            : "후보 일정 추가하기"
        }
        onClick={handleAddSchedule}
        style={{ marginTop: 12 }}
        disabled={schedules.length >= MAX_SCHEDULE_SELECT}
      />
    </PartLayout>
  );
};

export default ProductInfoForm;
