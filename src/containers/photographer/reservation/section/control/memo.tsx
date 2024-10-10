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
  const router = useRouter();
  const { getValues } = useFormContext<Details>();

  async function handleSubmitMemo() {
    const [reservationNumber, photographerMemo] = getValues([
      "reservationNumber",
      "photographerMemo",
    ]);
    await responseHandler(
      putMemo(reservationNumber, photographerMemo),
      () => {
        popToast("메모가 변경되었습니다.");
        router.refresh();
      },
      () => {
        popToast("다시 시도해주세요.", "수정에 실패했습니다.", true);
      },
    );
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
        <CustomButton
          size="sm"
          styleType="primary"
          title="작성 완료"
          onClick={handleSubmitMemo}
        />
      )}
    </div>
  );
};

export default PhotographerMemo;
