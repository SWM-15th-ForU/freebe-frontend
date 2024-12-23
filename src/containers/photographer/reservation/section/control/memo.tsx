import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import Chip from "@/components/common/chip";
import TextInput from "@/components/inputs/text-input";
import { CustomButton } from "@/components/buttons/common-buttons";
import popToast from "@/components/common/toast";
import { responseHandler } from "@/services/common/error";
import { putMemo } from "@/services/client/photographer/reservations";
import { sectionStyles } from "../section.css";

const PhotographerMemo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const router = useRouter();
  const { getValues } = useFormContext<Details>();

  async function handleSubmitMemo() {
    setSaveLoading(true);
    const [reservationNumber, photographerMemo] = getValues([
      "reservationNumber",
      "photographerMemo",
    ]);
    await responseHandler(
      putMemo(reservationNumber, photographerMemo),
      () => {
        setIsEditing(false);
        router.refresh();
      },
      () => {
        popToast("다시 시도해주세요.", "수정에 실패했습니다.", true);
      },
    );
    setSaveLoading(false);
  }

  return (
    <div>
      <div className={sectionStyles.headlineWrapper}>
        <span className={sectionStyles.title}>메모</span>
        {!isEditing && (
          <Chip
            name="수정"
            icon="/icons/edit-blue.svg"
            onClick={() => setIsEditing(true)}
          />
        )}
      </div>
      <TextInput<Details>
        formField="photographerMemo"
        placeholder="고객과 논의한 내용이나 고객에 대해 기록할 것이 있다면 메모해보세요."
        multiline
        disabled={!isEditing}
      />
      {isEditing && (
        <div className={sectionStyles.wrapper}>
          <CustomButton
            size="sm"
            styleType="line"
            title="취소"
            onClick={() => setIsEditing(false)}
            style={{ flex: 1 }}
          />
          <CustomButton
            size="sm"
            loading={saveLoading}
            styleType="primary"
            title="작성 완료"
            onClick={handleSubmitMemo}
            style={{ flex: 1 }}
          />
        </div>
      )}
    </div>
  );
};

export default PhotographerMemo;
