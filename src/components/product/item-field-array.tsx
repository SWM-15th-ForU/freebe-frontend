import { useFieldArray } from "react-hook-form";
import { FieldArrayProps } from "@/types/form-types";
import { Body15SB } from "../texts/texts";
import ItemInput from "./item-input";
import { AddButton } from "../buttons/common-buttons";

const ItemFieldArray = ({ formControl, formRegister }: FieldArrayProps) => {
  const { fields, append, remove } = useFieldArray({
    control: formControl,
    name: "items",
  });

  return (
    <div style={{ width: "100%" }}>
      <Body15SB>상품 구성</Body15SB>
      {fields.map((item, index) => {
        return (
          <ItemInput
            key={item.id}
            formRegister={formRegister}
            index={index}
            onClickRemove={() => remove(index)}
          />
        );
      })}
      <AddButton
        onClick={() =>
          append({
            title: "",
            content: "",
            description: "",
            hasDescription: false,
          })
        }
        title="추가하기"
      />
    </div>
  );
};

export default ItemFieldArray;
