import { useFieldArray, useFormContext } from "react-hook-form";
import { ProductFormdata } from "product-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import OptionInput from "./option-input";
import { formStyles } from "../form.css";

const OptionFieldArray = ({ disabled }: { disabled?: boolean }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<ProductFormdata>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  return (
    <div style={{ minWidth: "fit-content" }}>
      <span className={formStyles.subtitle}>상품 옵션</span>

      {fields.map((item, index) => {
        return (
          <OptionInput
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
            append({ title: "", price: 0, isFree: false, description: "" })
          }
          title="추가하기"
        />
      )}
    </div>
  );
};

export default OptionFieldArray;
