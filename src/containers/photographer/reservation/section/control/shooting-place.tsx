import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import TextInput from "@/components/inputs/text-input";
import { sectionStyles } from "../section.css";
import { dateStyles } from "./control.css";

const ShootingPlace = ({ isEditing }: { isEditing: boolean }) => {
  const { watch } = useFormContext<Details>();
  const shootingPlace = watch("shootingPlace");

  return (
    <div>
      <div className={sectionStyles.wrapper}>
        <span className={sectionStyles.title}>촬영 장소</span>
        {!isEditing &&
          (shootingPlace ? (
            <span className={sectionStyles.price}>{shootingPlace}</span>
          ) : (
            <span className={dateStyles.info}>
              아직 장소가 확정되지 않았어요.
            </span>
          ))}
      </div>
      {isEditing && (
        <TextInput<Details>
          formField="shootingPlace"
          placeholder="장소를 입력해주세요."
          container={{ marginTop: 0 }}
        />
      )}
    </div>
  );
};

export default ShootingPlace;
