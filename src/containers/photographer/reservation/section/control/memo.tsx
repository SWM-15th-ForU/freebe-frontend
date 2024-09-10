import { useState } from "react";
import { Details } from "reservation-types";
import Chip from "@/components/common/chip";
import TextInput from "@/components/inputs/text-input";
import { CustomButton } from "@/components/buttons/common-buttons";
import { sectionStyles } from "../section.css";

const PhotographerMemo = () => {
  const [isEditing, setIsEditing] = useState(false);

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
          onClick={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default PhotographerMemo;
