import { useFieldArray, useFormContext } from "react-hook-form";
import { ProductFormdata } from "product-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import ItemInput from "./item-input";
import { formStyles, inputStyles, textInput } from "../form.css";

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
      <div style={{ marginBottom: 40 }}>
        <span className={formStyles.subtitle}>기본 가격</span>
        <div className={inputStyles.content}>
          <input
            className={textInput}
            disabled={disabled}
            placeholder="가격을 입력해 주세요."
            type="number"
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            {...register("basicPrice")}
          />
          <span>원</span>
        </div>
        {errors.basicPrice && (
          <span className={formStyles.error}>{errors.basicPrice?.message}</span>
        )}
      </div>
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
