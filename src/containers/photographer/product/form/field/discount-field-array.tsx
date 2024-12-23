import { useFieldArray, useFormContext } from "react-hook-form";
import { ProductFormdata } from "product-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import DiscountInput from "./discount-input";
import { formStyles } from "../form.css";

const DiscountFieldArray = ({ disabled }: { disabled?: boolean }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<ProductFormdata>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "discounts",
  });

  return (
    <div style={{ minWidth: "fit-content", width: "100%" }}>
      <span className={formStyles.subtitle}>상품 할인</span>
      {fields.map((item, index) => {
        return (
          <DiscountInput
            key={item.id}
            formRegister={register}
            index={index}
            onClickRemove={() => remove(index)}
            errors={errors}
            disabled={disabled}
          />
        );
      })}
      {!disabled && (
        <CustomButton
          styleType="line"
          size="md"
          style={{ marginTop: 20 }}
          onClick={() =>
            append({
              title: "",
              description: "",
              discountType: "AMOUNT",
              discountValue: null,
            })
          }
          title="추가하기"
        />
      )}
    </div>
  );
};

export default DiscountFieldArray;
