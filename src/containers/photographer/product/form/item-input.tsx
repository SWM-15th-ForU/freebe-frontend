import { ProductFormdata } from "product-types";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import CloseButton from "@/components/buttons/close-button";
import { formStyles, inputStyles } from "../product.css";

interface ItemInputProps {
  formRegister: UseFormRegister<ProductFormdata>;
  errors: FieldErrors<ProductFormdata>;
  index: number;
  onClickRemove: () => void;
}

const ItemInput = ({
  onClickRemove,
  index,
  formRegister,
  errors,
}: ItemInputProps) => {
  return (
    <div className={inputStyles.box}>
      <input
        className={inputStyles.title}
        placeholder="이름을 입력해 주세요."
        {...formRegister(`items.${index}.title`)}
      />
      {errors.items?.[index]?.title && (
        <span className={formStyles.error}>
          {errors.items[index]?.title?.message}
        </span>
      )}
      <CloseButton
        onClick={onClickRemove}
        size={18}
        color="grey"
        container={{ position: "absolute", right: 20, top: 20 }}
      />
      <input
        className={inputStyles.description}
        placeholder="(선택) 설명을 입력해 주세요."
        {...formRegister(`items.${index}.description`)}
      />
      {errors.items?.[index]?.description && (
        <span className={formStyles.error}>
          {errors.items[index]?.description?.message}
        </span>
      )}
      <input
        className={inputStyles.content}
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
