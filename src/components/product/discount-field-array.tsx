import { useFieldArray } from "react-hook-form";
import { FieldArrayProps } from "@/types/form-types";
import { Body15SB } from "../texts/texts";
import { AddButton } from "../buttons/common-buttons";
import DiscountInput from "./discount-input";

const DiscountFieldArray = ({ formControl, formRegister }: FieldArrayProps) => {
  const { fields, append, remove } = useFieldArray({
    control: formControl,
    name: "discounts",
  });

  return (
    <div style={{ width: "100%" }}>
      <Body15SB>상품 할인</Body15SB>
      {fields.map((item, index) => {
        return (
          <DiscountInput
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
            hasDescription: false,
            description: "",
            discountType: "amount",
          })
        }
        title="추가하기"
      />
    </div>
  );
};

export default DiscountFieldArray;
