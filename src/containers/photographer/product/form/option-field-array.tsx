import { useFieldArray, useFormContext } from "react-hook-form";
import { ProductFormdata } from "product-types";
import { AddButton } from "@/components/buttons/common-buttons";
import OptionInput from "./option-input";
import { formStyles } from "../product.css";

const OptionFieldArray = () => {
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
    <div style={{ width: "100%" }}>
      <span className={formStyles.subtitle}>상품 옵션</span>

      {fields.map((item, index) => {
        return (
          <OptionInput
            key={item.id}
            formRegister={register}
            index={index}
            onClickRemove={() => remove(index)}
            errors={errors}
          />
        );
      })}
      <AddButton
        onClick={() =>
          append({ title: "", price: 0, isFree: false, description: "" })
        }
        title="추가하기"
      />
    </div>
  );
};

export default OptionFieldArray;
