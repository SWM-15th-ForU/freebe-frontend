import { useFieldArray } from "react-hook-form";
import { FieldArrayProps } from "@/types/form-types";
import { AddButton } from "@/components/buttons/common-buttons";
import OptionInput from "./option-input";
import { formStyles } from "../product.css";

const OptionFieldArray = ({ formControl, formRegister }: FieldArrayProps) => {
  const { fields, append, remove } = useFieldArray({
    control: formControl,
    name: "options",
  });

  return (
    <div style={{ width: "100%" }}>
      <span className={formStyles.subtitle}>상품 옵션</span>

      {fields.map((item, index) => {
        return (
          <OptionInput
            key={item.id}
            formRegister={formRegister}
            index={index}
            onClickRemove={() => remove(index)}
          />
        );
      })}
      <AddButton
        onClick={() => append({ title: "", price: "", isFree: false })}
        title="추가하기"
      />
    </div>
  );
};

export default OptionFieldArray;
