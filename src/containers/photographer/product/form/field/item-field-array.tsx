import { useFieldArray, useFormContext } from "react-hook-form";
import { ProductFormdata } from "product-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import ItemInput from "./item-input";
import { formStyles } from "../form.css";

const ItemFieldArray = ({ disabled }: { disabled?: boolean }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<ProductFormdata>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <div style={{ minWidth: "fit-content" }}>
      <span className={formStyles.subtitle}>상품 구성</span>

      {fields.map((item, index) => {
        return (
          <ItemInput
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
              content: "",
              description: "",
            })
          }
          title="추가하기"
        />
      )}
    </div>
  );
};

export default ItemFieldArray;