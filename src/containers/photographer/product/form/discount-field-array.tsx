import { useFieldArray } from "react-hook-form";
import { FieldArrayProps } from "@/types/form-types";
import { AddButton } from "@/components/buttons/common-buttons";
import DiscountInput from "./discount-input";
import { formStyles } from "../product.css";

const DiscountFieldArray = ({ formControl, formRegister }: FieldArrayProps) => {
  const { fields, append, remove } = useFieldArray({
    control: formControl,
    name: "discounts",
  });

  return (
    <div style={{ width: "100%" }}>
      <span className={formStyles.subtitle}>상품 할인</span>
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
            discountType: "AMOUNT",
            discountValue: null,
          })
        }
        title="추가하기"
      />
    </div>
  );
};

export default DiscountFieldArray;