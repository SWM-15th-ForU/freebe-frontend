import { Product, ProductFormdata } from "product-types";
import { FieldErrors, useFormContext, UseFormRegister } from "react-hook-form";
import CloseButton from "@/components/buttons/close-button";
import { formStyles, inputStyles } from "../form.css";

interface ItemInputProps {
  formRegister: UseFormRegister<ProductFormdata>;
  errors: FieldErrors<ProductFormdata>;
  index: number;
  onClickRemove: () => void;
  disabled?: boolean;
}

const ItemInput = ({
  onClickRemove,
  index,
  formRegister,
  errors,
  disabled,
}: ItemInputProps) => {
  const { watch } = useFormContext<Product>();
  const items = watch("items");

  return (
    <div className={inputStyles.box}>
      <input
        className={inputStyles.title}
        disabled={disabled}
        placeholder="이름을 입력해 주세요."
        {...formRegister(`items.${index}.title`)}
      />
      {errors.items?.[index]?.title && (
        <span className={formStyles.error}>
          {errors.items[index]?.title?.message}
        </span>
      )}
      {!disabled && (
        <CloseButton
          onClick={onClickRemove}
          size={18}
          color="grey"
          container={{ position: "absolute", right: 20, top: 20 }}
        />
      )}
      {!disabled ? (
        <textarea
          className={inputStyles.description}
          disabled={disabled}
          placeholder="(선택) 설명을 입력해 주세요."
          {...formRegister(`items.${index}.description`)}
        />
      ) : (
        <span className={inputStyles.description}>
          {items[index].description}
        </span>
      )}
      {errors.items?.[index]?.description && (
        <span className={formStyles.error}>
          {errors.items[index]?.description?.message}
        </span>
      )}
      <input
        className={inputStyles.content}
        disabled={disabled}
        placeholder="내용을 입력해 주세요."
        {...formRegister(`items.${index}.content`)}
      />
      {errors.items?.[index]?.content && (
        <span className={formStyles.error}>
          {errors.items[index]?.content?.message}
        </span>
      )}
    </div>
  );
};

export default ItemInput;
